# Bright Data-powered competitive price lookup and report generator

> This n8n workflow automates the collection, enrichment, and analysis of e-commerce product listings using Bright Data and AI, then delivers an HTML email report with the most competitive offers.

🚀 **What It Does**

- Pulls product titles from a Google Sheet.
- For each product, searches a Bright Data marketplace dataset (Google Shopping) for available listings.
- Extracts relevant fields: price, title, seller name, and listing URL.
- Sends this data to Google Gemini for AI-powered Markdown report generation.
- Converts Markdown to HTML and styles the output for better email rendering.
- Sends an email report for each product with the top 20 most affordable offers.

🛠️ **Step-by-Step Setup**

- Load product list from Google Sheets.
- For each product title, run a Bright Data filter request (case-sensitive match).
- Poll the snapshot status until it is ready.
- Retrieve snapshot content and clean the results with a Code node.
- Pass the results to Gemini (PaLM/Gemini Flash) for analysis and report generation in Markdown.
- Convert Markdown into styled HTML using Markdown + Code nodes.
- Send formatted email to a predefined recipient.
- Return to the loop and repeat for the next product.

🧠 **How It Works**

- Loop Control: SplitInBatches handles product-by-product processing.
- Snapshot Handling: Snapshot status is polled every 30s until success/failure.
- AI Formatting: Gemini summarizes listings and formats content.
- Error Handling: Failed snapshots produce a warning message and resume the loop.

📨 **Final Output**

- Each email contains:
- The product name
- A clean HTML of up to 20 sellers with lowest prices
- Links to listings
- AI-generated pricing summary

🔐 **Credentials Used**

- Bright Data account
- Google Gemini (PaLM/Gemini Flash)
- Google Sheets (OAuth2)
- SMTP Email (emailSend node)

⚠️ **Important Notes**

 - Item title search is case-sensitive. Typos or casing mismatches may result in no results.
- Requires **n8n-nodes-brightdata community node** to be installed.



## 📊 Basic Information

- **Workflow ID:** 4348
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 537
- **Downloads:** 53
- **Created:** 2025/5/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4348)

## 👤 Author

- **Name:** Gleb D
- **Username:** @glebd

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **wait** 
- **n8n-nodes-brightdata.brightData** (×3)
- **if** (×3)
- **splitInBatches** 
- **code** (×3)
- **emailSend** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **markdown** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
