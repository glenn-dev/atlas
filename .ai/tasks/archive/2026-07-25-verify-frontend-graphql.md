# Archived Task

## Title

Verify frontend-to-GraphQL communication

## Status

Blocked

## Context

Glenn could access the frontend, health endpoint, and GraphQL endpoint, but the frontend
previously displayed `Failed to fetch` where the GraphQL-backed message should appear.

The API boundary was corrected, but the complete browser request from the React frontend was
not independently verified because the in-app browser runtime failed to initialize.

## Objective

Inspect and verify communication between the React frontend and the FastAPI GraphQL endpoint. If
the integration was still failing, identify the verified root cause and apply the smallest
appropriate fix.

## Outcome

- Verified root cause: the frontend's cross-origin JSON `POST` triggered a CORS preflight, but
  the FastAPI app had no CORS middleware; `/graphql` returned `405 Method Not Allowed` for the
  preflight.
- Changes made: added origin-scoped CORS for `http://localhost:5173`, permitting `POST` and
  `Content-Type`; added focused allow/reject tests; documented the diagnosis and resolution.
- Files changed: `apps/api/src/atlas_api/main.py`, `apps/api/tests/test_health.py`,
  `docs/development/troubleshooting.md`, `.ai/context.md`, and the task record.
- Validation: API tests passed (3 tests, with one deprecation warning). Health and direct GraphQL
  requests passed. The allowed-origin preflight passed, and an unexpected-origin preflight was
  rejected. Frontend type checking still failed because of existing missing Vite type
  declarations for CSS and `ImportMeta.env`.

## Remaining follow-up

Refresh `http://localhost:5173` in a working browser and confirm that the page displays
`Atlas is alive`. The task was archived as blocked when the Project Genesis Convention became
the current task; it was not retroactively marked complete.
