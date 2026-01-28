# Extract business card data from Telegram to Google Sheets with OpenRouter AI Vision

> ## **Title (suggested):**
Extract business card data from Telegram to Google Sheets

## **Who’s it for**

Teams that receive business cards digitally (sales, marketing, back-office) and want a plug-and-play way to capture contacts into a sheet without manual typing.

## **What it does / How it works**

This workflow ingests a business card sent to your Telegram bot, detects whether the message contains an image or text, extracts key fields with an AI Vision Agent (company, full name, department, job title, postal code, address, phone, mobile, fax, email, website), and appends or updates a contact row in Google Sheets automatically.

## **How to set up**

Connect Telegram (bot token) and enable file download.

Connect your AI provider (OpenRouter or equivalent) used by the AI Vision Agent.

Connect Google Sheets and select your spreadsheet + sheet tab.

Rename nodes clearly and keep sticky notes: one overview note (this description) + step notes.

Test by sending a sample card image to your bot and verify the row is appended/updated.

Requirements

Telegram Bot API credential

AI chat/vision credential

Google Sheets OAuth credential and an accessible spreadsheet

How to customize the workflow

Map fields to your sheet headers (add/remove columns as needed).

Adjust the system prompt to prefer your locale or specific field formats.

Change the matching key for update logic (e.g., company name or email).

Add downstream steps (CRM push, dedupe rules, notifications).

Security note: Do not hardcode API keys or include real IDs/emails. Use credentials and environment configs only.

## **JSON**
[
{
  "company_name": "Example Company Ltd.",
  "department": "Sales",
  "job_title": "Sales Manager",
  "full_name": "Taro Yamada",
  "postal_code": "100-0001",
  "address": "1-1-1 Marunouchi, Chiyoda-ku, Tokyo",
  "phone_number": "+81-3-0000-0000",
  "mobile_phone_number": "+81-90-0000-0000",
  "fax_number": "+81-3-1111-1111",
  "email": "example@company.com",
  "website_url": "https://example.com"
}
]

## **Troubleshooting**
**Nothing appears in Google Sheets**

**Solution:**
Verify that your Google Sheets credentials are correctly authorized.

Confirm the Spreadsheet ID and Sheet Name in the node match your target file.

Make sure the Google Sheets node is connected downstream of the AI Vision Agent.

If the workflow runs successfully but nothing is added, check whether the matching column (company_name) already exists — in appendOrUpdate mode it will only update that row.

**AI returns incomplete or invalid data**

**Solution:**
Review the system prompt in the AI Vision Agent to ensure it instructs the model to return a structured JSON object with all required fields (company name, full name, department, job title, address, etc.).

If the result is partial, verify the image quality of the uploaded business card — low contrast or skewed images can reduce OCR accuracy.

You can reduce temperature in the AI node to make output more deterministic.

**Workflow doesn’t start automatically**

**Solution:**
Check that the workflow is activated (toggle is ON in the top right of n8n).

Verify the Webhook URL is correctly registered in Telegram’s bot settings.

Run manually once to ensure all credentials and nodes are configured correctly.

## 📊 Basic Information

- **Workflow ID:** 9754
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 357
- **Downloads:** 35
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9754)

## 👤 Author

- **Name:** Haruki Kuwai
- **Username:** @harukikuwai8098

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegramTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
