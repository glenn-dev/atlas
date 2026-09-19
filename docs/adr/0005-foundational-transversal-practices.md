# ADR 0005: Foundational transversal practices

- Status: Accepted; exact reconciled wording passed Glenn's semantic review
- Date: 2026-09-18
- Final semantic approval: 2026-09-19
- Authority: Glenn's review of the research and conceptual analysis, followed by explicit approval
  of the ten-file formalization scope, reconciliation and exact wording

## Context and provenance

Glenn asked Atlas to critically evaluate evidence before assumption, research before invention,
verification through testing and documentation as durable knowledge. Read-only analysis examined
Atlas's authority, demonstrated checkpoints, external precedents, contrary evidence and placement
alternatives. Glenn accepted the parent principle, three-practice decomposition and canonical
placement, subject to review of the eventual wording, then authorized this documentation draft.
After reviewing the index and all three practices, Glenn authorized reconciliation of the collected
semantic feedback within the same scope. On 2026-09-19, Glenn gave final semantic approval to the
exact reconciled wording. Both conceptual acceptance and wording approval are complete. The practice
definitions own the resulting guidance, not this record. Staging, commit and push are not authorized
by semantic approval.

The [September 16 research](../research/2026-09-16-transversal-knowledge-and-practices.md) remains
unchanged, historical and non-normative. This decision follows subsequent evaluation and human
acceptance; it does not retroactively adopt that report or its detailed proposed procedures.
[ADR 0004](0004-transversal-practices-and-learning.md) continues to govern authority, applicability,
deviations, promotion and feedback. [Genesis](../../genesis.md) remains unchanged.

## Decision

Formalize the parent principle: **Build and maintain justified confidence through proportional
evidence.** Its maintained formulation belongs in the [practices index](../practices/README.md).

Express it through three canonical practice definitions:

1. [Investigate and reason from evidence](../practices/investigate-and-reason-from-evidence.md).
2. [Verify and validate outcomes](../practices/verify-and-validate-outcomes.md).
3. [Preserve durable understanding](../practices/preserve-durable-understanding.md).

Use `docs/practices/` for maintained transversal practice definitions and its index as the single
maintained discovery entry point. The index also links accepted guidance whose canonical wording
remains elsewhere, including ADR 0004's technical communication and delegated execution capability
decisions. Discovery does not require migration or duplication of those definitions.

## Rationale and alternatives

The original four themes overlap: prior-art investigation is part of reasoning from evidence,
while testing is one method of checking outcomes. One broad practice would obscure useful
operational distinctions; four independent practices would duplicate evidence rules and narrow
outcome checking to testing. Three practices connect investigation, outcome checking and durable
preservation without making assumptions illegitimate or requiring certainty before action.

Atlas's [Genesis checkpoint](../../.ai/tasks/archive/2026-09-14-establish-atlas-genesis.md),
[partial frontend verification](../../.ai/tasks/archive/2026-07-25-verify-frontend-graphql.md) and
[retirement](../../.ai/tasks/archive/2026-09-14-retire-initial-atlas-learning-application.md)
support these distinctions. The practice documents preserve relevant external precedents and their
limits. Local repetition and Glenn's preference support consideration, not proof of effectiveness
across independent projects. The stale review wording found in ADR 0004 also demonstrates that
documentation can drift; this checkpoint corrects only that wording using its completed record.

Genesis is too durable and broad for detailed practice guidance. ADRs preserve decision history
but alone would require readers to reconstruct current expectations. Existing conventions are a
credible alternative location; retaining them for particular reusable forms or methods makes the
foundational practices easier to distinguish without moving existing material. AGENTS is local to
repository agents, research preserves proposals, and operational context tracks execution. None
should become a duplicate canonical practice definition.

## Consequences and limits

Guidance becomes discoverable without inferring policy from historical research. Proportional
investigation, evidence suited to actual claims and selective preservation support justified
confidence while keeping uncertainty visible. Project-domain authority and ADR 0004's presumed
applicability and justified-deviation semantics remain unchanged.

The documents impose maintenance and judgment costs. Their value depends on useful application,
not checklist completion; future evidence and justified deviations may warrant revision under
ADR 0004. This checkpoint selects no mandatory document schema, compliance score or test threshold.

No external-project distribution, synchronization, registry, CLI, Skill, runtime, scheduler,
evaluator, agent or orchestration mechanism is selected or implemented. This decision introduces no
automatic discovery, follow-on implementation or authority to alter independent project state.
