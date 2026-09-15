# Architecture Overview

Atlas currently has no application runtime or selected replacement runtime architecture.
[ADR 0003](../adr/0003-retire-initial-learning-application.md) authorizes retirement of the initial
learning application as an Atlas foundation. The repository retains durable intent, decisions,
conventions, templates and working context.

[Genesis](../../genesis.md) governs durable intent.
[ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md) records D1–D5 as constraints on
future designs. They do not imply that an integration, datastore, agent or orchestration system has
been implemented.

## Accepted architectural constraints

- **Independence:** Atlas's identity, durable knowledge and continuity must survive replacement or
  disappearance of a particular provider, model, agent or interface.
- **Sovereignty and portability:** canonical durable knowledge remains under Glenn's control in
  open, portable and reconstructable forms. External processors and indexes cannot be its sole
  custodians. Git is part of the portable foundation under ADR 0002; GitHub is a replaceable host.
- **Separation:** providers, models, agents, interfaces and human actors have distinct roles.
  Provider-specific capabilities belong behind replaceable boundaries. Protocols and taxonomies
  must emerge from demonstrated use.
- **Authority and provenance:** projects retain authority over their own domains and local state.
  Atlas preserves transversal knowledge and relationships with traceable evidence and distinctions
  between canonical, derived, observed and inferred information.
- **Meaningful change:** future Project → Atlas integration should carry meaningful durable changes
  or checkpoints. Raw commits, prompts, tests, agent activity and exhaustive logs are not elevated
  merely because they occurred.

The [conceptual vocabulary](domain-model.md) explains these terms without defining a schema or
requiring a particular representation.

## Knowledge-protection validation

Future features that transform or delete durable knowledge require automated tests appropriate to
those behaviors. This preserves the distinct testing guidance from the retired product-principles
document. It is conditional guidance for future implementation, not authorization to build a
feature or introduce a test framework now.

## Open implementation choices

Future architecture, storage, interfaces, agents, automation and implementation choices remain
open until demonstrated Atlas needs justify them under Genesis and ADR 0002. Sovereignty does not
by itself select a local runtime topology. No replacement roadmap, sprint or implementation is
established by retiring the original application.
