# Weekly SEO watchlist audit to Google Sheets with Gemini and Decodo

> ## Weekly SEO Watchlist Audit to Google Sheets (Gemini + Decodo)

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

Automatically fetches page content, generates a compact SEO audit (score, issues, fixes), and writes both a per-URL summary and a normalized “All Issues” table to Google Sheets—great for weekly monitoring and prioritization.

## Who’s it for?
Content/SEO teams that want lightweight, scheduled audits of key pages with actionable next steps and spreadsheet reporting.

## How it works
1. Weekly trigger loads the Google Sheet of URLs.
2. Split in Batches processes each URL.
3. Decodo fetches page content (markdown + status).
4. Gemini produces a strict JSON audit via the AI Chain + Output Parser.
5. Code nodes flatten data for two tabs.
6. Google Sheets nodes append Summary and All Issues rows.
7. Split in Batches continues to the next URL.

## How to set up
- Add credentials for Google Sheets, [Decodo](https://visit.decodo.com/discount), and Gemini.
- Set `sheet_id` and Sheet GIDs in the Set node.
- Ensure input sheet has a `URL` column.
- Configure your Google Sheets tabs with proper headers matching each field being appended (e.g., URL, Decodo Score, Priority, etc.).
- Adjust schedule as needed.
- Activate the workflow.


## 📊 Basic Information

- **Workflow ID:** 9982
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 120
- **Downloads:** 12
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9982)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **noOp** 
- **googleSheets** (×3)
- **splitInBatches** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** (×2)
- **merge** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
