# CONTEXT.md — blw-portfolio

This file is the authoritative project context for AI-assisted development of `blw-portfolio`.

AI agents must read this file before changing product structure, content architecture, design direction, project status, disclosure level, or portfolio positioning.

---

## 1. Owner

**Name:** Brian Christopher Bulawan  
**Professional title:** AI, Automation & Systems Developer  
**Public location:** Philippines  
**Repository:** `blw-portfolio`

### Public contact surfaces

In priority order:

1. Email — `brianbulawan5@gmail.com`
2. GitHub — `https://github.com/bekindtomammals0`
3. LinkedIn — `https://www.linkedin.com/in/bbulawan/`
4. Upwork — omitted from v0.1 unless explicitly approved later
5. Location — Philippines

Do not invent missing contact information.

---

## 2. Professional identity

The portfolio should establish Brian primarily as an:

> **AI, Automation & Systems Developer**

The broader identity behind that title is a **technology solutions builder**.

University employment is supporting context, not the core public identity of the portfolio.

### Core narrative

Two statements define the portfolio:

> I repeatedly encounter inefficient processes and build systems to improve them.

> I experiment with software, AI, and automation to solve practical problems.

The portfolio should show that Brian seeks **more predictable outcomes through structured solutions**, while deliberately preserving flexibility and adaptability as requirements change.

Do not frame this as predictive machine learning unless a specific project actually uses predictive modeling.

---

## 3. Portfolio philosophy

The portfolio is about **systems**, not about collecting technologies.

The recurring project story is:

> **Problem → Structure → System → Outcome → Evolution**

A spreadsheet, Python script, AI agent, web application, automation workflow, or scheduling engine is valid portfolio material when it solves a meaningful problem.

Technology should be described as an implementation choice, not as the project itself.

Bad example:

> Built a Google Sheet for a tournament.

Preferred framing:

> Built a tournament operations system that helped a small organizing team structure registration, scheduling, match progression, and event operations for events with roughly 50–200 individual participants.

---

## 4. Target audiences

Prioritize content and first-impression clarity in this order:

1. Remote employers
2. Philippine employers
3. Freelance clients
4. Technical recruiters
5. Potential business clients
6. Developers
7. Universities / institutions

### Desired recruiter impression

A recruiter should quickly understand that Brian:

- turns inefficient or ambiguous processes into structured systems;
- values measurable or at least observable operational outcomes;
- considers adaptability and future change when designing solutions;
- uses AI and automation as engineering tools, not as substitutes for understanding;
- can explain why a solution exists and how it works.

### Desired client impression

The site may subtly communicate:

> I can build scoped solutions like these for real operational problems.

Do not turn the portfolio into an aggressive sales funnel.

Client-oriented language must preserve professional scoping: requirements, constraints, deliverables, and boundaries matter.

---

## 5. Project inclusion threshold

Only include a project in the main portfolio when at least one is true:

- a usable MVP exists;
- an operational implementation exists;
- a sufficiently complete working product demonstrates the intended solution.

Do **not** place pure concepts, unimplemented plans, speculative future work, or partially understood prototypes in the primary portfolio.

### Status vocabulary

Use a small controlled set:

- `Operational` — used in a real workflow or event.
- `Working MVP` — usable core solution exists.
- `Maintained` — working and receiving ongoing improvements.
- `Paused` — working solution exists but active development has stopped.
- `Archived` — retained for historical value.
- `Private` is **not** a development status; it is a disclosure level.

Avoid vague labels such as `Almost Done`, `80% Complete`, or `Coming Soon`.

### Featured-project rule

Featured work should be selected by portfolio value, not recency.

Target **4–5 featured projects**.

A project can be technically strong but remain non-featured if:
- its outcome is unclear;
- its contribution cannot be explained;
- its evidence cannot be safely disclosed;
- it duplicates the story of a stronger project.

---

## 6. Project case-study structure

Every featured project should use five primary concepts.

### 1. Problem
What inefficiency, uncertainty, scale problem, or recurring constraint existed?

### 2. System
What solution was designed? How does information or work move through it?

### 3. Engineering
What architecture, technologies, formulas, automation, algorithms, AI components, or major technical decisions matter?

Code snippets stay on GitHub. Major architecture or data-flow diagrams may appear in the portfolio.

### 4. Outcome
What became more structured, manageable, predictable, scalable, reusable, or observable?

Do not invent metrics. Use qualitative outcomes when quantitative evidence is unavailable.

### 5. Evolution
What changed after real use? What was simplified? What failed? What did later versions improve? What remains a current limitation?

Evolution is used to demonstrate adaptability, learning, and persistence without making every project look unfinished.

---

## 7. AI-assisted engineering

AI-assisted engineering is a deliberate part of Brian's professional direction.

Do not hide AI usage when it materially contributed to implementation.

Do not frame projects as if AI performed all engineering decisions.

Preferred description:

> AI-assisted development was used to accelerate implementation, debugging, documentation, and iteration. Requirements, system behavior, constraints, validation, and final engineering decisions remained human-directed.

Project-specific wording may vary based on actual contribution.

Never claim independent manual authorship of code if that would be misleading.

Never diminish a legitimate project merely because AI accelerated its implementation.

The portfolio should demonstrate that the important capability is the ability to:
- define problems clearly;
- communicate requirements;
- choose and revise architecture;
- test behavior;
- detect incorrect outputs;
- debug and validate;
- understand and explain the resulting system.

---

## 8. Site personality

The site should combine three primary characteristics:

1. **Professional / corporate**
2. **Engineering / technical**
3. **Experimental**

Avoid stereotypical developer-portfolio aesthetics unless they serve content.

Do not default to:
- neon terminal motifs;
- matrix backgrounds;
- constant animated particles;
- decorative code blocks;
- excessive glassmorphism;
- large 3D effects;
- animation that competes with project evidence.

---

## 9. BLW / Balanse design principles

Brian's professional identity may draw from the existing BLW / Balanse philosophy without turning the portfolio into a sports-team website.

Translate the identity into design behavior:

### Kalma — restraint
- deliberate whitespace;
- low visual noise;
- clear hierarchy;
- controlled motion;
- readable content density.

### Bagsik — confidence
- strong headings;
- decisive composition;
- clear calls to action;
- technically credible presentation.

### Balanse — structure
- consistent grids;
- balance between text and evidence;
- balance between corporate restraint and experimental detail;
- avoid both sterile minimalism and visual overload.

### Experimental — evolution
- diagrams;
- subtle system visualizations;
- project-status signals;
- restrained interactive details;
- development-note treatment that suggests active engineering.

Exact colors and fonts are not yet authoritative. Do not invent a permanent palette without documenting the decision in `docs/DESIGN_SYSTEM.md`.

---

## 10. Photograph

A professional photograph is optional.

If used:
- keep it secondary to the project content;
- use a small professional headshot in the hero or About area;
- ensure the layout remains complete if the image is absent;
- do not make the portrait occupy half of the hero;
- do not delay the MVP because a photograph is unavailable.

---

## 11. Site architecture

Version 1 is a **single-page application** with a blog/engineering-journal feel.

It is not a traditional chronological blog and must not depend on frequent publishing.

Recommended primary navigation:

- Work
- Notes
- Approach
- About
- Contact

All are sections on the same page.

### Recommended flow

1. Hero
2. Featured Work
3. Selected Projects
4. Project Case Studies
5. Development Notes
6. Approach / How I Work
7. About
8. Contact

Use hash anchors for deep linking, including project case studies where possible.

A visitor must be able to understand the professional identity and reach a featured project without opening a separate route.

---

## 12. Living-project behavior

The site should feel active without requiring constant maintenance.

### Permanent content
- professional identity;
- featured projects;
- stable project case studies;
- About;
- contact.

### Slow-changing content
- status;
- current system capabilities;
- screenshots;
- architecture;
- project outcome.

### Optional content
- short development notes;
- experiments;
- next-step observations.

If no development notes are added for six months, the site must still look complete.

Do not add `Last updated X days ago` site-wide indicators that make inactivity look like neglect.

---

## 13. Technical direction

Initial recommended stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- static project data in TypeScript or JSON
- Markdown only if it genuinely simplifies development notes
- no backend for v1
- no authentication
- no database
- no CMS
- no resume download requirement

Use the simplest architecture that preserves maintainability and structured content.

### Engineering principles

- semantic HTML;
- accessibility by default;
- keyboard navigation;
- reduced-motion support;
- mobile-first responsive behavior;
- good Core Web Vitals;
- minimal JavaScript where possible;
- no heavy dependency for a trivial interaction;
- project content separated from presentation components;
- no hardcoded project markup repeated across the page.

---

## 14. Content model principles

Project data must be structured.

At minimum each project should support:

- `slug`
- `name`
- `tagline`
- `status`
- `featured`
- `problem`
- `system`
- `engineering`
- `outcome`
- `evolution`
- `technologies`
- `categories`
- `evidence`
- `disclosure`
- `links`
- `developmentNotes`

Do not require every project to have:
- a public GitHub repository;
- a live URL;
- a codebase;
- a version number;
- a start date.

The content model must gracefully handle private or spreadsheet-based systems.

---

## 15. Disclosure model

Use these levels:

### `public`
Source/demo/screenshots may be shared.

### `public-case-study`
The case study is public but some implementation details or source code remain private.

### `sanitized-case-study`
Only redacted screenshots, synthetic data, recreated diagrams, and high-level implementation details may be shown.

### `private-reference`
The project may be listed only at a high level, if at all. No sensitive operational material should be exposed.

Never expose:
- student or participant personal data;
- private financial data;
- institutional credentials;
- internal URLs;
- confidential reports;
- private repositories without explicit approval;
- access tokens or environment values;
- data copied from operational spreadsheets without sanitization.

See `docs/DISCLOSURE_GUIDELINES.md`.

---

## 16. Current project inventory policy

The initial inventory contains confirmed evidence plus candidates requiring verification.

Do not automatically promote a candidate to `Featured` just because it appears in prior resumes or project notes.

Before promotion, verify:
1. a working MVP or operational implementation exists;
2. Brian's individual contribution is explainable;
3. disclosure level is known;
4. at least one safe evidence artifact can be produced;
5. status wording is accurate.

See `docs/PROJECT_INVENTORY.md`.

---

## 17. Writing style

Portfolio copy should be:
- concise;
- grounded;
- specific;
- professional;
- straightforward;
- human rather than inflated.

Prefer:
> Structured tournament registration, scheduling, and match operations so a small organizing team could coordinate a large participant pool.

Avoid:
> Revolutionized tournament management through a cutting-edge synergistic digital ecosystem.

Do not use unverified performance claims.

Do not write long paragraphs when a concise explanation and diagram would communicate the system better.

---

## 18. Definition of done for v1

Version 1 is done when:

- professional identity is immediately visible;
- 3–5 verified projects are presented, with at least 3 passing the MVP/operational gate;
- every featured project uses the five-part case-study model;
- disclosure has been reviewed for every public artifact;
- navigation works on desktop and mobile;
- project data is structured and reusable;
- development notes work but are optional;
- the site is accessible by keyboard;
- reduced-motion preference is honored;
- no confidential or placeholder data is publicly exposed;
- contact links work;
- metadata/social preview are configured;
- the production build is deployed successfully;
- the site remains coherent with development notes removed.

---

## 19. AI-agent constraints

AI agents working in this repository must:

1. Read `CONTEXT.md` first.
2. Preserve the professional title unless explicitly changed by Brian.
3. Preserve the audience priority.
4. Keep university employment secondary.
5. Never fabricate project metrics, clients, users, deployment state, technologies, or GitHub URLs.
6. Never convert a planned project into a completed project without evidence.
7. Never expose confidential source material to create a prettier case study.
8. Keep code snippets out of portfolio case studies unless explicitly requested.
9. Prefer architecture diagrams and concise explanations for technical depth.
10. Keep the initial site single-page unless a later issue explicitly changes architecture.
11. Avoid adding a backend, CMS, database, authentication, or complex state management without a documented need.
12. Do not add a resume-download feature unless requested later.
13. Keep the site complete even when development notes are absent.
14. Ask for or mark missing factual content rather than invent it.
15. Treat `docs/PROJECT_INVENTORY.md` as the source of truth for project inclusion state.

---

## 20. Open factual placeholders

These values are intentionally unresolved and must not be guessed:

- Upwork profile URL, if it is added after v0.1;
- final project repository URLs;
- final screenshots;
- final public project metrics;
- exact custom domain;
- final design palette;
- final typography;
- professional photograph;
- public deployment URLs for candidate projects.

Use explicit TODOs until each value is provided or verified.
