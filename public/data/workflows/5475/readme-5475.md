# Automate email management with OpenAI classification, Gmail drafts & Slack alerts

> ### What it does
This workflow automatically processes incoming emails with intelligent AI classification, creating draft responses and sending Slack notifications based on email content.

### How it works
1. **Monitors emails** with the 'AI-Agent' label
2. **AI classification** into categories: Inquiry, Support, Newsletter, Action Item
3. **Adds appropriate labels** to emails automatically
4. **Creates draft replies** for Support and Inquiry emails
5. **Sends Slack notifications** for Action Items and Newsletter summaries

### Setup Requirements
- Gmail OAuth2 credentials configured
- OpenAI API credentials (or other AI provider)
- Slack OAuth2 credentials (if notifications desired)
- Gmail labels created (see setup instructions below)

### How to customize
- Modify classification categories in the AI Agent
- Adjust label mappings in the Parse Classification node
- Customize draft response templates
- Configure different Slack channels for different email types

## 📊 Basic Information

- **Workflow ID:** 5475
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1157
- **Downloads:** 115
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5475)

## 👤 Author

- **Name:** Fabian ZNTL
- **Username:** @zntl

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **gmailTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **gmail** (×2)
- **switch** 
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
