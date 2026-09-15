# Conceptual Vocabulary and Provenance

These terms help explain [Genesis](../../genesis.md) and
[ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md). They define no storage schema,
required entity catalogue, datastore or implemented retrieval capability.

## Vocabulary

- **Person:** a human referred to in relevant context; representing someone does not confer
  authority over them or their information.
- **Project:** an independently authoritative initiative with its own purpose, decisions and
  local state. Atlas may preserve relevant transversal context and relationships without
  duplicating all project content.
- **Decision:** a recorded choice and its rationale.
- **Source:** the origin or evidence supporting a piece of knowledge.
- **Provenance:** the origin, durable evidence and derivation needed to explain and reconstruct
  a piece of knowledge.
- **Memory:** relevant context retained because it is useful over time.
- **Knowledge:** information understood together with its supporting sources and context.

Learning remains relevant under Genesis without requiring a dedicated learning-entry type.
References to human and digital entities use Genesis's broad meaning, not a fixed ontology.
Delegated actions follow Genesis's authorized, inspectable, bounded and revocable limits; this
vocabulary defines no automation model.

## Knowledge authority and provenance

ADR 0002 distinguishes:

- **Canonical project information:** authoritative information backed by durable evidence in the
  owning project.
- **Derived information:** a transformation or synthesis of one or more identified sources.
- **Observed information:** a recorded observation that has not become canonical project state.
- **Inferred information:** a conclusion whose supporting evidence and non-canonical status remain
  explicit.

Conversation history, model memory and agent output may help produce knowledge, but are not
canonical sources by themselves. An elevated fact must remain traceable to durable project evidence
and survive the agent or service that produced it. These distinctions guide interpretation without
prescribing how future software represents them.
