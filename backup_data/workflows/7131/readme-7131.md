# Automated Twitter brand promotion with Anthropic Claude AI & Google Sheets reporting

> ## This n8n workflow promotes your brand/company/platform by mentioning it in Twitter comments. The responses look human-like, the workflow is robust and designed to avoid bans.

#### Good to know
The workflow is configured to maximize efficiency while minimizing costs and ensuring your Twitter account won't get banned or shadow-banned. Generating more than 17 comments per day would require a paid Twitter subscription plan.

### How it works
- The User sets a keyword that would be used to find relevant Posts. An AI Agent analyzes each Post and writes a response, promoting User's Brand.
- After each reponse is submitted, the result is  logged in a Report Table for tracking and convenience.

### Set up steps
- Set your target keyword and start the workflow.
- Detailed instructions and tutorials can be found in the workflow's sticky notes.

### Requirements
- Twitter and Google accounts.
- twitterapi.io subscription (used to overcome official Twitter API limitaions).
- Anthropic subscription (GPT models are also supported, but I personally recommend using Anthropic Claude Sonnet 4 for text generation).

## 📊 Basic Information

- **Workflow ID:** 7131
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 349
- **Downloads:** 34
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7131)

## 👤 Author

- **Name:** Pavlo Hurhu
- **Username:** @pavlohurhu

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **stickyNote** (×6)
- **scheduleTrigger** 
- **merge** (×2)
- **wait** 
- **splitInBatches** 
- **set** (×3)
- **googleSheets** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **twitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
