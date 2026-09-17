# ADR 0004: Transversal practices and learning

- Status: Accepted conceptual decisions; documentation prepared for semantic review
- Date: 2026-09-16
- Authority: Glenn's subsequent human conceptual review and applicability clarification

## Context and decision provenance

The [September 16 research report](../research/2026-09-16-transversal-knowledge-and-practices.md)
preserved three unresolved human-decision questions. Research preservation was committed and
pushed as `dd4e815a75700cb94aad1425dac716124c51b1dd`; it did not accept the report's proposals.
Glenn subsequently accepted the decisions recorded here and authorized their documentation.
The wording of this ADR is awaiting semantic review; the underlying conceptual decisions have
already been accepted.

The report remains an unchanged, historical, non-normative record. In particular, its recommendation
of advisory guidance with selective project adoption differs from the subsequently accepted
presumption of applicability. This ADR records that deliberate choice without rewriting research
or accepting its other recommendations, candidate engineering practices or detailed procedures.

[Genesis](../../genesis.md) and
[ADR 0002](0002-sovereign-knowledge-and-project-boundaries.md) preserve human authority, project-domain
sovereignty, provenance, replaceability and learning from meaningful project evidence. The decisions
below explain transversal guidance within those boundaries; they do not supersede them.

## Decisions

### 1. Authority, applicability and justified deviations

Accepted transversal Atlas practices are fundamental working guidance, presumed applicable when
relevant to the project and work being performed. Presumed applicability is not universal
applicability. Guidance that genuinely does not apply to the context requires no exception.
An applicable practice must not be silently ignored because a project did not explicitly opt into it.

Practices are neither absolute nor immune to challenge. When an accepted practice is materially
applicable and a project nevertheless chooses to depart from it, the departure requires an explicit,
context-specific and sufficiently strong justification, proportional to the importance of the
practice and the consequences of the deviation. Material deviations should remain visible enough
to understand why the practice was not followed and which relevant consequences or risks were
accepted or mitigated.

Reasoning about application must distinguish guidance that is not applicable, work that applies or aligns with the guidance,
a justified deviation, an unjustified or unexplained deviation, and insufficient
evidence to determine alignment. Lack of evidence does not establish either alignment or a
deviation. These distinctions support judgment; they are not a mandatory compliance taxonomy,
score, schema, exception form or implementation mechanism.

Reusable guidance can shape how a project reaches and validates decisions without transferring
ownership of its domain decisions to Atlas. Projects retain that ownership, including when they
justify a deviation. Atlas retains authority over its shared transversal guidance. A project-local
exception does not itself revise the shared practice. Existing Atlas principles and hard boundaries
may have stronger authority than ordinary practices; this exception policy does not waive them or
establish a comprehensive hierarchy. Material authority conflicts must be surfaced rather than
silently resolved by treating either project sovereignty or shared guidance as unlimited.

**Rationale:** relevant accepted guidance should have real force without depending on repeated
opt-in, while contextual judgment and project ownership remain necessary. Proportional explanation
supports accountability and learning without requiring ceremony for irrelevant guidance.

### 2. Learning, critical evaluation and promotion

Agents may identify, investigate, abstract, compare, criticize, synthesize and propose transversal
learning candidates. Candidates may arise opportunistically during project work, from an explicit
human request to consider transferring recent learning to Atlas, or eventually from periodic
retrospective analysis across meaningful project evidence. Recognizing the latter possibility does
not select or authorize a periodic evaluator or schedule.

Capture is not promotion. A local observation or a captured candidate must not automatically become
normative Atlas guidance. Before promotion, a candidate must undergo deliberate critical evaluation.
Relevant evidence and considerations may include:

- recurrence across work or projects;
- transferability beyond incidental domain or technology details;
- material impact;
- established external practices or conventions;
- practices characteristic of our demonstrated way of working;
- contrary evidence and counterexamples;
- applicability limits;
- expected benefit versus process and maintenance cost;
- provenance and reconstructability; and
- the severity or significance of a single exceptional case.

These considerations call for judgment, not a mandatory checklist or numeric threshold. Recurrence
strengthens evidence but is not required: one consequential case may justify a narrowly scoped
candidate. Repetition alone does not establish generality. Evaluation must critically examine
counterevidence and applicability limits rather than merely accumulate supporting observations.
Evidence remains subject to Genesis's ownership, confidentiality and external authority boundaries.

Exceptions and recurring justified deviations are learning evidence about Atlas itself. They may
show that a practice needs refinement, narrower applicability, division, deprecation or retirement.
Atlas should learn from projects rather than merely impose guidance upon them.

Initially, agents may perform the expensive discovery, evidence gathering, comparison, criticism and
synthesis, but Glenn retains final authority to accept new normative transversal guidance. Future
delegation of promotion authority is possible only when explicitly authorized, bounded, inspectable
and revocable. No such delegation is made here.

**Rationale:** project experience can improve shared guidance without turning every local outcome
into doctrine. Critical evaluation protects against incidental generalizations and stale practices;
human acceptance keeps normative promotion within the existing authority model.

### 3. Technical communication

English is the default for delegated technical prompts, repository instructions, technical
documentation and ADRs. Project or domain requirements, fidelity to source material, or a concrete
communication need may justify another language. This default does not require rewriting historical
material or making user-facing products English.

**Rationale:** a shared technical communication default reduces repeated language decisions while
preserving contextual needs. Language choice is a separate concern from execution capability.

### 4. Delegated execution capability

Use reasoning capability proportional to the complexity, ambiguity, consequences and characteristics
of the work. Favor trustworthy result quality over unnecessary optimization for cost or latency.
Deliberately reduce capability only for demonstrably mechanical, bounded and low-risk work, and
reassess if ambiguity or consequence increases. Validation remains necessary regardless of model
capability.

When Atlas prepares substantive delegated engineering prompts, the recommended model or capability
and reasoning effort should be stated when useful and available. This does not prescribe a universal
reasoning-effort setting or model ranking across providers.

The current model preference is maintained separately as
[operational configuration](../../.ai/context.md#current-delegated-execution-preference).
Model names are replaceable configuration, not Atlas identity, architecture or a durable provider
dependency.

**Rationale:** consequential or ambiguous work benefits from suitable reasoning capability, but
capability cannot replace validation. Separating the durable selection principle from current model
names preserves Atlas's independence as available capabilities change.

### 5. Minimum conceptual feedback flows

The accepted relationship can be expressed as:

```text
Project work → local evidence → transversal candidate → critical evaluation → accepted Atlas practice
Atlas accepted guidance → project application → evidence/review → possible exception or learning
```

The first flow includes the acceptance authority above; it is not automatic promotion. The second
is conditional on relevance and preserves project-domain authority. Learning can change Atlas's
guidance through deliberate evaluation and acceptance, rather than flowing only from Atlas to
projects.

Apply / Review / Learn remain useful conceptual language for these relationships. This ADR accepts
only the minimum meaning expressed here, not the research's detailed proposed procedures, operation
contracts, guidance modes or adoption model. The flows define no commands, agents or runtime.

## Consequences and limits

- Relevant accepted practices provide strong working guidance; material departures require
  proportional justification without making every practice universally applicable.
- Projects retain domain decisions while Atlas can improve its own practices from project evidence.
- Evidence gathering and criticism can be delegated without delegating normative acceptance.
- Communication defaults, durable capability principles and replaceable model configuration remain
  distinct, with validation required regardless of capability.
- Applicability, justification and promotion require judgment and attention. Their value must be
  weighed against process and maintenance cost; this decision creates no compliance bureaucracy.

No runtime, distribution, synchronization, registry, CLI, Skill, scheduler, evaluator, learning agent
or orchestration mechanism is selected or authorized. No severity taxonomy, compliance scoring,
mandatory exception schema, numeric promotion threshold or implementation architecture is created.
The report's other candidate engineering practices and recommendations remain non-normative.
This checkpoint creates no roadmap or follow-on implementation task.

## Evolution

Later changes to these decisions should preserve their rationale and prior meaning in decision
history. Evidence from application, exceptions and critical review may justify reconsideration;
capturing that evidence does not itself change accepted guidance. Current operational model choices
can evolve separately without redefining Atlas's durable identity or these capability principles.
