# Architecture Overview

Atlas is currently a small Docker Compose application with a Python API, a TypeScript web client, and PostgreSQL reserved for structured persistence.

## Runtime components

- `apps/api`: FastAPI application with a Strawberry GraphQL endpoint and `/health` endpoint.
- `apps/web`: React and Vite client that calls the GraphQL endpoint.
- `db`: PostgreSQL 16 container used by the local environment.
- `docker-compose.yml`: Connects the services, publishes local ports, and waits for a healthy database before starting the API.

## Boundaries

The API owns the application contract and domain behavior. The web client consumes that contract. Infrastructure configuration belongs in the repository-level Compose and infrastructure directories. Experiments remain isolated from the core application until they have clear product value.

## Current state

The v0.1 foundation has a health endpoint, a GraphQL hello query, and a basic web client. The domain model is intentionally small; persistence and richer workflows are roadmap work.
