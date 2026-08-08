# Issue tracker: GitHub

Issues and PRDs for this repository live in GitHub Issues, which is the sole implementation backlog. Use the `gh` CLI for all operations and infer the repository from `git remote -v`.

When a skill says “publish to the issue tracker,” create a GitHub issue. When it says “fetch the relevant ticket,” read the complete GitHub issue, its labels, and its comments. Do not maintain a parallel Markdown backlog.

## Implementation workflow

1. List open issues carrying `ready-for-agent`.
2. Choose an issue whose `Blocked by` references are complete or already satisfied by the current implementation branch.
3. Read the full issue, labels, and comments before changing code.
4. Implement only the issue's end-to-end acceptance criteria and run the relevant verification commands.
5. Record implementation and verification in the GitHub issue or its pull request.

After initialization and issue publication, continue with the next dependency-ready implementation issue. Do not return to Markdown backlog authoring.
