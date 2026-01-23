# Process receipts with Google Vision OCR, AI & Telegram to Google Sheets

> ## Automated Financial Reporting Using Google Vision OCR, Telegram & Google Sheets


This workflow automates the process of recording financial transactions from photos of receipts or shopping receipts. Users simply send an image of the receipt via Telegram. The image is processed using the Google Vision API to detect text, then extracted and structured by LLM via OpenRouter. The final result is saved to Google Sheets and also displayed to the user via a Telegram bot.

**🧾 Google Sheets Template**
Create a Google Sheet using this template: [Financial Reporting](https://docs.google.com/spreadsheets/d/11oT95lKoGNFlZtV129ampaBNOxnnKAJnUn1fAlqYZvY/edit?usp=sharing)

## 🛠️ Key Features
- The workflow starts when a user sends a photo of a receipt to the Telegram bot.
- The image is converted to text using the Google Vision API's OCR.
- Data processing with LLM (OpenRouter) helps identify and structure transaction elements such as: date, vendor name & address, receipt/invoice number, item list (product name, quantity, unit price, total), and transaction category.
- Cleaned and structured data is automatically recorded to Google Sheets per item.
- The system also sends a summary of the recording results in an easy to read text format.
- Users can also send text messages to the bot to query stored transaction data, which will be answered by a Google Sheets-based AI Agent.

## 🔧 Requirements
- Active Telegram Bot + API Token
- Google Vision API Key
- OpenRouter Account + API Key
- Google Sheets connected to n8n

## 🧩 Setup Instructions
1. Replace all API keys and tokens with your own in the relevant nodes.
   - Google Vision API Key: Set in 'Set Vision API' node.
   - Telegram Bot Token: Set in 'Set Telegram Token' node and all Telegram nodes.
   - OpenRouter API Key: Set in all OpenRouter nodes.
   - Google Sheets: Connect your own Google Sheets credential.
2. Use the provided Google Sheets template or your own.
3. Activate the workflow after configuration.
4. (Optional) Review sticky notes for step-by-step explanations.


## 📊 Basic Information

- **Workflow ID:** 6359
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 2732
- **Downloads:** 273
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6359)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** 
- **httpRequest** (×3)
- **set** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **splitOut** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
