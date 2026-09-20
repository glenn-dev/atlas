# Atlas Working Context

## Last updated

2026-09-20

## Purpose and authority

[Genesis](../genesis.md) defines Atlas's durable purpose: extend Glenn's ability to understand,
remember, connect, decide and act across relevant life context. Human authority is ultimate;
delegation must be authorized, inspectable, bounded and revocable, without necessarily requiring
interactive approval for every action. Apply [AGENTS.md](../AGENTS.md)'s authority-by-question model.

## Repository and checkpoint state

- Branch: `master`; default branch: `master`.
- Latest completed checkpoint: `3ad4ae05a21a7acc7d7d769c0d2ddc098beee6d3`
  (`docs: establish foundational transversal practices`). Before preservation edits on September 20,
  HEAD, cached `origin/master` and a fresh read-only remote query matched, ahead/behind 0/0, with a
  clean working tree and index. No fetch was performed. The
  [completed practices record](tasks/archive/2026-09-18-formalize-foundational-transversal-practices.md)
  preserves closure evidence separately from its historical preparation and validation state.
- Completed ADR 0004 checkpoint: `13cc85337d3e0f9e71de2e8ede3150d283002602`
  (`docs: establish transversal practices and learning`). Glenn passed semantic review before the
  commit, and the checkpoint was pushed to `origin/master`.
- At operational closure, HEAD and refreshed `origin/master` matched that checkpoint, ahead/behind
  0/0, with a clean working tree and index before the closure edits.
- Historical retirement planning and execution baseline: `58369c2cf4995081e961993b2232b84a3222692f`.
- Completed retirement checkpoint: `38e2057be8973b7075a92901c40cba16c8b1cd62`
  (`refactor: retire initial Atlas learning application`), explicitly reviewed by Glenn, committed
  and pushed to `origin/master`.
- Before operational closure edits, `git fetch origin` verified HEAD and refreshed `origin/master`
  at the retirement checkpoint, with 0/0 ahead/behind and a clean working tree.
- Glenn approved the [disposition plan](tasks/archive/2026-09-14-post-genesis-retirement-planning.md)
  and two refinements: ADR 0003 authorizes retirement in this checkpoint, and retired historical
  references use plain-text repository paths plus the baseline rather than provider URLs.
- The [completed execution record](tasks/archive/2026-09-14-retire-initial-atlas-learning-application.md)
  preserves preparation, validation, final approval and commit/push evidence.
- [Current task state](tasks/current.md) owns the September 20 documentation-preservation scope,
  validation and review state. No experiment is authorized by that documentation task.
- The application and approved support material are removed. The repository is deliberately
  runtime-less; no replacement architecture or implementation has been selected.

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

## Existing-capabilities research; experiment remains unverified

The [September 20 research](../docs/research/2026-09-20-existing-capabilities-and-atlas-owned-gaps.md)
preserves findings, external sources, limitations and a proposed discriminating experiment.
Atlas-owned durable meaning, provenance and human/domain authority remain distinct from replaceable
execution capabilities. The demonstrated manual message-bus friction does not yet establish a need
for custom software. The current evidence-backed recommendation is to adopt/configure existing
capabilities first, not rebuild execution or general infrastructure; this is not a permanent ban.

Local ChatGPT Work → existing Codex noninteractive execution → Work is an unverified experiment
hypothesis, not an accepted or working architecture. The proposed first trial is read-only against
a disposable/synthetic repository, including result return, session continuation and boundary
handling. It requires separate authorization; neither the trial nor sandbox creation has occurred.
Failure must be diagnosed before considering a thin adapter, whose ownership remains undecided.
The research owns the detailed success criteria and failure interpretation.

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

The September 16 research preservation, retirement, ADR 0004 and foundational-practices checkpoints
are committed and pushed. September 20 preservation is a separate documentation checkpoint awaiting
semantic review; consult [current task state](tasks/current.md) for its validation and authorization
status. Use the practices index for accepted guidance and [the handoff](../docs/handoffs/current-context.md)
for re-entry. Preserve historical research meaning and confidentiality and external authority
boundaries under Genesis and AGENTS.
