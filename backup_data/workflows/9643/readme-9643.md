# Extract business card data & generate follow-ups with Google Vision OCR & GPT-4 Mini

> This n8n template helps you turn business cards into qualified sales opportunities — instantly.

No more lost leads after events or networking meetups. Just send a business card photo via Telegram, and let AI handle the rest.

The workflow extracts details (name, company, role, email, phone) using Google Vision OCR, analyzes context with OpenAI, and then generates personalized WhatsApp or email messages to help you follow up faster.

## Use Cases

Capture leads instantly from events or meetups.

Auto-analyze business card data into structured CRM entries.

Send hyper-personalized WhatsApp messages or emails within minutes.

Ideal for founders, marketers, and business development teams.

## How it Works

Trigger: Send a photo of a business card via Telegram.

Extract: Google Vision OCR reads and extracts all text from the image.

Process: The extracted text is sent to an AI agent (OpenAI GPT-4.1-mini) for:

Contact parsing (name, company, role, email, phone)

Business/industry inference

AI-generated personalized follow-up messages

Output: The system returns structured JSON containing:

Email subject & body

WhatsApp draft message

Fit score, opportunities, and next action steps

## How to Use

Import the JSON template into n8n.

Add your Telegram Bot Token to the “Telegram Trigger” node.

Add your Google Cloud Vision API key in the HTTP Request node.

Add your OpenAI credentials in the “OpenAI Chat Model” node.

(Optional) Connect the output to Google Sheets, Airtable, or your CRM.

Run the workflow — take a photo of a business card and watch the magic happen!

## Requirements

Telegram Bot for image input

Google Vision API Key

OpenAI API Key

(Optional) Integration with CRM or WhatsApp API

## Customization Ideas

Replace Telegram with Email or WhatsApp triggers.

Push qualified leads directly into HubSpot or Notion.

Automate multi-step sequences based on AI fit scores.

## 📊 Basic Information

- **Workflow ID:** 9643
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 399
- **Downloads:** 39
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9643)

## 👤 Author

- **Name:** Aditya Malur
- **Username:** @aditya-malur

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **if** 
- **googleSheets** 
- **stickyNote** (×11)
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
