# Atlas

Atlas exists to extend Glenn's ability to understand, remember, connect, decide and act across
relevant life context. [Atlas Genesis](genesis.md) defines its durable purpose, principles and
boundaries, including ultimate human authority and authorized, inspectable, bounded and revocable
delegation.

## Current repository

Atlas currently has no application runtime. This repository holds durable intent, architectural
decisions, product understanding, reusable conventions and templates, and operational context.
Future implementation choices remain open until demonstrated needs justify them.

The [Project Genesis Convention](docs/conventions/project-genesis.md), its
[optional template](templates/project/genesis.md), and the
[manual builder](.ai/prompts/project-genesis.md) are available for use in projects that benefit
from an explicit statement of durable intent. They require no Atlas application.

## Start here

- [Genesis](genesis.md): why Atlas exists and what must remain true.
- [Documentation index](docs/README.md): maintained understanding and decision history.
- [Product vision](docs/product/vision.md): practical value and evaluation.
- [Architecture overview](docs/architecture/overview.md): accepted constraints and current state.
- [Current task](.ai/tasks/current.md) and [handoff](docs/handoffs/current-context.md): working state.
- [AGENTS.md](AGENTS.md): repository collaboration and authority rules.

## Repository structure

```text
atlas/
├── genesis.md
├── AGENTS.md
├── README.md
├── .gitignore
├── .ai/
│   ├── README.md
│   ├── context.md
│   ├── prompts/
│   └── tasks/
│       ├── current.md
│       └── archive/
├── docs/
│   ├── README.md
│   ├── adr/
│   ├── architecture/
│   ├── conventions/
│   ├── handoffs/
│   └── product/
└── templates/
    └── project/
```

## Historical application

The July 2026 application was an exploratory learning scaffold associated with Glenn's transition
into Enerlink. [ADR 0003](docs/adr/0003-retire-initial-learning-application.md) authorizes its
retirement as an Atlas foundation and supersedes the
[initial stack decision](docs/adr/0001-initial-stack.md). Retired implementation and support files
remain recoverable from Git history at `58369c2cf4995081e961993b2232b84a3222692f`.
