const measurementId = 'G-S83E57TFR8';
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; requestIdleCallback?: (callback: () => void, options: { timeout: number }) => number };

export function initializeAnalytics() {
  const target = window as AnalyticsWindow;
  if (location.hostname !== 'nexusapps.co' || /\/(privacy-policy|terms-of-use)\/?$/.test(location.pathname)) return;
  target.dataLayer = target.dataLayer || [];
  target.gtag = function () { target.dataLayer!.push(arguments); };
  target.gtag('js', new Date());
  target.gtag('config', measurementId, { anonymize_ip: true });
  function load() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }
  function schedule() {
    if (target.requestIdleCallback) target.requestIdleCallback(load, { timeout: 2000 });
    else window.setTimeout(load, 2000);
  }
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
}

export function trackProjectEmail(event: MouseEvent) {
  const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[data-project-email]') : null;
  if (!link) return;
  // Never include the email address, subject or brief in the analytics payload.
  (window as AnalyticsWindow).gtag?.('event', 'project_email_click', {
    page_path: window.location.pathname, service: link.dataset.service,
    cta_position: link.dataset.position, transport_type: 'beacon',
  });
}
