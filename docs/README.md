# Atlas Documentation Index

This directory preserves maintained product and architecture understanding, architectural
decisions, and supporting documentation. Root [genesis.md](../genesis.md) is authoritative for
durable intent; code, configuration, and tests describe current executable behavior, while
context, task records, and handoffs describe operational state. Interpret sources by the question
being answered, as defined in [AGENTS.md](../AGENTS.md), rather than as a global hierarchy.

## Where information belongs

- [`product/`](product/): vision, principles, goals, and longer-term roadmap.
- [`conventions/`](conventions/): Atlas-incubated practices intended for reuse across projects.
- [`architecture/`](architecture/): system structure, boundaries, and domain model.
- [`adr/`](adr/): accepted or proposed architecture decision records.
- [`sprints/`](sprints/): current execution focus and archived sprint context.
- [`development/`](development/): setup, commands, and troubleshooting procedures.
- [`handoffs/`](handoffs/): concise current context for resuming work.
- [`enerlink/`](enerlink/): onboarding templates and work-related learning prompts, subject to confidentiality checks.
- [`learning/`](learning/): topic-specific learning targets and study notes.

## Current documents

- [Atlas Genesis](../genesis.md): durable intent approved by Glenn, committed and pushed to
  `origin/master` as `726f4ad` (`docs: establish Atlas genesis`). Product, architecture, and sprint
  documents still carry historical direction pending the cleanup recorded in the
  [current task](../.ai/tasks/current.md).
- [Vision](product/vision.md) · [Principles](product/principles.md) · [Roadmap](product/roadmap.md)
- [Project Genesis Convention](conventions/project-genesis.md) ·
  [Project Genesis template](../templates/project/genesis.md) ·
  [manual Project Genesis builder](../.ai/prompts/project-genesis.md)
- [Architecture overview](architecture/overview.md) · [Domain model](architecture/domain-model.md)
- [Initial stack ADR](adr/0001-initial-stack.md) ·
  [Sovereign knowledge and project boundaries ADR](adr/0002-sovereign-knowledge-and-project-boundaries.md)
- [Current sprint](sprints/current.md) · [Current context](handoffs/current-context.md)
- [Setup](development/setup.md) · [Commands](development/commands.md) · [Troubleshooting](development/troubleshooting.md)

Update the relevant document when project context changes. Add an ADR for durable architectural choices, and add a handoff update when work is paused or resumed.

For Project Genesis, the convention defines the practice and its rules, the template scaffolds a
`genesis.md`, and the builder provides the reusable agent workflow for preparing one.
