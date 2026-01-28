# Zoom AI meeting assistant creates mail summary, ClickUp tasks and follow-up call

> ## Update 19-04-2025 ##
- Change from OpenAI to Claude 3.7 Sonnet module
- Adding the Think Tool

**The update enables significantly better results to be achieved. This is particularly noticeable during longer meetings!**

## What this workflow does
This workflow retrieves the Zoom meeting data from the last 24 hours. The transcript of the last meeting is then retrieved, processed, a summary is created using AI and sent to all participants by email.
AI is then used to create tasks and follow-up appointments based on the content of the meeting.

Important: You need a Zoom Workspace Pro account and must have activated Cloud Recording/Transcripts!

This workflow has the following sequence:

1. manual trigger (Can be replaced by a scheduled trigger or a webhook)
2. retrieval of of Zoom meeting data
3. filter the events of the last 24 hours
4. retrieval of transcripts and extract of the text
5. creating a meeting summary, format to html and send per mail
6. create tasks and follow-up call (if discussed in the meeting) in ClickUp/Outlook (can be replaced by Gmail, Airtable, and so forth) via sub workflow

### Requirements:
- Zoom Workspace (via API and HTTP Request): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/zoom/)
- Microsoft Outlook: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/microsoft/)
- ClickUp: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/clickup/)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- SMTP access data (for sending the mail)

You must set up the individual sub-workflows as separate workflows. Then set the “Execute workflow trigger” here. Then select the corresponding sub-workflow in the AI Agent Tools.
You can select the number of domains yourself. If the data queries are not required, simply delete the corresponding tool (e.g. “Analytics_Domain_5).

Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!

## 📊 Basic Information

- **Workflow ID:** 2800
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 15417
- **Downloads:** 1541
- **Created:** 2025/1/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2800)

## 👤 Author

- **Name:** Friedemann Schuetz
- **Username:** @freddy-schuetz

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stopAndError** 
- **zoom** 
- **set** (×3)
- **splitInBatches** 
- **httpRequest** (×3)
- **extractFromFile** 
- **code** 
- **emailSend** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **microsoftOutlookTool** 
- **filter** 
- **executeWorkflowTrigger** 
- **splitOut** 
- **clickUp** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.toolThink** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
