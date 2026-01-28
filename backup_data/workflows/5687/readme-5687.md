# Automated US stock portfolio analysis with Telegram, Perplexity AI & PDF reports

> System Architecture
Two integrated N8N workflows providing automated US stock portfolio management through Telegram:

FLOW 1: Conversational Portfolio Manager
- Telegram bot for interactive portfolio management
- PDF upload & analysis via LlamaIndex Cloud API
- Natural language portfolio updates via GPT-4.1-mini
- Real-time user registration and data management

FLOW 2: Automated Weekly Reports
- Schedule-triggered weekly analysis (every 7 days)
- Perplexity AI sonar-deep-research for market analysis
- Professional PDF report generation via PDFco
- Automatic Telegram delivery to all registered users

## 📊 Basic Information

- **Workflow ID:** 5687
- **Complexity:** advanced
- **Node Count:** 62
- **Views:** 517
- **Downloads:** 51
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5687)

## 👤 Author

- **Name:** Solido AI
- **Username:** @solidoai

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **html** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×8)
- **scheduleTrigger** 
- **splitInBatches** 
- **perplexity** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×6)
- **code** (×7)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **n8n-nodes-pdfco.PDFco Api** (×2)
- **httpRequest** (×5)
- **telegram** (×5)
- **postgres** 
- **supabase** (×8)
- **telegramTrigger** 
- **if** (×3)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **wait** 
- **supabaseTool** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 62 nodes with 57 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
