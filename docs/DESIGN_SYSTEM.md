# Design System Direction

This file defines design principles, not a final immutable visual brand.

Exact color and typography values remain open until implemented and reviewed.

---

## 1. Brand characteristics

The site combines:

- Professional / corporate
- Engineering / technical
- Experimental

The BLW / Balanse identity should influence design behavior rather than appear as sports branding.

---

## 2. BLW / Balanse translation

### Kalma — restraint

Visual behavior:
- generous spacing;
- calm backgrounds;
- limited competing accents;
- readable measure;
- controlled interaction.

### Bagsik — confidence

Visual behavior:
- strong typographic hierarchy;
- clear project titles;
- decisive section boundaries;
- minimal filler copy;
- confident but not exaggerated CTAs.

### Balanse — structure

Visual behavior:
- disciplined grid;
- consistent spacing scale;
- balanced text/media ratios;
- clear contrast between summary and depth.

### Experimental — engineering in motion

Visual behavior:
- restrained diagrams;
- system flow visualizations;
- project status tags;
- subtle hover/focus transformations;
- development-note timeline treatment.

---

## 3. Visual direction

Recommended atmosphere:

> clean technical editorial / engineering journal

Avoid:
- cyberpunk visual language;
- terminal imitation;
- giant gradient blobs;
- overused glass panels;
- excessive rounded cards;
- constant motion;
- decorative code that conveys no information.

---

## 4. Color direction

Do not commit final hex values yet.

Use semantic roles:

- `background`
- `surface`
- `surface-muted`
- `text-primary`
- `text-secondary`
- `border`
- `accent-primary`
- `accent-secondary`
- `status-operational`
- `status-mvp`
- `focus`

Potential identity direction:
- neutral professional base;
- restrained warm/gold accent referencing BLW/Bulawan;
- optional secondary experimental accent used sparingly.

Do not use bright sports-team pink as the dominant professional UI color unless a later visual review intentionally selects it.

---

## 5. Typography

Requirements:
- professional sans-serif or modern grotesk for UI;
- strong display weight for project headings;
- excellent readability at body sizes;
- no monospace for all body text.

Monospace may be used selectively for:
- metadata;
- project status;
- technical labels;
- architecture annotations.

---

## 6. Layout

Desktop:
- wide but controlled page shell;
- strong vertical rhythm;
- project sections alternate text/media only when it improves scanning;
- no novelty layout that makes project comparison difficult.

Mobile:
- single-column first;
- media follows relevant text;
- status and project identity remain visible before detail.

---

## 7. Cards

Cards are a summary mechanism, not the core brand.

Use:
- restrained border;
- clear hierarchy;
- status;
- one meaningful visual;
- concise copy.

Avoid:
- giant icon collections;
- more than 2–3 badges on a summary card;
- redundant technology lists.

---

## 8. Motion

Motion must:
- communicate hierarchy or state;
- be short;
- respect `prefers-reduced-motion`.

Good:
- subtle section reveal;
- focus/hover elevation;
- diagram emphasis;
- anchor-scroll behavior where accessible.

Bad:
- looping background animation;
- page hijacking;
- scroll-jacking;
- parallax required to read content.

---

## 9. Photograph

Optional.

If present:
- professional headshot;
- compact;
- visually secondary;
- no layout dependency on the image.

---

## 10. Accessibility

Design tokens must support:
- AA contrast;
- visible focus;
- readable body sizes;
- clear interactive states;
- reduced motion;
- touch-safe controls.

Accessibility is part of the design system, not a post-launch patch.
