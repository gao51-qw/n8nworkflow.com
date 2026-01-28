# Generate AI images via Telegram using Gemini & Pollinations

> How it works
This workflow lets users generate AI images directly from Telegram messages using:

Google Gemini API – to convert text to detailed, high-quality image prompts.

Pollinations API – to generate free AI images from the prompts.

Telegram Bot – to interact with users and return generated images instantly.

It’s fully automated using n8n — from text message to stunning image, all in one flow.
Perfect for creators, content marketers, or anyone wanting quick visuals on the go.

Set up steps
🧩 Estimated setup time: ~10–15 minutes

Create a Telegram Bot via @BotFather, copy your token, and set up the Telegram Trigger node in n8n with your credentials.

Set up Google Gemini API via Google AI Studio or Cloud Console.

Make sure your API key is added in the credentials section of the Gemini node.

Customize prompt structure or image size in the Fields - Set Values or Prompt Agent node.

(Optional) Enable Save to Disk if you want to keep a local copy of every image.

Deploy and run the workflow — done 🎉

🛠️ All technical details and logic are fully documented inside the workflow using sticky notes.
⚠️ Requirements
n8n (Self-hosted or Cloud)

Telegram Bot Token

Google Gemini API key (with billing enabled — includes some free usage)

No key needed for Pollinations API — it's 100% free 🆓

## 📊 Basic Information

- **Workflow ID:** 6197
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1107
- **Downloads:** 110
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6197)

## 👤 Author

- **Name:** NAZIA AI ACADEMY
- **Username:** @merzag

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **code** (×3)
- **httpRequest** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **readWriteFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
