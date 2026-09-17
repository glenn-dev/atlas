# Current Task

## Formalize accepted transversal-practice decisions

- Status: documentation prepared; awaiting Glenn's semantic review and explicit approval.
- Date: 2026-09-16.
- Scope approval: Glenn approved exactly the five files below, then clarified that presumed
  applicability depends on relevance and is not universal applicability.

## Objective and accepted basis

Record the subsequent human conceptual decisions in
[ADR 0004](../../docs/adr/0004-transversal-practices-and-learning.md), with rationale and discoverability,
while preserving project-domain sovereignty and the historical research record. The concepts are
accepted; the prepared documentation wording awaits review.

The [research](../../docs/research/2026-09-16-transversal-knowledge-and-practices.md) is complete and
its preservation was committed and pushed as `dd4e815a75700cb94aad1425dac716124c51b1dd`
(`docs: preserve transversal knowledge research`). After `git fetch origin`, branch `master`, HEAD
and refreshed `origin/master` matched that commit, ahead/behind 0/0, with a clean index and working
tree. The same baseline and clean state were rechecked before editing.

## Exact approved file scope

- `docs/adr/0004-transversal-practices-and-learning.md` — new decision record.
- `docs/README.md` — decision discovery and historical research status.
- `.ai/context.md` — current state and replaceable model preference.
- `.ai/tasks/current.md` — this single task and its review state.
- `docs/handoffs/current-context.md` — concise re-entry state.

## Acceptance criteria

- Preserve strong relevant guidance, context-specific and proportional justification for material
  departures, and project-domain authority. Inapplicability requires no exception; distinguish
  alignment, justified deviation, unjustified or unexplained deviation, and insufficient evidence
  without a mandatory taxonomy, score or schema.
- Preserve agent discovery, investigation, criticism and proposals; separate capture from promotion;
  critically evaluate evidence, counterexamples and applicability limits. Recurrence supports
  evidence without a numeric threshold; a consequential single case may support a narrow candidate.
- Preserve Glenn's initial final acceptance authority and only explicitly authorized, bounded,
  inspectable and revocable future delegation. Treat exceptions as learning evidence about Atlas.
- Separate the English technical-communication default and its contextual exceptions from durable
  capability-proportional execution. Keep the current GPT-5.6 Sol or higher preference in operational
  context; require validation regardless of capability.
- Preserve only the minimum accepted feedback flows. Do not promote the research's other candidate
  practices, recommendations or detailed Apply / Review / Learn procedures.
- Preserve all files outside the approved scope, including research, Genesis, AGENTS, ADRs 0001–0003,
  the Genesis convention/template/builder and historical task records.
- Resolve local Markdown links, keep operational state consistent, pass whitespace checks and
  report final Git status and diff statistics.

## Execution and validation

The prepared change adds ADR 0004 and updates the four discovery and operational documents.
The material discovery was stale operational state: existing files described the already pushed
research preservation as uncommitted and subsequent conceptual decisions as pending. Those
current-state descriptions are corrected without rewriting historical research.

Validation of the prepared diff:

- Exact scope: five files; all 26 tracked files outside scope are byte-identical to HEAD, including
  historical research and every protected authority, convention, template, builder and archive.
- All 146 local Markdown links across the repository resolve, including both new fragment links.
- `git diff --check` and explicit whitespace/final-newline checks pass, including the untracked ADR.
- Semantic coverage reviewed against the accepted decisions and clarification: ADR sections 1–5
  cover applicability and sovereignty, learning and promotion, communication, capability and minimum
  feedback flows. The operational model preference is confined to working context as configuration;
  this task mentions it only as an acceptance criterion.
- The index, context, task and handoff agree: research preservation is committed/pushed; subsequent
  concepts are accepted; the prepared wording awaits review. No implementation mechanism is selected.
- Index remains unchanged; the four existing files are modified and ADR 0004 is untracked.
  No application tests or services are needed for this runtime-less documentation change.

Final semantic acceptance remains Glenn's review; these checks do not substitute for it. The
deferred ADR 0003 navigation issue remains a known limitation, without a new task or scope expansion.

### Command record for preparation after scope approval

Commands executed are listed below; repeated validation invocations are consolidated. The earlier
inspection and fetch are recorded in the baseline above. Inline Python checks use only the standard
library and read repository files; no validation script or dependency was added to the repository.

```text
git status --short --branch
git status --short
git rev-parse HEAD origin/master
git diff --cached --stat
git diff --stat
cat docs/README.md .ai/tasks/current.md
cat .ai/context.md docs/handoffs/current-context.md
git diff -- .ai/context.md .ai/tasks/current.md docs/README.md docs/handoffs/current-context.md
cat docs/adr/0004-transversal-practices-and-learning.md
python3 - (inline scope, protected-file, local-link and whitespace validation)
git ls-files -z
git diff --name-only -z HEAD
git ls-files --others --exclude-standard -z
git diff --cached --name-only
git show HEAD:<path> (each of the 26 protected tracked files, invoked by Python)
git diff --check
git diff --no-index --stat /dev/null docs/adr/0004-transversal-practices-and-learning.md
git diff --numstat
git rev-list --left-right --count HEAD...origin/master
```

Edits used `apply_patch`. An initial patch was rejected before mutation because it targeted the task
file twice; corrected patches stayed within the approved scope. The no-index diff returns status 1
because the new ADR differs from `/dev/null`; that is expected diff output, not a failed validation.

## Boundaries and next action

No runtime, distribution, synchronization, registry, CLI, Skill, scheduler, evaluator, learning agent
or orchestration mechanism is selected or authorized. The ADR 0003 historical-navigation issue
remains deferred and unchanged. No roadmap or follow-on implementation task is created.

Review the prepared five-file change and wait for explicit approval. Staging, committing and
pushing are not authorized; all prepared changes remain unstaged and uncommitted.

## Earlier completed checkpoint

Atlas v0.1 retirement is complete, explicitly reviewed, committed as
`38e2057be8973b7075a92901c40cba16c8b1cd62`
(`refactor: retire initial Atlas learning application`), and pushed to `origin/master`.
See the [completed execution record](archive/2026-09-14-retire-initial-atlas-learning-application.md).

No follow-on implementation task is currently authorized.
