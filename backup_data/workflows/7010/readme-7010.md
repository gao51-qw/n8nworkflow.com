# Automate SEO analysis for multiple domains with Ahrefs and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Fetch SEO and traffic information from ahref for a list of domains in a Google Sheet. This is great for marketing research and SEO workflow optimizations and saves tons of time.

## How it works
* We'll import domains from the Google sheet
* We use an SEO MCP server to fetch data from ahref free tooling
* The fetched data is stored in the Google sheet

## Set up steps
* Copy Google Sheet template and add it in all Google Sheet nodes
* Make sure that n8n has read & write permissions for your Google sheet.
* Add your list of domains in the first column in the Google sheet
* Add MCP credentials for [seo-mcp](https://github.com/cnych/seo-mcp)

## 📊 Basic Information

- **Workflow ID:** 7010
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1135
- **Downloads:** 113
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7010)

## 👤 Author

- **Name:** Michael Muenzer
- **Username:** @michaelmuenzer

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **code** (×2)
- **googleSheets** (×3)
- **n8n-nodes-mcp.mcpClient** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
