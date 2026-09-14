# Atlas

Atlas is Glenn's personal knowledge and learning platform: a long-lived, auditable system for organizing people, projects, decisions, learning, and documents, with AI assistance under explicit user control.

The accepted [Atlas Genesis](genesis.md) captures the Foundation Review intent approved by Glenn
and was committed and pushed to `origin/master` as `726f4ad` (`docs: establish Atlas genesis`).
The application, Sprint 1 goal, and initial domain below describe the historical learning
scaffold, not a required foundation for future Atlas.
Reconciliation of current product and architecture documents is deferred to post-Genesis cleanup.

## Sprint 1 goal

Create a small but executable foundation aligned with the technologies used at Enerlink:

- Python backend
- TypeScript frontend
- GraphQL contract
- PostgreSQL persistence
- Docker-based local development
- Initial documentation and architectural decisions

## Repository structure

```text
atlas/
├── apps/
│   ├── api/
│   └── web/
├── docs/
│   ├── product/
│   ├── conventions/
│   ├── architecture/
│   ├── adr/
│   ├── sprints/
│   ├── development/
│   ├── handoffs/
│   ├── enerlink/
│   └── learning/
├── experiments/
│   └── ocpp/
├── infrastructure/
│   ├── docker/
│   └── kubernetes/
├── templates/
│   └── project/
├── docker-compose.yml
└── Makefile
```

See [`docs/README.md`](docs/README.md) for the documentation index and guidance on where project information belongs.

Atlas currently incubates the [Project Genesis Convention](docs/conventions/project-genesis.md),
with a reusable [project template](templates/project/genesis.md).

## First run

Requirements:

- Docker with Docker Compose

Run:

```bash
cp .env.example .env
docker compose up --build
```

Then open:

- API health check: http://localhost:8000/health
- GraphQL: http://localhost:8000/graphql
- Web: http://localhost:5173

## Initial domain

Sprint 1 starts with five concepts:

- Person
- Project
- Technology
- LearningEntry
- Decision

The models are intentionally small. Atlas should evolve from real use rather than speculative complexity.
