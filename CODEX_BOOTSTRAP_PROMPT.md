# Codex Bootstrap Prompt — blw-portfolio

Use this prompt from the root of a newly cloned `blw-portfolio` repository.

---

You are initializing the `blw-portfolio` project.

Before changing anything:

1. Read `AGENTS.md` and `CONTEXT.md` in full.
2. Read the assigned GitHub issue, including its labels and comments. GitHub Issues is the sole implementation backlog.
3. Read:
   - `docs/PRODUCT_SPEC.md`
   - `docs/INFORMATION_ARCHITECTURE.md`
   - `docs/PROJECT_CONTENT_MODEL.md`
   - `docs/DESIGN_SYSTEM.md`
   - `docs/DISCLOSURE_GUIDELINES.md`
   - `docs/PROJECT_INVENTORY.md`
   - `docs/DEVELOPMENT_ROADMAP.md`
4. Treat those files as product requirements. Do not invent missing project facts, links, metrics, deployment state, or private information.

## Task

Implement [GitHub Issue #1: Initialize the portfolio application foundation](https://github.com/bekindtomammals0/blw-portfolio/issues/1) and the minimum architecture required for Issue #2.

### Stack

- React
- TypeScript
- Vite
- Tailwind CSS

### Constraints

- Single-page application.
- No backend.
- No database.
- No auth.
- No CMS.
- No resume-download feature.
- Do not add a large state-management library.
- Do not add animation libraries during bootstrap.
- Do not add project facts beyond what is already documented.
- Do not expose Drive URLs or confidential source artifacts.
- Preserve all documentation.
- Prefer strict TypeScript and reusable data-driven components.
- Use semantic HTML and accessibility-first defaults.
- Support `prefers-reduced-motion`.
- Keep the application deployable as a static site.

## Initial file direction

Use a maintainable structure similar to:

```text
src/
├── app/
├── components/
├── data/
│   ├── projects.ts
│   └── notes.ts
├── sections/
├── types/
├── styles/
└── assets/
```

You may adjust this structure when there is a clear reason.

## Seed content

Do not fabricate finished case studies.

Create the typed model and use minimal safe seed data based only on verified inventory labels. If a field is not yet known, keep the project out of rendered production content or use an explicit development placeholder that cannot be confused with a factual public claim.

Do not show `TODO_EMAIL`, `TODO_GITHUB_URL`, `TODO_LINKEDIN_URL`, or `TODO_UPWORK_URL` as clickable production links.

## Deliverables

1. Working local Vite application.
2. Tailwind configured.
3. Lint/format tooling.
4. Semantic shell.
5. Typed portfolio project model.
6. Empty/safe data files.
7. Basic navigation anchors matching the information architecture.
8. Placeholder visual shell without premature final branding.
9. README setup commands updated if needed.
10. Successful production build.

## Verification

Run available lint/typecheck/build commands.

Report:
- files changed;
- commands run;
- build status;
- assumptions made;
- unresolved factual TODOs.

Do not proceed to later issues unless required to make the foundation coherent.
