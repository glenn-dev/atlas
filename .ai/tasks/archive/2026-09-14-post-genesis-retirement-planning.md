# Archived Task

## Title

Post-Genesis reconciliation and legacy v0.1 retirement planning

## Status

Completed. Glenn approved the disposition plan on 2026-09-14, with the refinements recorded below.
Planning made no repository edits; retirement execution is tracked separately.
The preceding Genesis authority-model hardening was approved, committed as `4ae5c3b`
(`docs: harden Atlas genesis authority model`), and pushed to `origin/master`.

## Context

Glenn explicitly approved Atlas Genesis. It was committed as
`726f4ad1fd643d92456b114bfc08bade8b37a031` (`docs: establish Atlas genesis`) and pushed to
`origin/master`. The [completed Genesis task](2026-09-14-establish-atlas-genesis.md)
preserves the Foundation Review findings and deferred documentation reconciliation.

[Genesis](../../../genesis.md) defines durable intent. The July learning scaffold is historical
implementation, not the foundation future Atlas must preserve. Apply the authority-by-question
rules in [AGENTS.md](../../../AGENTS.md) when reconciling that distinction.

## Objective

Reconcile maintained documentation with the accepted Genesis and prepare an explicit, reviewable
plan for retiring the July learning scaffold. Planning must preserve useful historical evidence
and identify consequences before any deletion is authorized.

## Scope and smallest execution plan

1. Reinspect the maintained documents identified in the Genesis archive and distinguish durable
   intent, current behavior, historical decisions, and operational state.
2. Prepare the scoped documentation reconciliation without inventing a replacement architecture
   or roadmap.
3. Inventory the legacy v0.1 application and related material for an explicit retirement plan:
   proposed dispositions, dependencies, preservation needs, affected commands, and validation.
4. Surface ADR 0001's future status for a separate explicit architectural decision; preserve its
   historical evidence and do not silently supersede it.
5. Present the reconciliation and retirement plan for review before any retirement execution.

## Acceptance criteria and boundaries

- Maintained documentation consistently recognizes the accepted Genesis and distinguishes
  historical learning-scaffold direction from future Atlas intent.
- The retirement plan identifies exact proposed targets, preservation needs, consequences, and
  validation steps. It is a proposal, not authorization to remove or disable anything.
- No application or infrastructure deletion or runtime change occurs under this planning task.
- Genesis and accepted ADRs remain unchanged; any proposed ADR status change is surfaced separately.
- No Project → Atlas implementation, replacement architecture or roadmap, dependency change,
  `local-agent-bridge`, or sibling-repository work is included.
- Validate documentation links and `git diff --check`; report scope, findings, risks, and the
  proposed retirement plan. Commit and push require explicit authorization.

## Verified planning baseline

After `git fetch origin`, branch `master`, HEAD and refreshed `origin/master` were all at
`58369c2cf4995081e961993b2232b84a3222692f`, with zero ahead/behind and a clean working tree.
The repository contained 54 tracked files. The same baseline was reverified before execution.

The baseline task file still said planned/not started during the read-only planning session.
This archive records its actual completion and approval; the original scope above records the
planning boundary, not the subsequent execution authorization.

## Approval and required refinements

Glenn approved the complete disposition plan as the basis for execution, including deletion of
the application and identified support material, on 2026-09-14. Two refinements govern execution:

1. Genesis and ADR 0002 constrain ADR 0003; ADR 0003 accepts and authorizes retirement of the initial
   learning application as an Atlas foundation; ADR 0001 becomes Superseded; retirement follows.
   Prepare these decisions and the retirement diff as one coherent checkpoint. ADR 0003 selects
   no replacement architecture, runtime, stack, datastore, interface, or roadmap.
2. Historical links to retired documents become plain text containing the original repository
   path and baseline commit `58369c2cf4995081e961993b2232b84a3222692f`, explicitly identifying
   retirement and recovery from Git history. Do not use GitHub or revision-specific Markdown URLs.

Preparation is authorized. Commit and push remain unauthorized pending review of the complete diff.

## Approved disposition manifest

Paths in this manifest describe the baseline inventory. DELETE artifacts are retired during the
execution checkpoint and remain recoverable from Git history at
`58369c2cf4995081e961993b2232b84a3222692f`.

| Disposition | Paths | Rationale and consequence |
| --- | --- | --- |
| KEEP | `genesis.md`, `AGENTS.md`, `.gitignore`, `.ai/README.md`, all five `.ai/prompts/*.md`, `docs/adr/0002-sovereign-knowledge-and-project-boundaries.md`, `docs/conventions/project-genesis.md`, `templates/project/genesis.md` | Twelve files preserve accepted intent, operating rules, architectural constraints and demonstrated reusable workflows unchanged. Ignore rules still protect local configuration and generated files. |
| REWRITE | `README.md`, `.ai/context.md`, `.ai/tasks/current.md`, `docs/README.md`, `docs/handoffs/current-context.md`, `docs/product/vision.md`, `docs/architecture/overview.md`, `docs/architecture/domain-model.md` | Eight maintained entry points retain useful roles while shedding old runtime identity, domain assumptions, navigation and operational state. |
| ARCHIVE | The five pre-existing dated records under `.ai/tasks/archive/` | Retain in place for directly browsable verification, approval, convention, architectural and Foundation Review provenance. Preserve narrative and status; adjust only retired-document references in the Genesis archive. |
| SUPERSEDE | `docs/adr/0001-initial-stack.md` | Preserve the original decision body/date; add minimal status, date and pointer metadata under the new retirement ADR. |
| DELETE | `apps/api/` (7 tracked files), `apps/web/` (6 tracked files) | Learning scaffold only; no future foundation requirement. Git is sufficient source preservation. |
| DELETE | `.env.example`, `Makefile`, `docker-compose.yml` | Configuration and commands exclusively launch or operate the retired application. |
| DELETE | `docs/development/` (setup, commands, troubleshooting), `docs/enerlink/onboarding-log-template.md`, `docs/learning/first-week.md` | Runtime support, a blank onboarding template and study targets; no accumulated learning corpus. Git and existing task history suffice. |
| DELETE | `docs/product/principles.md`, `docs/product/roadmap.md`, `docs/sprints/current.md`, `docs/sprints/archive/.gitkeep` | Consolidate duplicated principles; preserve distinct testing guidance first. Remove obsolete prospective plans without replacements. |
| DELETE | `experiments/ocpp/README.md`, `infrastructure/kubernetes/README.md`, `.ai/tasks/archive/.gitkeep` | Unimplemented prospective exercises and unnecessary placeholders. |

Totals: 12 KEEP, 8 REWRITE, 5 ARCHIVE, 1 SUPERSEDE, 28 DELETE = 54 baseline tracked files.
No legacy source, roadmap or sprint archive directory is approved. Preserve this planning record
in the existing task archive when creating the sole retirement execution task.

## Dependency evidence and preservation

- The API provided a health endpoint, two GraphQL fields and three health/CORS tests. The frontend
  requested those fields and advertised the learning/onboarding goal. PostgreSQL was configured
  infrastructure; no application persistence, models or migrations were implemented.
- Compose connected both Dockerfiles, manifests, bind mounts, ports 5432/8000/5173, database
  configuration, `DATABASE_URL`, `VITE_GRAPHQL_URL`, and a named database volume. Makefile and
  development instructions depended entirely on that chain. No tracked CI or lockfiles existed.
- The terminology scan found 147 matching tracked lines: 40 in maintained documents requiring
  reconciliation, 27 historical lines permitted to remain, and 80 in deletion targets. A broader
  scan covered paths, commands, endpoints, persistence libraries and navigation dependencies.
- All 90 baseline relative Markdown links resolved. Four Genesis-archive links target documents
  approved for deletion: principles at lines 74 and 96, roadmap at 97, sprint at 100. Apply the
  approved plain-text path/baseline preservation rule to those references.
- The old browser-verification task remains historically Blocked. Retirement ends its browser
  follow-up and the need to repair the recorded frontend type errors; neither becomes a passed
  check. No need to rerun the application before removing it.
- Local `.env` matched `.env.example`; approved cleanup includes that duplicate, API pytest and
  bytecode caches, empty `apps/web/node_modules/`, and empty `infrastructure/docker/`. Leave ignored
  `.DS_Store` and `.git/` untouched. Recheck local contents before deletion.
- Read-only checks found no Docker containers or volumes labelled with Compose project `atlas`.
  This does not establish absence of differently named resources. Host resources and external
  data deletion are outside scope; deleting Compose does not delete volumes.
- Git preserves source but cannot guarantee identical rebuilds with unpinned dependencies. No
  reproducibility package or new archive copy is warranted by ongoing use.

## Exact maintained-document reconciliation

- README: describe Genesis-grounded purpose, runtime-less repository state, retained structure,
  useful document/workflow entry points and retirement provenance. Remove Sprint 1, First run,
  localhost endpoints, old requirements and Initial domain.
- Vision: retain practical product interpretation (context reconstruction, provenance, judgment,
  useful relationships and net value). Link Genesis rather than duplicate its principles. Remove
  onboarding-first direction, staged assistant/platform/product possibilities and first-version
  implementation restrictions. Delegation follows Genesis, not mandatory review of every action.
- Principles: delete duplication of Genesis/ADR 0002 and implementation/interface assumptions.
  Local-first is not a mandated topology. Before deletion preserve in the architecture overview:
  future features that transform or delete durable knowledge require appropriate automated tests.
- Overview: describe no selected replacement runtime architecture; retain D1-D5 and Git's existing
  architectural role through ADR 0002. Remove application components, API/web ownership and roadmap
  commitments. Testing guidance is conditional and does not authorize implementation.
- Domain document: retain path, change heading/scope to conceptual vocabulary. Retain Project,
  Decision, Source, Provenance and canonical/derived/observed/inferred distinctions. Use Person as
  ordinary human terminology; remove personal examples, privileged Technology/LearningEntry types,
  Area taxonomy, required Entity identity, Automation model, and PostgreSQL/graph strategy.
  Memory/knowledge definitions impose no structured storage requirement or implemented retrieval.
- Docs index, context and handoff: remove obsolete navigation and status, record the true approved
  checkpoint state, distinguish current authority from historical evidence, and keep future
  implementation open. No replacement roadmap or sprint.

## Validation required for execution

1. Reverify baseline and working tree; inspect differences if either changed.
2. Compare all changed/deleted/new paths to this approved manifest, including untracked files.
3. Verify all twelve KEEP files byte-for-byte; verify ADR 0001's original body/date and reciprocal
   supersession references. Preserve four task archives unchanged and the Genesis archive narrative
   unchanged except the four approved historical-reference substitutions.
4. Check every retained/new local Markdown link and any fragments; verify retired paths exist at
   the baseline in Git, without external historical URLs.
5. Repeat terminology and broader dependency scans. Classify every surviving match as historical,
   explicit retirement evidence, or legitimate retained guidance; no live runtime commands or
   obsolete forward commitments may remain in maintained documentation.
6. Review README, vision, architecture, vocabulary, task, context and handoff for semantic agreement,
   authorized delegation, actual runtime-less state and absence of invented future implementation.
7. Run `git diff --check`, report exact paths/commands, final Git status and diff statistics including
   new files. Do not stage, commit or push. Application tests are not a retirement acceptance gate.

## Outcome

Read-only planning completed; baseline and link checks passed; no files were modified during that
phase. Glenn's approval and refinements authorize the coherent retirement preparation tracked in
[the execution task](../current.md). No unresolved intent question blocks execution.
