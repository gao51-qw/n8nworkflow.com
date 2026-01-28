# Automate invoice analysis via Telegram with ChatGPT-4o-mini extraction

> ## Introduction
Upload invoices via Telegram, receive structured data instantly. Perfect for accountants and finance teams.
## How It Works
Telegram bot receives invoices, downloads files, extracts data using OpenAI, then returns analysis.
## Workflow Template
Telegram Trigger → Document Check → Get File → HTTP Download → AI Extract → Format Response → Send to Telegram

## Workflow Steps
1. **Telegram Trigger:** Listens for uploads.
2. **Document Check:** Validates files; routes errors.
3. **Get File:** Retrieves metadata.
4. **HTTP Download:** Fetches content.
5. **AI Extract:** OpenAI parses invoice fields.
6. **Format Response:** Structures data.
7. **Send Analysis:** Delivers to chat.
## Setup Instructions
1. **Telegram Bot:** Create via BotFather, add credentials.
2. **OpenAI Agent:** Add API key and extraction prompt.
3. **HTTP Node:** Set authentication.
4. **Parser:** Define invoice schema.
5. **Error Handling:** Configure fallbacks.
## Prerequisites
- n8n instance
- Telegram Bot Token
- OpenAI API key
## Customization
- Database storage
- Accounting software integration
## Benefits
- Eliminates manual entry
- Reduces errors

## 📊 Basic Information

- **Workflow ID:** 10288
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 294
- **Downloads:** 29
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10288)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** 
- **telegram** (×3)
- **httpRequest** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
