# Product Specification — blw-portfolio

## 1. Product summary

`blw-portfolio` is a public single-page portfolio for **Brian Christopher Bulawan, AI, Automation & Systems Developer**.

It is designed to present practical systems as case studies rather than as a flat repository list.

The site should show a consistent pattern:

> inefficient or ambiguous process → structured model → working system → improved operational capability → continued evolution

The portfolio is career-first, with subtle freelance relevance.

---

## 2. Product goals

### Primary goals

1. Give remote employers a clear professional identity within the first screen.
2. Show 3–5 credible systems that demonstrate applied problem solving.
3. Explain project impact without requiring the visitor to inspect source code.
4. Support projects whose implementation is a Google Sheet, Python script, private application, or automation workflow.
5. Communicate responsible AI-assisted engineering.
6. Make the site maintainable as a living project without requiring regular blogging.
7. Give clients enough evidence to infer that scoped solution work is available.

### Secondary goals

- provide a consistent place to link from job applications;
- improve project documentation discipline;
- create a public narrative connecting older systems to current AI/automation work;
- provide a reusable case-study template for future projects.

---

## 3. Non-goals for v1

Do not build:

- a CMS;
- an admin panel;
- authentication;
- a database;
- a newsletter;
- comments;
- a full blog engine;
- a resume builder;
- a downloadable resume;
- an AI chatbot embedded in the portfolio;
- a complex analytics dashboard;
- an animated 3D landing page;
- multi-language support;
- separate project routes unless later justified.

---

## 4. Audience priority

1. Remote employers
2. Philippine employers
3. Freelance clients
4. Technical recruiters
5. Potential business clients
6. Developers
7. Universities / institutions

The site should be readable by a non-specialist recruiter but provide enough engineering detail for technical reviewers.

---

## 5. Key user journeys

### Recruiter — 30 seconds

1. Opens the site.
2. Sees name and title.
3. Understands the portfolio thesis.
4. Sees 3–5 strong projects.
5. Recognizes AI/automation/systems focus.
6. Can continue to a project or contact profile.

### Technical reviewer — 3–10 minutes

1. Opens a featured project.
2. Reads Problem → System → Engineering → Outcome → Evolution.
3. Sees architecture/data-flow diagram where relevant.
4. Uses GitHub link when public.
5. Understands what Brian personally directed or implemented.

### Potential client

1. Recognizes a familiar operational problem pattern.
2. Sees that solutions are scoped around requirements and constraints.
3. Understands that the technology can vary based on the problem.
4. Finds contact / Upwork without the site becoming sales-heavy.

---

## 6. Information shown above the fold

Required:

- Brian Christopher Bulawan
- AI, Automation & Systems Developer
- one concise positioning statement
- primary CTA: `View Selected Work`
- secondary CTA: `Contact`
- compact contact/profile links
- optional small professional photo

Recommended positioning copy direction:

> I turn inefficient processes into structured, adaptable systems using software, AI, and automation.

Optional supporting line:

> The goal is not automation for its own sake, but systems that make outcomes more manageable, observable, and repeatable.

---

## 7. Primary page sections

1. Hero
2. Featured Work
3. Selected Projects
4. Detailed Case Studies
5. Development Notes
6. Approach
7. About
8. Contact

See `INFORMATION_ARCHITECTURE.md`.

---

## 8. Featured project requirements

A featured project must:

- pass the MVP/operational inclusion gate;
- have a clearly stated problem;
- have a safe disclosure level;
- demonstrate a distinct capability;
- have at least one evidence artifact planned;
- use the five-part case-study model.

Target 4 featured projects for first public release; allow 3 if evidence quality is substantially stronger.

---

## 9. Project evidence

Accepted evidence includes:

- screenshots;
- sanitized screenshots;
- synthetic-data demos;
- architecture diagrams;
- data-flow diagrams;
- workflow diagrams;
- public GitHub repository;
- live demo;
- public spreadsheet demo copy;
- before/after process diagram;
- output examples.

A public code repository is optional.

---

## 10. Technical depth

Featured projects should expose approximately five core content blocks:

1. Problem
2. System
3. Engineering
4. Outcome
5. Evolution

Do not place long code snippets in the site. Link to GitHub for implementation detail.

Use diagrams for major systems when they explain behavior more effectively than prose.

---

## 11. Development notes

Development notes are concise engineering-journal entries, not articles.

Example:

> Reworked the scheduling constraints after testing an earlier approach against room and block conflicts.

A note may include:
- date;
- project link;
- 1–3 sentences;
- optional category.

Do not display a site-wide inactivity warning when notes become old.

---

## 12. Project filtering

For v1, avoid complex filtering.

If the number of projects exceeds approximately 8, add simple category chips such as:

- AI & Agents
- Automation
- Scheduling
- Data / Workflow
- Sports Operations
- Web Applications

Filters must not hide featured work by default.

---

## 13. Accessibility

Required:

- semantic landmarks;
- visible keyboard focus;
- skip link;
- logical heading hierarchy;
- minimum WCAG AA contrast;
- meaningful alt text;
- no hover-only critical information;
- reduced-motion support;
- keyboard-operable project expansion/navigation;
- touch targets suitable for mobile.

---

## 14. Performance

Targets, not absolute guarantees:

- static-first delivery;
- optimized images;
- lazy-load non-critical project media;
- avoid large animation libraries;
- avoid unnecessary client state;
- Lighthouse performance should remain strong on a typical production build.

---

## 15. SEO / sharing

Required:

- descriptive page title;
- meta description;
- canonical URL after deployment;
- Open Graph metadata;
- social preview image;
- structured headings;
- meaningful project anchor IDs.

Potential future enhancement:
- JSON-LD Person / CreativeWork markup.

---

## 16. Privacy and disclosure

Every project must declare a disclosure level before media is added.

No operational institutional data or participant information should be copied directly into the public site.

See `DISCLOSURE_GUIDELINES.md`.

---

## 17. Success criteria

The v1 portfolio succeeds when a visitor can answer these questions without opening GitHub:

1. What does Brian build?
2. What kinds of problems does he solve?
3. How does he think about systems?
4. What has actually reached working or operational state?
5. How does AI fit into his engineering workflow?
6. Where can he be contacted or evaluated further?

---

## 18. Initial technical recommendation

Use:

- React + TypeScript + Vite
- Tailwind CSS
- typed static content
- hash-anchor deep links
- optional Markdown for development notes only if needed

This keeps the portfolio technically simple while allowing project content and design to evolve independently.
