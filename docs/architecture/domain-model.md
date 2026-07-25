# Initial Domain Model

## Person

A human or relevant living entity represented in Atlas. Initial examples include Glenn, Mei, family members, and Arepo.

## Project

A bounded initiative with a purpose, history, decisions, and associated knowledge. Examples include Atlas, Crosstrek, Gouda, and professional learning.

## Technology

A language, platform, protocol, framework, or tool being used or studied.

## LearningEntry

A dated piece of learning written in Glenn's own words. It may reference technologies, projects, questions, and sources.

## Decision

A choice with context, alternatives, rationale, date, status, and consequences.

## Relationship strategy

The first version uses relational data in PostgreSQL. A dedicated graph database will only be considered if real queries become difficult or inefficient to represent relationally.

## Glossary

- **Memory:** Structured information retained because it is likely to be useful later.
- **Knowledge:** Information Atlas can retrieve with its source and context.
- **Learning entry:** Glenn's interpretation or understanding of a topic at a point in time.
- **Source:** The origin supporting a piece of knowledge.
- **Decision:** A recorded choice and its rationale.
- **Project:** A collection of goals, knowledge, decisions, and activities.
- **Area:** A durable dimension of life such as career, health, finances, or aviation.
- **Entity:** A uniquely identifiable concept represented in the system.
- **Automation:** A repeatable action Atlas can execute, preferably with review and an audit trail.
