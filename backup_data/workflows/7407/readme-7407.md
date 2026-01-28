# AI-powered support automation with Outlook, OpenAI & JIRA ticketing

> ## This workflow automatically processes customer support requests from emails and web forms, uses AI to classify and either auto-resolve simple issues or intelligently route complex ones to the right team members with proper JIRA tickets and SLA tracking.


### Key Benefits

- Multi-channel support (email + web forms)
- Smart routing to qualified agents based on expertise
- Consistent ticket creation with full context in JIRA


### Perfect For

- Support teams handling 50+ requests/day
- SaaS companies with tiered customer support
- Organizations wanting to scale support without hiring
- Teams needing consistent ticket classification

### Requirements

Microsoft Outlook (email monitoring)
OpenAI API (AI classification)
JIRA Cloud (ticket management)
n8n instance with AI nodes


## 📊 Basic Information

- **Workflow ID:** 7407
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 654
- **Downloads:** 65
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7407)

## 👤 Author

- **Name:** Annie To
- **Username:** @annieth

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **microsoftOutlook** (×2)
- **webhook** 
- **function** (×2)
- **removeDuplicates** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **jira** 
- **gmail** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
