# Current Task

## Formalize foundational transversal practices

- Status: semantic review complete; accepted wording recorded; awaiting explicit commit authorization.
- Date: 2026-09-18.
- Final semantic approval: 2026-09-19.
- Baseline: clean `master` at `cee947ca76bf8ff1d6d486b50ad0943e061f7d76`.
- Authority: Glenn approved the conceptual direction, then the exact ten-file scope and drafting
  instructions. After reviewing the index and all three practices, Glenn authorized reconciliation
  of accumulated feedback within that scope. Glenn approved the exact reconciled wording on
  2026-09-19 and authorized recording acceptance without staging, committing or pushing.

## Objective and plan

The canonical practices index, three definitions and acceptance ADR are prepared and semantically
approved. Record final acceptance through the permitted status and provenance updates, validate the
complete diff and stop for commit authorization. [ADR 0005](../../docs/adr/0005-foundational-transversal-practices.md)
owns decision provenance; the [practices index](../../docs/practices/README.md) owns discovery.

## Exact authorized scope

Create:

- `docs/practices/README.md`
- `docs/practices/investigate-and-reason-from-evidence.md`
- `docs/practices/verify-and-validate-outcomes.md`
- `docs/practices/preserve-durable-understanding.md`
- `docs/adr/0005-foundational-transversal-practices.md`

Modify:

- `docs/README.md`
- `docs/adr/0004-transversal-practices-and-learning.md`
- `.ai/context.md`
- `.ai/tasks/current.md`
- `docs/handoffs/current-context.md`

All other paths are protected, including Genesis, root README, AGENTS, September 16 research,
the Genesis convention/template/builder, architecture documents, ADRs 0001–0003 and archives.
ADR 0004 changes are limited to stale review-status/provenance wording.

## Acceptance and validation

- Preserve the approved parent principle and three practices, with proportional evidence,
  visible uncertainty, project-domain sovereignty and unchanged ADR 0004 authority semantics.
- Record conceptual acceptance and completed exact-wording review distinctly; link existing guidance
  without duplicating its normative wording. Preserve historical research and decisions.
- Validate exact paths, protected bytes, all local Markdown links and fragments, whitespace,
  complete diff semantics, Git status and statistics including untracked files.
- Verify ADR 0004's exact authorized substitutions and absence of implementation mechanisms.
- Use documentation checks; runtime tests do not address this checkpoint's claims.

## Validation results and review state

- Exactly five new and five modified files; all 27 other tracked files are byte-identical to HEAD.
  September 16 research also matches its preservation commit `dd4e815` byte-for-byte.
- All 194 local Markdown links across 36 Markdown files resolve, including 11 heading fragments.
- `git diff --check` and explicit whitespace/final-newline checks pass for the complete scope,
  including the five untracked files. HEAD and index remain unchanged.
- ADR 0004 matches its baseline plus exactly two authorized status/provenance substitutions,
  corroborated by its completed execution record; all accepted decision wording is unchanged.
- Reviewed the complete tracked and new-file diffs against the approved semantics. The index
  distinguishes the parent principle, three foundations, existing guidance, governance, conventions,
  historical research and open distribution. Examples include software and non-software work.
- Reviewed mechanism-related search matches: they describe exclusions, evidence limitations or
  existing authority, not a new distribution, synchronization, registry, CLI, Skill, runtime,
  scheduler, evaluator, agent or orchestration mechanism. No executable files or dependencies added.
- Resolved a rationale imprecision: the original testing theme could narrow outcome checking to
  testing, but did not itself require automation. No unresolved authority conflict was identified.
- The handoff now routes to canonical and operational owners; it retains historical checkpoint
  references without repeating the task or accepted guidance. Context edits are limited to date,
  discovery and affected current-state assertions.
- Reconciled all accumulated index and practice feedback; no requested suggestion was intentionally
  omitted. Reviewed terminology search matches and all four canonical documents together for
  consistent evidence, confidence, authority, uncertainty, applicability and provenance semantics.
- A final read-through from an external project agent's perspective finds canonical definitions,
  accepted guidance, ADR 0004 authority and the completed final wording approval directly
  from the index, without reconstructing policy from historical research. ADR 0005 records the
  review provenance without duplicating the definitions. No unresolved semantic conflict identified.
- Compared all four canonical documents with their pre-approval contents: only acceptance-status
  wording changed. No new substantive guidance was added.
- Final stale-status search found pending-review language only in historical records, not current
  guidance. Normative applicability does not prescribe context loading; existing distribution
  boundaries suffice without new prose, workflows, triggers, injection policies or mechanisms.

Glenn's final semantic approval is recorded separately from validation; passing checks did not
substitute for that approval. Material external references include identifying authors or institutions, titles,
dates/revisions and sections or pages where useful. During reconciliation, five sources were
retrieved directly; Google's coverage article direct retrieval was blocked, but its indexed
first-party result corroborated authors, date and relevant content from the earlier research.
References support reconstruction, not guaranteed future availability. No bibliography or snapshot
artifact was added. Runtime tests were not run because they would not validate these documentation
claims. No archive or closure record was created. No staging, commit or push occurred.
Stop for Glenn's explicit commit authorization. Do not stage, commit or push.

## Command record

Commands used during drafting, read-only review, reconciliation and approval recording are listed below; repeated invocations and loop
expansions are consolidated. Inline Python used only the standard library, read files and Git
objects, checked scope/bytes/links/fragments/whitespace, and calculated statistics. It wrote no files.
Edits used `apply_patch`; one patch was rejected before mutation because it targeted the handoff
twice, then corrected without expanding scope.

```text
git status --short --branch
git rev-parse HEAD
git diff --stat
sed -n '1,240p' <each required-reading file listed below>
sed -n '1,180p' docs/handoffs/current-context.md
sed -n '1,24p' .ai/tasks/archive/2026-09-16-formalize-transversal-practice-decisions.md
git diff --check
git status --short
git diff -- docs/adr/0004-transversal-practices-and-learning.md
git diff -- docs/README.md .ai/context.md docs/handoffs/current-context.md
git diff -- .ai/tasks/current.md
git diff --no-index -- /dev/null <each of the five new files>
rg -n -i 'distribution|synchroniz|registry|CLI|Skill|runtime|scheduler|evaluator|agent|orchestrat|automatic|opt.in|checklist|insufficient|uncertain|semantic review' docs/practices docs/adr/0005-foundational-transversal-practices.md
python3 - (inline validation; Git subprocess commands below)
git ls-files -z
git diff --name-only -z HEAD
git ls-files --others --exclude-standard -z
git diff --cached --name-only
git show HEAD:<each protected tracked path and ADR 0004>
git show dd4e815:docs/research/2026-09-16-transversal-knowledge-and-practices.md
git diff --numstat
git diff --no-index --numstat /dev/null <each of the five new files>
git status --short --branch --untracked-files=all
git diff --cached --stat
cat .ai/tasks/current.md
cat docs/practices/README.md
cat docs/adr/0005-foundational-transversal-practices.md
cat .ai/README.md .ai/context.md docs/README.md docs/handoffs/current-context.md docs/architecture/overview.md docs/architecture/domain-model.md
cat docs/practices/investigate-and-reason-from-evidence.md docs/practices/verify-and-validate-outcomes.md docs/practices/preserve-durable-understanding.md
rg -n -i 'authority|confidence|evidence|uncertain|applicab|validation|verification|provenance|distribut|synchroniz|registry|CLI|Skill|runtime|scheduler|evaluator|agent|orchestrat|automatic' docs/practices docs/adr/0005-foundational-transversal-practices.md
git diff -- .ai/context.md .ai/tasks/current.md docs/README.md docs/adr/0004-transversal-practices-and-learning.md docs/handoffs/current-context.md
git log -5 --oneline
rg -n -i 'review|approv|draft|pending|reconcil' .ai/context.md .ai/tasks/current.md docs/README.md docs/handoffs/current-context.md docs/adr/0005-foundational-transversal-practices.md docs/practices
rg -n -i 'await.*(semantic|review|approv)|pending.*(semantic|review|approv)|exact formulation awaits|draft awaiting|requires final approval|subject to final approval|this draft' docs .ai
rg -n -i 'prompt|session|load|inject|distribut|synchroniz|automatic|registry|CLI|Skill|runtime|scheduler|evaluator|orchestrat|taxonomy|score|schema' docs/practices docs/adr/0005-foundational-transversal-practices.md
```

The initial read loop covered `genesis.md`, `AGENTS.md`, `.ai/README.md`, `.ai/context.md`,
`.ai/tasks/current.md`, `README.md`, `docs/README.md`, `docs/handoffs/current-context.md`,
`docs/architecture/overview.md`, `docs/architecture/domain-model.md` and ADR 0004. It used `printf`
to identify each file before `sed`. No-index diffs return 1 when the new file differs from
`/dev/null`; this is expected diff output, not a failed validation. Final statistics and Git status
are reported in the completion response, avoiding a self-changing statistics record here.
The three practice files were also read individually with `cat` during semantic review. External
source checks used browser tools for the six references retained in the practices and first-party
searches for Google's article identity and NASA's handbook revision; they changed no files.
