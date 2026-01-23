# Automate SEO reporting with Google Search Console, GA4, and Google Sheets

> ## How it works:
This workflow automates comprehensive SEO reporting by:
- Extracting keyword rankings and page performance from Google Search Console.
- Gathering organic reach metrics from Google Analytics.
- Analyzing internal and external article links.
- Tracking keyword position changes (gains and losses).
- Formatting and importing all data into Google Sheets reports.

## Set up steps:
1. **Connect Google Services**: Authenticate Google Search Console, Google Analytics, and Google Sheets OAuth2 credentials.
2. **Configure Source Sheet**: Set up a data source Google Sheet with article URLs to analyze.
3. **Set Report Sheet**: Create or specify destination Google Sheets for reports.
4. **Update Date Ranges**: Modify date parameters in GSC and GA nodes for your reporting period.
5. **Customize Filters**: Adjust keyword filters and row limits based on your needs.
6. **Test Individual Sections**: Each reporting section (keywords, pages, articles, position changes) can be tested independently.

The workflow includes separate flows for:
- Keyword ranking (top 1000).
- Page ranking analysis.
- Organic reach reporting.
- Internal article link analysis.
- External article link analysis.
- Position gain/loss tracking.

## 📊 Basic Information

- **Workflow ID:** 11665
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 473
- **Downloads:** 47
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11665)

## 👤 Author

- **Name:** Adam Gałęcki 
- **Username:** @agalecki

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×7)
- **code** (×11)
- **httpRequest** (×4)
- **set** (×2)
- **googleSheets** (×11)
- **googleAnalytics** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
