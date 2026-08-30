import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { validateMetadata, validatePublicSource } from './release.mjs';

describe('production release gates', () => {
  it('requires the approved canonical identity and sharing metadata', () => {
    expect(validateMetadata('<html></html>')).toContain(
      'index.html is missing canonical URL',
    );
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
