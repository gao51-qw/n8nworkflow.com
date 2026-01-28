# Sync and enrich HubSpot leads from Google Sheets and Telegram with Gemini and Lusha

> This workflow automates lead ingestion from Google Sheets and Telegram, leveraging Gemini AI and Lusha for intelligent matching and deep data enrichment. By normalizing incoming data into a standard structure, it uses custom fuzzy logic to identify existing HubSpot records—preventing duplicates and ensuring your CRM stays clean with validated contact and company details.

**Key Features:**

**Agnostic Intake:** Seamlessly processes leads from structured Google Sheets or raw Telegram messages parsed by Gemini AI.

**Intelligent Matching:** Custom JS engine performs two-tier matching (hard & fuzzy) to save Lusha credits and keep CRM data integrity.

**Deep Enrichment:** Automatically triggers Lusha API to find missing emails and update firmographic data like revenue and industry.

**Automated Sync:** Closes the loop by notifying the team on Telegram and updating the spreadsheet status once a lead is processed.

**Setup Instructions:**

1. Connect your HubSpot, Lusha, Gemini, Google Sheets, and Telegram credentials.

2. Input your Spreadsheet ID in the 'Trigger' and 'Acknowledge' nodes.

3. Adjust the similarity threshold in the 'Switch Logic' node (default 80) based on your data needs.

## 📊 Basic Information

- **Workflow ID:** 12708
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12708)

## 👤 Author

- **Name:** Danny
- **Username:** @danme

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **hubspot** (×3)
- **switch** (×4)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **httpRequest** (×5)
- **googleSheetsTrigger** 
- **filter** (×4)
- **telegram** 
- **googleSheets** 
- **code** (×6)
- **wait** 
- **stickyNote** (×7)
- **merge** (×2)
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
