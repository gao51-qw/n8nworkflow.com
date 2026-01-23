# Digitize business cards with Thai OCR & save to Google Sheets or CRM

> ## This n8n template demonstrates how to use Typhoon OCR + LLM to digitize business cards, enrich the extracted details, and save them directly into Google Sheets or any CRM.

It works with both Thai and English business cards and even includes an optional step to draft greeting emails automatically.

Use cases: Automatically capture leads at events, enrich contact details before saving them into your CRM, or simply keep a structured database of your professional network.

### Good to know

Two versions of the workflow are provided:

🟢 **Without Search API** → cost-free option using only Typhoon OCR + LLM

🔵 **With Search API** → adds Google Search enrichment for richer profiles (may incur API costs via SerpAPI)

The Send Email step is optional — include it if you want to follow up instantly, or disable it if not needed.

Typhoon provides a free API for anyone to sign up and use → [opentyphoon.ai](https://opentyphoon.ai/?utm_source=n8n)


### How it works

1. A form submission triggers the workflow with a business card image (JPG/PNG).

2. Typhoon OCR extracts text from the card (supports Thai & English).

3. Typhoon LLM parses the extracted text into structured JSON fields (e.g., name, job title, organization, email).

4. Depending on your chosen path:

- Version 1: Typhoon LLM enriches the record with job type, level, and sector.

- Version 2: The workflow calls the Search API (via SerpAPI) to add a profile/company summary.

5. The cleaned and enriched contact is saved to Google Sheets (can be swapped with your preferred CRM or database).

6. (Optional) Typhoon LLM drafts a short, friendly greeting email, which can be sent automatically via Gmail.

### How to use

The included form trigger is just one example. You can replace it with:
- A webhook for uploads
- A file drop in cloud storage
- Or even a manual trigger for testing

You can easily change the destination from Google Sheets to HubSpot, Notion, Airtable, or Salesforce.

The enrichment prompt is customizable — adjust it to classify contacts based on your organization’s needs.

### Requirements

- Typhoon API key
- Google Sheets API credentials + a prepared spreadsheet
- (Optional) Gmail API credentials for sending emails
- (Optional) SerpAPI key for the Search API enrichment path

### Customising this workflow

This AI-powered business card reader can be adapted to many scenarios:

- Event lead capture: Collect cards at conferences and sync them to your CRM automatically.

- Sales enablement: Draft instant greeting emails for new contacts.

- Networking: Keep a clean and enriched database of your professional connections.


## 📊 Basic Information

- **Workflow ID:** 7978
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 340
- **Downloads:** 34
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7978)

## 👤 Author

- **Name:** Typhoon Team
- **Username:** @opentyphoon

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×5)
- **googleSheets** (×2)
- **gmail** 
- **editImage** (×2)
- **set** (×4)
- **formTrigger** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
