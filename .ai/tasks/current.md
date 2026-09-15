# Current Task

## Title

Retire Atlas v0.1 and reconcile maintained documentation

## Status

Prepared and validated; awaiting Glenn's review of the complete retirement diff.
Glenn approved preparation on 2026-09-14. Commit and push remain unauthorized.
This remains the sole active task until checkpoint review is resolved.

## Authority and baseline

The [approved planning record](archive/2026-09-14-post-genesis-retirement-planning.md) preserves
scope, evidence, dispositions, validation and Glenn's two required refinements.

Before edits, `git fetch origin` succeeded; branch `master`, HEAD and refreshed `origin/master`
were `58369c2cf4995081e961993b2232b84a3222692f`, ahead/behind 0/0, working tree clean.

[Genesis](../../genesis.md) and [ADR 0002](../../docs/adr/0002-sovereign-knowledge-and-project-boundaries.md)
remain unchanged. The decision order is Genesis + ADR 0002 → ADR 0003 accepts retirement →
ADR 0001 becomes Superseded → execution of the approved retirement.

## Objective

Prepare one coherent retirement diff that removes the initial learning application and approved
support material, preserves historical evidence, and leaves maintained documentation consistent
with a deliberately runtime-less Atlas repository.

## Scope and smallest execution plan

1. Archive the completed approved planning task and make this the sole active task.
2. Record ADR 0003 authorizing retirement; minimally supersede ADR 0001 without changing its body.
3. Preserve distinct knowledge-transformation testing guidance, reconcile the eight approved
   maintained documents, and remove the exact 28 tracked deletion targets plus approved local residue.
4. Replace four historical links to retired documents with plain-text original repository paths,
   the full baseline commit and explicit Git-history recovery wording. Preserve historical status.
5. Validate scope, protected files, historical references, links, terminology/dependencies, semantic
   consistency and Git state; present the complete uncommitted result for Glenn's review.

## Acceptance criteria and boundaries

- The approved planning manifest determines all changed, deleted and created repository paths.
- ADR 0003 explains and authorizes retirement without selecting replacement architecture, runtime,
  stack, datastore, interface or roadmap. ADR 0001 retains its original body and date.
- All twelve KEEP files remain byte-for-byte unchanged, including Genesis, ADR 0002, AGENTS,
  convention, template and reusable prompts.
- Product vision retains practical interpretation; domain vocabulary imposes no schema/datastore;
  overview preserves ADR 0002 constraints and conditional automated testing for knowledge changes.
- No new runtime, roadmap, sprint, source archive, dependencies, Skills, agents, orchestration,
  ingestion, sibling-repository work or Docker resource deletion.
- Old verification limitations are retired obligations, not newly passed tests.
- Retired historical document references use plain text and Git provenance, with no external URLs.
- All local Markdown links resolve; scans contain no surviving operational dependency on the old
  runtime; `git diff --check` passes; task, context and handoff agree on actual review status.
- Report all commands, files and validation results, including untracked files and final Git state.
- Do not stage, commit or push.

## Validation and completion report

- Prepared ADR 0003 as the accepted architectural authorization under Genesis and ADR 0002,
  changed only ADR 0001's supersession metadata, and executed the approved retirement in the
  working tree. No replacement implementation or speculative future design was introduced.
- Preserved the completed planning task with its original scope, corrected archive-relative
  links, approved manifest, evidence and both required refinements.
- Removed exactly 28 approved tracked files. Reconciled the eight approved maintained documents;
  the Genesis archive's four reference substitutions and ADR 0001 metadata are the only other
  tracked modifications. The planning archive and ADR 0003 are the only new repository files.
- Removed the local duplicate environment file after privately reconfirming equality with its
  example, eight generated test/cache files and approved empty directory trees. No Docker resources,
  external data or sibling repositories were changed.
- Verified all twelve KEEP files and four unaffected task archives byte-for-byte against baseline.
  Verified ADR 0001's exact metadata-only diff and the Genesis archive's exact four plain-text
  original-path/full-baseline/Git-recovery substitutions. No external historical URLs were added.
- Verified all 28 deleted tracked paths remain recoverable from the baseline Git object tree.
- All 104 local Markdown links resolve; there are no heading-fragment links. The repository has
  no configured Markdown linter. Whitespace validation covers tracked changes and both new files.
- Repeated requested-term and broader dependency scans and reviewed every surviving match.
  Requested terms remain in historical records (35 matching lines) and one current-context link
  to the archived verification record. Broader matches describe historical evidence, retirement,
  scope exclusions, valid document paths or unchanged guidance; none is a live runtime dependency.
- Reviewed README, vision, overview, vocabulary, context, task and handoff together: runtime-less
  state is explicit, delegation follows Genesis, conditional knowledge-protection testing survives,
  and architecture/storage/interfaces/agents/automation remain open until demonstrated needs.
- The archived browser follow-up and type errors remain historical limitations; no tests were
  relabelled successful. Application tests, builds and services were not run for removal.
- Scope, history, link, semantic and whitespace checks passed. Branch and HEAD remain at the
  baseline with 0/0 divergence; the complete diff is unstaged. No commit or push occurred.

## Deviations, limitations and next action

No deviation from the approved plan with Glenn's two refinements. The local cleanup matched the
inventory; no new preservation need was discovered. Git preserves retired source but does not
guarantee identical rebuilds with its historical unpinned dependencies. External runtime/data
cleanup remains outside scope.

The prepared checkpoint changes 40 repository files: 28 deletions, 10 modifications and two new
files, leaving 28 nonignored project files. Review the complete diff and command/validation report
before authorizing a commit. Do not start another task or infer follow-on implementation work.
