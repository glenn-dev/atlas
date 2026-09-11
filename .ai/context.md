# Atlas Working Context

## Last updated

2026-09-10

## Project purpose

Atlas is Glenn's supervised personal knowledge and AI platform, designed as a long-term “second brain.” It connects knowledge, learning, projects, decisions, people, and documents while keeping Glenn in control. Atlas is not merely a chatbot or a task manager.

## Repository state

- Repository: `atlas`
- Current branch: `master`
- Default branch: `master` (`origin/master`)
- Working tree before this task: clean
- Project Genesis v0.1 checkpoint: `e415ec4 docs: establish project genesis convention`
- Remote: `https://github.com/glenn-dev/atlas.git`
- Architecture checkpoint baseline: `c3d1f5c`, equal to refreshed `origin/master` before the
  documentation changes (`0` ahead, `0` behind)

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
template at [`templates/project/genesis.md`](../templates/project/genesis.md) and a manual builder
at [`.ai/prompts/project-genesis.md`](prompts/project-genesis.md). The convention defines the
practice and its rules, the template provides an optional document scaffold, and the builder is a
reusable agent workflow for evidence-based, human-reviewed Genesis proposals.

A root-level `genesis.md`, when a project deliberately adopts one, preserves its durable purpose,
principles, constraints, boundaries, non-goals, and definition of success. It does not replace
the README, agent instructions, ADRs, working context, tasks, or handoff state.

Atlas does not yet have a root-level `genesis.md`. Its content must come from a separate,
deliberate discussion rather than being inferred from the new convention.

## Completed

- Project Genesis Convention v0.1 is established at
  `docs/conventions/project-genesis.md` and remains intentionally Atlas-incubated.
- Its reusable scaffold is at `templates/project/genesis.md`.
- `AGENTS.md` integrates Genesis-alignment review for material decisions.
- The reusable manual builder is at `.ai/prompts/project-genesis.md`.
- No Skill, registry, automation, or cross-project orchestration has been implemented.

## Architectural understanding

- D1–D5 are frozen in
  [`docs/adr/0002-sovereign-knowledge-and-project-boundaries.md`](../docs/adr/0002-sovereign-knowledge-and-project-boundaries.md).
- Atlas must preserve its identity, durable knowledge, and fundamental continuity independently
  of any particular provider, model, agent, or interface.
- Canonical durable knowledge remains under Glenn's control in open, portable, reconstructable
  forms. External processors and indexes cannot be sole custodians. Git is foundational; GitHub
  is a replaceable host.
- Providers, models, agents, interfaces, and human actors are distinct. Provider-specific
  capabilities belong behind replaceable boundaries, while broader protocols and taxonomies must
  emerge from real use.
- Each project remains authoritative over its domain and local state. Atlas is authoritative over
  transversal ecosystem knowledge and relationships, with canonical, derived, observed, and
  inferred information distinguished and traceable to durable evidence.
- Project → Atlas flow should elevate meaningful durable changes or checkpoints, not raw commits,
  tests, prompts, agent actions, or exhaustive logs.
- Atlas should grow primarily by extracting reusable needs discovered while building real
  projects, not through speculative platform development.
- `local-agent-bridge` is conceptually infrastructure for controlled local-agent capabilities.
  It does not own project intent or the Project Genesis Convention, and the current manual
  Genesis workflow does not require it.

## Deliberately deferred

- Atlas's own root-level `genesis.md`.
- Turning Project Genesis into a Skill.
- Automated project discovery, a project registry, or automated cross-project Genesis access.
- Project → Atlas ingestion and a concrete `ProjectEvent` schema.
- Project change journals, including `work_logs.md`.
- Adapters, agent or capability registries, automation, orchestration, and a universal agent
  protocol or exhaustive capability taxonomy.
- Additional `local-agent-bridge` capabilities or repository changes.
- Larger Atlas architecture work not required by current projects.

## Important constraints

- The repository is the source of truth.
- Inspect code before making assumptions.
- Prefer small, coherent changes.
- Do not introduce dependencies without justification.
- Do not commit personal production data, credentials, or secrets.
- Do not copy confidential Enerlink code, credentials, customer information, internal documents, or proprietary information into Atlas.
- AWS, Kubernetes, OCPP, authentication, and AI integrations are outside the current implementation task unless explicitly introduced by a future task.

## Recommended re-entry

When Atlas resumes, first inspect ADR 0002, the architecture overview and domain model, this
context, `.ai/tasks/current.md`, and `docs/handoffs/current-context.md`.

The next conceptual question is the concrete Project → Atlas boundary: what durable project
change or checkpoint should look like and what role, if any, `local-agent-bridge` or portable
project change journals should have. This is a design question, not authorization to implement
ingestion, a schema, journals, adapters, automation, or orchestration. Atlas's own Genesis remains
separately deferred. Atlas should not become higher priority than Gouda, Republic Aces, inmundus,
or other value-producing projects merely to build infrastructure in advance. The archived
frontend-to-GraphQL task also retains a separate manual browser-verification follow-up.
