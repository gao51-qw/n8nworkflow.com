# Get domain expiry reminders with Google Sheets, WHOIS, Telegram, and Ollama AI

> This workflow helps you monitor domain expiration dates and send automated reminders via Telegram when a domain is about to expire or has already expired, using WHOIS data and AI-powered information extracting.

It helps prevent service downtime, lost traffic, and missed renewals for individuals and teams managing multiple domains.

Common use cases:
- Track and remind on agency-managed client domains
- Monitor personal or business domain portfolios
- Send automated expiry alerts for IT and DevOps teams

## How it works
- Runs daily at 08:00 AM
- Reads domain data from Google Sheets
- Fetches WHOIS information from whois.com for each domain
- Extracts the data (expired date, domain owner, status domain) using AI
- Sends a Telegram reminder if the domain expires within 90 days
- Records the notification date to avoid duplicate alerts

## Setup steps
1. Add your Google Sheets ID and ensure the required columns exist
2. Connect your [Google Sheets credentials](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets)
3. Connect your [Telegram credentials](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/chat-operations)
4. Configure your LLM provider (Ollama or other)
5. Activate the workflow

### Need Help?
Contact me on [LinkedIn](https://www.linkedin.com/in/dwicahyas/)!



## 📊 Basic Information

- **Workflow ID:** 12387
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 19
- **Downloads:** 1
- **Created:** 2026/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12387)

## 👤 Author

- **Name:** Cahya
- **Username:** @cahya

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **cron** 
- **googleSheets** (×2)
- **if** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **stickyNote** (×5)
- **splitInBatches** 
- **noOp** 
- **httpRequest** 
- **set** 
- **dateTime** 
- **html** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
