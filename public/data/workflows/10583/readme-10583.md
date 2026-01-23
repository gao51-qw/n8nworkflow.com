# Classify and auto-reply to emails with Outlook and GPT-4

> Who's it for
Professionals and teams managing high email volumes who need automatic email triage and responses.
What it does
This workflow monitors your Outlook inbox and uses AI to classify emails into three urgency levels: Urgent, Important, or Not Important. It automatically generates personalized replies and organizes emails into folders.
How it works
New emails trigger AI classification based on urgency and deadlines. The system then generates an appropriate reply using GPT-4 and moves the email to the corresponding folder.
Requirements

Microsoft Outlook account with API access
OpenAI API key (GPT-4 access)
Three Outlook folders: URGENT, Important, Not Important

Setup
Connect your Outlook credentials, add your OpenAI API key to all Chat Model nodes, update folder IDs in the Move nodes, and customize the AI prompts to match your tone.
Customization
Adjust classification criteria, modify reply tone and style, add more categories, or integrate with other tools like Slack or CRM systems.

## 📊 Basic Information

- **Workflow ID:** 10583
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 606
- **Downloads:** 60
- **Created:** 2025/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10583)

## 👤 Author

- **Name:** Mattis
- **Username:** @iiiii

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **microsoftOutlookTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **microsoftOutlook** (×6)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
