# Verify and Validate Outcomes

Accepted Atlas guidance; exact reconciled wording approved by Glenn on 2026-09-19 under
[ADR 0005](../adr/0005-foundational-transversal-practices.md).
The [practices index](README.md) locates the parent principle and governing authority.

## Expectation and purpose

Check results with evidence appropriate to the actual claim, consequences and context. Perform
the relevant checks, inspect their results and communicate their scope and limitations. A plan
to validate, a convincing explanation or a capable producer does not establish a verified outcome.

Verification checks correspondence with requirements, constraints or stated claims. Validation
checks fitness for the intended purpose and environment. They are distinct questions and may need
different evidence: a result can satisfy a specification while failing the user's actual need.

Testing exercises a behavior or hypothesis under selected conditions. It can support either
verification or validation, but analysis, inspection, demonstration and human evaluation can also
provide evidence. Automated testing is important, not a universal definition of either activity.

## Applicability and boundaries

Apply this practice when delivering results or relying on claims about their behavior or fitness.
It applies to software, documents, analyses, operational procedures and other project outcomes.
The method should fit the question; requiring a test suite for every artifact would obscure that fit.

Automated tests are especially useful for repeatable executable behavior, regression protection,
important invariants, numerous cases and consequential transformations. Manual exploration,
representative-user evaluation, independent reconciliation or a physical trial may better address
other claims. Several complementary methods may be needed.

Proportional method selection cannot waive stronger applicable project or domain requirements.
In Atlas, the existing
[knowledge-protection guidance](../architecture/overview.md#knowledge-protection-validation)
requires appropriate automated tests for future features that transform or delete durable knowledge.
This practice does not weaken that requirement or generalize it to every kind of work.

## Proportionate application

Identify what success means and the plausible failures that would matter. Select checks capable
of detecting those failures, considering consequence, uncertainty, reach, reversibility and the
expected lifetime of the result. Evidence supporting a claim should be capable of discriminating
material ways that claim could be wrong. This applies to factual and behavioral claims, not a
universal falsifiability requirement for values, preferences or authorized decisions. Address
intended use as well as stated requirements where relevant.

Expected results should have a credible basis: requirements, independently reasoned examples,
trusted reference data or another suitable source. Tests that merely repeat implementation logic
can preserve the same mistake. Assess whether the checks would detect a plausible wrong result;
test counts and coverage percentages alone do not answer that question.

Use representative conditions and relevant adverse cases. Check interactions at the boundary
where the claim is made: isolated component success cannot establish complete integration.
For consequential work, consider independent evidence or review. Where independence matters,
seek materially different evidence sources, assumptions, methods or perspectives that can expose
shared errors. Changing only the reviewer or agent does not necessarily provide independent
corroboration, nor does repeating a conclusion from a shared source.

Report what was actually checked. When material, distinguish passed, failed and inconclusive
results from checks not run, explaining deliberate omission or inapplicability. Also distinguish
blocked checks: checks that should or were intended to run but could not produce the required
evidence. These distinctions guide communication, not a mandatory result schema.

State relevant versions, inputs, conditions and remaining limitations sufficiently to interpret
or repeat consequential checks. Investigate a failed check proportionately before dismissing
its evidence or changing its expected result. A faulty check can be corrected on a justified basis;
changing an expectation solely to obtain a pass destroys its evidential value.

Passing tests do not establish unrestricted correctness. Reproducing an answer does not establish
that its assumptions, method or intended use are sound. Insufficient evidence does not establish
either truth or falsity; narrow the completion claim to what the evidence supports.

Stop when checks adequately address the material claims and risks and residual uncertainty can be
accepted within applicable constraints and existing authority. Additional checks need a useful
question, not ritual repetition. Convenience is not sufficient justification for omitting
consequential evidence. If a material check cannot produce evidence, explain the gap, alternative
evidence and remaining uncertainty, and limit claims accordingly.

Evidence determines what is supported; authority determines which decisions may proceed with
residual uncertainty. Permission to proceed does not establish correctness. As in
[investigation](investigate-and-reason-from-evidence.md), narrow or defer the affected action and
escalate when remaining uncertainty, consequences or the decision exceed delegated authority or
applicable constraints. Sufficient existing delegation does not require renewed human approval;
escalation does not itself waive constraints. Follow
[ADR 0004](../adr/0004-transversal-practices-and-learning.md#1-authority-applicability-and-justified-deviations)
for any material departure from applicable guidance.

## Failure modes and examples

- A passing API check does not establish that a browser can complete the user journey. Atlas's
  [frontend verification record](../../.ai/tasks/archive/2026-07-25-verify-frontend-graphql.md)
  remains historically Blocked despite passing narrower checks.
- A documentation change can need link checks, consistency inspection and semantic review.
  Running an unrelated application suite would not establish the document's meaning.
- A data transformation may need automated invariant and regression checks plus reconciliation
  and recovery validation. A successful process exit alone does not show that records were preserved.
- A workshop plan can be checked against stated constraints and trialed with representative
  participants. Completing every planned activity does not establish useful learning.
- A human choice among uncertain alternatives can be authorized without being empirically proven.
  Preserve that uncertainty rather than reporting approval as validation of predicted benefits.

## Evidence, rationale and related authority

[ADR 0004](../adr/0004-transversal-practices-and-learning.md#4-delegated-execution-capability)
already requires validation regardless of delegated capability. Atlas's
[retirement record](../../.ai/tasks/archive/2026-09-14-retire-initial-atlas-learning-application.md)
demonstrates documentation and scope checks without runtime tests; it records a local outcome,
not proof that those checks suffice for other retirements.

NASA's [Systems Engineering Handbook, section 2.4](https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/)
(NASA/SP-2016-6105 Rev 2, "Distinctions between Product Verification and Product Validation")
distinguishes requirements from intended use and recognizes multiple evidence methods. Its mission
processes are not imported here. Google's [Code Coverage Best Practices](https://testing.googleblog.com/2020/08/code-coverage-best-practices.html)
(Carlos Arguelles, Marko Ivanković and Adam Bender, 2020-08-07) explains why coverage cannot establish
test quality or a universal sufficiency threshold.
[Investigate and reason from evidence](investigate-and-reason-from-evidence.md) addresses assumptions
behind the checks; [preserve durable understanding](preserve-durable-understanding.md) addresses
material results and limitations that future work needs.
