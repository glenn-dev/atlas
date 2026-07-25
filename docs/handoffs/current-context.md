# Current Project Context

Updated: 2026-07-25

## State

Atlas is at the v0.1 foundation stage. The repository contains a FastAPI/Strawberry API, a React/Vite web client, Docker Compose configuration, a PostgreSQL service definition, initial domain documentation, and one accepted ADR.

The API startup issue is resolved in the working tree by adding `--app-dir src` to the Uvicorn command in `apps/api/Dockerfile`. This is an uncommitted change and must be preserved.

## Current focus

Complete and verify the local foundation, then begin the learning-log workflow described in the roadmap. Keep OCPP and Kubernetes as isolated follow-on experiments.

## Important constraints

- Documentation is the durable project context; update it when decisions or operating procedures change.
- Do not place employer secrets, customer information, proprietary code, credentials, or internal URLs in Atlas.
- Do not modify application code as part of the documentation reorganization.

## Useful entry points

- Product direction: [`../product/vision.md`](../product/vision.md)
- Architecture: [`../architecture/overview.md`](../architecture/overview.md)
- Current sprint: [`../sprints/current.md`](../sprints/current.md)
- Local setup: [`../development/setup.md`](../development/setup.md)
- Troubleshooting: [`../development/troubleshooting.md`](../development/troubleshooting.md)
