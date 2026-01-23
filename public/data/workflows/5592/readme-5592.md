# Process & summarize PDFs from email & messaging apps with OpenAI GPT

> # Process PDFs from Gmail, Outlook, Telegram and WhatsApp with OpenAI

Transform PDF documents into actionable insights automatically across multiple platforms. This workflow monitors emails and messaging platforms for PDF attachments, extracts content, and delivers AI-powered summaries.

## Who's it for

Business professionals, teams, and organizations needing automated PDF analysis from emails and messaging platforms. Perfect for processing contracts, reports, invoices, and documents requiring quick review.

## How it works

Monitors Gmail and Outlook for PDF attachments while receiving PDFs via Telegram bot and WhatsApp Business API. Uses OpenAI to extract text and generate structured summaries with executive overviews, key points, important details, insights, and document type identification. Automatically routes summaries back to original senders.

## Requirements

- Gmail/Outlook OAuth2 credentials
- Telegram Bot API token via @BotFather  
- WhatsApp Business API account
- OpenAI API key

## How to set up

Configure API credentials in respective nodes, update configuration variables for phone numbers and notification settings, then test with sample PDFs.

## How to customize

Modify AI models, customize prompts, adjust response formatting, extend file support, add notification channels, or integrate with external systems.

Perfect for automating document workflows across communication channels.

## 📊 Basic Information

- **Workflow ID:** 5592
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 460
- **Downloads:** 46
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5592)

## 👤 Author

- **Name:** papcy
- **Username:** @papcy

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **gmail** 
- **microsoftOutlook** 
- **telegramTrigger** 
- **whatsAppTrigger** 
- **if** (×4)
- **extractFromFile** 
- **set** (×5)
- **whatsApp** (×3)
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
