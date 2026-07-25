# Development Commands

Run these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `make up` | Build and start the local stack |
| `make down` | Stop the local stack |
| `make logs` | Follow Compose logs |
| `make test` | Run API tests in the API container |
| `make format` | Format API code with Ruff |
| `docker compose up --build` | Start the stack directly |

The API container is built from `apps/api`; the web container is built from `apps/web`.
