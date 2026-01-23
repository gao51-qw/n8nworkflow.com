# Analyze Trustpilot & Sitejabber sentiment with Decodo + Gemini to sheets

> ## Analyze Trustpilot & Sitejabber sentiment with Decodo + Gemini to Sheets

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

This template scrapes public reviews from **Trustpilot** and **Sitejabber** with a Decodo tool, converts findings into a **flat, spreadsheet-ready JSON**, generates a concise sentiment summary with **Gemini**, and appends everything to **Google Sheets**. It’s ideal for reputation snapshots, competitive analysis, or lightweight BI pipelines that need structured data and a quick narrative.

## Who’s it for?
Marketing teams, growth analysts, founders, and agencies who need repeatable review collection and sentiment summaries without writing custom scrapers or manual copy/paste.

## How it works
1. A **Form Trigger** collects the *Business Name or URL*.
2. **Set (Config Variables)** stores `business_name`, `spreadsheet_id`, and `sheet_id`.
3. The **Agent** orchestrates the Decodo tool and enforces a **strict JSON schema** with at most **10 reviews per source**.
4. **Gemini** writes a succinct summary and recommendations, noting missing sources with: “There’s no data in this website.”
5. A **Merge** node combines JSON fields with the narrative.
6. **Google Sheets** appends a row.

## How to set up
1. Add **Google Sheets**, **Gemini**, and **Decodo** credentials in Credential Manager.
2. Replace `(YOUR_SPREADSHEET_ID)` and `(YOUR_SHEET_ID)` in **Set: Config Variables**.
3. In **Google Sheets**, select **Define below** and map each column explicitly.
4. Keep the parser and agent connections intact to guarantee flat JSON.
5. Activate, open the form URL, submit a business, and verify the appended row.


## 📊 Basic Information

- **Workflow ID:** 9985
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9985)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@decodo/n8n-nodes-decodo.decodoTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **merge** 
- **stickyNote** (×9)
- **formTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
