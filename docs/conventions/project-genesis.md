# Project Genesis Convention

## Status

Project Genesis is an Atlas-incubated convention for preserving durable project intent. It is
not an industry standard, and using it does not require Atlas, an agent, or any automation.

## Purpose

A project may keep a root-level `genesis.md` that explains why the project exists and what must
remain true as it evolves. It gives humans and agents a stable reference when implementation
details, active tasks, and working context change.

Genesis is living documentation, but it is deliberately slow-moving. Ordinary feature work,
technical choices, and status updates do not belong there.

## When to use it

A Genesis is useful when a project can answer this question:

> Can this project articulate an independent reason to exist that is more durable than its
> current implementation?

Consider adding one when a project has durable principles, hard boundaries, important
non-goals, multiple contributors or agents, or a long enough life that its original intent could
otherwise be lost.

A Genesis is probably unnecessary for a short-lived experiment, a small internal module whose
purpose is fully inherited from its parent project, generated output, or a repository whose
`README.md` already captures all of its limited and stable intent. Avoid creating one only to
satisfy a checklist.

## What belongs in Genesis

- The enduring reason the project exists and the problem it is meant to address.
- Durable principles used to evaluate future direction.
- Hard constraints and intended project boundaries.
- Explicit non-goals that protect the project's focus.
- Outcome-oriented success criteria.
- The project's relationship to broader systems, without making it dependent on them.
- Initial direction and long-term vision when they clarify intent without prescribing an
  implementation.

Sections are optional and may be adapted. The document should contain only what is meaningful
for the project.

## What does not belong in Genesis

- Setup, usage instructions, commands, or a feature inventory.
- Agent procedures, coding standards, or repository operating rules.
- The rationale for a specific technical or architectural decision.
- Current implementation state, sprint status, task queues, or session notes.
- A detailed roadmap, backlog, release plan, or speculative design.
- Assumptions tied to the current stack, vendor, deployment, or file layout unless one is truly a
  durable constraint.

## Relationship to other project documents

| Document | Primary question | Typical rate of change |
| --- | --- | --- |
| `genesis.md` | Why does this project exist, and what must remain true? | Slow |
| `README.md` | What is this project, and how is it used or run? | As usage changes |
| `AGENTS.md` | How should agents work in this repository? | As workflow changes |
| ADRs | Why was a particular technical or architectural decision made? | Append as decisions occur |
| `.ai/context.md` | What durable working context is currently relevant? | Regularly |
| `.ai/tasks/current.md` | What is being worked on now or next? | Frequently |
| `.ai/handoff.md` | What state must pass between agent sessions? | Per handoff |

Repositories may use equivalent names or locations for context, task, and handoff files. Their
roles, rather than their exact paths, define the distinction.

These documents can overlap in subject without duplicating purpose. For example, Genesis may
state that data portability is a principle, while an ADR records the chosen export format and the
README explains how to run the export.

## Agent interpretation and alignment

When a root-level `genesis.md` exists, agents must read it before making decisions that
materially affect product direction, scope, architecture, project boundaries, or long-term
behavior. Treat it as durable project intent, not as an implementation specification or an
unchangeable constitution.

Before such a decision, an agent should check that the proposed change:

1. Advances or remains compatible with the project's reason to exist.
2. Respects its durable principles, hard constraints, and non-goals.
3. Does not introduce a new boundary or long-term behavior that Genesis leaves unresolved.

If a material conflict appears, the agent must surface the exact tension before proceeding. The
request may still be correct: either the implementation should align with the current Genesis, or
the project's intent has evolved and Genesis should be amended deliberately. Agents must not
silently override, reinterpret, or rewrite Genesis to make a request appear aligned.

## Evolving Genesis

Change Genesis only when the project's underlying purpose, durable principles, constraints,
success definition, or intended boundaries materially change. A Genesis change should be:

- explicit in the task or discussion that authorizes it;
- reviewed as a change to project intent, not bundled unnoticed into ordinary feature work;
- called out clearly in the completion report or change description; and
- reflected in related documentation when the change affects usage, architecture, or current
  plans.

Implementation choices, routine refinements, status changes, and newly learned operational
details should update the README, an ADR, working context, tasks, or handoff instead.

## Portability

`genesis.md` lives at the project root and travels with the repository. It must be understandable
without Atlas, Notion, ChatGPT, private conversations, or another external knowledge system.
Link to supporting material when useful, but keep the core intent self-contained.

## Recommended structure

Start from [`../../templates/project/genesis.md`](../../templates/project/genesis.md) and keep
only the sections that help the project:

- Why this exists
- The problem
- Core principles
- Non-goals
- Hard constraints
- Success
- Independence
- Relationship with broader systems
- Initial direction
- Long-term vision

## Anti-patterns

- Treating Genesis as a mandatory form for every repository or module.
- Copying the README, roadmap, backlog, or ADR history into it.
- Encoding the current architecture as permanent intent without a genuine durable constraint.
- Using vague aspirations that cannot guide a future choice.
- Updating it automatically whenever implementation changes.
- Treating it as immutable when the project's real purpose has deliberately evolved.
- Depending on private or external context to understand the document.

## Lightweight adoption

For a new project:

1. Apply the independent-reason-to-exist heuristic.
2. If useful, copy the template to the project root as `genesis.md`.
3. Keep only the sections needed to capture durable intent.
4. Review it alongside the initial README and project boundaries.

For an existing project:

1. Gather intent from maintained product documents, accepted decisions, and stakeholder input.
2. Separate durable intent from current implementation and plans.
3. Resolve contradictions explicitly rather than inventing a clean history.
4. Add `genesis.md` only after its contents have been deliberately reviewed.
5. Update agent instructions to include the repository's Genesis-alignment rule.

Future tooling may help discover, validate, or scaffold Genesis documents. Such automation is not
part of this convention and is not required for adoption.
