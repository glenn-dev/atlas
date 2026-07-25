# Atlas Agent Instructions

## Required reading

Before making changes, read:

1. `.ai/context.md`
2. `.ai/tasks/current.md`
3. `.ai/README.md`
4. `README.md`
5. `docs/sprints/current.md`, if it exists
6. Relevant files under `docs/architecture/`, if they exist
7. Relevant accepted ADRs under `docs/adr/`

## Repository inspection

Before implementation:

- Inspect the relevant code.
- Inspect `git status`.
- Inspect recent commits when historical context matters.
- Verify documentation against the actual working tree.
- Do not assume `.ai/context.md` is fully current.
- Report important discrepancies between documentation and code.

## Working rules

- Prefer the smallest coherent change that satisfies the task.
- Do not add frameworks or dependencies without explaining why.
- Do not perform unrelated refactors.
- Preserve existing behavior unless the task explicitly changes it.
- Follow the conventions already used in the repository.
- Add or update tests for behavior changes when practical.
- Run relevant tests after modifying code.
- Update documentation when behavior, architecture, setup, commands, or known problems change.
- Record significant architectural decisions as ADRs.
- Do not commit or push unless explicitly instructed.
- Never expose or commit secrets, credentials, private keys, access tokens, personal production data, confidential company data, or proprietary Enerlink information.

## Task execution

There must be only one active task in `.ai/tasks/current.md`.

Before executing it:

- Confirm that its objective and acceptance criteria are understandable.
- Inspect the relevant implementation.
- Identify the smallest viable execution plan.

During execution:

- Keep changes within the declared scope.
- Record material discoveries that change the task assumptions.
- Do not silently expand the scope.

## Completion requirements

At the end of every implementation task:

1. Run the relevant tests and validation commands.
2. Report every command executed.
3. Report every file created, modified, moved, or deleted.
4. Summarize the resulting behavior.
5. Report unresolved risks, limitations, and follow-up work.
6. Show `git status`.
7. Show `git diff --stat`.
8. Update `.ai/context.md` if the repository state changed materially.
9. Update the status of `.ai/tasks/current.md`.
10. Do not commit or push unless explicitly instructed.

## Source-of-truth hierarchy

When information conflicts, use this order:

1. Actual repository code and configuration.
2. Tests and executable behavior.
3. Accepted ADRs.
4. Maintained project documentation.
5. `.ai/context.md`.
6. Conversation summaries or task descriptions.

Report conflicts instead of choosing silently.
