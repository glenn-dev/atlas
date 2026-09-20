# Existing Capabilities and Atlas-Owned Gaps

> Historical checkpoint preserved at `2236086bb5075ad16148c4f51981897c187bd0f9`.
> The original text below is unchanged; its current-state wording and proposed next experiment
> describe the evidence available at that checkpoint. Later evidence and the revised recommendation
> appear only in the [September 20 post-checkpoint addendum](#post-checkpoint-addendum-2026-09-20).
> The original proposal is not a queued task.

Research checkpoint: 2026-09-20. Preserved for semantic review after Glenn approved the exact
six-file documentation scope. This record condenses the completed conversational investigation;
it is not a transcript, accepted architecture, implementation plan or new instruction source.

## Status and authority

Preservation does not promote research into normative guidance. [Genesis](../../genesis.md),
[ADR 0002](../adr/0002-sovereign-knowledge-and-project-boundaries.md),
[ADR 0003](../adr/0003-retire-initial-learning-application.md),
[ADR 0004](../adr/0004-transversal-practices-and-learning.md), and
[ADR 0005](../adr/0005-foundational-transversal-practices.md) retain their existing authority.
The [foundational practices](../practices/README.md) govern this investigation and preservation.
No runtime, mechanism, reusable operational policy or future adapter ownership is accepted here.
The experiment described below has not been run and requires separate authorization.

Material statements distinguish:

- **Verified repository fact:** checked local or remote state within the stated observation scope.
- **Documented external capability:** support described by an authoritative external source,
  not proof of availability or integrated operation on Glenn's account.
- **Observation:** the workflow reported by Glenn or recorded in the historical note.
- **Inference:** a conclusion from evidence and assumptions, with relevant limits.
- **Recommendation:** a proposed course of action, not an architectural commitment.
- **Unverified experiment hypothesis:** a proposed composition whose actual behavior is untested.

These distinctions are analytical aids, not a permanent Atlas ontology or mandatory schema.

## Provenance and verified baseline

The source is the September 20 conversational checkpoint requested by Glenn as research only:
determine which historical Atlas needs are already solved, which remain Atlas-owned, and which
demonstrated integration gaps might justify software. That investigation inspected current Atlas
authority and history, the sibling note, installed version metadata, first-party product/interface
documentation, and a narrow plugin-directory search. It changed no files and ran no executor trial.

**Verified repository facts:** branch `master`, HEAD and cached `origin/master` were
`3ad4ae05a21a7acc7d7d769c0d2ddc098beee6d3`
(`docs: establish foundational transversal practices`), ahead/behind 0/0, with a clean working tree
and index. The original research did not freshly query the remote. During subsequent documentation
scope verification, `git ls-remote --exit-code origin refs/heads/master` confirmed the same live
remote value. No fetch refreshed local refs. These are separate observations, not retroactive
remote verification of the earlier report.

Atlas has no current application runtime or selected replacement stack. No current sprint file
exists. The current task still described the foundational-practices checkpoint as awaiting commit;
the committed state contradicted that operational description, not the accepted practices.
The [closure record](../../.ai/tasks/archive/2026-09-18-formalize-foundational-transversal-practices.md)
preserves the historical preparation record and later closure evidence separately.

Read-only metadata inspection during research found Codex CLI package `0.155.1`, VS Code extension
`26.5908.31748`, and ChatGPT app `26.915.31945`. These are installed versions, not authentication,
entitlement or execution tests. No credentials or private conversation contents were inspected.

Relevant history includes the retired application and its unimplemented persistence, the
[September 16 research](2026-09-16-transversal-knowledge-and-practices.md), and subsequent accepted
ADRs 0004 and 0005. Historical proposals do not override later accepted decisions. ADR 0002's
deferred bridge question is not an instruction to build a bridge.

## Historical local-agent-bridge evidence

Source: `~/projects/local-agent-bridge/docs/local-agent-orchestration-research-note.md`, titled
“Local Agent Orchestration — Research & Design Note.” Its proposed investigation refers to an
August 2026 architecture; that framing and Glenn's account locate the historical hypothesis.
The note has no explicit creation date establishing an exact August authorship timestamp.
The inspected source's SHA-256 at preservation is
`9d35679919fff74cca5b0400155a065d25244fe91d772c1782d2228cc47828d9`.
The path and digest identify the source, but do not make its future availability certain.
This section preserves its material meaning without copying the whole note into current guidance.

**Verified inspection:** the directory contained the note and incidental `.DS_Store` metadata,
not a Genesis, runtime, API implementation or Git repository. Glenn's account confirms that the
concept never progressed to implementation. The inspection does not establish an independent user
base, lifecycle or domain authority. There is no implemented bridge to preserve or migrate.

**Durable historical observations:** the Gouda workflow separated planning, execution, evidence,
review and approval usefully, but Glenn manually carried prompts and results between ChatGPT and
Codex. The note sought explicit human approval, useful role separation, replaceable agents/models,
bounded execution and efficient context handling. Its narrow MVP was eliminating copy/paste.
It explicitly called for investigating existing capabilities before custom infrastructure.

**Historical hypotheses, not requirements:** daemon/service, project registry, session manager,
approval queue, context cache, model router, CLI, MCP/API interface, adapters, local-model phases,
and a standalone repository. The note's per-turn approval proposal does not supersede Genesis's
bounded delegation or the current task-level authorization objective.

**Recommendation:** no longer treat `local-agent-bridge` as an assumed standalone roadmap.
Retirement of the directory may ultimately be appropriate once useful evidence is preserved,
but no deletion, modification or permanent future-tool ownership decision is authorized here.
The sibling directory remains untouched.

## Jobs, capabilities and remaining concerns

**Inference:** Atlas should preserve durable meaning and authority while consuming replaceable
execution capabilities. This is compatible with its runtime-less state. Commercial products can
process knowledge; they do not determine accepted Atlas meaning or project-domain authority.

The table uses temporary categories: **A** Atlas-owned meaning/authority; **C** existing replaceable
capability; **G** demonstrated integration/workflow gap; **U** unproven infrastructure need.
“Available” describes documented support, not verified use in Glenn's configuration. Confidence
is strongest for local authority and observed transport friction, weaker for end-to-end composition.

| Job-to-be-done | Present solution, evidence and limitation | Classification and consequence of misclassification |
| --- | --- | --- |
| Durable knowledge/context, meaningful decision history, provenance and reconstructability | Markdown, Git, Genesis, ADRs and project-owned records; stale task state demonstrates maintenance limits, not a datastore requirement | A; high confidence. Treating product memory as authoritative risks losing reviewed meaning |
| Continuity across conversations, tools and agents | Handoffs plus manual transfer; projects and saved executor sessions are available, but universal continuity is unverified | A + C + G; transport friction is demonstrated. Excessive integration could propagate stale context |
| Human authority and delegated autonomy | Genesis and explicit task decisions; permissions can enforce some boundaries | A + C; high confidence. Technical permission must not become fabricated consent |
| Project sovereignty and cross-project knowledge | Projects own their domains; Atlas preserves meaningful transversal relationships | A; high confidence. Centralizing project truth would cross authority boundaries |
| Reusable practices; Atlas → Project guidance | Accepted practices, conventions and prompts; AGENTS/Skills can deliver instructions | A + C. Packaging does not establish applicability, acceptance or reliable discovery |
| Project → Atlas learning | Selective capture, critical evaluation and Glenn's initial promotion authority under ADR 0004 | A; automatic ingestion U. Treating raw activity as learning could corrupt shared guidance |
| Planning/review versus execution | Observed ChatGPT/Codex separation; existing reviews and agent capabilities | C + G. Collapsing roles may remove useful challenge; multiple agents do not guarantee independence |
| Local repository access, modification and coding execution | Codex already executes in the reported workflow; Work and programmable interfaces offer access mechanisms | C; high confidence. Rebuilding duplicates capabilities; wrong targeting creates material risk |
| Session/thread persistence and continuation | Existing executor sessions and resume interfaces | C + G; UI selection is manual today. Cross-client continuation and concurrent writers remain unverified |
| Model/capability and reasoning selection | Current operational preference and task judgment; configurable executor settings | A for policy, C for execution. Hard-coded model identity would undermine replaceability |
| Approval, commit and push boundaries | Explicit human decisions plus existing sandbox/approval/Git mechanisms | A + C. Integrated enforcement remains untested; task approval must not silently authorize commit/push |
| Result summarization and review | Codex reports, manual copying, ChatGPT interpretation; structured outputs/events are available | G + C; copying is demonstrated friction. A lossy summary could conceal failure |
| Browser/web and connected services | Existing browser, Computer Use, plugins, connectors and APIs | C; no Atlas-specific replacement need shown. Account access and external effects need separate controls |
| Scheduled or conditional work | Existing automations and deterministic CI/event workflows | C; Atlas scheduler U. Unattended operation adds obligations without a demonstrated present need |
| Tool interoperability and provider/model replacement | CLI/SDK/interfaces, MCP and portable instructions offer mechanisms | C plus A portability principle. Protocol support is not proof of a complete integration or feature parity |
| Continuity if a provider disappears | Portable human-readable durable core and replaceable processors | A; high confidence. Capability loss is possible; identical replacement is not required |

### Current manual workflow

The workflow below is reported by Glenn and corroborated by the historical note. The classification
concerns why human involvement is useful, not a measurement of time saved by a proposed replacement.

| Step | Human role and candidate change |
| --- | --- |
| 1. Discuss and iterate with ChatGPT | Useful judgment and authority; preserve |
| 2. Review proposed Codex instruction | Useful scope/outcome judgment; present a concrete proposal |
| 3. Select model/capability | Useful for exceptional choices; routine selection is candidate policy-driven friction |
| 4. Select reasoning effort | Same distinction; material tradeoffs should remain visible |
| 5. Choose current/new executor session | Sometimes judgment, sometimes routine context management |
| 6. Open/select session | Candidate accidental transport once target is settled; correct-repository assurance remains valuable |
| 7. Copy instruction | Accidental transport |
| 8. Codex inspects/implements/tests/reports | Existing capability within deliberate safety boundaries |
| 9. Copy result back | Accidental transport |
| 10. ChatGPT interprets/reviews | Useful review; Glenn retains material judgment |
| 11. Repeat | Automate delivery only within authorized scope, not unrestricted task growth |
| 12. Propose commit | Useful decision preparation |
| 13. Glenn authorizes commit | Material authority; preserve explicitly |
| 14. Codex commits | Execution can follow authorization without manual message transport |
| 15. Push or authorize next step | Push remains a separate authority decision |
| 16. Verify remote state | Useful validation; transport of evidence can be automated where authorized |

## External capability evidence

Sources below were consulted during the September 20 research, not revalidated by executing the
products during preservation. URLs are mutable; the date and summarized limits preserve what the
checkpoint relied on, not an immutable specification snapshot. First-party GitHub `main` documents
are not a guarantee about an installed release. A narrow plugin-directory search found no described
turnkey local round trip; that limited search does not establish that none exists.

| Source and surface | Documented support relevant to the research | Material limit |
| --- | --- | --- |
| OpenAI [ChatGPT surfaces](https://learn.chatgpt.com/docs/use-chatgpt), [Work setup](https://learn.chatgpt.com/docs/get-started-with-work), [Work overview](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-overview) | Work can perform tasks using files, code, tools and accessible repositories; local desktop and cloud execution exist | Ordinary chat, Work, plugins and APIs are not interchangeable. Cloud execution does not acquire the local working tree; account/platform availability was not tested |
| OpenAI [local security](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-local-security), [Computer Use](https://learn.chatgpt.com/docs/computer-use), [browser](https://learn.chatgpt.com/docs/browser) | Existing local app/browser interaction and direct execution capabilities | Local execution is not offline inference. GUI access differs from filesystem sandboxing. Computer Use cannot automate ChatGPT itself, terminal apps or OS approval prompts; do not build the loop around clicking ChatGPT |
| OpenAI [plugins](https://learn.chatgpt.com/docs/plugins), [MCP setup](https://learn.chatgpt.com/docs/extend/mcp) | Packaged instructions/tools and local STDIO or HTTP MCP connections | IDE supports standalone Skills/MCP, not plugins. Hosted ChatGPT does not simply read local MCP config; installation is not account authorization |
| OpenAI [custom ChatGPT connections](https://developers.openai.com/plugins/deploy/connect-chatgpt), [Secure MCP Tunnels](https://developers.openai.com/api/docs/guides/secure-mcp-tunnels) | Supported remote-tool integration and outbound private connectivity | Transport does not implement an executor adapter or guarantee approval/completion handling. Private-development and public-distribution requirements differ |
| OpenAI [Projects](https://learn.chatgpt.com/docs/projects), [memory](https://learn.chatgpt.com/docs/customization/memories) | Product context, local project targeting and distinct memory mechanisms | Product Projects are not automatically local repositories; generated memory is not reviewed Atlas knowledge. Saved sessions do not freeze a working tree |
| OpenAI [Codex IDE](https://learn.chatgpt.com/docs/codex/ide), [noninteractive mode](https://learn.chatgpt.com/docs/non-interactive-mode) | IDE execution/review; CLI `codex exec` final output, JSON events, structured output and `resume <SESSION_ID>` | A headless task need not open VS Code. This does not prove attachment to an arbitrary active IDE thread or ChatGPT-side invocation |
| OpenAI [Codex SDK overview](https://learn.chatgpt.com/docs/codex-sdk), [TypeScript SDK](https://github.com/openai/codex/tree/main/sdk/typescript), [options](https://github.com/openai/codex/blob/main/sdk/typescript/src/threadOptions.ts) | Local threads, continuation, results/events and configurable execution | Types and runtime settings can differ. Current overview says the old `codex mcp-server` and standalone server were removed; older MCP recipes cannot be assumed to work |
| OpenAI [Python SDK reference](https://github.com/openai/codex/blob/main/sdk/python/docs/api-reference.md), [FAQ](https://github.com/openai/codex/blob/main/sdk/python/docs/faq.md) | Thread/turn operations, streaming, results and pinned runtime integration | Documented thread-start default includes automatic approval review. A human-only reserved decision must not rely on that default; external-message content is not approval |
| OpenAI [App Server](https://learn.chatgpt.com/docs/app-server) | Thread/turn operations, model discovery, streams, reviews and bidirectional approval requests with request identities | The page warns that the command and WebSocket transport are experimental and unsupported for production workloads. Rich controls do not establish a finished ChatGPT integration; transport/release behavior needs testing |
| OpenAI [configuration](https://learn.chatgpt.com/docs/config-file/config-reference), [approvals/security](https://learn.chatgpt.com/docs/agent-approvals-security), [sandboxing](https://learn.chatgpt.com/docs/sandboxing), [automatic review](https://learn.chatgpt.com/docs/sandboxing/auto-review) | Model/effort, permissions, sandbox and approval controls | Supported values and defaults vary. Retired/deprecated approval modes can remain in SDK types. Automatic approval review is not Glenn's authority for reserved actions |
| OpenAI [reviews](https://learn.chatgpt.com/docs/code-review), [AGENTS](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [Skills](https://learn.chatgpt.com/docs/build-skills), [hooks](https://learn.chatgpt.com/docs/hooks), [subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) | Existing review, instruction packaging and delegation mechanisms | Discovery/loading is not semantic authority. Hooks execute trusted code. Separate agents do not ensure independent evidence; hosted delegation does not imply a local executor |
| OpenAI [automations](https://learn.chatgpt.com/docs/automations) | Scheduled work and selected event triggers | Local machine/app availability and surface-specific event support matter; arbitrary conditions and safe unattended approval are not implied |
| OpenAI [Agents SDK](https://developers.openai.com/api/docs/guides/agents/sdk), [results/interruptions](https://developers.openai.com/api/docs/guides/agents/results), [conversation state](https://developers.openai.com/api/docs/guides/conversation-state) | Tool coordination, resumable interruption state and API conversation persistence | An application still owns authentication, persistence and approval presentation. API state does not control an arbitrary ChatGPT product conversation |
| OpenAI [Workspace Agent triggers](https://learn.chatgpt.com/workspace-agents/trigger-runs) | A programmable trigger surface exists | Documented responses cannot currently be retrieved through that API; this is not a general callback for the desired personal conversation |
| [MCP specification 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28), [Agent Skills specification](https://agentskills.io/specification) | Tool interoperability and portable instruction packaging; MCP has optional asynchronous task/elicitation extensions | Protocols are not implementations or authority enforcement. Both endpoints must support the required features; host support was not established |
| OpenAI [Codex GitHub Action](https://learn.chatgpt.com/docs/github-action), GitHub [workflow events](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) | Existing deterministic/event-driven execution and Codex result outputs | Hosted checkout is not Glenn's uncommitted local workspace. Schedules can be delayed or dropped; these capabilities do not authorize external effects |

## Conclusions challenged and alternatives retained

**Current evidence-backed recommendation:** do not rebuild a coding executor, session/thread
manager, general agent orchestrator, database, memory engine, dedicated UI, model router, scheduler,
browser agent, generic approval platform, custom context cache, local-model infrastructure or
generalized bridge. No demonstrated need currently outweighs their duplication and maintenance
costs. This is revisable with evidence, not a permanent prohibition.

The custom-software/runtime/database hypotheses are weakened by the useful runtime-less repository,
retirement history and lack of demonstrated storage/scale requirements. Memory and context-cache
hypotheses lack measured deficiencies beyond selective records and existing sessions. Session,
execution, review, scheduling and tool-use hypotheses confront existing implementations. MCP is
optional transport, not a need. Provider independence does not by itself require local models.
A dedicated UI or replacement ChatGPT would expand beyond the demonstrated problem.

The opposite hypothesis, “commercial products solve Atlas completely,” also fails: products do
not own Glenn's accepted meaning, practice promotion, project sovereignty or provider-independent
durable core. **Inference:** those remaining concerns require stewardship and preservation, but
do not establish a requirement for an Atlas application.

### Build, adopt, configure or integrate

| Direction | Why credible | Limit and current recommendation |
| --- | --- | --- |
| Use an existing unified Work/Codex workflow unchanged | May eliminate transport with no integration | Could change desired planner/executor separation; distinguish functional simplification from the literal MVP |
| Configure local Work to invoke existing Codex noninteractive execution | Components expose the necessary basic capabilities | Preferred first hypothesis; integrated invocation, completion, permissions and continuity remain untested |
| Integrate a ChatGPT tool with an existing local executor interface | Could address a concrete delivery or approval mismatch | Only evaluate necessary glue after demonstrating that mismatch; use supported transport rather than inventing a platform |
| Build a thin adapter | May be justified for a specific interface mismatch | Not yet justified; do not recreate execution, sessions, memory, Git or general orchestration |
| Use a separate API planner/agent runtime | Existing runtimes offer lifecycle and interruption control | Changes the desired ChatGPT experience and adds application maintenance; return tradeoff to Glenn |
| Build Atlas-owned functionality | Could eventually serve a demonstrated durable-meaning requirement | No such implementation requirement was established by this checkpoint |

At least two credible directions remain: local Work with the existing CLI, and a supported tool
integration with a minimal adapter if needed. Neither is accepted architecture. CI is another
appropriate existing executor for some tasks, but not an equivalent local interactive workspace.

### Ownership if a future gap justifies glue

| Placement | Evidence that would justify it | Important tradeoff |
| --- | --- | --- |
| Inside Atlas | Direct ownership of Atlas-specific durable meaning | Generic transport would couple the durable core to a replaceable executor |
| Independent small tool | Demonstrated reuse, independent lifecycle and security boundary | A directory or architectural elegance does not establish those properties; another project costs maintenance |
| Project-local integration | One repository's narrow workflow | Least scope initially, but later duplication or coupling needs evaluation |
| External hosted integration | Supported cloud workflow fits access and data requirements | Credentials, local connectivity, data movement and provider availability affect portability/security |
| No custom component | Configuration meets the narrow MVP | Preferred starting point; product-specific limitations may remain |

Atlas should remain Atlas if the transport component is replaced. Deployment needs, maintenance,
security boundaries, portability and actual reuse should determine ownership, not filesystem
convenience. No permanent placement decision is made here.

## Operational policy, security and evidence transport

**Inference:** recurring model, effort, session and permission choices can often be represented as
replaceable operational policy. Genesis/ADR principles, current preferences, task-specific choices
and executable settings must remain distinct. The existing model preference remains in
[working context](../../.ai/context.md#current-delegated-execution-preference); this report does not
set a new model ranking, reasoning default or session policy. Continuing a coherent task/session
and starting fresh at meaningful task/context boundaries are recommendations for later evaluation.

Task-level authorization could plausibly cover routine transport, scoped repository inspection,
authorized changes and validation, and result collection. It does not automatically cover scope
expansion, destructive operations, unresolved domain decisions, new account access or external
side effects. Commit and push remain separate explicit Glenn authority boundaries by default.
No assumption is made that every command needs approval.

Sandboxing constrains effects; an approval interface mediates requests; human authority determines
what may be delegated. These are different. Tests/scripts execute code. Secrets can escape through
environment inheritance, logs, network or screenshots. Use appropriately scoped access and avoid
putting credentials in prompts or reports. Local execution can still transmit selected data to a
provider. GUI and direct-tool permissions must be considered separately.

Repository content, web pages and tool results are untrusted as authority channels. An agent's claim
that Glenn approved is not approval. Proposed, approved and executed actions should be attributable
to the correct task, repository and request; ambiguity or stale/replayed approval should fail safely.
Bound retries and stop at scope or authority boundaries rather than creating autonomous loops.
Existing records may provide adequate auditability; no custom approval or audit database is implied.

The executor needs the approved objective, scope, acceptance criteria, repository/baseline,
applicable source references, relevant prior decisions and permission boundaries. The planner/reviewer
needs completion/failure/interruption status, final result, repository/thread identity, changed paths,
diff/stat, tests and validation commands/outcomes, material evidence, assumptions, limitations,
unresolved decisions and approval requests. Detailed logs/events can remain available on demand;
they need not all enter ChatGPT context or Atlas's durable record. Summaries must not hide failure.
No indiscriminate context transfer or custom cache is justified without measured need.

## Smallest next experiment: hypothesis, not execution authorization

**Hypothesis:** local ChatGPT Work can deliver a bounded task to existing Codex noninteractive
execution and receive its result without Glenn acting as a message bus. Component documentation
does not establish this end-to-end claim.

After separate authorization, first test a configuration-only, read-only round trip against a
disposable/synthetic repository. Do not use this first trial to test autonomous development.
No repository was created and no Work → Codex invocation occurred in this checkpoint.

The trial should establish whether:

1. Work targets the correct local repository and invokes the existing noninteractive interface.
2. Appropriate model, reasoning and session settings can be supplied without routine manual choice.
3. Glenn sees a material, bounded proposal and authorizes it once without transporting the prompt.
4. The result and relevant evidence return without Glenn opening/selecting Codex or copying output.
5. The actual executor thread/session identity is retained and a related follow-up continues it.
6. A harmless attempted operation outside the authorized boundary stops or returns for authority,
   without performing the prohibited effect.

Success must preserve material human judgment, not merely reduce interaction count. If read-only
succeeds, a later separately authorized trial may test a trivial write and validation. It must not
silently broaden into autonomous development, commit or push.

| Observation | Interpretation and next decision |
| --- | --- |
| Configuration succeeds | Retire the presumed need for a custom bridge for this MVP |
| Account/configuration/entitlement prevents success | Investigate that constraint before writing software |
| A concrete supported-interface mismatch is demonstrated | Compare existing integrations and the smallest thin adapter addressing that mismatch |
| Success requires a separate planner application | Return the change to the desired ChatGPT experience for Glenn's review |

Failure does not automatically authorize building a bridge. A single successful trial would support
the tested workflow, not unrestricted reliability, permission safety or cross-client portability.

## Evidence still missing and reconsideration

Unverified: account entitlement and available local tools; effective authentication/environment and
sandbox behavior; integrated model/effort settings; task approval and later request presentation;
long-running completion and disconnect/restart handling; thread identity across clients and concurrent
writers; reserved commit/push enforcement across enabled tools; actual time/cost savings; and any
need for custom software beyond configuration. Wider cross-project knowledge automation is also
unproven. Mutable documentation and version differences require rechecking at the eventual trial.

**Recommendation:** adopt/configure first; integrate only demonstrated residual gaps; defer new Atlas
infrastructure; retire the historical standalone-roadmap presumption. Preserve durable knowledge and
human/domain authority independently of those replaceable capabilities. Experiment authorization,
new operational policy, adapter ownership and actual sibling-directory disposition remain separate
human decisions. This preservation changes no Genesis, accepted ADR or foundational practice.

## Post-checkpoint addendum: 2026-09-20

This addendum records later evidence, after research-preservation commit
`2236086bb5075ad16148c4f51981897c187bd0f9`. It does not revise the original investigation
as though this evidence had been available earlier.

### Provenance and demonstrated scope

**Observed external evidence supplied by Glenn:** in the September 20 request beginning
“We are resuming real Atlas work,” Glenn reported that ChatGPT Work had operated from the existing
ChatGPT Atlas Project, accessed the explicitly attached local Atlas folder and Git repository,
retained that source across turns, executed read-only shell/Git inspection, read and reasoned over
Atlas documentation, and returned repository evidence in the same Work conversation without Glenn
manually transporting prompts or results through a separate Codex session.

The ensuing read-only closure assessment directly inspected `/Users/glennmarcano/projects/atlas`
and returned Git and document evidence in the conversation. This corroborates local repository
inspection and evidence return; the earlier Work interface and cross-turn retention observations
remain attributed to Glenn's account. No independent replay of that earlier session or fresh
product-version verification is claimed. The source is that dated conversation and its tool
results; this is a concise durable account, not a transcript or a general product specification.

**Verified repository evidence:** the assessment found clean `master` at the commit above,
with an unchanged index and cached `origin/master` at the same commit, ahead/behind 0/0.
No fetch or live remote query was performed. This establishes cached agreement, not the live
server state or an unrecorded review, commit or push authorization. The
[closure record](../../.ai/tasks/archive/2026-09-20-preserve-existing-capabilities-research.md)
preserves the operational history separately.

### Interpretation, recommendation and limits

**Inference:** direct Work → repository addresses the manual transport problem for the demonstrated
read-only inspection. The earlier Work → Codex → Work composition was proposed before this direct
path had been demonstrated. It remains untested; the new observation does not count as executing
its trial or satisfying its executor-session and boundary-handling criteria.

**Current recommendation:** prefer the simpler direct Work → repository path for suitable real work
within demonstrated capability and explicit task authority. Assess a concrete limitation when one
arises before adding another execution or integration layer. This refines the original
adopt/configure-first recommendation; it does not require another capability experiment before
returning to project work. Work → Codex remains an option, and custom integration could become
justified by a demonstrated residual gap. Neither is queued or authorized by this addendum.

The observation does not validate editing, testing, commit/push workflows, general engineering
execution, permission enforcement, restart recovery or cross-client portability. Preparing this
documentation closure is not an expanded capability trial. Work does not replace Codex and is not
a mandatory executor. No Atlas architecture, runtime, reusable operational policy or adapter
ownership is accepted; Genesis, accepted ADRs and practices retain their existing authority.
