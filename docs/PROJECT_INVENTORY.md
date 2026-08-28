# Initial Project Inventory

## Purpose

This is the first portfolio inventory based on known project history and available Google Drive evidence.

It is intentionally conservative.

`Featured` means **recommended for public feature after the portfolio gate is satisfied**. A project is not automatically public merely because supporting evidence exists.

GitHub repository discovery was refreshed during the 2026-08-23 planning review. Private repository URLs remain internal evidence and must not be rendered publicly unless a later review explicitly approves them.

---

## Portfolio tiers

- **Featured** — strongest distinct case studies.
- **Featured candidate** — strong project but needs one or more factual/public-release gates.
- **Selected project** — legitimate project with secondary portfolio value.
- **Archive** — useful history but not prominent.
- **Exclude for now** — planned/incomplete or insufficiently verified.

---

## Inventory

| Project | Current evidence | Working-state assessment | Disclosure | Initial tier | Gate / next action |
|---|---|---|---|---|---|
| UI GreenMetric Coordination Dashboard | Resume/application descriptions; operational workflow history | **Operational** — described as built and used for 2026 submission coordination | Sanitized case study | **Featured** | Create synthetic/redacted screenshots and a workflow diagram; verify any public outcome claims |
| Badminton Tournament Operations System | Multiple tournament scheduling/registration Sheets across 2022–2024+; event-management documents | **Operational system family** | Sanitized/public case study | **Featured** | Consolidate several event tools into one case study; verify safe participant scale and individual contribution |
| BLWFinBot | Private repository; tagged `v1.0.1` documentation baseline over the released `v1.0.0` runtime; release notes; automated test-suite verification | **Operational** — v1 was first used operationally on July 5, 2026; planned v2 capabilities are not part of the current claim | Sanitized case study | **Featured — selected AI project for v0.1** | Reconstruct evidence with synthetic finance data; omit the private repository and present v2 plans only under Evolution |
| B-Loom Class & Exam Scheduling System | Current private repository and documented Laravel/Vue/Inertia/PostgreSQL implementation | **Paused** — the application exists and works, but development is deferred indefinitely | Sanitized case study | **Featured** | Verify the executable release baseline; create synthetic scheduling evidence; omit the private repository and distinguish current heuristics from future optimization |
| Enterprise Chatbot / Agent Project | Prior application history describes completed prototype | Prototype reported complete; MVP/deployment/public evidence needs verification | Public or public case study, TBD | **Featured candidate — unpromoted for v0.1** | Locate repository and current demo; document architecture and exact contribution |
| IARO QRM Digital Logbook | Google Sheet template with operating procedure and single-entry/QRM workflow | Working structured system/template; operational adoption level needs verification | Sanitized case study | **Selected project** | Confirm real use; create synthetic demo; may be promoted if operational outcome is strong |
| E-Buddy Personal Finance Tracker | Final project documentation and proposal materials | Completed college/group project | Public case study, subject to team contribution | **Selected project / Archive** | Document Brian's individual contribution; avoid presenting group work as solo work |
| Badminton Training / Team Operations Sheets | EVRAA 2025 training workbook and related sports sheets | Working operational/support tools | Sanitized case study | **Selected project** | Decide whether to merge into broader Sports Operations case study |
| University Rankings / THE Evidence Workflow | Active workflow and documentation project history | Active institutional work; portfolio-ready implementation not yet fully verified | Sanitized/private | **Exclude for now** | Add only after a specific working system reaches the portfolio gate |
| Career Pipeline Agent | Project plan/context indicates private, human-supervised, local-MVP-first direction | Planned/under development; do not claim planned scraping/submission/notification features as implemented | Private | **Exclude for now** | Reassess after working MVP |
| Personal class schedule HTML / small exercises | Older Drive artifacts | Completed but low differentiation | Public if desired | **Archive** | Include only if useful for historical progression |
| Other college test plans / coursework artifacts | Multiple Drive files | Educational work | Public/sanitized as applicable | **Archive / Exclude** | Do not clutter primary portfolio unless a project demonstrates unique capability |

---

# Recommended first featured set

The strongest target mix is:

## 1. UI GreenMetric Coordination Dashboard

**Capability shown:** workflow engineering, information structure, data coordination, operational visibility.

**Narrative:**
A broad evidence-submission process was converted into a structured shared workflow containing requirements, evidence references, ownership, missing items, and status.

**Why it matters:**
Demonstrates that system design can be valuable even when the implementation is not a traditional software product.

**Evidence to create:**
- sanitized dashboard screenshot;
- evidence-flow diagram;
- simplified data model;
- before/after coordination model.

---

## 2. Badminton Tournament Operations System

**Capability shown:** operational systems design at real event scale.

**Narrative:**
A family of spreadsheet-based tools helped a small organizing team structure participant registration, scheduling, match progression, and tournament operations.

Known history includes tournament spreadsheets across multiple events and years.

**Important framing:**
Do not call this “just a spreadsheet.” The portfolio subject is the operational system.

**Evidence to create:**
- synthetic registration data;
- scheduling workflow;
- sample bracket/match progression;
- event-day information flow;
- safe verified scale statement.

---

## 3. BLWFinBot

**Capability shown:** AI-assisted product engineering, personal finance automation, agent/system design.

**Narrative direction:**
A personal finance system that records income/expenses and supports goal-feasibility analysis.

**Approved public boundary:**
- feature the verified v1 behavior only;
- use synthetic-data screenshots and diagrams;
- omit the private repository;
- describe AI assistance without displacing Brian's requirements, validation, and engineering decisions;
- present planned v2 work only as Evolution.

### v0.1 selection and verification record

BLWFinBot is the selected AI project for v0.1. The Enterprise Chatbot / Agent
remains an unpromoted candidate until its repository, demo, architecture, and
contribution evidence pass the same gate.

The private BLWFinBot repository was reviewed on August 28, 2026. The latest
tag, `v1.0.1` (`9eb53d9`), is a documentation-only correction over the released
`v1.0.0` runtime (`ef1f587`; code baseline `d94c792`). Its release record states
that the bot was first used operationally on July 5, 2026 and that the clean
automated suite passed before release. That evidence satisfies the inclusion
gate without making the repository public.

**Verified v1 capabilities:**

- Telegram text and voice capture for one Income or Expense per message;
- deterministic parsing, correction, and deletion;
- ordered rule-based categorization with clustering used only to discover
  recurring Uncategorized descriptions;
- contract-based Income projection and persisted Goal-feasibility checks;
- scheduled Goal-drift alerts and read-only email-receipt import;
- a Google Sheets Ledger behind a shared storage interface with an implemented
  SQLAlchemy/PostgreSQL-capable alternative;
- Manila-time date handling and always-on VM deployment support.

The Sheets-to-PostgreSQL production cutover is not verified. Financial
Accounts, Transfers, liabilities, balance reconciliation, a structured
analytics Dashboard, portfolio-aware Goals, and the other documented v2 work
are planned or incomplete and must appear only under Evolution.

**Verified architecture and technologies:** Python; `pyTelegramBotAPI` long
polling; deterministic regex/rule parsing; `gspread` with Google Sheets;
SQLAlchemy with PostgreSQL capability; `faster-whisper` or usage-capped Azure
Speech for transcription; scikit-learn TF-IDF/K-Means for rule discovery;
APScheduler; `zoneinfo`; and optional read-only IMAP receipt ingestion. The
repository is private. No public demo or approved real screenshot exists.

**Disclosure and reconstructable evidence:** publish only a sanitized case
study. Omit the repository URL, credentials, internal deployment details,
contract rate, personal financial values, raw messages, ledger rows, and real
email receipts. Safe evidence can be reconstructed with synthetic transactions
as a Telegram-to-parser-to-categorizer-to-Ledger workflow, sample receipts, a
synthetic Ledger, and a Goal-feasibility example. Real screenshots require
manual approval.

**Contribution and AI-assisted development:** GitHub attributes all 32
repository contributions visible at review time to Brian's account. The
owner-approved planning handoff and the portfolio's AI-assistance policy support
the public statement that Brian directed the problem definition, requirements,
architecture and implementation decisions, validation, debugging, release
baseline, and deployment constraints. AI-assisted development accelerated
implementation, debugging, documentation, and iteration; requirements, system
behavior, constraints, validation, and final engineering decisions remained
Brian-directed. This wording remains subject to the literal factual review
required by launch issue #11.

**Claims and sources:** the private `v1.0.0` and `v1.0.1` release notes support
the dates, runtime scope, known limitations, and clean-suite claim; the tagged
source and dependency manifest support architecture and technology claims;
GitHub contributor and commit metadata support the repository-contribution
claim; and the owner-approved planning handoff plus `CONTEXT.md` support the
AI-assistance wording. Publish no quantitative outcome or performance metric in
v0.1: none has an approved verification source.

---

## 4. B-Loom Class & Exam Scheduling System

**Capability shown:** full-stack engineering, constraint modeling, scheduling, data design.

Known supporting material includes scheduling requirements and existing examination schedule data. Prior application material describes a Laravel/Vue/Inertia/Tailwind/PostgreSQL application.

**Approved public boundary:**
- status is `Paused`: the application exists, while development is deferred indefinitely;
- B-Loom is the canonical application and `university_sched` is historical evolution;
- use a synthetic university, courses, faculty, rooms, and schedules;
- omit the private repository and institutional deployment details;
- separate implemented conflict rules and heuristics from future CP-SAT/optimization work;
- produce architecture and constraint-flow diagrams.

---

## 5. Enterprise Chatbot / Agent — pending gate

**Capability shown:** agentic/LLM application development.

This may replace one of the above featured slots if the current implementation has stronger public evidence.

**Required before featuring:**
- repository;
- demo/screenshots;
- architecture;
- model/framework/database details;
- exact contribution;
- accurate statement of AI-assisted development.

---

# Project combination decisions

## Combine: sports event tools

Do not create separate public cards for every tournament spreadsheet.

Group them under a stronger system family:

> **Badminton Tournament Operations System**

Individual events may appear as evolution/examples.

## Potentially combine: finance evolution

E-Buddy can eventually be used as historical context inside a broader finance-system evolution story if the relationship to BLWFinBot is real and useful.

Do not imply E-Buddy was a solo project.

## Keep separate: scheduling

Class/exam scheduling deserves its own case study because its constraints and engineering depth are distinct.

## Keep separate: rankings coordination

The rankings dashboard is distinct from generic institutional workflow automation because it demonstrates evidence coordination and data-governance thinking.

---

# Evidence discovered in Drive

The initial discovery located:

- a `SCHEDULER` requirements document;
- an `Examination Schedule` spreadsheet;
- the `IARO QRM Digital Logbook Template`;
- `E-Buddy` final documentation and proposal materials;
- `Zone 3 SK Badminton Tournament 2022`;
- `Scheduling BLW x BADVANZ Badminton Tournament 2024`;
- event response/scheduling Sheets;
- `EVRAA 2025 Badminton Training`;
- current application materials describing BLWFinBot v2, scheduling work, and the UI GreenMetric coordination dashboard.

These sources are **research evidence**, not automatic public assets. Follow `DISCLOSURE_GUIDELINES.md`.

---

# Inventory gaps

Before public launch, still locate/verify:

- enterprise chatbot repository/demo;
- public links beyond the approved GitHub and LinkedIn profiles;
- approved screenshots;
- individual contribution for older group work;
- outcome metrics that can be stated confidently.

These gaps should become content tasks, not blockers for building the site shell.
