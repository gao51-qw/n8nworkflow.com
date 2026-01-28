# Extract text from images with Telegram Bot & OCR Tesseractjs

> **Description**
This n8n workflow enables users to send an image to a Telegram bot and receive the extracted text using Tesseract OCR (via the n8n-nodes-tesseractjs Community Node). It's a quick and straightforward way to convert images into readable text directly through chat.

**How it Works**

- The workflow listens for new image messages coming in via the Telegram bot.

- Once an image is received, it downloads the image file from Telegram (which initially arrives as application/octet-stream).

- The image data, now properly identified, is then sent to the Tesseract OCR node to extract the text.

- Finally, the recognized text is sent back as a reply to the Telegram user.

**Setup Steps**

- Install Community Node: Ensure you have installed n8n-nodes-tesseractjs in your n8n instance.

- Connect Telegram Bot: Configure the Telegram Trigger node with your Telegram bot.

- Bot Token: Add your Telegram bot token to the Send Message node to send replies.

- Deploy & Test: Activate (deploy) the workflow and send an image to your Telegram bot to test.

## 📊 Basic Information

- **Workflow ID:** 5413
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 9524
- **Downloads:** 952
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5413)

## 👤 Author

- **Name:** Rudi Afandi
- **Username:** @fanfanra

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** 
- **n8n-nodes-tesseractjs.tesseractNode** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
