# Current Project Context

Updated: 2026-09-14

## State

The formal Atlas Genesis checkpoint has a root [Genesis draft](../../genesis.md) awaiting Glenn's
explicit approval of the diff. Its durable intent was approved conceptually in a human-led
Foundation Review. No commit or push is authorized.

The repository still contains the legacy FastAPI/Strawberry, React/Vite, PostgreSQL, and Docker
Compose learning scaffold and two accepted ADRs. Glenn's Foundation Review establishes that
Atlas originated earlier in conversations about AI memory, capabilities, tools, and durable
personal context. The application is historical implementation, not Atlas's identity or required
future foundation. Retirement is a separate later task.

Atlas now incubates a documented Project Genesis Convention and a reusable project template.
The convention defines a root-level `genesis.md` as slow-moving, durable project intent and
integrates Genesis alignment into agent workflow.

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

Review the exact Genesis diff before any commit. It preserves ultimate human authority while
allowing authorized, inspectable, bounded, and revocable delegation without interactive approval
for every action. Glenn accepted 2026-07-08 as the historical reference for “First written,” now
recorded in Genesis. It is not an exact timestamp of conception. The date provenance item is resolved.

The [current task](../../.ai/tasks/current.md) records reconciliation findings and the smallest
set of current documents needing post-Genesis cleanup. The Learning Log milestone, Enerlink-first
direction, staged roadmap, privileged Technology/LearningEntry concepts, and PostgreSQL foundation
assumption are historical direction. They are not authorization for future work. ADR 0001 remains
unchanged historical evidence; any supersession requires a separate explicit architectural task.
ADR 0002 remains accepted and consistent with the draft.

The concrete Project → Atlas boundary and implementation remain deferred. The archived
frontend-to-GraphQL task's manual browser check remains a historical open item to disposition
during retirement, not a Genesis acceptance criterion. Runtime was not reverified here.

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

- Current product, architecture, and sprint documentation cleanup after Genesis approval.
- Legacy application retirement and explicit review of ADR 0001's future status.
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

- Durable intent awaiting diff approval: [Atlas Genesis](../../genesis.md)
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
