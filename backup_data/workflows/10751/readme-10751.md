# Analyze sales call objections with Fireflies transcripts, GPT-4o, and Slack feedback

> ## How it works

When a meeting ends in Fireflies, the transcript is automatically retrieved and sent to OpenAI for analysis. The AI evaluates objection handling, call effectiveness, and extracts key objections raised during the conversation. It then generates specific objection handlers for future calls. The analysis is formatted into a structured report and sent to both Slack for immediate visibility and Google Drive for centralized storage.

## Set up steps

**Prerequisites:**
- Fireflies account with API access
- OpenAI API key
- Slack workspace
- Google Drive connected to n8n

**Configuration:**
1. Connect Fireflies webhook to trigger on meeting completion
2. Add OpenAI API key in the AI analysis nodes
3. Configure Slack channel destination for feedback delivery
4. Set Google Drive folder path for report storage
5. Adjust AI prompts in sticky notes to match your objection categories and sales methodology

## 📊 Basic Information

- **Workflow ID:** 10751
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10751)

## 👤 Author

- **Name:** Avinash Raju
- **Username:** @avi-aptaisystem

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** 
- **code** 
- **@firefliesai/n8n-nodes-fireflies.fireflies** (×4)
- **manualTrigger** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDrive** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×2)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
