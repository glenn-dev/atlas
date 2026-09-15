# Atlas AI Collaboration

The `.ai/` directory contains operational context and instructions for AI-assisted development of Atlas. It helps Glenn, ChatGPT, and Codex collaborate from the repository rather than relying on individual chat-session memory.

Permanent product and architectural documentation belongs under [`docs/`](../docs/). This directory is for the working information needed to execute and review development tasks:

- [`context.md`](context.md) is a concise, replaceable snapshot of the current repository state.
- [`tasks/current.md`](tasks/current.md) records the single active task when one is authorized; otherwise, it explicitly records that no task is active.
- Completed tasks should be moved into [`tasks/archive/`](tasks/archive/).
- [`prompts/`](prompts/) contains reusable Codex workflows for diagnosis, implementation, review, and finishing.

Do not store credentials, secrets, personal production data, private company information, or confidential Enerlink information in `.ai/`.
