// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { PortfolioProject } from '../types/portfolio';
import { ProjectCaseStudy } from './ProjectCaseStudy';

const projectWithoutOptionalPublicArtifacts: PortfolioProject = {
  slug: 'safe-example',
  name: 'Safe Example',
  tagline: 'A test project with no optional public artifacts.',
  status: 'Working MVP',
  disclosure: 'public-case-study',
  featured: true,
  categories: [],
  technologies: [],
  problem: 'Problem copy.',
  system: 'System copy.',
  engineering: 'Engineering copy.',
  outcome: 'Outcome copy.',
  evolution: 'Evolution copy.',
  evidence: [],
  links: [],
  developmentNotes: [],
};

describe('project case study optional states', () => {
  it('labels the declared disclosure and omits unavailable artifacts', () => {
    render(
      <ProjectCaseStudy project={projectWithoutOptionalPublicArtifacts} />,
    );

    expect(screen.getByText('Public case study')).toBeInTheDocument();
    expect(screen.queryByText('Technologies')).not.toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
