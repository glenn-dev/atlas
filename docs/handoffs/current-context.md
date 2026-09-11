# Current Project Context

Updated: 2026-09-10

## State

Atlas is at the v0.1 foundation stage. The repository contains a FastAPI/Strawberry API, a
React/Vite web client, Docker Compose configuration, a PostgreSQL service definition, initial
domain documentation, and one accepted ADR.

Atlas now incubates a documented Project Genesis Convention and a reusable project template.
The convention defines a root-level `genesis.md` as slow-moving, durable project intent and
integrates Genesis alignment into agent workflow. Atlas itself does not yet have a root-level
Genesis.

Project Genesis Convention v0.1 is approved and preserved at
[`../conventions/project-genesis.md`](../conventions/project-genesis.md). Its reusable scaffold is
[`../../templates/project/genesis.md`](../../templates/project/genesis.md), and its manual builder
is [`.ai/prompts/project-genesis.md`](../../.ai/prompts/project-genesis.md). The convention defines
the practice, the template scaffolds the document, and the builder guides evidence-based,
human-reviewed use in another repository.

## Current focus

The convention, template, agent alignment, and manual builder are complete. A subsequent
architecture checkpoint froze D1–D5 in
[`../adr/0002-sovereign-knowledge-and-project-boundaries.md`](../adr/0002-sovereign-knowledge-and-project-boundaries.md).
They establish independence; sovereign, portable knowledge; separation of providers, models,
agents, interfaces, and actors; project authority with provenance; and meaningful-change-based
Project → Atlas flow.

Implementation is deliberately deferred. The next conceptual question is the concrete Project →
Atlas boundary: what a durable project change or checkpoint should be and what role, if any,
`local-agent-bridge` or portable project change journals should have. Atlas's own Genesis remains
a separate deferred exercise and must not be inferred from current product documentation.

The earlier frontend-to-GraphQL task is archived with a remaining manual browser-verification
follow-up. The local learning-log workflow remains the next application milestone in the
roadmap.

## Architectural understanding

- D1–D5 are frozen architectural constraints, not an implementation specification.
- Atlas must retain its identity, durable knowledge, and fundamental continuity independently of
  any particular provider, model, agent, or interface.
- Canonical durable knowledge stays under Glenn's control in open, portable, reconstructable
  forms. Git is foundational; GitHub and external processing or indexing services are replaceable.
- Providers, models, agents, interfaces, and human actors are distinct; future work should center
  intent, context, constraints, and required capabilities without prematurely defining a
  universal protocol or exhaustive taxonomy.
- Each project owns its domain and project-local state. Atlas owns transversal ecosystem
  knowledge and relationships, preserves provenance, and distinguishes canonical project
  information from derived, observed, or inferred information.
- Project → Atlas integration should eventually elevate meaningful durable changes or checkpoints,
  not raw activity. If a change does not alter what Atlas should know, it need not be elevated.
- Atlas should extract reusable needs from real project work instead of building a speculative
  platform in advance.
- `local-agent-bridge` is conceptually infrastructure for controlled local-agent capabilities,
  not the owner of project intent or the Project Genesis Convention.
- The manual Genesis workflow does not require `local-agent-bridge`.

## Deliberately deferred

- Atlas's own root-level `genesis.md`.
- A Project Genesis Skill.
- Automated project discovery or registry and automated cross-project Genesis access.
- Project → Atlas ingestion or a concrete `ProjectEvent` schema.
- Project change journals, including `work_logs.md`.
- Adapters, agent or capability registries, automation, orchestration, and a universal agent
  protocol or exhaustive capability taxonomy.
- Additional `local-agent-bridge` capabilities or repository changes.
- Larger Atlas architecture work not required by current projects.

## Important constraints

- Documentation is the durable project context; update it when decisions or operating procedures change.
- A project's Genesis is durable intent and should not be rewritten during ordinary feature work.
- Human review is authoritative for final Genesis content.
- Do not place employer secrets, customer information, proprietary code, credentials, or internal URLs in Atlas.
- Do not elevate Atlas infrastructure work above Gouda, Republic Aces, inmundus, or other
  value-producing projects merely to build ahead of demand.

## Useful entry points

- Product direction: [`../product/vision.md`](../product/vision.md)
- Project Genesis Convention: [`../conventions/project-genesis.md`](../conventions/project-genesis.md)
- Manual Project Genesis builder: [`../../.ai/prompts/project-genesis.md`](../../.ai/prompts/project-genesis.md)
- Current task: [`../../.ai/tasks/current.md`](../../.ai/tasks/current.md)
- Architecture: [`../architecture/overview.md`](../architecture/overview.md)
- Sovereign knowledge and project boundaries:
  [`../adr/0002-sovereign-knowledge-and-project-boundaries.md`](../adr/0002-sovereign-knowledge-and-project-boundaries.md)
- Current sprint: [`../sprints/current.md`](../sprints/current.md)
- Local setup: [`../development/setup.md`](../development/setup.md)
- Troubleshooting: [`../development/troubleshooting.md`](../development/troubleshooting.md)
