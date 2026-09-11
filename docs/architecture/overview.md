# Architecture Overview

Atlas is currently a small Docker Compose application with a Python API, a TypeScript web client, and PostgreSQL reserved for structured persistence.

Its durable architecture is also constrained by the independence, sovereignty, separation,
authority, provenance, and meaningful-change decisions in
[ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md). These principles describe
what future designs must preserve; they do not imply that ingestion, adapters, registries, or
orchestration exist today.

## Runtime components

- `apps/api`: FastAPI application with a Strawberry GraphQL endpoint and `/health` endpoint.
- `apps/web`: React and Vite client that calls the GraphQL endpoint.
- `db`: PostgreSQL 16 container used by the local environment.
- `docker-compose.yml`: Connects the services, publishes local ports, and waits for a healthy database before starting the API.

## Boundaries

The API owns the application contract and domain behavior. The web client consumes that contract. Infrastructure configuration belongs in the repository-level Compose and infrastructure directories. Experiments remain isolated from the core application until they have clear product value.

Each connected project remains authoritative over its own domain and project-local state. Atlas
owns transversal ecosystem knowledge and relationships, with provenance back to durable project
evidence; it is not the master copy of every project's content. Future Project → Atlas integration
should carry meaningful durable changes or checkpoints rather than raw commits, prompts, tests,
agent activity, or exhaustive logs.

Atlas's canonical durable knowledge must remain under Glenn's control in open, portable,
reconstructable forms. Providers, models, agents, interfaces, AI indexes, cloud services, and
hosting services are replaceable capabilities around that foundation. Git is part of the
portable foundation; GitHub is one replaceable host.

## Current state

The v0.1 foundation has a health endpoint, a GraphQL hello query, and a basic web client. The domain model is intentionally small; persistence and richer workflows are roadmap work.
