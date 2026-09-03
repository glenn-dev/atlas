# Atlas Working Context

## Last updated

2026-09-03

## Project purpose

Atlas is Glenn's supervised personal knowledge and AI platform, designed as a long-term “second brain.” It connects knowledge, learning, projects, decisions, people, and documents while keeping Glenn in control. Atlas is not merely a chatbot or a task manager.

## Repository state

- Repository: `atlas`
- Current branch: `master`
- Default branch: `master` (`origin/master`)
- Working tree before this task: clean
- Latest commit: `701e9cb chore: establish AI collaboration workflow`
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

## Documentation conventions

Atlas incubates the Project Genesis Convention in
[`docs/conventions/project-genesis.md`](../docs/conventions/project-genesis.md), with a reusable
template at [`templates/project/genesis.md`](../templates/project/genesis.md). A root-level
`genesis.md`, when a project deliberately adopts one, preserves its durable purpose, principles,
constraints, boundaries, non-goals, and definition of success. It does not replace the README,
agent instructions, ADRs, working context, tasks, or handoff state.

Atlas does not yet have a root-level `genesis.md`. Its content must come from a separate,
deliberate discussion rather than being inferred from the new convention.

## Current objective

The first Project Genesis Convention is documented and integrated into Atlas's agent workflow.
Atlas's own Genesis remains intentionally undefined.

## Important constraints

- The repository is the source of truth.
- Inspect code before making assumptions.
- Prefer small, coherent changes.
- Do not introduce dependencies without justification.
- Do not commit personal production data, credentials, or secrets.
- Do not copy confidential Enerlink code, credentials, customer information, internal documents, or proprietary information into Atlas.
- AWS, Kubernetes, OCPP, authentication, and AI integrations are outside the current implementation task unless explicitly introduced by a future task.

## Next action

Hold a deliberate conversation about whether Atlas should adopt its own root-level Genesis and
what durable intent it should contain. The archived frontend-to-GraphQL task still has a separate
manual browser-verification follow-up.
