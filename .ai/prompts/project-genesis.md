# Build a Project Genesis Manually

Use this workflow in the target repository. Atlas does not need to be running, but during the
local incubation phase first read the canonical sources:

- `~/projects/atlas/docs/conventions/project-genesis.md` — definition and rules
- `~/projects/atlas/templates/project/genesis.md` — optional document scaffold

1. Run `pwd` and identify the target repository's exact root. Confirm the target before making
   changes and follow its repository-specific instructions.
2. Inspect the repository before proposing a Genesis: read its maintained product and project
   documentation, accepted decisions, current structure, and relevant Git history. Treat actual
   code and configuration as evidence of current behavior, not automatically as durable intent.
3. Apply the independent-reason-to-exist heuristic from the convention. Recommend whether this
   project warrants a root-level `genesis.md`; do not assume every repository does.
4. Separate durable purpose, principles, boundaries, non-goals, constraints, and success from
   implementation details, architecture decisions, roadmaps, and current tasks.
5. Present the proposal in four explicit groups:
   - intent supported by repository evidence, with its sources;
   - reasonable hypotheses that need validation;
   - questions requiring Glenn's clarification;
   - contradictions or conflicts in the existing evidence.
6. Do not invent a clean history or silently resolve conflicts. Explain material discrepancies
   and leave unresolved intent for human judgment.
7. Do not create or modify `genesis.md` yet. Stop after the proposal so its durable intent can be
   deliberately reviewed; human review is authoritative.
8. After explicit approval, use the Atlas template only as a scaffold, remove prompts and
   unnecessary sections, and keep implementation-specific decisions out unless they are
   genuinely durable constraints.
9. Review the resulting `genesis.md` against the convention and report its evidence basis,
   remaining uncertainties, and any conflicts that were resolved by human direction.

This is a manual workflow and a precursor to a possible future `project-genesis` Skill. It does
not provide project discovery, a registry, automation, or cross-project orchestration.
