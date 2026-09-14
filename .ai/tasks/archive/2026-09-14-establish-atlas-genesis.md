# Archived Task

## Title

Formal Atlas Project Genesis checkpoint

## Status

Completed. Glenn explicitly approved the Genesis diff; it was committed as
`726f4ad1fd643d92456b114bfc08bade8b37a031` (`docs: establish Atlas genesis`) and pushed to
`origin/master`.

## Context and authority

Glenn's human-led Foundation Review approved the durable intent conceptually and authorized its
faithful translation into root `genesis.md`. This deliberately establishes Atlas's own Genesis;
it does not authorize redesign or legacy application retirement. The manual builder's intent
review stage and final diff approval were satisfied by explicit human direction.

Atlas predates the application and originated in Glenn's conversations with ChatGPT about AI
memory limitations, capabilities, tools, and durable personal context. This provenance comes from
Glenn's Foundation Review, not Git. Glenn has accepted 2026-07-08 as the historical reference date
for “First written.” Genesis records this reference without claiming an exact timestamp of
conception or requiring private conversations to understand it. The date provenance item is resolved.

## Baseline

- Root: `/Users/glennmarcano/projects/atlas`.
- Branch: `master`.
- After `git fetch origin`, HEAD and `origin/master` both:
  `98375cea886c5df22e73869fc52722c246c0c46d`.
- Ahead/behind: `0` / `0`; working tree clean; root `genesis.md` absent.
- Git records the application scaffold at `791109b`, product documentation organization at
  `088d596`, and the sovereign architecture decisions at `3e13383`. These are implementation and
  documentation history, not evidence of Atlas's conversation-origin date.
- The completed architecture task is preserved unchanged in
  [the archive](2026-09-10-sovereign-architecture-checkpoint.md).

## Original objective and execution plan

1. Reconcile the approved durable intent with repository evidence and the Genesis convention.
2. Draft a concise, self-contained Genesis using the template only as a scaffold.
3. Add discovery links and update task, context, and handoff to reflect this checkpoint.
4. Validate documentation and scope, report the complete Genesis and diff, and obtain Glenn's
   explicit approval before committing or pushing.

## Acceptance criteria

- Preserve the approved purpose, problem, seven principles, hard boundaries, non-goals, six
  risks, success tests, independence, project relationships, stewardship, and long-term vision.
- Explicitly distinguish ultimate human authority from interactive approval of individual actions;
  delegation is authorized, inspectable, bounded, and revocable.
- Remain consistent with ADR 0002 without duplicating its implementation detail or prescribing
  storage, protocols, schemas, registries, adapters, or Project → Atlas design.
- Record 2026-07-08 as the accepted historical reference for “First written,” not an exact
  timestamp of conception. Include no placeholder, project catalog, standalone naming section,
  retirement plan, runtime state, or roadmap in Genesis.
- Surface stale maintained documents and preserve historical records. Do not supersede ADR 0001
  or change ADR 0002, the convention, template, or builder.
- No application, dependency, infrastructure, runtime, `local-agent-bridge`, sibling repository,
  or Project → Atlas implementation changes.
- Pass `git diff --check`, local Markdown link checks in every changed/new file, convention review,
  and a complete changed-path check including untracked files.
- Present exact changed files and reasons, all commands, conflicts and deferred cleanup, validation
  results, Git status, and a complete diff stat including new files. Commit or push only after
  explicit approval.

## Reconciliation findings at the Genesis checkpoint

### Supported intent and resolved interpretation

- [Vision](../../../docs/product/vision.md): its mission already supports durability, auditability,
  progressive self-management, life context, and Glenn's control.
- [Principles](../../../docs/product/principles.md): ownership, auditability, replaceability, real use,
  durable documentation, confidentiality, and assisted judgment support the approved intent.
- [Domain model](../../../docs/architecture/domain-model.md): Project, Decision, authority boundaries,
  and provenance remain useful conceptual foundations.
- [ADR 0002](../../../docs/adr/0002-sovereign-knowledge-and-project-boundaries.md): independence,
  sovereignty, project boundaries, knowledge distinctions, and meaningful changes remain aligned.
  Its Git choice is an architectural decision, not a permanent Genesis requirement. Its statement
  deferring Genesis and its next conceptual question record that checkpoint's historical scope.
- The [convention](../../../docs/conventions/project-genesis.md) permits adapted sections for durable
  intent. Atlas warrants Genesis because its approved reason to exist survives implementations.
- Glenn's Foundation Review resolves the apparent stack and onboarding identity in favor of the
  approved durable intent. It does not rewrite the historical decisions or remove working code.
- No additional intent hypotheses are introduced. No intent clarification is needed to draft;
  the date provenance item is resolved by Glenn's accepted historical reference, 2026-07-08.

### Smallest current-document reconciliation set

| Document | Tension or stale statement | Disposition |
| --- | --- | --- |
| [Root README](../../../README.md) | No Genesis; learning-platform identity, Enerlink Sprint 1 foundation, and five initial domains presented without historical qualification. | Discovery and historical-scope notice added now; fuller opening and application-section reconciliation deferred. |
| [Documentation index](../../../docs/README.md) | No Atlas Genesis entry; product, architecture, and sprint links appear wholly current. | Genesis link and pending-cleanup notice added now. |
| [Vision](../../../docs/product/vision.md) | Enerlink onboarding and Learning Log as initial direction; staged assistant/product possibilities and first-version restrictions reflect the original application. “Act autonomously without review” must not become a permanent per-action approval rule. | Preserve mission; reconcile historical use case, provisional directions, and delegation wording after approval. |
| [Principles](../../../docs/product/principles.md) | “Human approval is the default” and explicit review for important mutations can obscure bounded delegation. Local-first, clear interfaces, code-linked documentation, and testing are operational principles, not additional approved Genesis constraints. | Preserve compatible principles; clarify authority/delegation and distinguish durable intent from implementation guidance after approval. |
| [Roadmap](../../../docs/product/roadmap.md) | Learning Log, PostgreSQL persistence, subsequent feature stages, and stable domain/API presented as future direction. | Preserve as historical planning or otherwise reconcile explicitly after approval; do not rewrite or invent a replacement roadmap now. |
| [Architecture overview](../../../docs/architecture/overview.md) | Defines Atlas as the Compose application and calls it the foundation; domain persistence and richer workflows described as roadmap work. | Separate historical runtime from future architecture after approval; retain ADR 0002 boundaries. |
| [Domain model](../../../docs/architecture/domain-model.md) | Technology and LearningEntry privileged by the original learning application; PostgreSQL relationship strategy asserted as the first version. “Automation” review wording needs the delegation distinction. | Preserve Project, Decision, and provenance distinctions; remove assumed future centrality of learning entities/storage in later cleanup. |
| [Current sprint](../../../docs/sprints/current.md) | Enerlink-aligned foundation and persistence-backed learning log presented as current/next work; “run and verify” also overlaps archived partial verification. | Reconcile or archive historical sprint after approval without inventing a new sprint. |
| [Working context](../../context.md) and [handoff](../../../docs/handoffs/current-context.md) | Genesis absent/deferred; application framed as foundation; Project → Atlas as immediate next question; handoff promotes Learning Log as next milestone. Context describes old runtime checks as “this task.” | Correct checkpoint state now; label historical runtime evidence; retain deferred work without authorizing it. |
| [Current task](../current.md) | Previously described the completed architecture checkpoint. | Archive it unchanged and track only this Genesis checkpoint. |

These are the minimum maintained entry points that carry the conflicting direction or operational
state. Setup/troubleshooting remain descriptions of existing code, not durable intent; they do
not require Genesis edits and can be dispositioned with application retirement. The onboarding
template, learning notes, experiment notes, and task archives are historical or scoped supporting
material, not authority for Atlas's future purpose.

The OCPP experiment README and Kubernetes infrastructure README also contain prospective steps
tied to stabilizing the old application. Disposition those scoped legacy plans with retirement;
they do not add future Atlas requirements. Infrastructure is explicitly outside this checkpoint.

### Historical decisions and deliberately deferred work

- [ADR 0001](../../../docs/adr/0001-initial-stack.md) remains Accepted and unchanged as historical
  evidence of the original stack choice. Treating it as binding on all future Atlas conflicts with
  the Foundation Review. Its future status, including possible supersession, belongs to a separate
  explicit architectural cleanup after Genesis approval.
- ADR 0002 is unchanged. No conflict with the accepted Genesis requires amendment.
- Legacy application retirement is separate. Source inspection confirms the GraphQL `sprintGoal`
  and frontend still advertise learning/Enerlink direction; this is historical runtime behavior,
  deliberately unchanged. PostgreSQL is configured infrastructure, not implemented persistence,
  despite the domain document's relational-data assertion.
- No roadmap rewrite, new architecture, ingestion, schema, journal, adapter, registry, Skill,
  automation, orchestration, `local-agent-bridge`, or sibling-repository work is included.
- The archived browser-verification follow-up remains historical open work to disposition with
  retirement, not a reason to revive the Learning Log milestone or block Genesis.
- The same archive records unresolved frontend type-check errors for CSS and `ImportMeta.env`
  declarations. These are historical runtime limitations, not reverified or addressed here.

## Completion record

- Root Genesis includes the accepted “First written” historical reference, 2026-07-08, and a
  self-contained Origin section. No unresolved First-written placeholder or uncertainty remains.
- Discovery links and checkpoint state updated; previous completed task archived unchanged.
- Pre-commit validation passed: `git diff --check` and separate whitespace checks for both new files;
  all 73 local Markdown links in seven changed/new files resolve; the previous task archive is
  byte-for-byte identical to the baseline current task. Exact changed-path validation confirms
  documentation-only scope, no staged changes, and unchanged HEAD.
- Reviewed all Genesis sections against the convention and approved intent: self-contained,
  durable, provider/stack-independent, with no implementation design or volatile status.
- Application tests were not run: no application behavior changed or runtime validation was
  needed for this documentation checkpoint.
- Glenn explicitly approved the exact diff and authorized the commit. The checkpoint was committed
  as `726f4ad1fd643d92456b114bfc08bade8b37a031` (`docs: establish Atlas genesis`) and pushed to
  `origin/master`. The subsequent hardening pass verified local HEAD and refreshed `origin/master`
  at that commit with no divergence and a clean working tree.
