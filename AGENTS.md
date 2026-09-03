# Atlas Agent Instructions

## Required reading

Before making changes, read:

1. `genesis.md`, if it exists and the work may materially affect product direction, scope,
   architecture, project boundaries, or long-term behavior
2. `.ai/context.md`
3. `.ai/tasks/current.md`
4. `.ai/README.md`
5. `README.md`
6. `docs/sprints/current.md`, if it exists
7. Relevant files under `docs/architecture/`, if they exist
8. Relevant accepted ADRs under `docs/adr/`

## Genesis alignment

When a root-level `genesis.md` exists:

- Treat it as the project's durable intent, not as an implementation specification.
- Surface material conflicts between a request and Genesis rather than silently overriding it.
- Do not rewrite Genesis during ordinary feature or maintenance work.
- Call out any deliberate Genesis change explicitly in the task and completion report.

See [`docs/conventions/project-genesis.md`](docs/conventions/project-genesis.md) for the full
convention.

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
