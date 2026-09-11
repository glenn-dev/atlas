# Archived Task

## Title

Add the manual Project Genesis builder and close the Atlas session

## Status

Completed

## Context

Project Genesis Convention v0.1 is approved and preserved at
`docs/conventions/project-genesis.md`, with its scaffold at `templates/project/genesis.md`. The
convention now needs a concise manual workflow that can be used from sibling projects before any
Skill or automation is justified.

## Objective

Add a reusable manual Project Genesis builder, make it discoverable, and synchronize Atlas's
working context and handoff for a clean future re-entry without changing application behavior or
expanding Atlas architecture.

## Acceptance criteria

- A concise builder in `.ai/prompts/project-genesis.md` references the canonical convention and
  template and requires evidence-separated, human-reviewed Genesis proposals.
- The convention, template, and builder have distinct documented roles.
- Atlas context and handoff preserve completed work, architectural understanding, deliberate
  deferrals, and the recommended re-entry point.
- The approved v0.1 convention and template remain unchanged.
- No application code, dependency, infrastructure, runtime configuration, Skill, registry,
  automation, orchestration, or sibling repository is changed.
- Documentation validation and `git diff --check` pass.
- The scoped changes are committed as `docs: add project genesis builder workflow` without a
  push.

## Completion report

- Added the manual builder at `.ai/prompts/project-genesis.md` using the repository's established
  prompt location.
- Added a concise documentation-index reference distinguishing the convention, template, and
  builder.
- Archived the completed v0.1 convention task and replaced it with this completed closure task.
- Updated `.ai/context.md` and `docs/handoffs/current-context.md` with the durable re-entry state.
- Left the approved convention and template unchanged.
- Kept the change documentation-only and within Atlas; no sibling repository was touched.
- Recommended re-entry: inspect the convention, context, current task, and handoff, then conduct
  a deliberate Project Genesis exercise for Atlas itself when that work has priority.
