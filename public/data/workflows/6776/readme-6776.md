# Automated company research & lead enrichment with GPT-4o and Google Sheets

> Supercharge your sales and marketing with this AI-powered workflow! 🚀 Stop wasting hours on manual company research. This template deploys an autonomous AI agent that takes a list of company names from a Google Sheet, scours the web to find critical information, and automatically updates your sheet with the enriched data.

**What it does:**
- Reads a list of companies to research from a Google Sheet.
- Uses an AI agent equipped with Google Search and web scraping tools.
- Extracts key data points like LinkedIn URLs, pricing details, integrations, market focus (B2B/B2C), and more.
- Structures the output into a clean JSON object.
- Updates the original Google Sheet with the new information.

**Key Features & Customization:**
This workflow is built to be easily customized. You can modify the AI's prompt in the "AI company researcher" node and adjust the "Structured Output Parser" to gather any public data point you need, such as recent news, key executives, or their technology stack.

**Required Credentials:**
- OpenAI
- Google Sheets
- SerpApi or ScrapingBee for search capabilities

## 📊 Basic Information

- **Workflow ID:** 6776
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1971
- **Downloads:** 197
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6776)

## 👤 Author

- **Name:** Candra Reza
- **Username:** @candrareza

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 
- **googleSheets** (×2)
- **merge** 
- **stickyNote** (×8)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
