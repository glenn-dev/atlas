# Atlas Documentation Index

Root [Genesis](../genesis.md) defines durable intent. Accepted ADRs preserve architectural
decisions; maintained product and architecture documents explain current understanding. Context,
task records and handoffs describe operational state. Interpret sources by the question being
answered, as defined in [AGENTS.md](../AGENTS.md).

## Maintained understanding

- [Product vision](product/vision.md): practical value and evaluation under Genesis.
- [Architecture overview](architecture/overview.md): current state and accepted constraints.
- [Conceptual vocabulary and provenance](architecture/domain-model.md): explanatory terms without
  a schema, entity catalogue or datastore commitment.
- [Current handoff](handoffs/current-context.md): concise re-entry state.
- [Current task](../.ai/tasks/current.md) and [working context](../.ai/context.md): execution and review.

## Architectural decisions

- [ADR 0001 — Initial application stack](adr/0001-initial-stack.md): Superseded; historical rationale.
- [ADR 0002 — Sovereign knowledge and project boundaries](adr/0002-sovereign-knowledge-and-project-boundaries.md):
  Accepted; D1–D5 constraints.
- [ADR 0003 — Retirement of the initial learning application](adr/0003-retire-initial-learning-application.md):
  Accepted; authorizes retirement without choosing a replacement implementation.

## Reusable convention

- [Project Genesis Convention](conventions/project-genesis.md): practice and rules.
- [Project Genesis template](../templates/project/genesis.md): optional document scaffold.
- [Manual Project Genesis builder](../.ai/prompts/project-genesis.md): evidence-based,
  human-reviewed workflow.

## Where information belongs

- `product/`: practical product interpretation under Genesis.
- `architecture/`: maintained architectural understanding and conceptual vocabulary.
- `adr/`: durable decision history, including superseded decisions.
- `conventions/`: Atlas-incubated practices intended for reuse.
- `handoffs/`: current re-entry context.
- [`.ai/`](../.ai/README.md): collaboration workflows, working context and task records.

The application and its support material have been retired. The
[approved planning record](../.ai/tasks/archive/2026-09-14-post-genesis-retirement-planning.md)
preserves the disposition rationale. [Existing task archives](../.ai/tasks/archive/) preserve
historical findings and approvals; their old implementation references describe past work.
Retired files remain recoverable from Git history at
`58369c2cf4995081e961993b2232b84a3222692f`.

Update maintained documents when their subject changes. Preserve historical decisions and task
outcomes rather than rewriting them to match the present.
