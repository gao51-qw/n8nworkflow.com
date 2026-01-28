# Automate post-meeting tasks with Fireflies, GPT-4o & ClickUp

> ## AI Meeting Assistant: Sync Fireflies Transcripts to ClickUp & Gmail

Act as your personal executive assistant with this high-level automation designed to handle the most tedious post-meeting tasks. This workflow ensures that no action item is forgotten and that participants receive professional follow-ups without you having to lift a finger.

## Who is this for?
- Busy executives and managers who have back-to-back meetings.
- Project managers who need to sync action items directly into ClickUp.
- Sales teams who want to automate professional follow-up emails based on meeting context.

## How it works
1. **Fetch Transcripts:** The workflow runs on a schedule and retrieves your latest meeting data directly from the Fireflies.ai API using HTTP nodes.
2. **Intelligent Filtering:** A JavaScript node filters the list to process only today's meetings.
3. **AI Task Extraction:** An AI Agent (using GPT-4o-mini) analyzes the transcript to find tasks specifically assigned to the host. It then uses the ClickUp tool to create these tasks with priorities and descriptions.
4. **Human-in-the-Loop:** To ensure quality, the workflow sends a summary to your Telegram. It asks for approval before sending any external emails.
5. **Automated Follow-up:** Once approved, a second AI Agent drafts a concise, professional email summary and sends it via Gmail to the external participants.

## Requirements
- **Fireflies.ai Account:** You need an API Key (Settings -&gt; Integrations -&gt; Fireflies API).
- **OpenAI API Key:** To power the AI Agents.
- **ClickUp Workspace:** To manage the generated tasks.
- **Telegram Bot:** For the approval notifications.
- **Gmail Account:** For sending the follow-up emails.

## How to set up
1. **Fireflies API Key:** Create a **Header Auth** credential in n8n. Set the Name to `Authorization` and the Value to `Bearer YOUR_API_KEY_HERE`.
2. **Configure Credentials:** Add your credentials for OpenAI, ClickUp, Telegram, and Gmail.
3. **ClickUp Configuration:** In the "Create ClickUp Task" node, select your specific Workspace, Space, and List from the dropdown menus.
4. **Identity Setup:** Open the "Format Transcript Data" code node. Update the `hostNames` array with your name and aliases (e.g., `['Host', 'My Name']`) so the AI correctly identifies you.
5. **Telegram Chat ID:** Enter your Chat ID in the Telegram nodes to receive the approval prompts.

## 📊 Basic Information

- **Workflow ID:** 12127
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12127)

## 👤 Author

- **Name:** Vasu Gupta
- **Username:** @chetangupta11

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **code** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **clickUpTool** 
- **telegram** (×3)
- **if** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
