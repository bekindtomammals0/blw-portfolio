# v0.1 Visitor Journey QA

Run the automated checks before the manual journeys:

```sh
npm run typecheck
npm run lint
npm run format:check
npm test
npm run build
npm run smoke:artifact
```

`smoke:artifact` launches the built `dist/` output locally and verifies the
release navigation, featured-project deep links, contacts, favicon, and social
preview in Chromium. See `RELEASE_PROCESS.md` for CI, promotion, live
verification, and rollback operations.

## Keyboard and screen-reader journey

Test in a production preview with a keyboard and the browser accessibility tree.

1. Press `Tab` from the top of the page. Confirm the visible “Skip to content” link appears, activates, and moves focus past the sticky header.
2. Continue through the BLW home link, every primary-navigation link, both hero calls to action, every displayed “Explore” link, any displayed project or note links, contact links, and “Back to top.” Confirm the focus indicator remains visible and no control requires a mouse.
3. Activate each featured-project link, then use browser Back and Forward. Confirm the URL hash changes predictably and the case-study heading is not covered by the sticky header.
4. Inspect landmarks and headings: one `main`, named primary `nav`, footer, one `h1`, section `h2`s, project `h3`s, and case-study content `h4`s.
5. Confirm every evidence figure has a useful accessible name and any real image has meaningful alternative text. Decorative workflow internals must not duplicate that name.

## Responsive and visual journey

Test at 320, 375, 768, and 1280 CSS pixels, at 100% and 200% zoom.

1. Confirm there is no horizontal page scroll; headings, metadata, evidence, and long technical values wrap within the viewport.
2. Confirm navigation wraps without covering deep-linked content and every interactive target is comfortably usable by touch.
3. Check normal, hover, and focus states against the rendered backgrounds. Text, status, evidence, and control colors must meet WCAG AA.
4. Enable reduced motion at the operating-system or browser level. Confirm smooth scrolling and transitions are removed and all content remains available.
5. Read the complete recruiter path (identity → featured work → case study → contact) and technical path (case-study model → evidence → evolution) without relying on hover or animation.

## Optional-content journey

Render the application with an empty Development Notes collection and verify that both the section and its navigation link disappear without a gap or broken anchor. Confirm projects remain coherent when links, evidence media, and a photograph are absent; the current v0.1 intentionally ships without a photograph and public project links.
