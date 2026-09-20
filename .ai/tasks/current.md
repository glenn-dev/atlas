# Current Task

## Preserve existing-capabilities research and close stale operational state

- Status: documentation prepared and validated; awaiting Glenn's semantic review.
- Date: 2026-09-20.
- Baseline: clean `master` at `3ad4ae05a21a7acc7d7d769c0d2ddc098beee6d3`.
- Authority: Glenn approved exactly the proposed six-file documentation scope after read-only
  verification, then requested preparation and complete changes/validation for semantic review.
- This is the only active task. The Work → Codex → Work experiment is a proposed next step,
  not an active or authorized execution task.

## Objective and exact scope

Preserve the completed research with its evidence/status distinctions, close the stale
foundational-practices task without rewriting its history, and provide concise re-entry guidance.
The [research record](../../docs/research/2026-09-20-existing-capabilities-and-atlas-owned-gaps.md)
owns detailed findings, sources, limitations and experiment criteria. Preservation is not adoption
of its recommendations, a reusable operational policy or an architecture.

Create:

- `docs/research/2026-09-20-existing-capabilities-and-atlas-owned-gaps.md`
- `.ai/tasks/archive/2026-09-18-formalize-foundational-transversal-practices.md`

Modify:

- `docs/README.md`
- `.ai/context.md`
- `.ai/tasks/current.md`
- `docs/handoffs/current-context.md`

All other paths are protected, including Genesis, AGENTS, root README, accepted ADRs/practices,
architecture documents, September 16 research, existing archives and the sibling directory.

## Baseline and historical closure

HEAD and cached `origin/master` match the baseline, ahead/behind 0/0. During scope verification,
a fresh read-only `git ls-remote --exit-code origin refs/heads/master` confirmed that commit on the
remote; no fetch updated local refs. The first sandboxed query failed on DNS, and an approved
network retry succeeded. Working tree and index were clean before the approved edits.

The [foundational-practices archive](archive/2026-09-18-formalize-foundational-transversal-practices.md)
now owns that completed checkpoint's preparation, validation and closure evidence. Its historical
pending-commit statements are not current instructions. No commit/push authorization timestamp is
invented from the verified Git state.

## Acceptance and validation

- Preserve Atlas-owned durable meaning/authority separately from replaceable execution capability.
- Preserve manual transport as demonstrated friction, not proof that custom software is needed.
- Keep configuration first and historical roadmap retirement as qualified recommendations.
- Preserve source provenance, material version sensitivity, unverified assumptions and ownership
  alternatives without promoting external documentation into integrated execution evidence.
- Preserve the read-only experiment and its failure interpretation; no failure authorizes a bridge.
- Check the exact six-path scope, unchanged protected files/HEAD/index, archive fidelity, sibling-note
  integrity, local Markdown links/fragments, whitespace, full diff semantics and Git statistics.
- Use documentation checks; runtime tests or the proposed experiment do not belong to this task.

## Validation results

- Exactly four modified and two new Markdown files, matching the approved scope. All 33 other
  tracked files are byte-identical to the baseline; HEAD and index are unchanged.
- All 211 local Markdown links across 38 Markdown files resolve, including 12 heading fragments.
  `git diff --check` and explicit whitespace/final-newline checks pass on the complete scope,
  including untracked files. Link checks establish local navigation, not external source validity.
- The archived preparation body matches the committed original exactly except for its two relative
  Markdown link destinations. Its closure introduction distinguishes observed Git state, Glenn's
  account and historical approval evidence without inventing authorization events.
- The sibling note's SHA-256 remains unchanged from the pre-edit observation recorded in research.
  No sibling file was written. Genesis, ADRs, accepted practices and September 16 research are intact.
- Inspected the complete changes and new-file contents against the approved scope: research retains
  evidence distinctions, version-sensitive sources, alternatives, limitations, approval boundaries,
  selective context transport, the untested experiment and all four failure interpretations.
  The completed practices history is archived; current context/handoff no longer direct execution
  through its stale pending-commit state. No runtime, dependency or implementation is introduced.
- Runtime tests and the Work → Codex experiment were deliberately not run. No sandbox repository
  was created. External capability claims preserve the dated research, not new execution evidence.

Glenn's semantic review remains pending and is separate from these checks. No staging, commit or
push occurred; validation does not authorize those actions or the proposed experiment.

## Command and edit record

Scope verification, drafting and validation used the following commands; repeated invocations and concrete
file-list expansions are consolidated. Reads covered AGENTS, Genesis, `.ai/README.md`, context,
current task, root/docs READMEs, handoff, ADRs 0002–0005, the practices index and all three practices,
architecture overview/domain vocabulary, September 16 research and its completed formalization
record, and the historical sibling note. No external product capability was re-tested during
preservation; external references preserve the preceding research's dated evidence.

```text
git status --short --branch --untracked-files=all
git branch --show-current
git rev-parse HEAD
git rev-parse origin/master
git rev-list --left-right --count HEAD...origin/master
git log -4 --oneline
git diff --stat
git diff --cached --stat
git diff --check
git ls-remote --exit-code origin refs/heads/master
cat <required-reading and drafting files identified above>
sed -n '1,90p' docs/research/2026-09-16-transversal-knowledge-and-practices.md
rg --files --hidden --no-ignore /Users/glennmarcano/projects/local-agent-bridge
rg --files .ai/tasks/archive docs/research docs/sprints
python3 - (inline source digest, archive preservation, current-task drafting and read-only validation/statistics)
git show 3ad4ae05a21a7acc7d7d769c0d2ddc098beee6d3:.ai/tasks/current.md
git ls-files -z
git ls-files --others --exclude-standard -z
git diff --name-only -z HEAD
git diff --cached --name-only
git show 3ad4ae05a21a7acc7d7d769c0d2ddc098beee6d3:<each protected tracked file>
git diff -- .ai/context.md docs/README.md docs/handoffs/current-context.md
git diff -- .ai/tasks/current.md
git diff --no-index -- /dev/null .ai/tasks/archive/2026-09-18-formalize-foundational-transversal-practices.md
cat docs/research/2026-09-20-existing-capabilities-and-atlas-owned-gaps.md
cat .ai/tasks/current.md
git diff --numstat
git diff --no-index --stat /dev/null <each of the two new files>
```

The inventory command reported the absent `docs/sprints` directory; that is consistent with the
runtime-less baseline. Two archive-generation Python invocations failed to parse before any
mutation; the corrected append wrote only the authorized new archive. Other drafting used
`apply_patch` on approved paths. No validation tool or dependency is added to the repository.
Inline validation uses only the Python standard library and read-only Git subprocesses. No-index
diffs exit 1 when a new file differs from `/dev/null`; this is expected, not a failed check.
Final statistics are reported with the review response rather than maintained inside this record.

## Review boundary and next action

Present the complete six-file changes and validation for Glenn's semantic review. The proposed
configuration-only experiment requires separate authorization, including any disposable repository
creation. A later trivial-write trial also requires separate authorization. Do not run the
experiment, invoke Codex through Work, modify `local-agent-bridge`, introduce mechanisms, stage,
commit or push. Future operational-policy acceptance, adapter ownership and actual sibling
retirement remain human decisions, not consequences of preserving this report.
