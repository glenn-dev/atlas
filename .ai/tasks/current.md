# Current Task

## Title

Formalize the Project Genesis Convention

## Status

Completed

## Context

Atlas is incubating a convention in which projects may keep a root-level `genesis.md` to
preserve durable project intent. The convention must distinguish Genesis from usage,
agent-workflow, decision, working-context, task, and handoff documentation.

Atlas does not yet have its own Genesis. Defining it requires a separate deliberate discussion.

## Objective

Document the first formal version of the Project Genesis Convention, provide a reusable generic
template, and integrate Genesis alignment into Atlas's agent workflow without adding application
code, dependencies, automation, or a root-level Atlas `genesis.md`.

## Acceptance criteria

- The canonical convention is concise, operational, and explicitly Atlas-incubated.
- The convention covers purpose, appropriate content, adoption criteria, document boundaries,
  agent interpretation, conflict handling, evolution, portability, structure, anti-patterns, and
  lightweight adoption.
- A generic, optional-section project template is available.
- `AGENTS.md` requires Genesis review for material direction, scope, architecture, boundary, or
  long-term behavior decisions and prohibits silent conflicts or casual rewrites.
- Atlas's documentation index and current working context reference the convention.
- No Atlas root-level `genesis.md`, application code, dependency, automation, or external
  repository is changed.
- Relevant documentation validation and `git diff --check` pass.

## Constraints

- Keep the work documentation-only and avoid unnecessary process.
- Preserve established repository documentation style and paths where practical.
- Do not commit or push.

## Completion report

- Created the canonical convention at `docs/conventions/project-genesis.md` and the reusable
  template at `templates/project/genesis.md`.
- Added proportional Genesis reading, alignment, conflict, and change-reporting rules to
  `AGENTS.md`.
- Updated the root and documentation indexes, working context, and established handoff document.
- Archived the preceding blocked frontend-to-GraphQL task without changing its outcome.
- Kept the work documentation-only; no root-level Atlas `genesis.md`, application code,
  dependencies, automation, or external repositories were changed.
- Validation passed: referenced local files exist, Atlas has no root-level `genesis.md`, the
  application/infrastructure scope diff is empty, and `git diff --check` reports no errors. The
  repository has no configured Markdown documentation lint command.
- Remaining follow-up: test the convention through real adoption, hold the deliberate Atlas
  Genesis discussion, and separately complete the archived browser-verification follow-up.
