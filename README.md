# blw-portfolio

Personal portfolio for **Brian Christopher Bulawan — AI, Automation & Systems Developer**.

The portfolio presents practical systems built to make workflows more structured, adaptable, and capable of producing more predictable outcomes. It is intentionally not a repository gallery. Projects are presented as engineering case studies centered on the problem, the system designed, the engineering decisions, the outcome, and the system's evolution.

## Portfolio thesis

> I repeatedly encounter inefficient processes and build systems to improve them. I experiment with software, AI, and automation to solve practical problems.

The public portfolio should communicate that Brian can:

- identify recurring operational problems and ambiguous workflows;
- convert them into explicit requirements and structured systems;
- select technology based on the problem rather than force every solution into a full web application;
- use AI-assisted engineering responsibly to accelerate implementation, debugging, testing, and iteration;
- design systems that remain adaptable as requirements change;
- build scoped solutions for employers or clients without overpromising beyond the defined problem.

## Primary audience

1. Remote employers
2. Philippine employers
3. Freelance clients
4. Technical recruiters
5. Potential business clients
6. Developers
7. Universities / institutions

## Initial product

The first release is a **single-page, content-driven portfolio** with a blog/journal feel but no requirement for continuous publishing.

Recommended stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- Static structured project data
- No backend
- No authentication
- No CMS for v1

Deployment target can be GitHub Pages or Vercel. Keep deployment decoupled from the UI.

## Local development

Requirements:

- Node.js 24 or a compatible current LTS release
- npm 11 or newer

Install dependencies and start the local application:

```sh
npm install
npm run dev
```

Quality and production checks:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Use `npm run preview` to inspect the production build locally.

`npm run build` also enforces release metadata, canonical and asset links,
unresolved `TODO_*` placeholders, likely secrets, static-only dependencies, and
publication approval for selected screenshot evidence.

## Public image evidence

Unpublished evidence candidates belong in the gitignored
`evidence-inbox/<project-slug>/` directory. PNG, JPEG, and WebP candidates use a
stable kebab-case filename as their image ID.

```sh
npm run evidence:prepare -- <project-slug>
npm run evidence:approve -- <project-slug> <image-id>
npm run evidence:check
```

Preparation strips metadata and creates bounded card and case-study WebP
variants under the gitignored `evidence-prepared/` directory. It does not
sanitize, publish, select, attest, approve, overwrite, or delete an artifact.
Add the prepared variants and descriptive metadata to the project's manifest
under `evidence/manifests/`, then use the guided approval command to review and
promote both exact variants. Both confirmations and the companion approval
receipt are bound to their SHA-256 hashes; changing either file invalidates
approval. To replace an existing stable image ID, run
`npm run evidence:prepare-replacement -- <project-slug>` and then
`npm run evidence:replace -- <project-slug> <image-id>`; both overwrite actions
are explicit and the replacement must be re-approved.

Approval receipts are signed with an SSH key whose public key appears in
`evidence/allowed_signers`. Direct manifest or ledger edits cannot produce a
valid signature.

## Deployment

Pushes to `main` run the clean-install quality suite and deploy the static
`dist/` artifact through GitHub Pages. The approved v0.1 canonical URL is
<https://bekindtomammals0.github.io/blw-portfolio/>. No custom domain or backend
is configured.

## Content hierarchy

The site should remain useful even when development notes stop for months.

1. Permanent: identity, featured projects, stable case studies, contact.
2. Slow-changing: project status, screenshots, architecture, current capabilities.
3. Optional: development notes, recent experiments, next steps.

## Repository documentation

- [`CONTEXT.md`](CONTEXT.md) — authoritative AI-agent context.
- [`docs/PRODUCT_SPEC.md`](docs/PRODUCT_SPEC.md) — product requirements.
- [`docs/INFORMATION_ARCHITECTURE.md`](docs/INFORMATION_ARCHITECTURE.md) — page and navigation structure.
- [`docs/PROJECT_CONTENT_MODEL.md`](docs/PROJECT_CONTENT_MODEL.md) — project schema and case-study format.
- [`docs/PROJECT_INVENTORY.md`](docs/PROJECT_INVENTORY.md) — initial project discovery and inclusion gates.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — visual and interaction principles.
- [`docs/DISCLOSURE_GUIDELINES.md`](docs/DISCLOSURE_GUIDELINES.md) — public/private project rules.
- [`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md) — milestones and sequencing.
- [`docs/CASE_STUDY_TEMPLATE.md`](docs/CASE_STUDY_TEMPLATE.md) — reusable project-writing template.
- [GitHub Issues](https://github.com/bekindtomammals0/blw-portfolio/issues) — the sole implementation backlog and source of issue status and dependencies.
- [`CODEX_BOOTSTRAP_PROMPT.md`](CODEX_BOOTSTRAP_PROMPT.md) — foundation requirements used by the initialization issue.

## Public contact values

Approved v0.1 public contacts:

- Email: `brianbulawan5@gmail.com`
- GitHub: `https://github.com/bekindtomammals0`
- LinkedIn: `https://www.linkedin.com/in/bbulawan/`
- Upwork: omitted unless explicitly approved later

Public location should default to **Philippines** unless a more precise location is deliberately chosen.

## Project inclusion rule

A project may enter the main portfolio only when it has a **usable MVP, operational implementation, or sufficiently complete working product that demonstrates a real solution**.

Concepts, planned systems, incomplete experiments, and unverified claims remain outside the main portfolio until they pass this gate.

See `docs/PROJECT_INVENTORY.md` for the current candidates.
