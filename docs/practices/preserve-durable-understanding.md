# Preserve Durable Understanding

Accepted Atlas guidance; exact reconciled wording approved by Glenn on 2026-09-19 under
[ADR 0005](../adr/0005-foundational-transversal-practices.md).
The [practices index](README.md) locates the parent principle and governing authority.

## Expectation and purpose

Preserve material understanding that future work is likely to need, that would be costly or
unreliable to reconstruct, or that applicable obligations require retaining. Keep enough context,
provenance, rationale, uncertainty and historical meaning for someone beyond the current
conversation, contributor or tool to understand and reassess it.
The goal is durable understanding, not maximum document production.

Documentation can preserve knowledge and claims about knowledge, including errors. Recording a
claim does not verify it, make it authoritative or promote a local lesson into shared guidance.
Preservation should maintain the distinctions established by
[investigation and reasoning](investigate-and-reason-from-evidence.md).

## Applicability and boundaries

Preservation is valuable for consequential intent and decisions, difficult discoveries, recurring
procedures, important constraints, validation limits and unresolved uncertainty that later work
may otherwise lose. Transient observations and cheaply reconstructable trivia normally need no
permanent record unless applicable obligations require one. Importance, expected reuse, lifetime,
reconstruction cost, retention obligations and maintenance burden determine useful depth.

Use the owning project's appropriate durable location. Atlas does not become the master copy of
project-domain knowledge. Respect ownership, confidentiality, consent and access boundaries;
provenance does not justify copying restricted information or retaining every interaction.

A concise decision note, maintained procedure, annotated diagram or executable example may suffice.
A new document or prescribed template is not always needed. Tests can preserve behavioral examples
but usually cannot explain every reason for a decision. Exact reproduction of every activity is
neither necessary nor always possible; explain consequential reconstruction limits.

## Proportionate application

Ask what a future reader would need to understand the result, act safely or reconsider a material
choice. Preserve the smallest useful account in the source responsible for that question:
durable intent, decision history, maintained guidance, current behavior or operational state.
Prefer links to canonical owners for maintained meaning. Distinguish that authority from
evidentiary preservation: when reconstruction materially depends on mutable or potentially
unavailable evidence, a permitted snapshot or equivalent historical record may be appropriate.
Identify its source, relevant version or date and role as evidence, not competing current authority.

For consequential claims, retain identifiable sources and relevant revisions or dates, significant
derivations and the limits of observation. For decisions, retain the choice and material reasons,
tradeoffs and uncertainties. These are information needs, not mandatory fields for every record.
Avoid invented confidence scores or boilerplate disclaimers that conceal the specific uncertainty.

Maintain current explanations when their subject changes. Preserve historical decisions and
outcomes as history, including failures, supersession and unresolved checks; do not rewrite them
as if later knowledge had been available earlier. Make current status discoverable without
requiring readers to reconstruct policy from a sequence of historical records.

Historical records can receive traceable factual corrections; preserving history does not require
retaining known errors as current truth. Distinguish corrections, changes to current understanding
and revisions of past decisions, preserving what was known or believed at the time rather than
silently substituting later knowledge. Respect stronger confidentiality, ownership, consent, legal
or retention obligations, including restrictions on continued preservation. A source's authority
to record a decision does not make its empirical assertions true; later summaries must not silently
remove material qualifications.

Preserve enough inputs, method and environment information to interpret or repeat consequential
analysis where feasible and permitted. A source reference may suffice for low-risk work; a result
that depends on changing data or unavailable tools needs its reconstruction limits made explicit.
Auditability supports assessment rather than guaranteeing correctness or universal reproducibility.

Check that the retained account is understandable and discoverable, its important references work,
and its claims are supported or appropriately qualified by evidence. Keep material unresolved
contradictions visible rather than forcing a consistent narrative. Review meaning as well as file
existence. Remove unnecessary duplication and update stale maintained accounts while preserving
material historical meaning within applicable preservation boundaries.

## Failure modes and examples

- A typo fix may need only the corrected document and its existing history, not a new decision record.
- A consequential interface choice warrants its rationale and constraints; copying the same account
  into the README, task, handoff and ADR creates competing maintenance obligations.
- Meeting notes should distinguish observations, proposals and authorized decisions. A proposal
  does not become an accepted commitment because a summary omits its tentative status.
- A retired experiment can retain its useful findings and failed-check limits without retaining a
  live runtime or treating its follow-up work as current obligations.
- Capturing every conversation, log or personal detail can increase exposure and reconstruction
  burden. Keep material understanding within its permitted ownership and confidentiality boundaries.

## Evidence, rationale and related authority

[Genesis](../../genesis.md) establishes durable knowledge, provenance and limits on capture.
[ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md) distinguishes project authority
and meaningful change from raw activity. [ADR 0004](../adr/0004-transversal-practices-and-learning.md#2-learning-critical-evaluation-and-promotion)
separates capture from promotion. The [Project Genesis convention](../conventions/project-genesis.md)
demonstrates a conditional document form, not a requirement for every project.

Michael Nygard's [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
(2011-11-15) supports small records of significant decisions and retained superseded rationale;
it is an experience report, not proof that every decision needs an ADR. The National Academies'
[Reproducibility and Replicability in Science](https://www.nationalacademies.org/read/25303/chapter/3)
(2019, Summary; DOI 10.17226/25303) supports preserving methods and uncertainty while distinguishing
reproduction, replication and generalization. Atlas's
[retirement record](../../.ai/tasks/archive/2026-09-14-retire-initial-atlas-learning-application.md)
demonstrates preservation of historical validation limits. None of these precedents justifies
indiscriminate documentation or replaces [outcome validation](verify-and-validate-outcomes.md).
