# Atlas Working Context

## Last updated

2026-09-16

## Purpose and authority

[Genesis](../genesis.md) defines Atlas's durable purpose: extend Glenn's ability to understand,
remember, connect, decide and act across relevant life context. Human authority is ultimate;
delegation must be authorized, inspectable, bounded and revocable, without necessarily requiring
interactive approval for every action. Apply [AGENTS.md](../AGENTS.md)'s authority-by-question model.

## Repository and checkpoint state

- Branch: `master`; default branch: `master`.
- Research and documentation-preparation baseline: after `git fetch origin`, HEAD and refreshed
  `origin/master` were `ba51bd04f6dd3b057f68066ff51db40bd7f3434f`
  (`docs: close Atlas v0.1 retirement`), ahead/behind 0/0, with a clean working tree and index.
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
- [Current task state](tasks/current.md): no active task and no authorized follow-on implementation.
- The application and approved support material are removed. The repository is deliberately
  runtime-less; no replacement architecture or implementation has been selected.

## Completed research, pending conceptual decisions

The [transversal-knowledge research checkpoint](../docs/research/2026-09-16-transversal-knowledge-and-practices.md)
is complete and its findings are preserved for review. Glenn approved only the five-file
documentation-preservation scope. The prepared changes are uncommitted and await review;
staging, committing and pushing are not authorized.

The model, candidate engineering practices, Apply / Review / Learn semantics and execution-policy
analysis remain non-normative proposals. No transversal practice or reusable execution policy has
been adopted through this checkpoint. No project automatically adopts guidance; project-local
authority is unchanged. GPT-5.6 Sol or higher is a current operational preference, not durable
identity or architecture; the English default is still a proposed future communication convention.

The next meaningful action is human review of the three questions in the report: initial advisory
authority and selective adoption; promotion authority and evidence; and the placement and scope of
working preferences. Those decisions remain unresolved. No distribution, synchronization, registry,
CLI, Skill, runtime, agent or orchestration mechanism is selected or authorized. Implementation
and distribution choices remain open; there is no follow-on implementation task.

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
registries, adapters, Skills, orchestration and additional `local-agent-bridge` capabilities remain
unimplemented and are not a queue of authorized work. The manual Genesis workflow requires none of them.

## Re-entry

The research checkpoint is complete and preserved for human conceptual review; its documentation
changes await review and remain uncommitted. The earlier retirement checkpoint is complete and
pushed. [Current task state](tasks/current.md) and [the handoff](../docs/handoffs/current-context.md)
record no active task and no authorized follow-on implementation. Read the report's unresolved
questions without treating its recommendations as instructions or accepted policy. Preserve
confidentiality and external authority boundaries under Genesis and AGENTS.
