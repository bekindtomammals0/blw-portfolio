import { readFile } from 'node:fs/promises';

import { describe, expect, it } from 'vitest';

const readWorkflow = (name: string) =>
  readFile(new URL(`../.github/workflows/${name}`, import.meta.url), 'utf8');

const readPackage = async () =>
  JSON.parse(
    await readFile(new URL('../package.json', import.meta.url), 'utf8'),
  ) as { scripts: Record<string, string> };

describe('repository delivery workflows', () => {
  it('validates pull requests to dev and main plus updates to dev without deploying', async () => {
    const workflow = await readWorkflow('ci.yml');

    expect(workflow).toMatch(/pull_request:\s*[\s\S]*branches:\s*\[dev, main\]/);
    expect(workflow).toMatch(/push:\s*[\s\S]*branches:\s*\[dev\]/);
    expect(workflow).toContain('npm ci');
    expect(workflow).toContain('npm run release:check');
    expect(workflow).toContain('npm run smoke:artifact');
    expect(workflow).not.toMatch(/deploy-pages|pages:\s*write/);
  });

  it('deploys only main updates or an explicit rollback after all release gates', async () => {
    const workflow = await readWorkflow('deploy-pages.yml');

    expect(workflow).toMatch(/push:\s*[\s\S]*branches:\s*\[main\]/);
    expect(workflow).toMatch(/workflow_dispatch:[\s\S]*commit:[\s\S]*required:\s*true/);
    expect(workflow).toMatch(/cancel-in-progress:\s*true/);
    expect(workflow).toContain('npm run release:check');
    expect(workflow).toContain('npm run smoke:artifact');
    expect(workflow).toContain('npm run smoke:production');
    expect(workflow).toContain('git merge-base --is-ancestor');
    expect(workflow).toContain('workflow_runs');
  });

  it('keeps the complete release gate sequence behind one command', async () => {
    const releaseCheck = (await readPackage()).scripts['release:check'];

    for (const command of [
      'npm run format:check',
      'npm run lint',
      'npm run typecheck',
      'npm test',
      'npm run production:check',
      'npm run build',
    ]) {
      expect(releaseCheck).toContain(command);
    }
  });

  it('pins every third-party action to an immutable commit SHA', async () => {
    for (const name of ['ci.yml', 'deploy-pages.yml']) {
      const workflow = await readWorkflow(name);
      const actionReferences = [...workflow.matchAll(/uses:\s*([^\s#]+)/g)].map(
        ([, reference]) => reference,
      );

      expect(actionReferences.length).toBeGreaterThan(0);
      expect(actionReferences).toEqual(
        actionReferences.map(() =>
          expect.stringMatching(/^[^@]+@[0-9a-f]{40}$/),
        ),
      );
    }
  });
});
