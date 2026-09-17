# Reusable transversal knowledge and practices

Research and conceptual-design checkpoint, 2026-09-16.

## Status and authority

**Research complete; preserved for review. The conceptual model and recommendations in this
document are non-normative proposals, not accepted Atlas policy.** Glenn approved preserving
the research in five documentation files; that approval did not accept its recommendations.

- None of the candidate transversal engineering practices becomes accepted Atlas guidance through
  this checkpoint. Existing accepted constraints and repository-local instructions retain their
  existing authority; this report neither extends nor replaces it.
- Apply / Review / Learn are proposed semantics, not implemented mechanisms.
- No project automatically adopts Atlas guidance. Project-local authority remains unchanged.
- No distribution, synchronization, registry, CLI, Skill, runtime, agent or orchestration mechanism
  has been selected, implemented or authorized by this checkpoint.
- GPT-5.6 Sol or higher is Glenn's current operational preference for substantive delegated work,
  not durable Atlas identity or architecture. This report adopts no reusable execution policy.
- The proposed English default remains a recommendation for a future technical communication
  convention, not an accepted rule.
- The three human-decision questions and other open decisions below remain unresolved.

[Genesis](../../genesis.md), [ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md)
and [AGENTS.md](../../AGENTS.md) remain authoritative within their existing scopes. This research
is a synthesis to support judgment, not an additional instruction source for agents.

## Finding and evidence labels

**Inference:** Atlas has evidence for preserving reusable, conditional guidance whose adoption
and application remain project-owned. It does not yet have evidence for a universal operating
model, automatic distribution or broad cross-project policy. Project Genesis is the strongest
existing example; Atlas's engineering checkpoints provide a second demonstrated use case.

This report distinguishes:

- **Fact:** verified repository state at the baseline or an explicit checkpoint instruction.
- **Precedent:** externally documented practice or research; not automatically valid for Atlas.
- **Inference:** a conclusion drawn from identified evidence.
- **Recommendation:** a proposed choice requiring review, not accepted policy.
- **Open:** unresolved questions or insufficient evidence.

All proposed operating behavior below is a recommendation, including the behavior described
inside tables. Describing a proposal in operational terms does not adopt it.

## Verified baseline and research scope

The research began with `git fetch origin`, then verified branch `master`, HEAD and refreshed
`origin/master` at `ba51bd04f6dd3b057f68066ff51db40bd7f3434f`
(`docs: close Atlas v0.1 retirement`), ahead/behind 0/0, with a clean working tree and index.
The read-only research ended in the same state. Before the approved preservation edits, another
fetch and baseline check confirmed the same commit, zero divergence and clean state.

Git status, tracked-file inventory and recent commits corroborated the runtime-less repository
description. The retirement commit `38e2057be8973b7075a92901c40cba16c8b1cd62` is an earlier
checkpoint; operational records distinguish it from the later closure. No current sprint file
exists. No sibling repository was inspected, and no independent-project adoption is claimed.

The initial research modified no files. Subsequent authorization covers only this report,
`docs/README.md`, `.ai/context.md`, `docs/handoffs/current-context.md` and `.ai/tasks/current.md`.
Staging, committing and pushing require separate explicit approval.

## Atlas evidence examined

| Evidence | Established meaning and limits |
| --- | --- |
| [Genesis](../../genesis.md) | Human authority, domain boundaries, provenance, portability, replaceability, real use before abstraction and positive net value are accepted constraints. They do not define a distribution system. |
| [AGENTS.md](../../AGENTS.md) | Inspection, bounded scope, relevant testing, explicit validation and authority by question already govern this repository. They are not automatically cross-project doctrine. |
| [ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md) | Atlas preserves transversal knowledge; projects retain domain authority. Meaningful elevation requires durable provenance. The ingestion flow is conceptual, not implemented. |
| [Architecture overview](../architecture/overview.md) and [conceptual vocabulary](../architecture/domain-model.md) | Atlas is runtime-less. Canonical, derived, observed and inferred knowledge have distinct meanings without a schema. Future durable-knowledge transformations require appropriate tests. |
| [Project Genesis convention](../conventions/project-genesis.md), [template](../../templates/project/genesis.md) and [manual builder](../../.ai/prompts/project-genesis.md) | Reusable meaning, optional structure and an invoked procedure have distinct roles. Adoption is conditional; project intent requires human review. |
| [Diagnose](../../.ai/prompts/diagnose.md), [implement](../../.ai/prompts/implement.md), [review](../../.ai/prompts/review.md) and [finish](../../.ai/prompts/finish.md) prompts | Reusable procedures exist, but their instructions and paths are Atlas-local. They support considering generalization, not copying them unchanged into other projects. |
| [Convention record](../../.ai/tasks/archive/2026-09-03-formalize-project-genesis-convention.md) and [builder record](../../.ai/tasks/archive/2026-09-03-add-project-genesis-builder.md) | The convention, scaffold and manual workflow were established separately, without a Skill, automation or changes to sibling repositories. |
| [Genesis checkpoint](../../.ai/tasks/archive/2026-09-14-establish-atlas-genesis.md) | Human intent was reconciled with repository evidence; implementation history did not establish durable purpose. Supported facts, conflicts and historical limits were preserved. |
| [ADR 0003](../adr/0003-retire-initial-learning-application.md) and [retirement checkpoint](../../.ai/tasks/archive/2026-09-14-retire-initial-atlas-learning-application.md) | Demonstrate deliberate review, scope protection, proportional validation and retention of historical failures without selecting a replacement runtime. |
| [Root README](../../README.md), [collaboration README](../../.ai/README.md), [context](../../.ai/context.md), [current task](../../.ai/tasks/current.md) and [handoff](../handoffs/current-context.md) | Operational and discovery roles were checked against the working tree. These maintained files evolve; use the baseline commit to reconstruct their pre-checkpoint state. |

Minor deferred historical-navigation observation: ADR 0003 links its execution record through
`.ai/tasks/current.md`, while the completed record is now archived. The link resolves but no longer
lands directly on that execution record. This is not an active architectural problem or authority
for another task. ADR 0003 remains unchanged; no separate task is created here.

### What Project Genesis already teaches

**Facts:** the convention explains purpose, applicability, boundaries and evolution; the template
provides optional structure; the builder separates evidence, hypotheses, human questions and
contradictions before deliberate review. Atlas's own Genesis adoption is documented.

**Inference:** reuse transfers a method for reaching a project decision without transferring
ownership of that decision. A resulting project Genesis belongs to its project. Later template
changes do not inherently justify rewriting it. Substantial divergence from the scaffold can be
successful adoption rather than configuration drift.

**Limit:** this evidence does not demonstrate repeated successful adoption in independent
projects. Cross-project applicability and the cost of maintaining shared practices remain partly
hypotheses. A generic template and plausible terminology do not establish effectiveness.

## External precedents and their limits

Sources were consulted on 2026-09-16 during the completed research. Official documentation,
first-party engineering accounts and original research were prioritized. Older foundational
accounts are precedents, not evidence of current deployment or universal effectiveness. Linked
web documentation can change; the summaries preserve what informed this checkpoint.

| Precedent and problem | Potential transfer to Atlas | What is not established or should not be inherited |
| --- | --- | --- |
| [AGENTS.md](https://agents.md/) and [Codex instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md) reduce repeated repository explanation through persistent guidance and scoped overrides. | Predictable discovery and local specialization. | Filenames, loading order, override files and context limits are implementation details. Tool precedence does not establish domain authority or identical behavior across agents. |
| [Claude Code memory](https://code.claude.com/docs/en/memory) distinguishes human-authored instructions, agent-written memories and several scopes. | Separate approved guidance from observations; keep persistent context focused. | Automatic memory is not canonical Atlas knowledge. Context instructions are not enforced configuration; conflicting instructions and excessive context can reduce reliability. Host-specific memory and rule mechanisms are not selected. |
| [Agent Skills specification](https://agentskills.io/specification) and [OpenAI workflow documentation](https://learn.chatgpt.com/docs/build-skills) package task-specific instructions and resources. | Progressive disclosure: discover a short description, then load relevant detail. | Packaging, trigger syntax, tool permissions and installation are delivery choices. Automatic matching can miss relevant work or invoke irrelevant procedures. The format does not confer authority. |
| [Google review standard](https://google.github.io/eng-practices/review/reviewer/standard.html) and [small changes](https://google.github.io/eng-practices/review/developer/small-cls.html) make engineering expectations reusable. | Evidence-based judgment, coherent reviewable changes, distinction between blocking findings and preferences. | Google-specific roles and testing requirements are not Atlas obligations. Small means understandable and self-contained, not a universal line limit. Review should enable useful progress rather than demand perfection. |
| [Spotify golden-path experience](https://backstage.io/blog/2020/09/08/announcing-tech-docs/) and [Backstage templates](https://backstage.io/docs/features/software-templates/) provide supported routes and initial scaffolds. | Make useful defaults easier to follow and maintain what people actually use. | No portal, catalog, platform team, approved stack or scaffolder is justified here. Spotify reports ownership and dependency difficulties in large guides; scaffolding alone does not maintain future alignment. |
| [Copier updates](https://copier.readthedocs.io/en/stable/updating/) account for evolving templates and local changes. | Identify source revisions, inspect updates and expect conflicts. | The CLI, answers file, merge algorithm and version conventions are implementation-specific. Conflicts can require manual resolution; a merge cannot decide semantic ownership. |
| [GitLab handbook direction](https://handbook.gitlab.com/handbook/about/direction/) preserves organizational operating knowledge. | Durable discoverable explanations reduce repeated conversations. | Its company-wide authority cannot be imported into Atlas's relationships with independent projects. A shared handbook does not establish universal truth. |
| [Diataxis](https://diataxis.fr/) separates documentation by reader needs. | Explanation, reference and task instructions serve distinct purposes. | Its four forms are neither an authority model nor a required Atlas taxonomy. |
| [Original ADR proposal](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) preserves consequential decisions and context. | Retain rationale, consequences and superseded decisions. | Not every practice adjustment needs an ADR; a historical local decision is not automatically a reusable rule. |
| [Google SRE postmortems](https://sre.google/sre-book/postmortem-culture/) turn significant experience into reviewed learning. | Preserve evidence, examine causes, review conclusions and share with relevant audiences. | Incident ceremonies, organizational scale and specific tools are unnecessary here. One incident does not prove a universal lesson; confidentiality still bounds sharing. |
| [YAGNI and evolutionary design](https://martinfowler.com/bliki/Yagni.html) resist speculative capabilities. | Defer abstractions until useful while retaining the ability to change. | This does not justify neglecting maintainability, tests or necessary design. |

### Empirical evidence on persistent instructions

- **Precedent:** Lulla et al. studied 124 pull requests across ten repositories and reported lower
  median runtime and output-token consumption with AGENTS.md. Their focus was operational
  efficiency, not proof of universal engineering-quality improvement.
  [Original study, revised March 2026](https://arxiv.org/abs/2601.20404v2).
- **Precedent:** Gloaguen et al. found no general improvement in task success and average inference
  cost increases exceeding 20%. The revised study distinguishes generated and human-authored
  context; its Python task-resolution evaluation does not cover every quality or governance
  outcome. [Original study, revised June 2026](https://arxiv.org/html/2602.11988v2).
- **Precedent:** Khatri's July study of two agents, 17 tasks and three repositories found no
  measurable correctness improvement from context strategy in its tested tasks. The small
  repository sample limits generalization. [Original study](https://arxiv.org/abs/2607.27250).

**Inference:** these different studies neither establish that instructions always help nor that
they are useless. Guidance can communicate expectations without improving benchmark completion.
**Recommendation:** assess mistakes prevented, useful outcomes and effort added in actual Atlas
use. More instructions, stronger models or shorter files alone do not establish effectiveness.
No benchmark infrastructure is proposed by this finding.

## Candidate engineering practices: evidence and proportionality

Every generalization in this table remains a proposal. Existing local rules remain in force
within their current scope; this table does not promote them to transversal doctrine.

| Candidate | Evidence basis | Proposed qualification |
| --- | --- | --- |
| Inspect and verify before assuming | Fact: AGENTS, diagnose prompt and checkpoint baseline checks. | Strong working-default candidate; inspect evidence that can materially change the answer. |
| Investigate relevant prior work | Fact: Git-history guidance and Genesis builder. | Use relevant history and maintained evidence, not exhaustive archaeology. |
| Research established practices before invention | Fact: requested in this checkpoint; compatible with Genesis. Precedent: the engineering sources above offer existing alternatives. | Apply where unfamiliarity, volatility or consequences justify it; not mandatory browsing for every edit. |
| Compare meaningful alternatives | Precedent: review guidance and ADRs; Atlas records consequential decisions. | Compare credible options, including the current approach when appropriate. No ceremonial option count. |
| Document proportionally to durability and importance | Fact: separate Genesis, ADRs, maintained docs and operational context. | Preserve durable meaning without creating a document for every observation. |
| Test proportionally to risk and change | Fact: AGENTS and conditional knowledge-protection testing in the overview. | Retain explicit local checks. Select additional tests for actual behavior and risks, not a universal suite. |
| Validate completed work explicitly | Fact: finish prompt and checkpoint records. | Compare results with the objective; commands passing is not sufficient evidence of success. |
| Preserve provenance and evidence | Fact: Genesis and ADR 0002. | Already an Atlas constraint; shared-practice application needs explanation, not a replacement principle. |
| Preserve relevant history | Fact: retirement archive and ADR supersession. Precedent: ADRs. | Retain consequential history and failed checks without preserving all transient activity. |
| Expose uncertainty, risks and assumptions | Fact: Genesis builder and knowledge distinctions. | Make material uncertainty visible; avoid boilerplate disclaimers. |
| Prefer small, inspectable, reviewable changes | Fact: AGENTS. Precedent: Google review guidance. | Optimize coherence and inspectability, not line count. |
| Avoid speculative abstraction or infrastructure | Fact: Genesis and retirement decision. Precedent: YAGNI. | Does not prohibit necessary design or maintaining the ability to change. |

## Proposed conceptual model

**Recommendation:** begin with three questions rather than an exhaustive taxonomy:

1. What guidance exists, and why?
2. Who adopted it, for which work, and with what authority?
3. What evidence explains its application or revision?

| Role | Authority, durability and use | Evidence basis and status |
| --- | --- | --- |
| Principle or boundary | Enduring intent for its owner; deliberate stewardship changes it. Ordinary application cannot waive a hard boundary. | Fact: Genesis. Recommendation: reference existing principles rather than create another constitution. |
| Reusable practice or convention | Explains an outcome, rationale, applicability and useful approaches. Atlas owns shared wording; project authority depends on adoption. | Fact: Project Genesis convention. Inference: suitable for qualified engineering practices. |
| Workflow | Bounded procedure with inputs, outputs, decision points and stopping conditions. Invoked for a purpose; can evolve faster than its underlying practice. | Fact: manual builder and engineering prompts. Recommendation: keep procedures distinct from durable intent. |
| Template or example | Optional construction aid with no independent policy authority. The resulting artifact becomes locally owned. | Fact: Genesis template. Precedent: scaffolding. |
| Project-local adoption and rules | Establish local applicability, modifications and stronger constraints. Owned and evolved locally. | Fact: domain sovereignty and Atlas AGENTS. Recommendation: make adoption reconstructable. |

These are roles, not mandated directories, schemas or mutually exclusive classes. A short
convention can contain explanation, examples and a procedure. Evidence and rationale support
guidance; they do not become instructions merely because they appear beside it.

**Recommendation:** consequential guidance should make its owner and status, problem and scope,
applicability and exclusions, invocation, permitted adaptation, evidence and source revision
understandable. Its durability should follow what it describes: principles change slowly;
procedures and operational configuration can change sooner. A project decision governs local
overrides; Atlas review governs shared revisions. Ordinary prose may suffice.

**Open:** whether repeated use ever justifies standardized metadata. A fixed field schema,
capability taxonomy or practice catalog is not selected.

### Distinctions needed before any distribution design

| Distinction | Proposed meaning |
| --- | --- |
| Shared Atlas guidance | Atlas-owned wording, rationale, evidence and revision history. Publication does not automatically authorize application elsewhere. |
| Project-local adoption | The project's decision about scope, applicability, revision and exceptions. A task-specific adoption need not become standing repository policy. |
| Project-owned output | An artifact produced with guidance, such as a project's Genesis. Its subsequent meaning and evolution belong to that project. |
| Reference to shared guidance | Identifies an external source instead of reproducing its content. A reference alone does not prove adoption or that an agent loaded it. |
| Intentional maintained projection or snapshot | A deliberately managed downstream representation with an explicit source and update relationship, if a future mechanism chooses one. Copying text does not establish this relationship by itself. |

**Inference:** an older pinned revision or deliberate local adaptation is not inherently
configuration drift. The relevant risk is an unrecognized mismatch between what a project
believes it adopted and what is actually being applied. Template divergence in project-owned
output is not automatically a synchronization problem.

## Competing alternatives

| Alternative | Assessment and proposed disposition |
| --- | --- |
| One global Atlas instruction file | Initially simple, but conflates authority, consumes context and encourages indiscriminate application. Not recommended as the conceptual foundation. |
| Unrelated guidance in every project | Protects local autonomy but loses reusable learning and requires repeated explanation. Preserve autonomy while investigating shared references. |
| Copy a complete Atlas instruction pack everywhere | Portable snapshots, but ambiguous ownership and costly reconciliation. Not recommended as an automatic default. |
| Make everything a Skill or workflow | Helps invocation but makes meaning dependent on delivery and obscures evidence, principles and local authority. Not recommended. |
| Comprehensive taxonomy and registry | Could help at scale; demonstrated needs do not justify its architecture or maintenance. Defer. |
| Conditional shared guidance with explicit adoption and provenance | Best conceptual fit to Genesis, ADR 0002 and the Genesis example. Recommendation only; mechanism and adoption remain open. |

## Apply / Review / Learn: proposed semantics

These describe possible operations, not implemented mechanisms, commands or agent instructions.

### Apply

**Recommendation:** select and adapt relevant guidance within existing authority. A request to
prepare work would authorize preparation; a request to execute would shape already-authorized
execution. Neither would grant additional product or mutation authority.

A proposed application would establish task and local constraints, identify relevant accepted
guidance and its revision, choose a proportional approach, surface material conflicts, perform
authorized work and validate the outcome. Routine adaptations need not create ceremony. A typo
correction does not need architectural alternatives; a consequential migration may need research,
tradeoffs, recovery planning and broader validation.

If material cannot be obtained, the agent would disclose the limitation and rely on available
local authority rather than invent an Atlas policy. This proposal does not make the candidate
practices in this report accepted inputs to Apply.

### Review

**Recommendation:** compare actual evidence with relevant expectations. Before work, assess the
proposal and planned validation; after work, inspect what actually happened. A plan to test is not
evidence that testing occurred.

A useful finding would connect relevant guidance, observed evidence, alignment or tension,
consequence and suggested response. Alignment, gaps, deviations, justified local exceptions and
uncertainty would remain distinguishable. Missing evidence means not established, not necessarily
failed. An advisory recommendation would become an obligation only through authoritative adoption.

Review would support judgment without an aggregate compliance score. It would not authorize
remediation, product decisions or expanded scope.

### Learn / Promote

**Recommendation:** distinguish local learning, a transversal candidate and accepted Atlas
guidance. A candidate would identify the problem, durable evidence, proposed generalization,
applicability limits, counterexamples and likely benefit elsewhere. No worthwhile transversal
lesson is a valid outcome.

Atlas retirement supports considering a lesson about preserving historical validation limits
when retiring work. It does not imply that other projects should retire their runtimes. Local
decisions would not become shared practices automatically.

## Authority, adoption, overrides, evolution and promotion

**Recommendation:** distinguish authority over a shared definition from authority over a
project's behavior. Atlas could own the wording and history of a convention while a project
decides whether and how to adopt it. Existing domain authority in Genesis and ADR 0002 is a fact;
the adoption process proposed here is not an accepted extension of those documents.

| Situation | Proposed behavior |
| --- | --- |
| Task-specific adoption | Apply selected guidance for that task without inferring permanent repository adoption. |
| Standing adoption | Preserve sufficient local scope, source, revision and exceptions to reconstruct the decision; representation remains open. |
| Local specialization | Use compatible adaptations; surface material differences rather than log every trivial choice. |
| Conflict with authoritative project constraints | Surface the exact conflict and use the responsible local decision process. Shared guidance cannot silently displace it. |
| Conflict with Atlas's own hard boundaries | Do not treat it as an ordinary local exception; Atlas participation may need to stop or narrow. Domain sovereignty does not waive Atlas's boundaries. |
| Conflict among local sources | Classify intent, executable behavior, architectural decision, documented understanding or operational state; seek the responsible authority rather than apply a universal ranking. |
| Local exception | Keep rationale and scope locally. It does not mutate Atlas. |
| Shared revision | Preserve rationale and prior meaning. Publication does not automatically authorize downstream changes. |
| Deprecation | Explain why guidance is no longer recommended, identify a replacement when useful and preserve reconstructable history. |

**Recommendation:** Project → Atlas promotion would normally require durable evidence of a
meaningful outcome or problem; a transferable explanation independent of incidental domain and
stack choices; limits and contrary evidence; recurrence in distinct contexts where available;
expected benefit exceeding process and maintenance cost; permission to preserve the evidence;
and an appropriate human acceptance decision.

Recurrence would support confidence rather than impose an arbitrary quota. One consequential
case could justify a narrowly scoped provisional recommendation; many repeated observations
could still fail to establish generality. A proposed provisional status is not a selected
lifecycle schema. Confidential or externally owned evidence would remain subject to its owner's
boundaries; Atlas need not copy entire project records.

**Recommendation:** Glenn would initially accept new shared normative guidance; any later
delegation would be explicit and bounded. Agents could prepare proposals without autonomously
accepting policy. This governance choice remains one of the unresolved human questions.

## Normally active, conditional and invoked guidance

The always-on versus invocable distinction is useful but incomplete.

| Proposed mode | Examples | Reasoning |
| --- | --- | --- |
| Normally active working defaults | Respect authority, distinguish evidence from inference, verify material claims and stay within scope. | Guide substantive work without requiring every explanatory document in context. |
| Conditional guidance | Architecture research, migration validation and durability-sensitive documentation. | Activated by task characteristics, consequences and uncertainty. |
| Explicitly invoked workflows | Build a Project Genesis, conduct an Atlas review or prepare a promotion proposal. | Pursue a particular bounded outcome. The Genesis builder exists; transversal Review and promotion operations remain proposals, distinct from Atlas's repository-local review prompt. |

**Evidence basis:** conditional Genesis reading and its invoked builder already exist; progressive
disclosure has external precedents. Persistent-instruction research cautions against assuming that
additional context improves outcomes.

**Recommendation:** normally active expectations would be few, with detailed explanations
available on demand. Test commands, model identifiers, specialist workflows and template sections
would not become a universal core. **Open:** the useful minimum and how it would be loaded.
No instruction file, loader or distribution mechanism is selected.

## Agent execution policy analysis

**Inference:** guidance about how delegated work is performed can be distinct from project-domain
rules. **Recommendation:** separate potentially durable intent, current technological configuration
and technical communication conventions. This checkpoint accepts no reusable execution policy.

### Candidate durable intent

The proposed policy would favor sufficient reasoning capability and result quality over
unnecessary speed or cost optimization. Selection would account for complexity, ambiguity,
consequences and project characteristics. Capability would be deliberately reduced only for
demonstrably mechanical, bounded, low-risk work unlikely to benefit materially from stronger
reasoning, and reassessed if consequential ambiguity emerges.

A prepared delegated engineering prompt would state recommended capability/model and reasoning
effort; unavailable or unverified actual settings would be disclosed. Result validation would
remain necessary regardless of model strength. A model name alone would not prove suitability.

**Precedent:** OpenAI recommends establishing adequate accuracy before optimizing cost and
latency, then testing whether a smaller model maintains it. This supports the quality-first
pattern, not a universal ranking or a requirement to build an evaluation system.
[Official model-selection guidance](https://developers.openai.com/api/docs/guides/model-selection).
**Fact:** replaceability is already required by Genesis and ADR 0002.

### Current operational preference

**Fact from Glenn's checkpoint instruction:** GPT-5.6 Sol or higher is the current baseline
preference for substantive delegated work; a lower-capability choice needs concrete justification.
This is replaceable operational configuration, not durable Atlas identity, architecture or an
accepted reusable policy. The [official model page](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
confirmed the model and supported reasoning settings during research; it does not establish an
optimal setting for every task.

**Recommendation, not an adopted default:** a prompt for work like this conceptual checkpoint
could recommend GPT-5.6 Sol or a stronger suitable model with high reasoning effort, increased
where supported and justified by unresolved ambiguity. Requested settings would be distinguished
from actual execution settings. What counts as stronger across future providers remains open;
newer names alone would not establish it.

### Proposed English default

**Recommendation:** place language choice in a future technical communication convention,
referenced where relevant by execution guidance. Its rationale applies to humans, repository
artifacts and agents, not just model selection.

The proposed scope is English by default for delegated technical prompts, repository instructions,
technical documentation and ADRs unless project/domain requirements, fidelity to source material
or a concrete communication need justify another language. It would not require translating
source evidence, rewriting history, changing domain terminology or making products English.

**Precedent:** [GitLab communication guidance](https://handbook.gitlab.com/handbook/communication/)
uses English as a shared written language within its organization. Its company-wide reach is not
transferable to Atlas. The reviewed evidence does not establish a universal reasoning-quality
advantage for English. Placement and adoption remain unresolved; no English rule is accepted here.

## Distribution and discovery alternatives

The demonstrated need is reducing repeated explanation while preserving authority and
reconstructability. **Recommendation:** evaluate possible mechanisms against that need only
after conceptual decisions and further real use. None is selected or authorized here.

| Alternative | Potential value | Unresolved cost or failure mode |
| --- | --- | --- |
| Filesystem references | Simple access to canonical material; used by the manual Genesis builder. | Machine-specific paths, availability and changing source state. |
| Repository-local AGENTS references | Visible adoption near local instructions. | Host support and whether references are actually followed. |
| Versioned snapshots | Offline availability and reproducibility. | Duplicate copies, update responsibility and ownership ambiguity. |
| Generated or synchronized instructions | Consistent projections into supported hosts. | Semantic conflicts, silent overwrites and maintenance machinery. |
| Reusable prompts | Explicit, inspectable invocation. | Discovery and repeated manual invocation. |
| Skills | Task-specific discovery and progressive loading. | Trigger reliability, host semantics and dependency portability. |
| Templates/scaffolds | Efficient initial adoption. | Do not establish continuing governance or maintenance. |
| Registry, CLI or agent discovery | Could help if finding and updating guidance becomes a recurring burden. | No demonstrated scale or failure currently justifies implementation. |

**Recommendation:** any future mechanism would expose source identity and revision, local
modifications and update behavior. Portable durable meaning would survive its replacement.
Project-owned output, a source reference and an intentionally maintained projection would retain
their distinct ownership and evolution semantics. No automatic two-way synchronization is implied.

## Risks and anti-patterns

These are proposed restraints derived from existing Genesis concerns, not a new compliance system.

| Risk | Proposed restraint |
| --- | --- |
| Giant global configuration file; excessive context | Keep persistent content small and retrieve detail by relevance. |
| Bureaucracy; checklist-driven development | Assess useful outcomes and proportional evidence rather than ritual completion. |
| Irrelevant guidance | Explain applicability and exclusions; allow not relevant as a legitimate finding. |
| Duplication and configuration drift | Distinguish references, snapshots and project-owned output; make actual adoption and revisions visible. |
| Conflicting global/local authority | Use authority by question and explicit adoption rather than a universal precedence ladder. |
| Institutionalized stale practices | Reconsider guidance when evidence, context or recurring exceptions change; deprecate visibly. |
| Premature taxonomies or speculative tooling | Add distinctions only to resolve demonstrated ambiguity or recurring work. |
| Provider-specific assumptions becoming durable policy | Separate capability intent from model names, host formats and current settings. |
| Every local lesson becoming doctrine | Require a transferable claim, evidence, limits and acceptance review. |
| Agents making product decisions beyond delegation | Apply and Review would remain bounded methods, not grants of authority. |
| Cleaner narratives replacing history | Preserve superseded decisions and historical failures with their original meaning. |
| Provenance becoming indiscriminate capture | Preserve material evidence subject to ownership and confidentiality; avoid raw-activity accumulation. |
| Process cost exceeding value | Assess mistakes prevented and reconstruction effort saved against maintenance and human attention consumed. |

## Three unresolved human-decision questions

Approval to preserve this report answers none of these questions.

1. **Initial authority:** should accepted shared practices initially be advisory defaults that
   projects adopt selectively? Recommendation: yes; authoritative local adoption could make
   selected expectations binding locally.
2. **Promotion authority and evidence:** should new normative practices initially require Glenn's
   acceptance, with recurrence normally expected but narrowly justified single-case proposals
   allowed? Recommendation: yes; agents prepare evidence and proposals.
3. **Working preferences:** should the English default become a technical communication convention
   separate from execution-capability guidance, with the Sol baseline retained as replaceable
   operational configuration? Recommendation: yes. This asks about future policy scope, not
   reconfirmation of the current model preference.

## Deliberately open decisions

- Distribution through filesystem references, AGENTS, Skills, prompts or another mechanism.
- Revision numbering, pinning, update notification and synchronization.
- A registry, CLI, runtime, discovery service, agents or orchestration.
- Formal metadata, practice identifiers and a comprehensive taxonomy.
- Quantitative promotion thresholds, lifecycle statuses or review schedules.
- Model ranking across providers and a universal reasoning-effort setting.
- Which candidate engineering practices, if any, deserve transversal acceptance.
- Cross-project effectiveness until independent-project evidence exists.

The next meaningful action is human review of the conceptual decisions. Implementation and
distribution choices remain unauthorized and open. This checkpoint creates no roadmap, follow-on
implementation task, automatic adoption or accepted execution policy.
