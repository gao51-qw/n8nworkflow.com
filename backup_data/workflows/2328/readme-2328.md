# Actioning your meeting next steps using transcripts and AI

> This n8n workflow demonstrates how you can summarise and automate post-meeting actions from video transcripts fed into an AI Agent.

Save time between meetings by allowing AI handle the chores of organising follow-up meetings and invites.

## How it works
* This workflow scans for the calendar for client or team meetings which were held online. * Attempts will be made to fetch any recorded transcripts which are then sent to the AI agent.
* The AI agent summarises and identifies if any follow-on meetings are required.
* If found, the Agent will use its Calendar Tool to to create the event for the time, date and place for the next meeting as well as add known attendees.

## Requirements
* Google Calendar and the ability to fetch Meeting Transcripts (There is a special OAuth permission for this action!)
* OpenAI account for access to the LLM.

## Customising the workflow

This example only books follow-on meetings but could be extended to generate reports or send emails.

## 📊 Basic Information

- **Workflow ID:** 2328
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 33717
- **Downloads:** 3371
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2328)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **googleDrive** 
- **manualTrigger** 
- **extractFromFile** 
- **googleCalendar** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **executeWorkflowTrigger** 
- **set** (×4)
- **switch** 
- **splitOut** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
