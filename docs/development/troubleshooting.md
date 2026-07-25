# Troubleshooting

## API container fails to import `atlas_api` at startup

### Symptom

The API container starts Uvicorn but cannot import `atlas_api.main`, so the health endpoint is unavailable.

### Cause

The API package is stored under `apps/api/src/atlas_api`, while the container's working directory is `/app`. The source directory was not on Uvicorn's import path.

### Resolution

The Uvicorn command in `apps/api/Dockerfile` was updated to include `--app-dir src`:

```text
uvicorn atlas_api.main:app --app-dir src --host 0.0.0.0 --port 8000 --reload
```

Rebuild the API image after this change:

```bash
docker compose up --build
```

This documents the repository's actual fix. No application code change was required.

## Frontend displays `Failed to fetch` for the GraphQL message

### Symptom

The web page loads at `http://localhost:5173`, and the API responds to direct requests, but the frontend displays `Failed to fetch` instead of the GraphQL-backed message.

### Verified cause

The frontend sends a cross-origin JSON `POST` from `http://localhost:5173` to `http://localhost:8000/graphql`. The `Content-Type: application/json` header causes the browser to send a CORS preflight request. Before the fix, the FastAPI application had no CORS middleware, so the preflight returned `405 Method Not Allowed` and no CORS headers.

### Resolution

The API now allows only the local frontend origin, `http://localhost:5173`, for `POST` requests with the `Content-Type` header. The GraphQL endpoint and frontend API URL remain unchanged.

Focused tests cover both the expected local origin and rejection of an unexpected origin. Verify the running stack with:

```bash
curl -i -X OPTIONS http://localhost:8000/graphql \
  -H 'Origin: http://localhost:5173' \
  -H 'Access-Control-Request-Method: POST' \
  -H 'Access-Control-Request-Headers: content-type'
```
