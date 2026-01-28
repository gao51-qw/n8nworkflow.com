# Log food calories from images to Google Sheets using LINE and OpenAI Vision

> This workflow allows a LINE user to send either text or an image of food to a connected LINE bot.

If text is sent, the AI agent responds directly via LINE.

If an image is sent, the workflow downloads it from LINE’s API, analyzes it using OpenAI’s Vision model, estimates calories (only if the image contains food), and formats the result into JSON.

Detected dishes and calories are appended to a Google Sheet, and a confirmation message is sent back to the user via LINE.

Key Features:

Integrates LINE Messaging API webhook with n8n

Uses OpenAI Vision to detect food and estimate calories

Automatically logs results into Google Sheets

Sends real-time feedback to the LINE user

How to use:

Set up a LINE Messaging API channel and get your channel access token.

Add your OpenAI API credentials in n8n.

Replace placeholders for {channel access token}, {your id}, and Google Sheet IDs with your own.

Activate the workflow and send a food image or text message to your LINE bot.

## 📊 Basic Information

- **Workflow ID:** 7228
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1074
- **Downloads:** 107
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7228)

## 👤 Author

- **Name:** kote2
- **Username:** @kote2

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **code** (×2)
- **googleSheets** 
- **webhook** 
- **if** 
- **httpRequest** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
