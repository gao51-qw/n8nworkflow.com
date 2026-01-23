# Phase-based blog creation system with specialized AI sub-agents

> Chat with a multi-agent system to write a blog. The orchestrator advances through research, headlines, hooks, outline, intro, draft, and final polish–one phase per reply—outputting options and asking you to proceed or rerun at each step.

## Who is this for?
Creators, editors, and teams who want to drive a blog from an interactive chat. You type a message, the system replies with the phase result, you respond, and it moves forward—until the final draft is ready.

## What problem does it solve?
Content projects stall when steps are mixed together. This keeps strict phase order with confirmations at each turn. It prevents hidden state, enforces inputs, and keeps the loop conversational and controllable.

## How it works
1. **You send a message.** The Orchestrator reads recent chat, checks required inputs for the current phase, and either requests missing items or runs a sub-agent.
2. **Phase execution.** Phases run in order: Research → Headlines → Hooks → Outline → Intros → Draft → Final. The sub-agent returns user-facing markdown only.
3. **Deterministic replies.** The Orchestrator posts the sub-agent output verbatim, then asks whether to **proceed** to the next phase or **choose an optoion** or **rerun** this phase with new instructions.
4. **Interactive gating.** If required inputs are missing, it replies with a short list of what’s needed and waits for your message.
5. **Research any time.** You can request more research at any point. The phase does not change; new research is passed forward to the next sub-agent.
6. **Memory window.** A short rolling memory keeps recent chat context without exposing internal prompts or variables.
7. **Finish.** After you approve the Draft phase, the Final phase polishes and returns a publication-ready version.

## Setup steps
1. **Import the workflow JSON** into n8n.
2. **Configure LLM** credentials for the chat model node.
3. **Connect sub-agent workflows** referenced by the Orchestrator (Research, Headlines, Hooks, Outline, Intros, Draft, Final). Verify their input mappings (`WHO`, `WHAT`, `WHY`, `CONTEXT`, `research`, etc.).
4. **Optional integrations:** Enable or disable Slack posting and any datastore nodes you use for research notes.
5. **Test the loop:** Start with a chat message that includes topic, audience, and purpose. Confirm the Orchestrator returns the phase output and prompts you to proceed or rerun.

## Notes
- One sub-agent runs per turn for clarity and traceability.
- Internal prompts, XML, and variables never appear in user messages.
- “Proceed” advances one phase; “Rerun” keeps the phase and uses your updated instructions.

## Resources
- [n8n Docs](https://docs.n8n.io/)
- [Anthropic Docs](https://docs.anthropic.com/en/docs)

## 📊 Basic Information

- **Workflow ID:** 10524
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 63
- **Downloads:** 6
- **Created:** 2025/11/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10524)

## 👤 Author

- **Name:** Matty Reed
- **Username:** @mattyreed1

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×8)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×8)
- **noOp** 
- **httpRequest** 
- **googleSheetsTool** 
- **googleSheets** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agentTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **slackTrigger** 
- **slack** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
