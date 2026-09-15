# ADR 0003: Retire the initial learning application as an Atlas foundation

- Status: Accepted
- Date: 2026-09-14
- Supersedes: [ADR 0001](0001-initial-stack.md)

## Context

Atlas predates the July 2026 application. Glenn's Foundation Review identifies that application
as an exploratory learning scaffold associated with his transition into Enerlink. It served its
historical purpose; Glenn explicitly approved its retirement and the repository disposition plan.

[Genesis](../../genesis.md) defines Atlas's durable intent independently of any application or
stack. [ADR 0002](0002-sovereign-knowledge-and-project-boundaries.md) preserves the architectural
constraints of independence, sovereignty, separation, authority, provenance and meaningful change.
Neither requires the initial application to remain Atlas's technical foundation.

ADR 0001 selected a stack and incremental experiments for the initial application. Leaving that
decision Accepted would suggest an architectural commitment that no longer governs future work.
Its original rationale remains valid historical evidence and must remain intact.

## Decision

Retire the initial learning application and its stack as an Atlas foundation. This decision,
under Genesis and ADR 0002, authorizes the approved application and support-material retirement
and supersedes ADR 0001. Its status and supersession metadata change; its original body and date
remain intact.

The retirement removes the application source, runtime configuration, development instructions,
onboarding and learning scaffolding, experiment/deployment placeholders, and obsolete roadmap and
sprint plans identified in the [approved planning record](../../.ai/tasks/archive/2026-09-14-post-genesis-retirement-planning.md).
Maintained documentation is reconciled in the same checkpoint.

Atlas may remain deliberately runtime-less. Durable intent, architectural decisions, conventions,
templates and operational context constitute useful repository content without an application.
Future implementations must emerge from demonstrated Atlas needs under Genesis and ADR 0002;
they have no obligation to inherit the retired code, domain model, API, deployment or stack.

This decision selects no replacement architecture, runtime, stack, datastore, interface or
roadmap. It does not prohibit future use of any individual technology previously used, where a
demonstrated need and a deliberate implementation decision justify it.

## Consequences

- The repository no longer maintains or offers the initial application's launch, development or
  testing workflows. No replacement implementation is introduced to fill the space.
- Existing ADRs and task archives preserve decision and verification history. No legacy source
  archive is added; Git preserves retired files at baseline
  `58369c2cf4995081e961993b2232b84a3222692f`.
- Historical references to retired documents use plain-text original repository paths and that
  baseline, identifying retirement and recovery from Git history without requiring a hosting
  provider. Historical findings are not rewritten to imply successful verification.
- The archived application's incomplete browser verification and recorded frontend type errors
  cease to be active follow-up obligations. They remain historical limitations, not passed checks.
- Future architecture, storage, interfaces, agents, automation and implementation choices remain
  open until demonstrated needs justify them. The absence of a runtime is no reason to invent one.
- Repository retirement does not authorize deletion of external data or Docker resources.

## Authority and execution

Glenn approved retirement and the supersession approach, including this decision's role as the
architectural authorization, on 2026-09-14. Genesis and ADR 0002 remain unchanged.
The [execution task](../../.ai/tasks/current.md) records preparation, validation and review state;
acceptance of retirement does not imply approval to commit or push the prepared diff.
