import { createRoot, hydrateRoot } from 'react-dom/client';
import { loadRoute } from './site/route-loader';
import { initializeAnalytics, trackProjectEmail } from './site/analytics';
import './styles/index.css';

async function start() {
  initializeAnalytics();
  document.addEventListener('click', trackProjectEmail);
  const { Component, props } = await loadRoute(window.location.pathname);
  const root = document.getElementById('root')!;
  const content = <Component {...props} />;
  if (root.hasChildNodes()) hydrateRoot(root, content);
  else createRoot(root).render(content);
}

start().catch(error => console.error('Nexus page initialization failed', error));
