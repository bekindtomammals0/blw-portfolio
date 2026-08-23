# Development Roadmap

## Strategy

Build the portfolio in layers:

1. truth and disclosure;
2. content architecture;
3. visual shell;
4. project evidence;
5. polish;
6. deployment.

Do not spend early effort on animation or branding while project facts are unresolved.

---

# Milestone 0 — Repository foundation

Goal: make the repository safe for both human and AI-assisted development.

Deliver:
- README
- CONTEXT
- product spec
- content model
- disclosure rules
- inventory
- GitHub issue workflow
- initial React/TypeScript/Vite/Tailwind scaffold
- linting/formatting

Definition of done:
- local development starts with one command;
- AI agents can identify authoritative docs;
- no project claims are hardcoded before verification.

---

# Milestone 1 — Content system and page shell

Goal: establish the SPA architecture without final visual polish.

Deliver:
- global page shell;
- semantic navigation;
- hero;
- section anchors;
- project types;
- project data file;
- placeholder-free structure using only verified content;
- responsive baseline.

Definition of done:
- page works without project-specific custom JSX;
- cards render from structured data;
- sections are keyboard navigable.

---

# Milestone 2 — Featured work

Goal: present the first verified projects.

Priority:
1. UI GreenMetric Coordination Dashboard
2. Badminton Tournament Operations System
3. BLWFinBot verified v1
4. B-Loom Class & Exam Scheduling System

Deliver:
- featured project cards;
- full five-part case-study sections;
- evidence components;
- disclosure labels;
- GitHub/demo links only when verified.

Definition of done:
- 4 approved projects pass the portfolio gate;
- no confidential data appears.

---

# Milestone 3 — Living portfolio features

Goal: create the engineering-journal feel without making it a blogging obligation.

Deliver:
- development note model;
- notes section;
- optional project-linked notes;
- graceful omission when empty;
- approach section.

Definition of done:
- deleting all notes still leaves a complete website.

---

# Milestone 4 — Visual identity

Goal: apply BLW/Balanse-inspired professional identity.

Deliver:
- design tokens;
- typography;
- restrained palette;
- project-status styling;
- evidence/diagram presentation;
- optional headshot treatment;
- motion rules.

Definition of done:
- professional / technical / experimental characteristics are visible;
- accessibility remains intact;
- design does not resemble a sports-team page.

---

# Milestone 5 — QA and deployment

Deliver:
- responsive QA;
- accessibility review;
- reduced-motion review;
- metadata;
- Open Graph image;
- image optimization;
- broken-link checks;
- placeholder checks;
- production deploy.

Definition of done:
- no `TODO_*` contact placeholders in production;
- build succeeds;
- primary links work;
- project disclosures reviewed;
- mobile and keyboard navigation work.

---

# Future milestones — not v1

Potential additions only after real need:

- individual project routes;
- Markdown/MDX content pipeline;
- larger notes archive;
- filtering/search;
- custom domain;
- analytics;
- JSON-LD;
- contact form;
- CMS.

Do not implement preemptively.
