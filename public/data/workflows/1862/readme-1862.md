# OpenAI GPT-3: Company enrichment from website content

> Enrich your company lists with OpenAI GPT-3 ↓

You’ll get valuable information such as:

- Market (B2B or B2C)
- Industry
- Target Audience
- Value Proposition

This will help you to:

- add more personalization to your outreach
- make informed decisions about which accounts to target

I've made the process easy with an n8n workflow.

Here is what it does:

- Retrieve website URLs from Google Sheets
- Extract the content for each website
- Analyze it with GPT-3
- Update Google Sheets with GPT-3 data

## 📊 Basic Information

- **Workflow ID:** 1862
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 87415
- **Downloads:** 8741
- **Created:** 2023/1/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1862)

## 👤 Author

- **Name:** Lucas Perret
- **Username:** @lempire

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **htmlExtract** 
- **openAi** 
- **merge** 
- **code** (×2)
- **googleSheets** (×2)
- **splitInBatches** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
