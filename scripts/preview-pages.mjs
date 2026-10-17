import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findPage, outputFile } from '../src/site/registry.mjs';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const isPage = !path.extname(pathname) || pathname.endsWith('.html');
    const page = isPage ? findPage(pathname) : null;
    const relative = page ? outputFile(page) : pathname.replace(/^\//, '');
    const file = path.resolve(root, relative);
    if (!file.startsWith(root)) throw new Error('Invalid path');
    res.statusCode = page?.type === 'not-found' ? 404 : 200;
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
    const body = await fs.readFile(file);
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-store');
    res.end(req.method === 'HEAD' ? '' : body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await fs.readFile(path.join(root, '404.html')));
  }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log(`Static preview: http://127.0.0.1:${process.env.PORT || 4173}`));
