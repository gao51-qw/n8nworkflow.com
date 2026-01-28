# Audience problem keyword research workflow with OpenAI, Ahrefs and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Generates relevant keywords and questions from a a customer profile. Keyword data is enriched from ahref and everything is stored in a Google Sheet. This is great for market and customer research. Understanding search intent for a well defined audience and gives relevant actionable data in a fraction of time that manual research takes.

## How it works
* We'll define a customer profile in the 'Data' node
* We use an OpenAI LLM to fetch relevant search intent as keywords and questions
* We use an SEO MCP server to fetch keyword data from ahref free tooling
* The fetched data is stored in the Google sheet

## Set up steps
* Copy Google Sheet template and add it in all Google Sheet nodes
* Make sure that n8n has read & write permissions for your Google sheet.
* Add your list of domains in the first column in the Google sheet
* Add MCP credentials for [seo-mcp](https://github.com/cnych/seo-mcp)
* Add OpenAI [API](https://docs.n8n.io/integrations/builtin/credentials/openai/#using-api-key) credentials



## 📊 Basic Information

- **Workflow ID:** 7147
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 467
- **Downloads:** 46
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7147)

## 👤 Author

- **Name:** Michael Muenzer
- **Username:** @michaelmuenzer

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **googleSheets** (×4)
- **code** (×3)
- **splitInBatches** (×3)
- **n8n-nodes-mcp.mcpClient** 
- **if** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
