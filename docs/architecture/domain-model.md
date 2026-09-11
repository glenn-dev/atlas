# Initial Domain Model

## Person

A human or relevant living entity represented in Atlas. Initial examples include Glenn, Mei, family members, and Arepo.

## Project

A bounded initiative with a purpose, history, decisions, and associated knowledge. Examples
include Atlas, Crosstrek, Gouda, and professional learning. A project remains authoritative over
its own domain and project-local state; its representation in Atlas exists to support transversal
knowledge and relationships rather than duplicate all project content.

## Technology

A language, platform, protocol, framework, or tool being used or studied.

## LearningEntry

A dated piece of learning written in Glenn's own words. It may reference technologies, projects, questions, and sources.

## Decision

A choice with context, alternatives, rationale, date, status, and consequences.

## Relationship strategy

The first version uses relational data in PostgreSQL. A dedicated graph database will only be considered if real queries become difficult or inefficient to represent relationally.

## Knowledge authority and provenance

Atlas must preserve the origin and authority of knowledge that crosses a project boundary. The
architecture distinguishes:

- **Canonical project information:** authoritative information backed by durable evidence in the
  owning project.
- **Derived information:** a transformation or synthesis of one or more identified sources.
- **Observed information:** a recorded observation that has not become canonical project state.
- **Inferred information:** a conclusion whose supporting evidence and non-canonical status remain
  explicit.

These are conceptual distinctions, not a storage schema. Conversation history, model memory, and
agent output can help produce knowledge, but are not canonical sources by themselves. An elevated
fact must remain traceable to durable project evidence and survive the agent or service that
produced it.

## Glossary

- **Memory:** Structured information retained because it is likely to be useful later.
- **Knowledge:** Information Atlas can retrieve with its source and context.
- **Learning entry:** Glenn's interpretation or understanding of a topic at a point in time.
- **Source:** The origin supporting a piece of knowledge.
- **Provenance:** The durable evidence, origin, and derivation needed to explain and reconstruct a
  piece of knowledge.
- **Decision:** A recorded choice and its rationale.
- **Project:** An independently authoritative initiative represented in Atlas for relevant
  transversal context and relationships.
- **Area:** A durable dimension of life such as career, health, finances, or aviation.
- **Entity:** A uniquely identifiable concept represented in the system.
- **Automation:** A repeatable action Atlas can execute, preferably with review and an audit trail.
