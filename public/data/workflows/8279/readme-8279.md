# Extract & store receipt data with GPT-4, OCR, Google Sheets & Notion via Telegram Bot

> ## Overview
Transform your receipt management with this comprehensive n8n workflow that automatically processes receipts through Telegram, extracts transaction data using AI, and stores it across multiple platforms for seamless expense tracking.

## Key Features
- **📱 Telegram Bot Integration**: Send receipts via photo or manual text entry
- **🔍 OCR Processing**: Automatic text extraction from receipt images using OCR.space API
- **🤖 AI Data Extraction**: OpenAI GPT-4 intelligently extracts vendor, amount, date, and category
- **📊 Multi-Platform Storage**: Automatically saves to Google Sheets, Notion, and custom APIs
- **💾 Receipt Archival**: Stores original receipt images in Google Drive
- **✅ Smart Validation**: Validates extracted data and handles errors gracefully
- **📲 Real-time Feedback**: Sends confirmation messages with transaction details

## How It Works
1. **Input Methods**: Send receipt photos or text messages to your Telegram bot
2. **Image Processing**: Downloads and processes receipt images using OCR technology
3. **AI Analysis**: GPT-4 extracts structured transaction data from OCR text
4. **Data Validation**: Ensures data quality and handles missing information
5. **Multi-Storage**: Simultaneously saves to Google Sheets, Notion database, and external APIs
6. **Confirmation**: Sends formatted confirmation with all transaction details

## Use Cases
- Personal expense tracking and budgeting
- Small business receipt management
- Travel expense documentation
- Tax preparation and record keeping
- Automated bookkeeping workflows

## Required Credentials
- Telegram Bot API (for bot functionality)
- OCR.space API (for receipt text extraction)
- OpenAI API (for AI data processing)
- Google Sheets OAuth2 (for spreadsheet storage)
- Google Drive OAuth2 (for image storage)
- Notion API (for database integration)

## Setup Notes
Replace placeholder values in the workflow:
- `YOUR_GOOGLE_SHEET_ID_HERE` in Google Sheets node
- `YOUR_NOTION_DATABASE_ID_HERE` in Notion node
- `YOUR_API_KEY_HERE` and API endpoint in Website API node

This workflow provides a complete solution for automated receipt processing, making expense tracking effortless through simple Telegram interactions while maintaining data across multiple platforms for maximum accessibility and backup.

## 📊 Basic Information

- **Workflow ID:** 8279
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1093
- **Downloads:** 109
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8279)

## 👤 Author

- **Name:** Tegar karunia ilham
- **Username:** @tegarkaruniailham

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** (×2)
- **telegram** (×3)
- **httpRequest** (×2)
- **function** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **googleDrive** 
- **notion** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
