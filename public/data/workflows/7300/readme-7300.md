# Automate client onboarding with GPT-4, Google Drive, ClickUp & Slack

> **Description**
This automation streamlines client onboarding by instantly processing a submitted form, extracting key details from an uploaded proposal, and using GPT-4 to generate a full onboarding task list. 

It then sets up the client workspace across Google Drive, ClickUp, and Slack, and sends a personalized welcome email completing in under a minute from submission.

**Setup Steps**

1. Connect your Google Drive, ClickUp, Slack, Gmail, and OpenAI accounts.
2. Customize the form fields and system prompt to match your business.
3. Test the workflow with a sample client submission to confirm all outputs.

**Estimated Setup Time:** \~30–45 minutes for a first-time user familiar with n8n integrations.


## 📊 Basic Information

- **Workflow ID:** 7300
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 756
- **Downloads:** 75
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7300)

## 👤 Author

- **Name:** Muhammad Bello
- **Username:** @muhammad-bello

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **extractFromFile** 
- **set** (×2)
- **googleDrive** 
- **clickUp** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmail** 
- **slack** (×2)
- **splitOut** 
- **splitInBatches** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
