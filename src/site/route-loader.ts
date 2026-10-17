import { findPage } from './registry.mjs';

const legalModules = import.meta.glob('../legal/*-*.tsx');

export async function loadRoute(pathname: string) {
  const page = findPage(pathname);
  if (page.type === 'legal') {
    const module = await legalModules[`../legal/${page.slug}-${page.document}.tsx`]() as Record<string, React.ComponentType>;
    return { page, Component: Object.values(module)[0], props: {} };
  }
  if (page.type === 'home') {
    const module = await import('../app/App');
    return { page, Component: module.default, props: {} };
  }
  const module = await import('./StudioPages');
  return { page, Component: module.default, props: { page } };
}
