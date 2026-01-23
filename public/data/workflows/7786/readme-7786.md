# Manage Google Calendar events with GPT-4o virtual assistant (Orchestrator)

> What this workflow does
-----------------------

Front-door **chat orchestrator** that delegates calendar requests to a separate **Sub-Agent** workflow which holds Google Calendar tools (Get, Create, Delete). Keeps the agent persona and memory in the Parent for clean separation of concerns.

**Pipeline:** Chat Trigger → Parent Agent ("Albert") → `sub_agent_cal` (Execute Workflow Tool) → Child Sub-Agent → Google Calendar

**Category:** Productivity / Calendar / Agentic\
**Time to set up:** ~10--15 minutes\
**Difficulty:** Intermediate\
**Cost:** Mostly free (n8n CE; OpenAI + Google Calendar usage as configured)

* * * * *

What you'll need
----------------

-   n8n with chat trigger enabled.

-   OpenAI credentials.

-   The companion template: **Agentic Google Calendar Assistant --- Sub-Agent (Calendar Tools)**.

-   After importing both, open this Parent and **re-select** the Sub-Agent in the `toolWorkflow` node.

* * * * *

Set up steps
------------

1.  **Import** this Parent workflow.

2.  **Import** the Sub-Agent workflow (Template B).

3.  In the Parent, open **`sub_agent_cal`** (Tool → Workflow) and select the imported Sub-Agent workflow.

4.  Ensure the **input mapping** passes:

    -   `chatInput` → `text`

    -   `sessionId` → `sessionid`

5.  Add your OpenAI credential to the **OpenAI Chat Model** node.

6.  Activate the Parent workflow.

* * * * *

Testing
-------

-   "**Create a meeting tomorrow 3--4pm called 'Product Sync'**" → Sub-Agent should create the event and the agent should confirm.

-   "**What's on my calendar this week?**" → Lists events.

-   "**Delete my 'Dentist' appointment on Thursday**" → Finds and deletes the event.

## 📊 Basic Information

- **Workflow ID:** 7786
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 398
- **Downloads:** 39
- **Created:** 2025/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7786)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
