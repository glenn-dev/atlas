# Atlas

Atlas is Glenn's personal knowledge and learning platform: a long-lived, auditable system for organizing people, projects, decisions, learning, and documents, with AI assistance under explicit user control.

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
├── docker-compose.yml
└── Makefile
```

See [`docs/README.md`](docs/README.md) for the documentation index and guidance on where project information belongs.

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
