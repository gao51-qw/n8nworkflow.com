# AI-powered auto-tagging for Zendesk tickets using GPT-4.1-mini

> This workflow automatically reviews new Zendesk tickets and tags them using OpenAI’s language model. It runs every 24 hours, fetches tickets created in the last day (for specified brands), and uses an AI agent to analyze each ticket’s content. Based on customizable rules, the agent suggests and applies relevant tags, ensuring existing tags are preserved. This helps automate ticket categorization and improves support team efficiency.

**Key Features:**

* Scheduled daily execution
* Brand filtering for targeted ticket processing
* AI-powered tagging based on ticket content and custom rules
* Preserves existing tags while adding new ones


**Setup Instructions:**

* Replace placeholder brand IDs/names and tag rules with your own.
* Connect your Zendesk and OpenAI accounts.

## 📊 Basic Information

- **Workflow ID:** 11167
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 131
- **Downloads:** 13
- **Created:** 2025/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11167)

## 👤 Author

- **Name:** Ertay Kaya
- **Username:** @ertay

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **zendeskTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** 
- **set** (×2)
- **zendesk** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
