# Current Task

## Title

Post-Genesis reconciliation and legacy v0.1 retirement planning

## Status

Planned; not started. This task records the next work and does not authorize deletion.
The preceding Genesis hardening diff awaits explicit approval; no commit or push is authorized
for that hardening pass.

## Context

Glenn explicitly approved Atlas Genesis. It was committed as
`726f4ad1fd643d92456b114bfc08bade8b37a031` (`docs: establish Atlas genesis`) and pushed to
`origin/master`. The [completed Genesis task](archive/2026-09-14-establish-atlas-genesis.md)
preserves the Foundation Review findings and deferred documentation reconciliation.

[Genesis](../../genesis.md) defines durable intent. The July learning scaffold is historical
implementation, not the foundation future Atlas must preserve. Apply the authority-by-question
rules in [AGENTS.md](../../AGENTS.md) when reconciling that distinction.

## Objective

Reconcile maintained documentation with the accepted Genesis and prepare an explicit, reviewable
plan for retiring the July learning scaffold. Planning must preserve useful historical evidence
and identify consequences before any deletion is authorized.

## Scope and smallest execution plan

1. Reinspect the maintained documents identified in the Genesis archive and distinguish durable
   intent, current behavior, historical decisions, and operational state.
2. Prepare the scoped documentation reconciliation without inventing a replacement architecture
   or roadmap.
3. Inventory the legacy v0.1 application and related material for an explicit retirement plan:
   proposed dispositions, dependencies, preservation needs, affected commands, and validation.
4. Surface ADR 0001's future status for a separate explicit architectural decision; preserve its
   historical evidence and do not silently supersede it.
5. Present the reconciliation and retirement plan for review before any retirement execution.

## Acceptance criteria and boundaries

- Maintained documentation consistently recognizes the accepted Genesis and distinguishes
  historical learning-scaffold direction from future Atlas intent.
- The retirement plan identifies exact proposed targets, preservation needs, consequences, and
  validation steps. It is a proposal, not authorization to remove or disable anything.
- No application or infrastructure deletion or runtime change occurs under this planning task.
- Genesis and accepted ADRs remain unchanged; any proposed ADR status change is surfaced separately.
- No Project → Atlas implementation, replacement architecture or roadmap, dependency change,
  `local-agent-bridge`, or sibling-repository work is included.
- Validate documentation links and `git diff --check`; report scope, findings, risks, and the
  proposed retirement plan. Commit and push require explicit authorization.
