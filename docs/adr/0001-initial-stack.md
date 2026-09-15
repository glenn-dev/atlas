# ADR 0001: Initial application stack

- Status: Superseded
- Date: 2026-07-24
- Superseded by: [ADR 0003](0003-retire-initial-learning-application.md)
- Superseded on: 2026-09-14

## Context

Glenn begins at Enerlink on August 3, 2026. The technical interview indicated use of Python, TypeScript, AWS, Kubernetes, GraphQL, and possibly OCPP.

## Decision

Atlas v0.1 will use:

- Python with FastAPI for the backend
- Strawberry for GraphQL
- TypeScript with React and Vite for the web client
- PostgreSQL for structured persistence
- Docker Compose for local development

AWS, Kubernetes, and OCPP will be added through incremental experiments after the local application is functional.

## Consequences

### Positive

- The project directly supports onboarding preparation.
- The stack is modern and strongly typed at API boundaries.
- Docker makes the setup reproducible.

### Negative

- Glenn must learn several unfamiliar tools at once.
- GraphQL adds complexity compared with a minimal REST API.

## Guardrail

The project will stay small. Every new dependency must solve a current problem or provide clear learning value.
