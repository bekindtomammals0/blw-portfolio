import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import {
  productionIdentity,
  validateMetadata,
  validatePublicSource,
} from './release.mjs';

const approvedDescription =
  'Brian Christopher Bulawan builds structured, adaptable systems for inefficient workflows using software, AI, and automation.';

describe('production release gates', () => {
  it('requires the approved canonical identity and sharing metadata', () => {
    expect(productionIdentity.description).toBe(approvedDescription);
    expect(validateMetadata('<html></html>')).toContain(
      'index.html is missing canonical URL',
    );
  });

  it('requires the approved description on standard, Open Graph, and Twitter metadata', () => {
    const tags = {
      'standard description': `<meta name="description" content="${approvedDescription}" />`,
      'Open Graph description': `<meta property="og:description" content="${approvedDescription}" />`,
      'Twitter description': `<meta name="twitter:description" content="${approvedDescription}" />`,
    };

    for (const missingLabel of Object.keys(tags)) {
      const html = Object.entries(tags)
        .filter(([label]) => label !== missingLabel)
        .map(([, tag]) => tag)
        .join('\n');

      expect(validateMetadata(html)).toContain(
        `index.html is missing ${missingLabel}`,
      );
    }
  });

  it('rejects placeholders, secrets, malformed project links, and backend dependencies', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'blw-release-'));
    await mkdir(path.join(root, 'src/data'), { recursive: true });
    await writeFile(
      path.join(root, 'src/data/projects.ts'),
      "const value = 'TODO_SCREENSHOT'; const secret = 'api_key=\"1234567890123456\"'; const link = { href: '/private' };",
    );
    await writeFile(
      path.join(root, 'package.json'),
      JSON.stringify({ dependencies: { express: '1.0.0' } }),
    );

    await expect(validatePublicSource(root)).resolves.toEqual(
      expect.arrayContaining([
        expect.stringContaining('TODO_*'),
        expect.stringContaining('possible secret'),
        expect.stringContaining('invalid public project link'),
        expect.stringContaining('cannot depend on express'),
      ]),
    );
  });
});
