# Manage Google Calendar events with OpenAI Assistant (Get, create, delete)

> What this workflow does
-----------------------

Provides the **tools layer** for the Parent agent to manage Google Calendar: **Get** (list events), **Create**, and **Delete**. Accepts `text` + `sessionid` from the Parent and uses an LLM with short-term memory to choose and run the correct tool.

**Pipeline:** Execute Workflow Trigger → Sub-Agent → (Get / Create / Delete) → Google Calendar

**Category:** Productivity / Calendar / Agentic\
**Time to set up:** ~10 minutes\
**Difficulty:** Intermediate\
**Cost:** Mostly free (n8n CE; OpenAI + Google Calendar usage as configured)

* * * * *

What you'll need
----------------

-   OpenAI credentials.

-   Google Calendar OAuth2 credentials.

-   A calendar ID (use a placeholder like `your.calendar@example.com` in the node and select your actual calendar at runtime).

* * * * *

Set up steps
------------

1.  Import this Sub-Agent workflow.

2.  Open the Google Calendar tool nodes (**Get**, **Create**, **Delete**) and **select your OAuth2 credential** and **calendar**.

3.  Ensure the **Execute Workflow Trigger** exposes two inputs: `text` and `sessionid`.

4.  Connect the Parent's `toolWorkflow` node to this workflow.

* * * * *

Testing (direct call example)
-----------------------------

-   From the Parent, send: "**Schedule 'Team Sync' tomorrow 10:00--11:00**" → Sub-Agent should call **Create**.

-   "**List events next week**" → **Get** with `timeMin`/`timeMax`.

-   "**Delete event 'Team Sync'**" → **Delete** with `eventId` once matched.

## 📊 Basic Information

- **Workflow ID:** 7787
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 503
- **Downloads:** 50
- **Created:** 2025/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7787)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleCalendarTool** (×3)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
