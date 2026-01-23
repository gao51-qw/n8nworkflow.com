# Extract website intelligence & classify ecommerce URLs with Gemini & Firecrawl to Google Sheets

> ## Description

This n8n template automates website analysis and ecommerce URL classification using AI. It scrapes a website, extracts business intelligence, maps all internal pages, and categorises them into products, categories, or non-commerce pages. All outputs are saved in Google Sheets for easy access.

---

## Use cases

- Lead enrichment for sales and marketing teams  
- Ecommerce product & category discovery  
- Competitor website analysis  
- Website audits and content mapping  
- Market and industry research  

---

## How it works

1. A user submits a website URL via an n8n form.
2. The homepage is scraped and cleaned.
3. AI extracts company insights (value proposition, industry, audience, B2B/B2C).
4. Firecrawl maps all internal URLs.
5. URLs are enriched with metadata.
6. AI classifies each URL as product, category, or other.
7. Results are written into structured Google Sheets tabs.

---

## How to use

1. Import the workflow into n8n.
2. Connect Google Sheets, Firecrawl, and AI credentials.
3. Update the Google Sheets document links.
4. Open the form URL and submit a website.
5. Let the workflow run and review the results in Sheets.

---

## Requirements

- n8n (self-hosted or cloud)
- Firecrawl API key
- Google Gemini or compatible LLM credentials
- Google Sheets account

---

## Customising this workflow

- Change AI prompts to match your niche (SaaS, ecommerce, services).
- Add filters to exclude unwanted URLs (blogs, legal pages, etc.).
- Extend Sheets with scoring, tagging, or lead qualification logic.
- Replace the LLM with another supported model if needed.

---

## What this template demonstrates

- End-to-end website intelligence extraction
- Safe, rule-based AI classification (no hallucinations)
- Scalable URL processing with batching
- Clean data pipelines into Google Sheets
- Practical AI usage for real business workflows

This template is designed to work out-of-the-box for website intelligence, ecommerce mapping, and lead research.

Feel free to reach out for custom implementation or enhancements:

📧 **Email:** @dinakars2003@gmail.com


## 📊 Basic Information

- **Workflow ID:** 12132
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12132)

## 👤 Author

- **Name:** Dinakar Selvakumar
- **Username:** @jamesdinakar

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@mendable/n8n-nodes-firecrawl.firecrawl** 
- **formTrigger** 
- **httpRequest** 
- **htmlExtract** 
- **code** (×8)
- **googleSheets** (×4)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
