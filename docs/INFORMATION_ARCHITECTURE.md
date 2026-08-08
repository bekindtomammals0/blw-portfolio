# Information Architecture

## Principle

The portfolio is a single page but should not feel like one long undifferentiated landing page.

Use clear content layers and anchor navigation.

---

## Primary navigation

Recommended desktop and mobile navigation:

- Work
- Notes
- Approach
- About
- Contact

Logo/name returns to the top.

The navigation should become compact or sticky after the hero only if this improves usability without obscuring content.

---

## Page structure

### 1. Hero — `#top`

Purpose: establish identity in seconds.

Content:
- Brian Christopher Bulawan
- AI, Automation & Systems Developer
- one-line portfolio thesis
- primary CTA: View Selected Work
- secondary CTA: Contact
- Email / GitHub / LinkedIn / Upwork
- optional small photo

Do not list the entire technology stack in the hero.

---

### 2. Featured Work — `#work`

Purpose: show strongest proof before biography.

Recommended layout:
- 3–5 project cards
- one visually dominant project may be allowed if evidence is strong
- status tag
- category
- one-sentence problem/outcome
- evidence thumbnail or diagram
- `Explore system` anchor

A card should not require GitHub to look complete.

---

### 3. Selected Projects — `#projects`

Purpose: include legitimate non-featured work without overwhelming the visitor.

Use compact cards or rows.

Each item may show:
- title;
- category;
- status;
- one-sentence purpose;
- disclosure-safe evidence link if available.

Potential categories:
- AI & Agents
- Automation
- Scheduling
- Data / Workflow
- Sports Operations
- Web Applications

---

### 4. Detailed Case Studies — `#case-studies`

Each featured project receives a long-form section on the same page.

Recommended anchor pattern:

- `#project-greenmetric`
- `#project-tournament-ops`
- `#project-finance-agent`
- `#project-exam-scheduler`

Each case study contains:

1. Problem
2. System
3. Engineering
4. Outcome
5. Evolution

Additional compact metadata:
- status;
- categories;
- technologies;
- disclosure note;
- GitHub/demo links when available.

Use diagrams and screenshots between content blocks when they improve comprehension.

---

### 5. Development Notes — `#notes`

Purpose: create a living engineering-journal feel.

Display only a small recent selection, such as 3–6 entries.

Notes are optional and should not dominate the homepage.

Each note:
- date;
- project;
- concise update;
- optional type: `Build`, `Iteration`, `Experiment`, `Reflection`.

Avoid pagination in v1.

If no notes exist, omit the section cleanly.

---

### 6. Approach — `#approach`

Purpose: explain the recurring engineering method.

Recommended four-step summary:

1. Understand the actual bottleneck.
2. Make the process explicit.
3. Build the simplest system that handles the constraints.
4. Test, observe, simplify, and evolve.

AI-assisted engineering can be explained here without making every project repeat the same disclaimer.

---

### 7. About — `#about`

Purpose: provide human context without turning university employment into the main identity.

Include:
- concise professional summary;
- interest in AI, automation, structured systems, scheduling, and practical workflows;
- optional professional photograph;
- brief reference to experience building systems in real operational environments.

Do not reproduce a full resume.

---

### 8. Contact — `#contact`

Provide:

- Email
- GitHub
- LinkedIn
- Upwork
- Philippines

Keep this section direct.

Suggested message direction:

> Have a workflow or operational problem that needs a scoped technical solution? Contact me with the problem, constraints, and desired outcome.

Do not present a generic “I can build anything” claim.

---

## Project navigation behavior

Use normal anchor links rather than modal-only navigation.

Why:
- shareable URLs;
- better keyboard behavior;
- content remains readable without JavaScript-specific modal state;
- browser back/forward behavior remains predictable.

Cards can scroll to the corresponding case study.

Use `scroll-margin-top` for sticky navigation offsets.

---

## Mobile behavior

On mobile:

- collapse navigation cleanly;
- preserve project status and title before media;
- stack project metadata;
- avoid horizontal carousels for critical content;
- diagrams may become scrollable only when unavoidable;
- do not hide technical content behind hover.

---

## Content order rationale

Projects appear before About because the highest-priority audience is employment/recruiting.

The site should prove capability first and provide biography second.
