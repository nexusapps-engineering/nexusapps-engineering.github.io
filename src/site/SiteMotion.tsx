import { useEffect } from 'react';

/** Optional enhancement: the static document is always readable before this loads. */
export function SiteMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false;
    let revision = 0;
    let cleanup: (() => void) | undefined;

    async function syncPreference() {
      const current = ++revision;
      cleanup?.();
      cleanup = undefined;
      if (preference.matches || disposed) return;

      try {
        const { initializeMotion } = await import('./motion');
        if (disposed || current !== revision) return;
        const scope = document.querySelector<HTMLElement>('.studio-site');
        if (scope) cleanup = initializeMotion(scope);
      } catch (error) {
        // A failed optional chunk must never interrupt navigation or hide content.
        console.warn('Nexus motion enhancement unavailable', error);
      }
    }

    void syncPreference();
    preference.addEventListener('change', syncPreference);
    return () => {
      disposed = true;
      revision++;
      preference.removeEventListener('change', syncPreference);
      cleanup?.();
    };
  }, []);

  return null;
}
