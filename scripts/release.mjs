import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

export const productionIdentity = {
  title: 'Brian Christopher Bulawan — AI, Automation & Systems Developer',
  description:
    'Brian Christopher Bulawan builds structured, adaptable systems for inefficient workflows using software, AI, and automation.',
  canonical: 'https://bekindtomammals0.github.io/blw-portfolio/',
  socialImage:
    'https://bekindtomammals0.github.io/blw-portfolio/social-preview.webp',
};

const ignoredDirectories = new Set([
  '.git',
  'dist',
  'evidence-inbox',
  'node_modules',
]);
const scannedExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.mjs',
  '.svg',
  '.ts',
  '.tsx',
  '.yml',
  '.yaml',
]);

async function sourceFiles(directory) {
  const files = [];
  const entries = await readdir(directory, { withFileTypes: true }).catch(
    () => [],
  );
  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await sourceFiles(target)));
    else if (
      scannedExtensions.has(path.extname(entry.name)) &&
      !entry.name.includes('.test.')
    )
      files.push(target);
  }
  return files;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function validateMetadata(html) {
  const errors = [];
  const escapedDescriptionPattern = escapeRegExp(
    productionIdentity.description,
  );
  const required = [
    [
      'approved title',
      new RegExp(
        `<title>\\s*${productionIdentity.title.replace('&', '&(?:amp;)?')}\\s*</title>`,
      ),
    ],
    [
      'standard description',
      new RegExp(
        `name="description"\\s+content="${escapedDescriptionPattern}"`,
      ),
    ],
    [
      'Open Graph description',
      new RegExp(
        `property="og:description"\\s+content="${escapedDescriptionPattern}"`,
      ),
    ],
    [
      'Twitter description',
      new RegExp(
        `name="twitter:description"\\s+content="${escapedDescriptionPattern}"`,
      ),
    ],
    [
      'canonical URL',
      new RegExp(`rel="canonical"\\s+href="${productionIdentity.canonical}"`),
    ],
    [
      'Open Graph URL',
      new RegExp(
        `property="og:url"\\s+content="${productionIdentity.canonical}"`,
      ),
    ],
    [
      'Open Graph image',
      new RegExp(
        `property="og:image"\\s+content="${productionIdentity.socialImage}"`,
      ),
    ],
    [
      'large Twitter card',
      /name="twitter:card"\s+content="summary_large_image"/,
    ],
    ['favicon', /rel="icon"\s+href="\/blw-portfolio\/favicon\.svg"/],
  ];
  for (const [label, pattern] of required) {
    if (!pattern.test(html)) errors.push(`index.html is missing ${label}`);
  }
  return errors;
}

export async function validatePublicSource(root) {
  const errors = [];
  const files = [
    ...(await sourceFiles(path.join(root, 'src'))),
    ...(await sourceFiles(path.join(root, 'public'))),
    path.join(root, 'index.html'),
    path.join(root, 'package.json'),
    path.join(root, 'vite.config.ts'),
  ];
  const secretPatterns = [
    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    /\bAKIA[0-9A-Z]{16}\b/,
    /\bgh[pousr]_[A-Za-z0-9_]{30,}\b/,
    /\b(?:api[_-]?key|access[_-]?token|client[_-]?secret)\s*[:=]\s*["'][^"']{12,}["']/i,
  ];

  for (const file of files) {
    const content = await readFile(file, 'utf8').catch(() => '');
    if (!content) continue;
    const relative = path.relative(root, file);
    if (/\bTODO_[A-Z0-9_]+\b/.test(content)) {
      errors.push(`${relative}: unresolved TODO_* placeholder`);
    }
    if (secretPatterns.some((pattern) => pattern.test(content))) {
      errors.push(`${relative}: possible secret`);
    }
  }

  const projects = await readFile(
    path.join(root, 'src/data/projects.ts'),
    'utf8',
  );
  for (const match of projects.matchAll(/href:\s*'([^']+)'/g)) {
    const href = match[1];
    if (!/^(?:https:\/\/|mailto:|#)/.test(href)) {
      errors.push(`src/data/projects.ts: invalid public project link ${href}`);
    }
  }

  const packageJson = JSON.parse(
    await readFile(path.join(root, 'package.json')),
  );
  const runtimeDependencies = Object.keys(packageJson.dependencies ?? {});
  const forbiddenRuntimeDependencies = [
    'express',
    'firebase',
    'mongoose',
    'mysql',
    'next',
    'pg',
    'prisma',
    'supabase',
  ];
  for (const dependency of forbiddenRuntimeDependencies) {
    if (runtimeDependencies.includes(dependency)) {
      errors.push(
        `package.json: static release cannot depend on ${dependency}`,
      );
    }
  }

  return errors;
}
