# Release and rollback process

`dev` is the default integration branch. `main` is the production history for
GitHub Pages. Work on `dev` never deploys production.

## Validate a change

Pull requests targeting either `dev` or `main`, plus every push to `dev`, run
the required `Validate production artifact` CI check. It performs a clean
install, formatting, linting, type-checking, the full test suite, production and
evidence gates, the static build, and a Playwright journey against the locally
served `dist/` artifact.

Run the equivalent release gates locally with:

```sh
npm ci
npm run release:check
npx playwright install chromium
npm run smoke:artifact
```

The browser journey checks every primary navigation target, every rendered
featured-project deep link, approved contact destinations, the favicon, and the
social-preview metadata and artifact. It does not contact the deployed site.

## Promote `dev` to production

1. Confirm `dev` CI is green and push all intended commits to `origin/dev`.
2. Open a pull request whose base is `main` and whose head is `dev`:
   `gh pr create --base main --head dev --fill`.
3. Obtain review and wait for both required checks: `Validate production
   artifact` and `Require dev promotion source`.
4. Merge the pull request. Do not push directly to `main`.
5. The `Deploy portfolio to GitHub Pages` workflow rebuilds and browser-tests
   the exact `main` commit, uploads that artifact, deploys it, and runs the same
   journey against the returned Pages URL. A failure in `Deploy and verify
   production` means deployment occurred but production verification failed;
   treat that release as unhealthy and roll back.

Production deployment concurrency cancels an older in-progress deployment when
a newer release or rollback begins.

## Versioning policy

Releases use semantic version labels as a lightweight description of the
portfolio's maturity and scope:

- `v0.1.0` is the finalized initial public portfolio.
- `v0.1.1` is a corrective release for copy, links, SEO, responsive behavior,
  accessibility, or similar fixes.
- `v0.2.0` adds a case study or makes a meaningful information-architecture
  improvement.
- `v1.0.0` is the stable portfolio routinely used for real applications and
  client outreach.
- `v2.0.0` is a fundamental repositioning or redesign after v1.

Create a GitHub Release only for a meaningful portfolio milestone. The site
does not display its version, routine deployments do not require releases, and
versions are not bumped automatically. Keep release work on the normal feature
branch to `dev` to `main` path; do not create separate release branches or a
detailed changelog until either becomes useful.

## Identify the last known-good commit

Open the repository Actions page, select `Deploy portfolio to GitHub Pages`,
and find the newest completed run where both `Build and validate exact artifact`
and `Deploy and verify production` succeeded. The commit SHA shown for that run
is the last known-good commit. Confirm it is an ancestor from the protected
`main` history before using it:

```sh
git merge-base --is-ancestor <commit-sha> origin/main
```

## Emergency rollback

Rollback rebuilds source; it does not reuse or trust an old artifact and does
not bypass formatting, linting, type-checking, tests, production metadata,
evidence approval, build validation, or either browser check.

After identifying a full known-good commit SHA, dispatch the one-command
rollback. The workflow rejects abbreviated SHAs, commits outside `main`, and
commits without a previously successful deployment run:

```sh
gh workflow run deploy-pages.yml --ref main -f commit=<known-good-commit-sha>
```

Monitor the dispatched workflow through completion. The same concurrency group
prevents an older queued production release from overwriting the rollback.

## Dependency maintenance

Dependabot opens controlled monthly npm and GitHub Actions updates against
`dev`. Workflow actions remain pinned to immutable 40-character commit SHAs;
the adjacent version comments are for readability and must be updated with the
pin.
