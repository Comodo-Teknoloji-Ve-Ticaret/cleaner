// Injects the server-rendered app into dist/index.html so search engines and
// AI crawlers that don't run JavaScript still see the full page content.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const distDir = path.resolve('dist');
const serverDir = path.resolve('dist-server');
const indexPath = path.join(distDir, 'index.html');

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);

const template = fs.readFileSync(indexPath, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`prerender: "${placeholder}" not found in dist/index.html`);
}

fs.writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
fs.rmSync(serverDir, { recursive: true, force: true });
console.log('prerender: dist/index.html written');
