# Email-to-task automation with Mistral AI (Gmail/Outlook to Google Tasks/Microsoft To Do)

> ## Description
Automate your personal productivity by transforming actionable emails from Gmail and Outlook into structured tasks within Google Tasks or Microsoft To Do, all managed by a multi-agent AI system.

This advanced workflow utilizes a powerful Mistral Large AI Agent to orchestrate your daily task management. It operates by fetching recent emails, structuring the data, determining the correct task manager, and delegating the execution to specialized sub-agents. It's built with rate-limiting in mind, ensuring efficient and reliable operation across your connected services.

## ✨ Features
- Unified Email Input: Automatically fetches and merges emails from Gmail and Microsoft Outlook received within the last 24 hours.

- Centralized Data Storage: Stores and deduplicates raw email data in an n8n Data Table, converting HTML content to plain text for AI processing.

- Intelligent Task Extraction: A Main Task Orchestration Agent (powered by Mistral Large) reads the email data, identifies actionable tasks, and structures them with a Title, Due Date, Notes, and a Target System (Google Tasks or Microsoft To Do).

- Dedicated Task Execution: Leverages two specialized sub-agents (Google Tasks Agent and Microsoft To Do Agent) that handle the creation or updating of tasks, ensuring API integrity and focused execution.

- Scalable and Safe: Implements batch processing (max 5 tasks) and mandatory 5-second delays between sub-agent calls to prevent API rate limits and token overruns.

- Conversation History: Uses Memory Buffer Window nodes to maintain context within the AI agents.


## 🛠️ How to Set Up
1. Credentials: Connect your credentials for Gmail, Microsoft Outlook, Google Tasks, Microsoft To Do, and the Mistral Cloud Chat Model.

2. Data Table: Ensure the 'To Do Database' Data Table exists.

3. Customize AI Agents:

	- In the Tasks AI Agent (the main orchestrator), review the system prompt and verify the mandatory "Jordan Hoyle" filter. Change this to your name or the name of the person whose tasks are being managed.

	- In the Google Tasks Agent and Microsoft To Do Agent nodes, ensure the Task List ID fields are correctly set to your desired task lists.

	- Schedule: Set the workflow to run on a schedule (e.g., once daily) or run it manually.

This workflow is the perfect solution for anyone overwhelmed by managing tasks scattered across their inbox and multiple to-do apps, bringing AI-driven order to your digital life! 

## 📊 Basic Information

- **Workflow ID:** 10186
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 637
- **Downloads:** 63
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10186)

## 👤 Author

- **Name:** Jordan Hoyle
- **Username:** @jordanhoyle

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **googleTasksTool** (×5)
- **microsoftToDoTool** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×3)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×3)
- **@n8n/n8n-nodes-langchain.agentTool** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **microsoftOutlook** 
- **code** 
- **dataTableTool** 
- **merge** 
- **dataTable** (×2)
- **stickyNote** (×9)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
