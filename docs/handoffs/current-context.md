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

## Current focus

The convention documentation and workflow integration are complete in the working tree. The next
recommended step is a deliberate discussion of whether Atlas should adopt its own Genesis; do
not infer or generate that document from existing product docs alone.

The earlier frontend-to-GraphQL task is archived with a remaining manual browser-verification
follow-up. The local learning-log workflow remains the next application milestone in the
roadmap.

## Important constraints

- Documentation is the durable project context; update it when decisions or operating procedures change.
- A project's Genesis is durable intent and should not be rewritten during ordinary feature work.
- Do not place employer secrets, customer information, proprietary code, credentials, or internal URLs in Atlas.
- Do not modify application code as part of the Project Genesis Convention task.

## Useful entry points

- Product direction: [`../product/vision.md`](../product/vision.md)
- Project Genesis Convention: [`../conventions/project-genesis.md`](../conventions/project-genesis.md)
- Architecture: [`../architecture/overview.md`](../architecture/overview.md)
- Current sprint: [`../sprints/current.md`](../sprints/current.md)
- Local setup: [`../development/setup.md`](../development/setup.md)
- Troubleshooting: [`../development/troubleshooting.md`](../development/troubleshooting.md)
