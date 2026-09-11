# ADR 0002: Sovereign knowledge and project boundaries

- Status: Accepted
- Date: 2026-09-10

## Context

Atlas is intended to outlive particular AI products and to connect knowledge from multiple
independent projects. Without explicit boundaries, implementation choices could make a provider
the sole custodian of durable knowledge, conflate models and agents with the services that host
them, or turn Atlas into a duplicate master copy of project-local state.

The architecture therefore needs a stable basis for future choices about storage, retrieval,
agents, interfaces, and Project → Atlas integration before any of those mechanisms are designed.

## Decision

The following decisions are frozen as architectural principles. They define constraints and
responsibilities, not a current implementation design.

### D1 — Independence

Atlas must preserve its identity, durable knowledge, and fundamental ability to continue
operating if any particular provider, model, agent, or interface disappears or is abandoned.
Equivalent capabilities do not need to survive unchanged, but they must be replaceable where
necessary.

### D2 — Sovereignty and portability

Atlas's canonical durable knowledge must remain under Glenn's control in open, portable, and
reconstructable forms. External services may process or index that knowledge, but must not become
its sole custodians.

Models, agents, embeddings, vector stores, cloud services, interfaces, and hosting providers are
replaceable capabilities around that core. Git is part of the portable foundation; GitHub is a
replaceable hosting service.

### D3 — Provider, model, agent, interface, and actor separation

Atlas must not conflate providers, models, agents, interfaces, or human actors. Work should
eventually be expressible in terms of intent, context, constraints, and required capabilities
rather than proprietary provider primitives. Provider-specific integrations belong behind
replaceable integration boundaries.

This decision does not authorize a universal agent protocol or an exhaustive capability
taxonomy. Those abstractions should emerge only from demonstrated use.

### D4 — Authority and provenance

Each project remains authoritative over its own domain and project-local state. Atlas is
authoritative over transversal ecosystem knowledge and relationships; it is not a duplicate
master copy of every project's content.

Knowledge incorporated into Atlas must preserve provenance and distinguish canonical project
information from derived, observed, or inferred information. Conversation history, model memory,
and agent output are not canonical sources by themselves. Durable information must survive the
agent that produced it.

### D5 — Meaningful Project → Atlas change

Atlas should consume meaningful project changes rather than raw activity. Projects should expose
significant changes through durable, portable events or checkpoints close to the project domain.
Candidate meanings include durable decisions, milestones, direction changes,
dependency/relationship changes, meaningful status transitions, and significant risks or
blockers.

Individual commits, test runs, prompts, agent actions, and exhaustive work logs are not elevated
merely because they occurred. The conceptual flow is:

```text
project durable change/checkpoint -> Atlas ingestion -> transversal knowledge update
```

Every elevated fact must retain provenance to durable project evidence. If a change does not
alter what Atlas should know, it does not need to be elevated to Atlas.

## Consequences

### Positive

- Atlas's durable identity and knowledge are not tied to the lifetime of one vendor or tool.
- Project ownership remains clear while Atlas can build cross-project understanding.
- Future integrations have explicit portability, replacement, authority, and provenance
  constraints.
- Project activity is filtered by domain meaning instead of becoming an indiscriminate event log.

### Costs and constraints

- External indexes and AI services cannot be treated as the only durable copy of knowledge.
- Future integrations must preserve enough durable evidence to reconstruct Atlas knowledge and
  explain where it came from.
- Some provider-specific capabilities may require replacement rather than transparent continuity.
- Determining which project changes are meaningful requires domain judgment and cannot be reduced
  to raw repository activity.

## Deliberately deferred

This ADR does not define or implement:

- Project → Atlas ingestion;
- a concrete `ProjectEvent` schema;
- project change journals or `work_logs.md`;
- adapters, agent registries, capability registries, Skills, automation, or orchestration;
- a universal agent protocol or exhaustive capability taxonomy;
- changes to `local-agent-bridge`; or
- Atlas's root-level `genesis.md`.

The next conceptual question is the concrete Project → Atlas boundary, including whether
`local-agent-bridge` or portable project change journals have a role.
