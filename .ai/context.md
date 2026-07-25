# Atlas Working Context

## Last updated

2026-07-25

## Project purpose

Atlas is Glenn's supervised personal knowledge and AI platform, designed as a long-term “second brain.” It connects knowledge, learning, projects, decisions, people, and documents while keeping Glenn in control. Atlas is not merely a chatbot or a task manager.

## Repository state

- Repository: `atlas`
- Current branch: `master`
- Default branch: `master` (`origin/master`)
- Working tree before this task: clean
- Latest commit: `210f8bc fix dockerfile`
- Remote: `https://github.com/glenn-dev/atlas.git`

## Current stack

The repository confirms:

- Python: present in `apps/api`
- FastAPI: implemented by the API
- Strawberry GraphQL: implemented at `/graphql`
- PostgreSQL: defined as the `db` service in Docker Compose; application persistence is not yet implemented
- React: implemented in `apps/web`
- TypeScript: implemented in `apps/web`
- Vite: used by the web client
- Docker Compose: defined in `docker-compose.yml`

## Verified implementation

The v0.1 foundation includes a FastAPI health endpoint, a Strawberry GraphQL schema with `hello` and `sprintGoal` queries, and a React/Vite web page that fetches and displays those fields. Docker Compose defines API, web, and PostgreSQL services with local ports and a configurable `VITE_GRAPHQL_URL`. The API has one health test; PostgreSQL is currently infrastructure only.

## Verified local behavior

Glenn supplied the original observations that:

- The frontend is accessible at `http://localhost:5173`.
- The health endpoint is accessible at `http://localhost:8000/health`.
- GraphQL is accessible at `http://localhost:8000/graphql`.
- The frontend previously displayed `Failed to fetch`.

This task independently verified that the Docker Compose services are running, the frontend is served at `http://localhost:5173`, `/health` returns 200, and a direct GraphQL query returns both expected fields. Before the fix, a browser-style preflight to `/graphql` returned `405 Method Not Allowed`. After the fix, the expected origin preflight returns 200, the unexpected origin is rejected with 400, and the cross-origin GraphQL POST returns 200 with `Atlas is alive`.

The in-app browser could not be initialized in this session because its runtime failed with `Cannot redefine property: process`; the rendered React page was therefore not independently inspected.

## Current objective

The frontend-to-GraphQL communication issue is fixed at the API boundary with origin-scoped CORS. The remaining limitation is visual browser verification in an environment where the in-app browser runtime could not initialize.

## Important constraints

- The repository is the source of truth.
- Inspect code before making assumptions.
- Prefer small, coherent changes.
- Do not introduce dependencies without justification.
- Do not commit personal production data, credentials, or secrets.
- Do not copy confidential Enerlink code, credentials, customer information, internal documents, or proprietary information into Atlas.
- AWS, Kubernetes, OCPP, authentication, and AI integrations are outside the current implementation task unless explicitly introduced by a future task.

## Next action

Review [`.ai/tasks/current.md`](tasks/current.md), then manually refresh `http://localhost:5173` in a working browser and archive the task if the page displays `Atlas is alive`.
