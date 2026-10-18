import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);
// Safari's collapsing address bar should not rebuild the scene mid-gesture.
ScrollTrigger.config({ ignoreMobileResize: true });

export function initializeMotion(scope: HTMLElement) {
  const media = gsap.matchMedia();
  let disposed = false;
  let refreshFrame = 0;
  const refresh = () => {
    cancelAnimationFrame(refreshFrame);
    refreshFrame = requestAnimationFrame(() => {
      if (!disposed) ScrollTrigger.refresh();
    });
  };

  media.add({
    motion: '(prefers-reduced-motion: no-preference)',
    desktop: '(min-width: 1060px) and (hover: hover) and (pointer: fine)',
  }, context => {
    if (!context.conditions?.motion) return;
    const desktop = context.conditions.desktop;
    const entries: { targets: HTMLElement[]; tween: gsap.core.Tween }[] = [];

    // Read geometry before writing transforms. Restored scroll positions stay visible.
    const scenes = Array.from(scope.querySelectorAll<HTMLElement>('[data-motion-group], [data-motion-item]'))
      .filter(element => !element.parentElement?.closest('[data-motion-group], [data-motion-item]'))
      .map(element => {
        const targets = element.hasAttribute('data-motion-group')
          ? Array.from(element.children).flatMap(child => {
            if (child.matches('.breadcrumbs, .visually-hidden')) return [];
            const lines = Array.from(child.querySelectorAll<HTMLElement>('[data-motion-line]'));
            return lines.length ? lines : [child as HTMLElement];
          })
          : [element];
        return { element, targets, top: element.getBoundingClientRect().top };
      });

    scenes.forEach(({ element, targets, top }) => {
      if (!targets.length || top < 0) return;
      const inView = top < window.innerHeight;
      const tween = gsap.from(targets, {
        y: desktop ? 22 : 12,
        // Avoid hiding already painted hero text while the optional chunk loads.
        opacity: inView ? 0.72 : 0,
        duration: desktop ? 0.8 : 0.58,
        ease: 'power3.out',
        stagger: desktop ? 0.085 : 0.055,
        clearProps: 'transform,opacity',
        ...(!inView && { scrollTrigger: {
          trigger: element,
          start: 'top 93%',
          once: true,
          // Also finish skipped scenes after a fast jump or End key.
          onLeave: self => self.animation?.progress(1),
        } }),
      });
      entries.push({ targets, tween });
    });

    let lenis: Lenis | undefined;
    const interruptWheel = () => {
      if (lenis?.isScrolling === 'smooth') lenis.scrollTo(lenis.actualScroll, { immediate: true });
    };
    const nativeKeys = new Set(['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab', 'Enter']);
    const onKeyDown = (event: KeyboardEvent) => {
      if (nativeKeys.has(event.key)) interruptWheel();
    };

    // A keyboard user can focus content before its scroll reveal has played.
    const revealFocused = (event: FocusEvent) => {
      interruptWheel();
      entries.forEach(({ targets, tween }) => {
        if (targets.some(target => target.contains(event.target as Node))) tween.progress(1);
      });
    };
    scope.addEventListener('focusin', revealFocused);

    const tick = (time: number) => lenis?.raf(time * 1000);
    if (desktop) {
      lenis = new Lenis({
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: false,
        // Let native anchors retain hash/history and keyboard focus behavior.
        anchors: false,
        stopInertiaOnNavigate: true,
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      // Native keys, focus and clicks take priority over unfinished wheel inertia.
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('pointerdown', interruptWheel, { passive: true });

      scope.querySelectorAll<HTMLElement>('[data-motion-parallax]').forEach(frame => {
        const image = frame.querySelector('img');
        if (!image) return;
        gsap.fromTo(image, { yPercent: -3, scale: 1.065 }, {
          yPercent: 3,
          scale: 1.065,
          ease: 'none',
          scrollTrigger: {
            trigger: frame,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      });
    }

    // ResizeObserver refreshes only when document geometry changes, not every scroll.
    const observer = new ResizeObserver(refresh);
    observer.observe(scope);
    refresh();
    return () => {
      observer.disconnect();
      scope.removeEventListener('focusin', revealFocused);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', interruptWheel);
      gsap.ticker.remove(tick);
      lenis?.off('scroll', ScrollTrigger.update);
      lenis?.destroy();
    };
  }, scope);

  void document.fonts.ready.then(() => { if (!disposed) refresh(); });
  window.addEventListener('pageshow', refresh);
  return () => {
    disposed = true;
    window.removeEventListener('pageshow', refresh);
    media.revert();
    cancelAnimationFrame(refreshFrame);
  };
}
