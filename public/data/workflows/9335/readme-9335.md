# Analyze real estate investment potential: Zillow properties to Google Sheets with GPT-4o

> This workflow automates the process of scraping, analyzing, and storing real estate data from Zillow using Apify, OpenAI, and Google Sheets.

It begins by running an Apify Actor that extracts live property details such as price, location, and key features. The data is then cleaned and processed before being analyzed by an AI model that assigns an investment potential score (1–10).

To maintain reliable results, the AI only scores properties that include all required fields — for example, listings missing price or description data are automatically skipped. This ensures that only complete and accurate information is evaluated.

Finally, all valid results are appended or updated in a Google Sheet, creating a central, always-up-to-date property database for future analysis.

Ideal for real estate investors, analysts, and data-driven agencies, this template provides a fully automated loop for property collection, evaluation, and reporting — all in one flow.

Tools used: Apify, OpenAI, Google Sheets, n8n![Captura de pantalla 20251015 202643.png](fileId:2966)

## 📊 Basic Information

- **Workflow ID:** 9335
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 392
- **Downloads:** 39
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9335)

## 👤 Author

- **Name:** Fabian Perez
- **Username:** @fabianprz

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@apify/n8n-nodes-apify.apifyTrigger** 
- **set** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **stickyNote** (×6)
- **@apify/n8n-nodes-apify.apify** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
