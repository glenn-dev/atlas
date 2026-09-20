# Atlas Working Context

## Last updated

2026-09-20

## Purpose and authority

[Genesis](../genesis.md) defines Atlas's durable purpose: extend Glenn's ability to understand,
remember, connect, decide and act across relevant life context. Human authority is ultimate;
delegation must be authorized, inspectable, bounded and revocable, without necessarily requiring
interactive approval for every action. Apply [AGENTS.md](../AGENTS.md)'s authority-by-question model.

## Repository and checkpoint state

- Branch: `master`; cached default branch: `master`.
- Research-preservation checkpoint: `2236086bb5075ad16148c4f51981897c187bd0f9`
  (`docs: preserve capability-gap research`). Before these closure edits, HEAD and cached
  `origin/master` matched, ahead/behind 0/0, with a clean working tree and index. No fetch or
  live remote query was performed; live remote state and unrecorded approvals are not inferred.
- The [research-preservation archive](tasks/archive/2026-09-20-preserve-existing-capabilities-research.md)
  owns preparation history, checkpoint evidence and this closure's validation/review state.
- The [foundational-practices archive](tasks/archive/2026-09-18-formalize-foundational-transversal-practices.md)
  owns the earlier `3ad4ae05a21a7acc7d7d769c0d2ddc098beee6d3` checkpoint's history and closure.
  Prior ADR 0004 and retirement execution evidence remains in their existing archives.
- [Current task state](tasks/current.md): no active task and no queued experiment.
- The repository remains deliberately runtime-less; no replacement architecture or implementation
  has been selected.

## Research preserved; subsequent decisions accepted

The [transversal-knowledge research checkpoint](../docs/research/2026-09-16-transversal-knowledge-and-practices.md)
is complete and its preservation was committed and pushed at
`dd4e815a75700cb94aad1425dac716124c51b1dd`. The report remains unchanged as a historical,
non-normative record, including its then-unresolved questions.

Glenn subsequently accepted the conceptual decisions recorded in
[ADR 0004](../docs/adr/0004-transversal-practices-and-learning.md): relevant accepted practices are
fundamental working guidance, with explicit and proportional justification for material deviations;
projects retain domain authority; critical evaluation separates learning capture from normative
promotion, initially accepted by Glenn. Exceptions can teach Atlas about its own practices. English
is the technical-communication default with contextual exceptions; capability proportional to the
work and validation regardless of capability are accepted execution principles.

Presumed applicability is conditional on relevance. Genuinely inapplicable guidance needs no
exception. Alignment, justified deviation, unjustified or unexplained deviation, non-applicability
and insufficient evidence remain distinguishable without a mandatory compliance taxonomy.

The [practices index](../docs/practices/README.md) now locates transversal guidance and its canonical
definitions. [ADR 0005](../docs/adr/0005-foundational-transversal-practices.md) records the subsequently
accepted foundational concepts and placement; Glenn approved their exact reconciled wording on 2026-09-19.
The research itself remains non-normative, including its detailed Apply / Review / Learn procedures.
No runtime, distribution, synchronization, registry, CLI, Skill, scheduler, evaluator, learning agent
or orchestration mechanism is selected or authorized.

ADR 0004 is accepted and present on remote `master`. Its
[completed execution record](tasks/archive/2026-09-16-formalize-transversal-practice-decisions.md)
preserves preparation, validation, semantic review and checkpoint evidence.

## Existing-capabilities research and later observation

The [September 20 research](../docs/research/2026-09-20-existing-capabilities-and-atlas-owned-gaps.md)
preserves its original checkpoint unchanged, with a separately dated
[post-checkpoint addendum](../docs/research/2026-09-20-existing-capabilities-and-atlas-owned-gaps.md#post-checkpoint-addendum-2026-09-20)
owning Glenn's reported direct Work → repository observation and the assessment's narrower
corroboration through local reads.

The current recommendation is to prefer direct Work → repository for suitable real work within
demonstrated capability and task authority, reconsidering another layer when a concrete limitation
warrants it. The evidence covers read-only inspection and evidence return; it does not validate
editing, testing, commit/push or general engineering execution. Work is not mandatory and does not
replace Codex. The original Work → Codex experiment remains untested and is not queued.
Preservation selects no architecture or reusable operational policy; the addendum owns the detailed
provenance, inference and limits.

## Current delegated execution preference

GPT-5.6 Sol or higher is the current operational preference for substantive delegated work.
Lower-capability models require a concrete justification that the work is mechanical, bounded and
low risk. Reassess if ambiguity or consequence increases, and validate results regardless of model
capability. This preference is replaceable operational configuration, not Atlas identity,
architecture or a durable provider dependency. ADR 0004 holds the durable capability principle;
this setting neither selects a universal reasoning effort nor defines a cross-provider ranking.

## Architectural understanding

[ADR 0002](../docs/adr/0002-sovereign-knowledge-and-project-boundaries.md) remains Accepted and
unchanged. D1–D5 preserve independence, sovereign and portable knowledge, separation of providers,
models, agents, interfaces and actors, project authority with provenance, and meaningful Project →
Atlas change. Git is part of the portable foundation; hosting and external processors are replaceable.

[ADR 0003](../docs/adr/0003-retire-initial-learning-application.md) records Glenn's accepted retirement
decision under Genesis and ADR 0002. It supersedes [ADR 0001](../docs/adr/0001-initial-stack.md), whose
original body and date remain intact. It selects no replacement stack, datastore, interface or roadmap.
The [architecture overview](../docs/architecture/overview.md) summarizes current constraints and
preserves conditional automated-testing guidance for future durable-knowledge transformations.

## Useful retained work

Atlas incubates the [Project Genesis Convention](../docs/conventions/project-genesis.md), its
[optional template](../templates/project/genesis.md), and the
[manual builder](prompts/project-genesis.md). They have distinct roles and require no running Atlas
application. No Skill, registry or cross-project orchestration has been implemented.

The accepted Genesis originated in Glenn's Foundation Review, not an inference from the old code.
The [Genesis task archive](tasks/archive/2026-09-14-establish-atlas-genesis.md) preserves its provenance.
Glenn accepted 2026-07-08 as the historical “First written” reference, not an exact conception timestamp.
Genesis was established at `726f4ad` and its authority model hardened at `4ae5c3b`; the historical
retirement baseline `58369c2` includes the subsequent Genesis operational closure.

## Retirement and historical limitations

The July application was an exploratory learning scaffold associated with Glenn's transition into
Enerlink. Retired files are recoverable from Git history at
`58369c2cf4995081e961993b2232b84a3222692f`; no legacy source tree is retained.

The [archived frontend verification](tasks/archive/2026-07-25-verify-frontend-graphql.md) remains
historically Blocked. Its incomplete browser check and recorded frontend type errors are retired
follow-up obligations, not passed checks. The old application configured a database but implemented
no persistence. No application tests, builds or services were started for retirement.

Local configuration and generated residue were in the approved cleanup scope. Docker resource or
external data deletion was not authorized; no such resources were removed.

## Deliberately open

Future architecture, storage, interfaces, agents, automation and implementation choices remain open
until demonstrated needs justify them. Project → Atlas ingestion, event schemas, journals, discovery,
registries, adapters, Skills and orchestration remain unimplemented and are not a queue of authorized
work. The manual Genesis workflow requires none of them. The inspected `local-agent-bridge`
directory preserves an unimplemented research concept, not an existing capability or independently
established project authority. The September 20 recommendation is to stop treating its proposed
standalone architecture as an assumed roadmap. The sibling directory remains untouched; any future
adapter's need, placement and lifecycle require evidence and a separate decision.

## Re-entry

No active task or experiment is queued. The research-preservation checkpoint is committed;
Glenn approved the operational closure and requested its commit and push on 2026-09-20,
as recorded in its archive.
Use the practices index for accepted guidance and [the handoff](../docs/handoffs/current-context.md)
for concise re-entry. Return to project work under its own scope and authority; historical proposals
are not a work queue.
