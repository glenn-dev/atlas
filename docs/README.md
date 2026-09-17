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
- [ADR 0004 — Transversal practices and learning](adr/0004-transversal-practices-and-learning.md):
  accepted conceptual decisions; documentation prepared and awaiting semantic review. Records
  relevant practice authority, justified deviations, learning and promotion, technical communication
  and delegated execution capability without selecting implementation mechanisms.

## Reusable convention

- [Project Genesis Convention](conventions/project-genesis.md): practice and rules.
- [Project Genesis template](../templates/project/genesis.md): optional document scaffold.
- [Manual Project Genesis builder](../.ai/prompts/project-genesis.md): evidence-based,
  human-reviewed workflow.

## Historical research

- [Reusable transversal knowledge and practices](research/2026-09-16-transversal-knowledge-and-practices.md):
  completed and committed/pushed at `dd4e815a75700cb94aad1425dac716124c51b1dd`. The report remains
  unchanged and non-normative, including its then-unresolved questions. Subsequent human decisions
  are recorded separately in ADR 0004; the report's other recommendations and candidate engineering
  practices have not been promoted by this checkpoint.

## Where information belongs

- `product/`: practical product interpretation under Genesis.
- `architecture/`: maintained architectural understanding and conceptual vocabulary.
- `adr/`: durable decision history, including superseded decisions.
- `conventions/`: Atlas-incubated practices intended for reuse.
- `research/`: evidence, alternatives and proposals with explicit status; preservation is not adoption.
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
