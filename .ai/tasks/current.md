# Current Task

## Title

Record sovereign knowledge and Project → Atlas architecture decisions

## Status

Completed — awaiting diff approval

## Context

A deliberate architecture discussion froze five decisions covering Atlas independence,
knowledge sovereignty and portability, provider/model/agent/interface separation, authority and
provenance, and the semantic Project → Atlas boundary. They must be made durable without turning
the principles into an implementation specification.

## Objective

Record D1–D5 in the existing architecture structure, reconcile related terminology and session
state, and leave implementation deliberately deferred.

## Acceptance criteria

- One cohesive accepted ADR records D1–D5 as architectural principles.
- The architecture overview and domain model clarify project authority, transversal Atlas
  authority, provenance, canonical/derived/observed/inferred information, replaceability, and the
  meaningful-change boundary.
- The documentation index makes the ADR discoverable.
- Working context and handoff state say D1–D5 are frozen, implementation is deferred, and the next
  conceptual question is the concrete Project → Atlas boundary and the possible role of
  `local-agent-bridge` or project change journals.
- The existing Project Genesis Convention remains unchanged.
- No application code, dependencies, infrastructure, runtime configuration, sibling repository,
  ingestion, schema, journal, adapter, registry, Skill, automation, or orchestration is changed.
- Documentation validation and `git diff --check` pass.
- No commit or push occurs without explicit approval.

## Completion report

- Added ADR 0002 to preserve D1–D5 as one coherent set of accepted architectural constraints.
- Updated maintained architecture documentation with concise authority, provenance,
  replaceability, and Project → Atlas boundary language.
- Clarified that the knowledge classifications are conceptual and do not define a schema.
- Indexed the new ADR and synchronized working context and handoff state.
- Archived the previously completed Project Genesis builder task.
- Left implementation and all explicitly excluded mechanisms deferred.
- Validation passed; the documentation-only diff is awaiting Glenn's approval and has not been
  committed or pushed.
