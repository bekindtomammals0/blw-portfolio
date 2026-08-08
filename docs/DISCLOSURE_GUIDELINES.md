# Disclosure and Sanitization Guidelines

## Purpose

The portfolio contains projects derived from personal, institutional, event, and potentially confidential workflows.

A technically impressive case study is not worth exposing protected information.

---

## 1. Disclosure levels

### Public

Use when:
- source code is approved for public access;
- screenshots contain no sensitive information;
- demo data is safe;
- project description may be shared openly.

Allowed:
- GitHub links;
- live demos;
- real screenshots;
- architecture.

### Public case study

Use when:
- the project may be discussed;
- implementation/source remains private.

Allowed:
- public narrative;
- high-level architecture;
- screenshots approved for sharing;
- selected outputs.

Do not imply a public repository exists.

### Sanitized case study

Use when:
- the system is operational but contains institutional, participant, financial, or other sensitive information.

Allowed:
- recreated screenshots;
- synthetic records;
- redacted visuals;
- genericized field names;
- abstract diagrams;
- public explanation of the problem/solution.

### Private reference

Use when even a detailed sanitized case study would reveal too much.

Allowed:
- minimal title/category;
- high-level statement of capability when appropriate.

May be excluded entirely.

---

## 2. Never publish

Without explicit review, do not publish:

- student names, IDs, grades, enrollment data;
- participant contact data;
- financial transaction history;
- institutional credentials;
- internal account identifiers;
- private URLs;
- access tokens or secrets;
- internal email threads;
- private reports;
- confidential screenshots;
- production spreadsheet links;
- private repository URLs;
- personal information belonging to event participants;
- unapproved institutional branding used in a way that implies official endorsement.

---

## 3. Sanitization workflow

Before adding evidence:

1. Duplicate or recreate the artifact.
2. Replace real data with synthetic data.
3. Remove names, IDs, email addresses, phone numbers, URLs, and internal codes where necessary.
4. Remove metadata from downloadable files where appropriate.
5. Verify screenshot backgrounds and browser chrome.
6. Check formulas/scripts for embedded IDs or secrets.
7. Re-read project copy for internal organizational details.
8. Confirm disclosure level in project data.

---

## 4. Institutional work

University employment should remain supporting context.

Case studies should emphasize:
- problem structure;
- workflow design;
- data model;
- coordination system;
- automation approach;
- engineering decisions.

Avoid presenting institutional work as a commercial client project unless it actually was one.

Avoid wording that implies ownership of institutional data.

---

## 5. Tournament and sports systems

Event systems may be strong public case studies, but participant data must be sanitized.

Prefer:
- generic player names;
- synthetic brackets;
- reconstructed schedules;
- aggregate event scale;
- diagrams of workflow.

Real participant counts may be used only when confidently verified and safe.

---

## 6. Personal finance systems

Never publish real transaction records.

Use:
- synthetic transactions;
- fake goals;
- generic account labels;
- recreated screenshots.

---

## 7. AI projects

Do not publish:
- API keys;
- system prompts containing protected data;
- private document corpora;
- authentication tokens;
- proprietary client content.

Architecture can normally be documented safely at a higher level.

---

## 8. Claims

Disclosure also applies to claims.

Do not state:
- deployment;
- number of users;
- percentage improvement;
- cost savings;
- time savings;
- event scale;
- accuracy;
- model performance;

unless the value can be verified.

Qualitative language is acceptable when accurate:

> reduced duplicate encoding

is safer than:

> reduced processing time by 70%

unless the latter was measured.

---

## 9. Evidence review checklist

Before merge:

- [ ] Disclosure level declared.
- [ ] Screenshots reviewed.
- [ ] Data is synthetic/redacted where needed.
- [ ] No secrets.
- [ ] No private operational links.
- [ ] Contribution is accurate.
- [ ] Status is accurate.
- [ ] Metrics are verified.
- [ ] Institution/client wording does not overstate ownership or endorsement.
