# Development Setup

## Requirements

- Docker with Docker Compose

## First run

From the repository root:

```bash
cp .env.example .env
docker compose up --build
```

The local services are available at:

- API health check: <http://localhost:8000/health>
- GraphQL: <http://localhost:8000/graphql>
- Web: <http://localhost:5173>

The Compose file supplies local defaults for PostgreSQL and the GraphQL URL. Adjust `.env` only with non-confidential local values.
