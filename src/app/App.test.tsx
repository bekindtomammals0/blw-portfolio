// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { App } from './App';
import type { DevelopmentNote } from '../types/portfolio';

afterEach(cleanup);

const developmentNotes = [
  {
    id: 'b-loom-constraint-model',
    date: '2026-08-27',
    projectSlug: 'b-loom',
    type: 'Iteration',
    text: 'Separated hard placement blockers from scoring preferences after reviewing the scheduling model.',
  },
  {
    id: 'missing-project-experiment',
    date: '2026-08-26',
    projectSlug: 'missing-project',
    type: 'Reflection',
    text: 'Recorded what the experiment clarified before deciding whether to continue it.',
  },
] satisfies DevelopmentNote[];

describe('optional development notes', () => {
  it('omits the section and navigation affordance when no notes exist', () => {
    render(<App />);

    expect(
      screen.queryByRole('region', { name: 'Development notes' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Notes' }),
    ).not.toBeInTheDocument();
  });

  it('renders typed notes and links valid project references', () => {
    render(<App developmentNotes={developmentNotes} />);

    const notes = screen.getByRole('region', { name: 'Development notes' });
    expect(within(notes).getByText('August 27, 2026')).toBeInTheDocument();
    expect(within(notes).getByText('Iteration')).toBeInTheDocument();
    expect(
      within(notes).getByText(/Separated hard placement blockers/),
    ).toBeInTheDocument();
    expect(
      within(notes).getByRole('link', {
        name: 'B-Loom Class & Exam Scheduling System',
      }),
    ).toHaveAttribute('href', '#project-b-loom');
    expect(screen.getByRole('link', { name: 'Notes' })).toHaveAttribute(
      'href',
      '#notes',
    );
  });

  it('shows an invalid project reference as text instead of a broken link', () => {
    render(<App developmentNotes={developmentNotes} />);

    const note = screen.getByRole('article', {
      name: 'Reflection note for missing-project',
    });
    expect(within(note).getByText('missing-project')).toBeInTheDocument();
    expect(within(note).queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders every supplied structured note', () => {
    const manyNotes: DevelopmentNote[] = Array.from(
      { length: 7 },
      (_, index) => ({
        id: `build-note-${index}`,
        date: `2026-08-${String(index + 1).padStart(2, '0')}`,
        projectSlug: 'ui-greenmetric',
        type: 'Build',
        text: `Verified build note ${index + 1}.`,
      }),
    );

    render(<App developmentNotes={manyNotes} />);

    expect(
      within(
        screen.getByRole('list', { name: 'Development notes' }),
      ).getAllByRole('listitem'),
    ).toHaveLength(7);
  });

  it('keeps note navigation keyboard-operable at a narrow viewport', () => {
    window.innerWidth = 320;
    render(<App developmentNotes={developmentNotes} />);

    const projectLink = screen.getByRole('link', {
      name: 'B-Loom Class & Exam Scheduling System',
    });
    const notes = screen.getByRole('list', { name: 'Development notes' });
    projectLink.focus();

    expect(projectLink).toHaveFocus();
    expect(projectLink).toHaveAttribute('href', '#project-b-loom');
    expect(within(notes).getAllByRole('listitem')).toHaveLength(2);
    expect(
      within(notes).getByRole('article', {
        name: 'Reflection note for missing-project',
      }),
    ).toBeInTheDocument();
  });
});

describe('portfolio project path', () => {
  it('leads with the approved projects in the same order across summary and detail', () => {
    render(<App />);

    const expectedOrder = [
      'BLWFinBot',
      'Badminton Tournament Operations System',
      'B-Loom Class & Exam Scheduling System',
      'UI GreenMetric Coordination Dashboard',
    ];
    const featuredWork = screen.getByRole('region', {
      name: 'Systems built around real operational problems.',
    });
    const caseStudies = screen.getByRole('region', {
      name: /Problem.*System.*Engineering.*Outcome.*Evolution/,
    });

    expect(
      within(featuredWork)
        .getAllByRole('article')
        .map((card) => card.getAttribute('aria-labelledby')),
    ).toEqual(
      expectedOrder.map(
        (name) =>
          `project-card-${name === 'BLWFinBot' ? 'blwfinbot' : name === 'Badminton Tournament Operations System' ? 'badminton-tournament-operations' : name === 'B-Loom Class & Exam Scheduling System' ? 'b-loom' : 'ui-greenmetric'}`,
      ),
    );
    expect(
      within(caseStudies)
        .getAllByRole('article')
        .map(
          (study) =>
            within(study).getByRole('heading', { level: 3 }).textContent,
        ),
    ).toEqual(expectedOrder);
  });

  it('puts system, contribution, and outcome evidence on every featured card', () => {
    render(<App />);

    const featuredWork = screen.getByRole('region', {
      name: 'Systems built around real operational problems.',
    });

    for (const card of within(featuredWork).getAllByRole('article')) {
      expect(within(card).getByText('System')).toBeInTheDocument();
      expect(
        within(card).getByText('Brian’s contribution'),
      ).toBeInTheDocument();
      expect(within(card).getByText('Outcome')).toBeInTheDocument();
    }
  });

  it('renders a featured project card linked to its five-part case study', () => {
    render(<App />);

    const featuredWork = screen.getByRole('region', {
      name: 'Systems built around real operational problems.',
    });
    const projectLink = within(featuredWork).getByRole('link', {
      name: 'Explore UI GreenMetric Coordination Dashboard',
    });
    const projectCard = within(featuredWork).getByRole('article', {
      name: 'UI GreenMetric Coordination Dashboard',
    });

    expect(
      within(featuredWork).getByRole('heading', {
        name: 'UI GreenMetric Coordination Dashboard',
      }),
    ).toBeInTheDocument();
    expect(within(projectCard).getByText('Operational')).toBeInTheDocument();
    expect(
      within(projectCard).getByText('Data / Workflow'),
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

  it('presents tournament tools as one sanitized operational system family', () => {
    render(<App />);

    const featuredWork = screen.getByRole('region', {
      name: 'Systems built around real operational problems.',
    });
    const projectLink = within(featuredWork).getByRole('link', {
      name: 'Explore Badminton Tournament Operations System',
    });

    expect(projectLink).toHaveAttribute(
      'href',
      '#project-badminton-tournament-operations',
    );

    const caseStudy = screen.getByRole('article', {
      name: 'Badminton Tournament Operations System case study',
    });

    expect(caseStudy).toHaveTextContent('Operational');
    expect(caseStudy).toHaveTextContent('Sanitized case study');
    expect(caseStudy).toHaveTextContent(/multiple events/i);
    expect(caseStudy).toHaveTextContent(/synthetic participant records/i);
    expect(caseStudy).toHaveTextContent(/registration/i);
    expect(caseStudy).toHaveTextContent(/scheduling/i);
    expect(caseStudy).toHaveTextContent(/match progression/i);
    expect(caseStudy).toHaveTextContent(/event-day coordination/i);
    expect(caseStudy).toHaveTextContent(
      /Brian structured the tournament lifecycle/i,
    );
    expect(
      within(caseStudy).getByRole('figure', {
        name: /registration records flow into scheduling/i,
      }),
    ).toBeInTheDocument();
    expect(within(caseStudy).queryByRole('link')).not.toBeInTheDocument();
  });

  it('publishes verified BLWFinBot v1 without presenting planned v2 work as current', () => {
    render(<App />);

    const featuredWork = screen.getByRole('region', {
      name: 'Systems built around real operational problems.',
    });
    const projectCard = within(featuredWork).getByRole('article', {
      name: 'BLWFinBot',
    });
    const projectLink = within(projectCard).getByRole('link', {
      name: 'Explore BLWFinBot',
    });

    expect(within(projectCard).getByText('Operational')).toBeInTheDocument();
    expect(projectLink).toHaveAttribute('href', '#project-blwfinbot');

    const caseStudy = screen.getByRole('article', {
      name: 'BLWFinBot case study',
    });

    expect(caseStudy).toHaveTextContent('Sanitized case study');
    expect(caseStudy).toHaveTextContent(/text (?:or|and) voice/i);
    expect(caseStudy).toHaveTextContent(/goal-feasibility/i);
    expect(caseStudy).toHaveTextContent(/always-on VM/i);
    expect(caseStudy).toHaveTextContent(/planned v2/i);
    expect(caseStudy).toHaveTextContent(/human-directed/i);
    expect(caseStudy).toHaveTextContent(/AI-assisted development/i);
    expect(caseStudy).toHaveTextContent(/synthetic financial data/i);
    expect(
      within(caseStudy).getByRole('figure', {
        name: /Telegram message flows through deterministic parsing/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(caseStudy).getByRole('figure', {
        name: /synthetic Ledger sample/i,
      }),
    ).toHaveTextContent('Project payment');
    expect(within(caseStudy).queryByRole('link')).not.toBeInTheDocument();
  });

  it('publishes B-Loom as a paused sanitized scheduling system with future optimization separated', () => {
    render(<App />);

    const featuredWork = screen.getByRole('region', {
      name: 'Systems built around real operational problems.',
    });
    const projectCard = within(featuredWork).getByRole('article', {
      name: 'B-Loom Class & Exam Scheduling System',
    });
    const projectLink = within(projectCard).getByRole('link', {
      name: 'Explore B-Loom Class & Exam Scheduling System',
    });

    expect(within(projectCard).getByText('Paused')).toBeInTheDocument();
    expect(projectLink).toHaveAttribute('href', '#project-b-loom');

    const caseStudy = screen.getByRole('article', {
      name: 'B-Loom Class & Exam Scheduling System case study',
    });

    expect(caseStudy).toHaveAttribute('id', 'project-b-loom');
    expect(caseStudy).toHaveTextContent('Sanitized case study');
    expect(caseStudy).toHaveTextContent(/custom greedy heuristic/i);
    expect(caseStudy).toHaveTextContent(/hard placement blockers/i);
    expect(caseStudy).toHaveTextContent(/preferences or review advisories/i);
    expect(caseStudy).toHaveTextContent(/backend suite is not clean/i);
    expect(caseStudy).toHaveTextContent(/CP-SAT.*future/i);
    expect(caseStudy).toHaveTextContent(/Brian directed/i);
    expect(caseStudy).toHaveTextContent(/AI-assisted development/i);
    expect(caseStudy).toHaveTextContent(/entirely synthetic/i);
    expect(
      within(caseStudy).getByRole('figure', {
        name: /synthetic scheduling data flows from import/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(caseStudy).getByRole('figure', {
        name: /hard placement blockers from scoring preferences/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(caseStudy).getByRole('figure', {
        name: /architecture diagram connects the Vue and Inertia interface/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(caseStudy).getByRole('figure', {
        name: /schedule review sample with one assigned exam/i,
      }),
    ).toHaveTextContent('Room TBA');
    expect(
      within(caseStudy).getByRole('figure', {
        name: /before and after review sample/i,
      }),
    ).toHaveTextContent('After human review');
    expect(within(caseStudy).queryByRole('link')).not.toBeInTheDocument();
  });
});

describe('non-project visitor journey', () => {
  it('keeps compact GitHub and LinkedIn access beside the hero actions', () => {
    render(<App />);

    const hero = screen.getByRole('region', {
      name: 'Brian Christopher Bulawan',
    });
    expect(
      within(hero).getByRole('link', { name: 'View selected work' }),
    ).toHaveAttribute('href', '#work');
    expect(within(hero).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    );

    for (const [name, href] of [
      ['GitHub', 'https://github.com/bekindtomammals0'],
      ['LinkedIn', 'https://www.linkedin.com/in/bbulawan/'],
    ]) {
      const link = within(hero).getByRole('link', { name });
      expect(link).toHaveAttribute('href', href);
      link.focus();
      expect(link).toHaveFocus();
    }
  });

  it('explains the engineering approach and offers only verified contact links', () => {
    render(<App />);

    const approach = screen.getByRole('region', {
      name: 'Structure the problem before choosing the technology.',
    });
    for (const step of [
      'Understand the actual bottleneck',
      'Make the process explicit',
      'Build the simplest constraint-aware system',
      'Test, observe, simplify, and evolve',
    ]) {
      expect(within(approach).getByText(step)).toBeInTheDocument();
    }

    const about = screen.getByRole('region', {
      name: 'A practical systems builder working across software and operations.',
    });
    expect(
      within(about).getByText(/AI, automation, and systems development/i),
    ).toBeInTheDocument();
    expect(within(about).queryByRole('img')).not.toBeInTheDocument();

    const contact = screen.getByRole('region', {
      name: 'Bring the problem, constraints, and desired outcome.',
    });
    expect(within(contact).getByText('Philippines')).toBeInTheDocument();
    expect(
      within(contact).getByRole('link', { name: 'Email' }),
    ).toHaveAttribute('href', 'mailto:brianbulawan5@gmail.com');
    expect(
      within(contact).getByRole('link', { name: 'GitHub' }),
    ).toHaveAttribute('href', 'https://github.com/bekindtomammals0');
    expect(
      within(contact).getByRole('link', { name: 'LinkedIn' }),
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/bbulawan/');
    expect(
      within(contact).queryByRole('link', { name: 'Upwork' }),
    ).not.toBeInTheDocument();
    expect(contact).not.toHaveTextContent('TODO_');
  });
});

describe('accessible visitor journey', () => {
  it('provides a focusable skip target and named page landmarks', () => {
    render(<App developmentNotes={developmentNotes} />);

    const skipLink = screen.getByRole('link', { name: 'Skip to content' });
    const main = screen.getByRole('main');

    expect(skipLink).toHaveAttribute('href', '#main-content');
    expect(main).toHaveAttribute('id', 'main-content');
    expect(main).toHaveAttribute('tabindex', '-1');
    expect(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('keeps the page heading hierarchy and project destinations explicit', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Brian Christopher Bulawan',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Systems built around real operational problems.',
      }),
    ).toBeInTheDocument();

    const featuredWork = screen.getByRole('region', {
      name: 'Systems built around real operational problems.',
    });
    const projectLinks = within(featuredWork).getAllByRole('link', {
      name: /^Explore /,
    });

    for (const link of projectLinks) {
      const destination = link.getAttribute('href');
      expect(destination).toMatch(/^#project-/);
      expect(document.querySelector(destination!)).toBeInTheDocument();
    }
  });

  it('gives every published evidence figure a meaningful accessible name', () => {
    render(<App />);

    const figures = screen.getAllByRole('figure');
    expect(figures.length).toBeGreaterThan(0);
    for (const figure of figures) {
      expect(figure).toHaveAccessibleName();
    }
  });
});
