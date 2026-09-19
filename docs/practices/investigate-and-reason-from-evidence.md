# Investigate and Reason from Evidence

Accepted Atlas guidance; exact reconciled wording approved by Glenn on 2026-09-19 under
[ADR 0005](../adr/0005-foundational-transversal-practices.md).
The [practices index](README.md) locates the parent principle and governing authority.

## Expectation and purpose

Ground material claims and choices in relevant evidence. Examine consequential assumptions,
credible alternatives and contrary evidence rather than relying on plausibility, repetition or
an agent's assertion. Before consequential invention, investigate relevant existing knowledge,
prior art, standards, conventions and project history proportionally to the decision.

Assumptions may be necessary to frame a question or proceed under uncertainty. Do not silently
treat material assumptions as established facts. Evidence informs judgment; it does not eliminate
the need for judgment or determine a project's values and goals.

## Applicability and boundaries

Investigation matters most when error would change an important decision, expose others to harm,
create lasting commitments or be difficult to reverse. Familiar, stable and readily reversible
work may need only local inspection. Research can involve reading existing records, asking a
knowledgeable person, analysis or a bounded experiment; it does not always require web research.

Established practice is relevant precedent. It may provide evidence about adoption,
interoperability, accumulated experience or ecosystem expectations, but prevalence alone does not
establish effectiveness or superiority. Prefer a proven approach when it addresses substantially
the same problem, fits the constraints and offers relevant benefits such as interoperability or
maintainability. Treat a best-practice label as a context-dependent recommendation: examine its
source, rationale, applicability and constraints rather than treating the label as self-justifying
authority. Project-required standards remain constraints; this practice does not authorize waiving them.

Deliberate invention or deviation can be preferable when existing approaches fail important
constraints, impose disproportionate costs or leave a meaningful opportunity to investigate.
Explain the material reason and evaluate the result. Exploration can generate the evidence that
does not yet exist; it need not prove its outcome in advance.

Preferences, creative intentions and authorized goals are not empirical hypotheses merely because
they influence a project. Their associated factual claims remain open to examination. Projects
retain domain authority under [ADR 0004](../adr/0004-transversal-practices-and-learning.md#1-authority-applicability-and-justified-deviations).

## Proportionate application

Identify the question and the assumption whose failure could materially change the answer. Ask
what observation or alternative explanation would challenge it, then seek sufficient credible
evidence using a proportionate method. Favor less costly methods among those that adequately
discriminate the material possibilities; adequacy comes before cost optimization. Inspect local
authoritative sources and relevant prior work; broaden investigation when unfamiliarity, volatility
or consequence warrants it.

Evaluate evidence for its relevance, origin, method, recency where material, and independence.
Prefer primary evidence where useful, but inspect its limitations. Multiple accounts repeating
one source are not independent corroboration. Compare credible alternatives without requiring a
fixed number of options or citations.

Where the distinction matters, make the kind of statement clear:

| Statement | What the reader needs to understand |
| --- | --- |
| Observation | What was directly observed under stated conditions, without treating its interpretation as verified. |
| Verified fact | A claim supported by checks against suitable evidence within a defined scope, with relevant source, revision and limits. |
| Inference | The conclusion and how supporting evidence and assumptions lead to it. |
| Hypothesis | An explanation or prediction not yet sufficiently tested. |
| Convention | An agreed way of working, its source and scope; agreement does not prove superiority. |
| Project decision | The authorized choice, rationale and accepted tradeoffs. |

These distinctions guide communication, not a mandatory labeling scheme. Confidence should reflect
the evidence and its limitations. Authority and confidence are distinct: an authorized decision may
be made under uncertainty without converting its uncertain supporting claims into established facts.

Preserve material contradictions and investigate differences in conditions, methods, versions or
source authority before reconciling them. If unresolved, narrow the conclusion and state what
remains uncertain and why it matters. Insufficient evidence establishes neither truth nor falsity.
Absence can be evidence when a suitable observation would reasonably have detected the thing sought.

Stop when further investigation is unlikely to improve the decision or safeguards enough to
justify its cost and the remaining uncertainty can be accepted within applicable constraints and
existing authority. Evidence determines what claims are supported; authority determines who may
decide to proceed with residual uncertainty. Such a decision does not change the evidential status
of uncertain claims. A deadline does not make missing evidence sufficient.

When remaining uncertainty, consequences or a needed decision exceed delegated authority or
applicable constraints, narrow or defer the affected action and escalate to the responsible
authority. Sufficient existing delegation does not require renewed human approval; escalation
does not itself waive constraints. Preserve material reasons and limits using the
[durable-understanding practice](preserve-durable-understanding.md).

## Failure modes and examples

- For a familiar local edit, inspecting nearby behavior and conventions may suffice. An exhaustive
  literature search would add cost without useful discrimination.
- Before selecting a lasting interface or process, examine applicable standards and credible
  alternatives. Blind reuse and unexplained novelty can both miss important constraints.
- In an urgent incident, available evidence may justify a reversible mitigation before a complete
  causal explanation. Keep the mitigation decision distinct from the still-uncertain diagnosis.
- A creative prototype or community pilot can investigate an unfamiliar idea. Calling it a trial
  does not justify presenting its expected benefits as demonstrated outcomes.
- Evidence collection that only confirms the preferred answer, or repeatedly reopens a settled
  low-risk question without new evidence, fails the purpose of proportional investigation.

## Evidence, rationale and related authority

[Genesis](../../genesis.md) and [ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md)
establish provenance and authority boundaries. Atlas's
[Genesis checkpoint](../../.ai/tasks/archive/2026-09-14-establish-atlas-genesis.md) demonstrates
separating human intent, implementation evidence and historical limits; it does not prove general
effectiveness across projects.

Tore Dybå, Barbara A. Kitchenham and Magne Jørgensen's
[Evidence-based Software Engineering for Practitioners](https://web-backend.simula.no/sites/default/files/publications/Dyba.2005.1.pdf)
(linked manuscript revised 2004-09-01, pp. 2–3) supports integrating appraised research with
experience, values and circumstances, while identifying limitations in available evidence.
The IAB's [RFC 1958: Architectural Principles of the Internet](https://www.rfc-editor.org/rfc/rfc1958.html)
(June 1996, section 3.2) offers a narrower engineering precedent for reusing successful solutions
without rejecting justified improvements. Neither source supplies universal project policy.
[ADR 0005](../adr/0005-foundational-transversal-practices.md)
records Atlas's acceptance rationale; [outcome validation](verify-and-validate-outcomes.md) checks
the results of the chosen approach.
