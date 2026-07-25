# Current Task

## Title

Verify frontend-to-GraphQL communication

## Status

Blocked

## Context

Glenn can currently access:

- `http://localhost:5173`
- `http://localhost:8000/health`
- `http://localhost:8000/graphql`

The frontend previously loaded its static content but displayed `Failed to fetch` where the GraphQL-provided application message should appear.

The API endpoints are now reachable after a Codex-assisted correction, but the complete browser request from the React frontend to GraphQL has not yet been verified.

## Objective

Inspect and verify the communication between the React frontend and the FastAPI GraphQL endpoint. If the integration is still failing, identify the verified root cause and apply the smallest appropriate fix.

## Investigation requirements

Before modifying code:

1. Inspect the frontend GraphQL request implementation.
2. Determine how the frontend API URL is configured.
3. Inspect the FastAPI application and GraphQL route.
4. Inspect current CORS configuration.
5. Inspect Docker Compose networking and exposed ports.
6. Review relevant logs.
7. Reproduce the request when possible.
8. Explain the verified root cause before applying a fix.

Do not assume CORS is the cause without evidence.

## Acceptance criteria

- The frontend successfully retrieves and displays the GraphQL-backed message.
- The GraphQL request succeeds from the browser at `http://localhost:5173`.
- Development CORS, if required, permits only the expected local frontend origin rather than using an unrestricted wildcard without justification.
- The frontend API endpoint is configurable appropriately for local development.
- Existing application behavior remains intact.
- Relevant tests and validation commands pass.
- The verified root cause and solution are documented under the appropriate development or troubleshooting documentation.
- `.ai/context.md` is updated with the verified final state.

## Constraints

- Keep the change minimal.
- Do not introduce a new HTTP or GraphQL client library.
- Do not refactor unrelated code.
- Do not add AWS, Kubernetes, OCPP, authentication, or AI functionality.
- Do not commit or push.

## Completion status

When finished, change `Status` from `Ready` to either:

- `Completed`, if all acceptance criteria are satisfied;
- `Blocked`, if execution cannot continue, including the exact reason and required next action.

## Completion report

Provide:

- verified root cause;
- changes made;
- files changed;
- commands executed;
- tests and validation results;
- remaining risks;
- `git status`;
- `git diff --stat`;
- recommended next task.

This task is executed only within the scope defined above and by explicit request.

## Completion report

- Verified root cause: the frontend's cross-origin JSON `POST` triggered a CORS preflight, but the FastAPI app had no CORS middleware; `/graphql` returned `405 Method Not Allowed` for the preflight.
- Changes made: added origin-scoped CORS for `http://localhost:5173`, permitting `POST` and `Content-Type`; added focused allow/reject tests; documented the diagnosis and resolution.
- Files changed: `apps/api/src/atlas_api/main.py`, `apps/api/tests/test_health.py`, `docs/development/troubleshooting.md`, `.ai/context.md`, and this task file.
- Commands executed: repository inspection with `rg`, `sed`, `find`, and Git commands; `docker compose ps`; `docker compose logs --tail=100`; `curl` health, GraphQL, frontend, and CORS requests; `docker compose run --rm api pytest -q`; `docker compose exec -T web npm run typecheck`; `docker compose exec -T web npm run build` was not reached because typecheck failed; `git diff --check`; final `git status` and `git diff --stat`.
- Tests and validation: API tests pass, 3 passed with one existing deprecation warning. Health and GraphQL direct requests pass. Allowed-origin preflight passes; unexpected-origin preflight is rejected. Frontend typecheck remains failing on existing missing Vite type declarations for CSS and `ImportMeta.env`.
- Remaining risks: the in-app browser runtime could not initialize (`Cannot redefine property: process`), so the rendered browser page was not independently verified in this session. A manual browser refresh is required before marking this task `Completed`.
- `git status`: modified `apps/api/src/atlas_api/main.py`, `apps/api/tests/test_health.py`, and `docs/development/troubleshooting.md`; untracked `.ai/` and `AGENTS.md`.
- `git diff --stat`: 3 tracked files changed, 59 insertions; untracked files are not included by default.
- Recommended next task: manually verify the rendered frontend message, then archive this task and define the next persistence-backed learning-log task.
