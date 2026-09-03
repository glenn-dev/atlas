# Current Project Context

Updated: 2026-09-03

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

The convention, template, agent alignment, and manual builder are complete. The next conceptual
step, when Atlas has sufficient priority, is a deliberate Project Genesis exercise for Atlas
itself. Do not infer or generate that document from existing product documentation alone.

The earlier frontend-to-GraphQL task is archived with a remaining manual browser-verification
follow-up. The local learning-log workflow remains the next application milestone in the
roadmap.

## Architectural understanding

- Atlas is the personal context and orchestration layer above independent domain projects; each
  project owns its domain logic.
- Atlas should extract reusable needs from real project work instead of building a speculative
  platform in advance.
- `local-agent-bridge` is conceptually infrastructure for controlled local-agent capabilities,
  not the owner of project intent or the Project Genesis Convention.
- The manual Genesis workflow does not require `local-agent-bridge`.

## Deliberately deferred

- Atlas's own root-level `genesis.md`.
- A Project Genesis Skill.
- Automated project discovery or registry and automated cross-project Genesis access.
- Additional `local-agent-bridge` capabilities.
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
- Current sprint: [`../sprints/current.md`](../sprints/current.md)
- Local setup: [`../development/setup.md`](../development/setup.md)
- Troubleshooting: [`../development/troubleshooting.md`](../development/troubleshooting.md)
