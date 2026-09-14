# Atlas Working Context

## Last updated

2026-09-14

## Project purpose

Atlas exists to extend Glenn's ability to understand, remember, connect, decide, and act across
relevant life context. The accepted [Atlas Genesis](../genesis.md) records the intent approved
by Glenn in the human-led Foundation Review and the subsequent explicit diff approval.
Human authority is ultimate; operational autonomy may be authorized within inspectable,
bounded, and revocable limits, without requiring interactive approval of every action.

## Repository state

- Repository: `atlas`
- Current branch: `master`
- Default branch: `master` (`origin/master`)
- Working tree before this task: clean
- Project Genesis v0.1 checkpoint: `e415ec4 docs: establish project genesis convention`
- Remote: `https://github.com/glenn-dev/atlas.git`
- Accepted Genesis checkpoint: `726f4ad1fd643d92456b114bfc08bade8b37a031`
  (`docs: establish Atlas genesis`), committed and pushed to `origin/master`.
- Hardening baseline: HEAD and refreshed `origin/master` both equal that checkpoint
  (`0` ahead, `0` behind); working tree clean before this pass.
- Architecture decisions were committed at `3e13383`; the checkpoint was closed at `98375ce`.

## Legacy application stack

Atlas predates this application. Glenn's Foundation Review identifies its origin in conversations
with ChatGPT about AI memory limitations, capabilities, tools, and durable personal context. The
application was an exploratory learning scaffold associated with his transition into Enerlink;
it is not the technical foundation future Atlas implementations must preserve.

Source inspection for this checkpoint confirms:

- Python: present in `apps/api`
- FastAPI: implemented by the API
- Strawberry GraphQL: implemented at `/graphql`
- PostgreSQL: defined as the `db` service in Docker Compose; application persistence is not yet implemented
- React: implemented in `apps/web`
- TypeScript: implemented in `apps/web`
- Vite: used by the web client
- Docker Compose: defined in `docker-compose.yml`

## Verified implementation

The legacy scaffold includes a FastAPI health endpoint, a Strawberry GraphQL schema with `hello`
and `sprintGoal` queries, and a React/Vite page displaying those fields. The goal and UI still
refer to learning entries and Enerlink onboarding. Compose defines API, web, and PostgreSQL
services with local ports and a configurable `VITE_GRAPHQL_URL`. The API has one health test and
two CORS tests; PostgreSQL is infrastructure only. No runtime was changed or started for this
documentation checkpoint.

## Previously recorded local behavior

Glenn supplied the original observations that:

- The frontend is accessible at `http://localhost:5173`.
- The health endpoint is accessible at `http://localhost:8000/health`.
- GraphQL is accessible at `http://localhost:8000/graphql`.
- The frontend previously displayed `Failed to fetch`.

The archived frontend-to-GraphQL task recorded running Compose services, a frontend served at
`http://localhost:5173`, `/health` returning 200, and a direct GraphQL query returning both expected
fields. It recorded a pre-fix preflight response of 405, then an expected-origin preflight of 200,
unexpected-origin rejection of 400, and a cross-origin POST returning 200 with `Atlas is alive`.
These are historical observations, not runtime verification performed in this Genesis checkpoint.

That earlier task could not initialize the in-app browser (`Cannot redefine property: process`),
so its rendered-page verification remained incomplete.

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

The root-level Genesis is accepted from Glenn's approved intent, not inferred from the legacy
runtime. Glenn accepted 2026-07-08 as the historical reference for “First written,” now recorded
in Genesis. It is not an exact timestamp of conception. The date provenance item is resolved.

## Completed

- Atlas Genesis was explicitly approved by Glenn, committed as `726f4ad`, and pushed to
  `origin/master`. Its substantive checkpoint record is preserved in
  [the completed task](tasks/archive/2026-09-14-establish-atlas-genesis.md).
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

- Execution of post-Genesis documentation reconciliation and legacy v0.1 retirement planning;
  [the current task](tasks/current.md) defines that next work without authorizing deletion.
- Legacy application retirement and explicit review of ADR 0001's future status. ADR 0001 remains
  unchanged historical evidence; ADR 0002 remains accepted and unchanged.
- Turning Project Genesis into a Skill.
- Automated project discovery, a project registry, or automated cross-project Genesis access.
- Project → Atlas ingestion and a concrete `ProjectEvent` schema.
- Project change journals, including `work_logs.md`.
- Adapters, agent or capability registries, automation, orchestration, and a universal agent
  protocol or exhaustive capability taxonomy.
- Additional `local-agent-bridge` capabilities or repository changes.
- Larger Atlas architecture work not required by current projects.

## Important constraints

- Interpret repository sources by question as defined in [AGENTS.md](../AGENTS.md).
- Inspect code before making assumptions.
- Prefer small, coherent changes.
- Do not introduce dependencies without justification.
- Do not commit personal production data, credentials, or secrets.
- Do not copy confidential Enerlink code, credentials, customer information, internal documents, or proprietary information into Atlas.
- AWS, Kubernetes, OCPP, authentication, and AI integrations are outside the current implementation task unless explicitly introduced by a future task.

## Recommended re-entry

First review [genesis.md](../genesis.md), [the current task](tasks/current.md), and the handoff.
The Genesis checkpoint is complete. The next task is post-Genesis reconciliation and legacy v0.1
retirement planning; this hardening pass only records that task and does not begin its execution
or authorize deletion. The old staged roadmap and learning-log milestone are historical, not
authoritative future direction. The concrete
Project → Atlas boundary remains deferred, not the current task. No implementation is authorized
by these follow-ups. The archived browser-verification item remains a historical open item to
disposition during application retirement, not a Genesis acceptance criterion.
