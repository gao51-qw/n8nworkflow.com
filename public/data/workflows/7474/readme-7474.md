# Categorize and track company emails with OpenRouter AI and Google Sheets

> **How it works**

* Watches inbox for new emails via IMAP.
* Fetches existing categories and requests from Google Sheets.
* Uses AI to analyze subject and body, then assigns a category and request type.
* Checks if the same category/request already exists in the sheet.
* If found, increments the request count for that row.
* If new, adds a fresh row with category, request, and count set to 1.

**Set up steps**

* Connect IMAP email account for inbox access.
* Connect Google Sheets account and link to the target sheet.
* Connect AI service account (OpenRouter).
* Import workflow into automation platform and map credentials.
* Test once with a sample email to verify classification and sheet update.
* Estimated setup time: \~15–20 minutes with accounts ready.

## 📊 Basic Information

- **Workflow ID:** 7474
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 37
- **Downloads:** 3
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7474)

## 👤 Author

- **Name:** Archit Jain
- **Username:** @architjn

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **emailReadImap** 
- **googleSheets** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
