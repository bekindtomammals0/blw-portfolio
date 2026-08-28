// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('portfolio project path', () => {
  it('renders a featured project card linked to its five-part case study', () => {
    render(<App />);

    const featuredWork = screen.getByRole('region', {
      name: 'Featured work',
    });
    const projectLink = within(featuredWork).getByRole('link', {
      name: 'Explore system',
    });

    expect(
      within(featuredWork).getByRole('heading', {
        name: 'UI GreenMetric Coordination Dashboard',
      }),
    ).toBeInTheDocument();
    expect(within(featuredWork).getByText('Operational')).toBeInTheDocument();
    expect(
      within(featuredWork).getByText('Data / Workflow'),
    ).toBeInTheDocument();
    expect(projectLink).toHaveAttribute('href', '#project-ui-greenmetric');

    const caseStudy = screen.getByRole('article', {
      name: 'UI GreenMetric Coordination Dashboard case study',
    });

    expect(caseStudy).toHaveAttribute('id', 'project-ui-greenmetric');
    expect(
      within(caseStudy).getByText('Sanitized case study'),
    ).toBeInTheDocument();
    expect(
      within(caseStudy).getByText(/Institutional records.*are excluded/),
    ).toBeInTheDocument();
    expect(
      within(caseStudy).getByRole('figure', {
        name: /requirements moving through evidence reference/i,
      }),
    ).toBeInTheDocument();
    expect(within(caseStudy).queryByRole('link')).not.toBeInTheDocument();
    for (const sectionName of [
      'Problem',
      'System',
      'Engineering',
      'Outcome',
      'Evolution',
    ]) {
      expect(
        within(caseStudy).getByRole('heading', { name: sectionName }),
      ).toBeInTheDocument();
    }
  });
});
