# Extract Arabic text from PDFs with Mistral OCR, Telegram Bot & Google Docs

> # Arabic OCR Telegram Bot

## How it Works

1. **Receive PDF Files** - Users send PDF documents via Telegram to the bot
2. **OCR Processing** - Mistral AI's OCR service extracts Arabic text from document pages
3. **Text Organization** - Processes and formats extracted content with page numbers
4. **Create Google Doc** - Generates a formatted document with all extracted text
5. **Deliver Results** - Sends users a clickable link to their processed document

## Set up Steps

**Setup Time: ~20 minutes**

1. **Create Telegram Bot** - Get bot token from @BotFather on Telegram
2. **Configure APIs** - Set up Mistral AI OCR and Google Docs API credentials
3. **Set Folder Permissions** - Create Google Drive folder for storing results
4. **Test Bot** - Send a sample Arabic PDF to verify OCR accuracy
5. **Deploy Webhook** - Activate the Telegram webhook for real-time processing

*Detailed API configuration and Arabic text handling notes are included as sticky notes within the workflow.*

---

**What You'll Need:**
- Telegram Bot Token (free from @BotFather)
- Mistral AI API key (OCR service)
- Google Docs/Drive API credentials
- Google Drive folder for document storage
- Sample Arabic PDF files for testing

**Key Features:**
- Real-time progress updates (5-step process notifications)
- Automatic page numbering in Arabic
- Direct Google Docs integration
- Error handling for non-PDF files

## 📊 Basic Information

- **Workflow ID:** 7892
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 347
- **Downloads:** 34
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7892)

## 👤 Author

- **Name:** Abdulrahman Alhalabi
- **Username:** @alhalabi

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×7)
- **telegram** (×8)
- **telegramTrigger** 
- **if** 
- **httpRequest** (×3)
- **code** 
- **googleDocs** (×2)
- **splitInBatches** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
