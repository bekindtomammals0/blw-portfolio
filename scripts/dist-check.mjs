import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const html = await readFile(path.join(root, 'dist/index.html'), 'utf8');
const errors = [];

for (const asset of html.matchAll(
  /(?:src|href)="(\/blw-portfolio\/[^"#?]+)"/g,
)) {
  const relative = asset[1].slice('/blw-portfolio/'.length);
  if (!relative || relative.endsWith('/')) continue;
  try {
    await access(path.join(root, 'dist', relative));
  } catch {
    errors.push(`dist/index.html: broken asset link ${asset[1]}`);
  }
}

if (errors.length) {
  console.error(`Built-site validation failed:\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log('Built-site asset links passed.');
}
