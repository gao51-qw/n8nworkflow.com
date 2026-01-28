# Gmail AI search assistant on Telegram (Gemini-powered)

> # Overview
The n8n Telegram Gmail Assistant is an intelligent workflow that lets you search and retrieve specific Gmail emails simply by messaging a Telegram bot. Powered by advanced language models, it turns plain-language requests into precise Gmail searches, delivering results directly to your Telegram chat. This no-code automation is perfect for users who want instant, conversational access to their inbox—no Gmail tab required.

## Key Features
**Conversational Email Search:** Just message the Telegram bot with requests like “Get me all emails from Amazon” or “Show unread emails after 6 June 2025.” The assistant understands sender names, keywords, and date filters—even if you only provide part of the information.

**AI-Powered Query Parsing:** Uses a language model (LLM) to intelligently extract sender, keywords, and date range from your message, then builds an accurate Gmail search query.

**Flexible Filtering:** Supports sender, keywords, ‘after’ and ‘before’ dates, or any combination. Handles both specific and broad queries.

**Instant Telegram Delivery:** Each matching email is formatted with date, sender, subject, and a snippet, and sent as a separate Telegram message for easy reading.

**Customizable & Extendable:** Swap the AI model (Google Gemini or OpenAI), adjust output formatting, and set email limits or read status as needed.

## How It Works

1. **User Sends a Telegram Message:** For example, “Get unread emails from Amazon about invoices after 1 June 2025.”
2. **AI Interprets the Request:** The workflow’s LLM agent extracts sender, keywords, and date filters, converting them into a Gmail search query using Gmail’s syntax (e.g., from:amazon AND (invoice OR invoices) AND after:2025/06/01).
3. **Gmail Search:** The workflow fetches all matching emails from your connected Gmail account.
4. **Message Formatting:** Each email is summarized into a concise, emoji-rich Telegram message (date, sender, subject, snippet).
5. **Telegram Delivery:** Results are sent to your Telegram chat, one message per email.

## Setup Instructions
1. **Create a Telegram Bot:** Use @BotFather on Telegram to create a bot and obtain the API token.
2. **Connect Telegram to n8n:** Add your bot’s API token as a credential in n8n.
3. **Connect Gmail Account:** Authorize your Gmail account in n8n, set email limits, and choose read/unread status preferences.
4. **Configure AI Model:** Use your own Google Gemini or OpenAI API key, or select a preferred LLM node in the workflow.
5. **Deploy the Workflow:** Activate the workflow and start messaging your Telegram bot to retrieve emails instantly.

## Value Proposition

- **Save Time:** No need to open Gmail or remember search operators—just ask in plain language.
- **Stay Organized:** Instantly filter and retrieve important emails, even on the go.
- **User-Friendly:** No coding required, with clear setup steps and customizable options.
- **Cost-Effective:** Available simply with an n8n subscription—no extra costs or hidden fees of anything. Enjoy the workflow Free Forever within your n8n plan.

## 📊 Basic Information

- **Workflow ID:** 5044
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 874
- **Downloads:** 87
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5044)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **stickyNote** (×5)
- **telegramTrigger** 
- **set** (×2)
- **gmail** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
