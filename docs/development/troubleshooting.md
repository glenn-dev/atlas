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
