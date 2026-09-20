# Atlas Documentation Index

Root [Genesis](../genesis.md) defines durable intent. Accepted ADRs preserve architectural
decisions; practices hold maintained transversal guidance; product and architecture documents
explain current understanding. Context, task records and handoffs describe operational state.
Interpret sources by the question being answered, as defined in [AGENTS.md](../AGENTS.md).

## Transversal practices

The [practices index](practices/README.md) is the maintained entry point for accepted transversal
guidance, including definitions that remain canonical elsewhere. It identifies applicability
authority and the foundational practices whose exact reconciled wording Glenn accepted after
semantic review on 2026-09-19.

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
  Accepted; records relevant practice authority, justified deviations, learning and promotion,
  technical communication and delegated execution capability without selecting implementation
  mechanisms.
- [ADR 0005 — Foundational transversal practices](adr/0005-foundational-transversal-practices.md):
  Accepted; exact reconciled wording passed semantic review. Records the parent
  principle, three-practice decomposition, canonical placement, rationale and limits.

## Reusable convention

- [Project Genesis Convention](conventions/project-genesis.md): practice and rules.
- [Project Genesis template](../templates/project/genesis.md): optional document scaffold.
- [Manual Project Genesis builder](../.ai/prompts/project-genesis.md): evidence-based,
  human-reviewed workflow.

## Historical research

- [Existing capabilities and Atlas-owned gaps](research/2026-09-20-existing-capabilities-and-atlas-owned-gaps.md):
  September 20 research preserved for semantic review. Distinguishes Atlas-owned meaning and
  authority from replaceable capabilities and demonstrated manual transport friction. Configuration
  first is a recommendation; the Work → Codex → Work experiment remains untested and requires
  separate authorization. Preservation accepts no architecture or implementation mechanism.
- [Reusable transversal knowledge and practices](research/2026-09-16-transversal-knowledge-and-practices.md):
  completed and committed/pushed at `dd4e815a75700cb94aad1425dac716124c51b1dd`. The report remains
  unchanged and non-normative, including its then-unresolved questions. Subsequent human decisions
  are recorded separately in ADRs 0004 and 0005. Preserving the report did not promote its proposals;
  use the practices index for current guidance and formulation status.

## Where information belongs

- `product/`: practical product interpretation under Genesis.
- `architecture/`: maintained architectural understanding and conceptual vocabulary.
- `adr/`: durable decision history, including superseded decisions.
- `practices/`: maintained transversal practice definitions and unified discovery of accepted guidance.
- `conventions/`: reusable agreements about particular forms or methods, such as Project Genesis.
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
