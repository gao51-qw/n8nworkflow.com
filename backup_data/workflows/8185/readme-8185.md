# Analyze images & extract text with GPT-4o Vision and Telegram

> ![image.png](fileId:2307)

## Who’s it for

Teams and makers who want a plug-and-play vision bot: users send a photo in Telegram, the bot returns a concise description plus OCR text. No custom servers required—just n8n, a Telegram bot, and an AIMLAPI key.

## What it does / How it works

The workflow listens for new Telegram messages, fetches the highest-resolution photo, converts it to base64, normalizes the MIME type, and calls AIMLAPI (GPT-4o Vision) via the HTTP Request node using the OpenAI-compatible `messages` format with an `image_url` data URI. The model returns a short caption and extracted text. The answer is sent back to the same Telegram chat.

## Requirements

* n8n instance (self-hosted or cloud)
* Telegram bot token (from @BotFather)
* AIMLAPI account and API key (OpenAI-compatible endpoint)

## How to set up

1. Create a Telegram bot with @BotFather and copy the token.
2. In n8n, add Telegram credentials (no hardcoded tokens in nodes).
3. Add AIMLAPI credentials with your API key (base URL: `https://api.aimlapi.com/v1`).
4. Import the workflow JSON and connect credentials in the nodes.
5. Execute the trigger and send a photo to your bot to test.

## How to customize the workflow

* Modify the vision prompt (e.g., add brand, language, or formatting rules).
* Switch models within AIMLAPI (any vision-capable model using the same `messages` schema).
* Add an IF branch for text-only messages (reply with guidance).
* Log usage to Google Sheets or a database (user id, file id, response).
* Add rate limits, user allowlists, or Markdown formatting in Telegram responses.
* Increase timeouts/retries in the HTTP Request node for long-running images.


## 📊 Basic Information

- **Workflow ID:** 8185
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 926
- **Downloads:** 92
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8185)

## 👤 Author

- **Name:** AI/ML API | D1m7asis
- **Username:** @d1m7asis

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×9)
- **telegramTrigger** 
- **telegram** (×3)
- **extractFromFile** 
- **code** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
