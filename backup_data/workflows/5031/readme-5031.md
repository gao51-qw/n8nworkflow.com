# AI text-to-image for Telegram (Gemini + Hugging Face FLUX)

> Turn text prompts into stunning AI-generated images—automatically!

## What it does?

This workflow lets your Telegram bot:

1. Receive a user’s image description (e.g., "a cyberpunk cat wearing sunglasses").
2. Refine the prompt using AI (Gemini/OpenAI) for better results.
3. Generate the image via Hugging Face’s free API (no costs!).
4. Send the final image back to the user—all in seconds!

## How It Works?
- **Telegram Trigger**
Listens for user messages (e.g., “/image a futuristic cityscape”).

- **AI Prompt Refinement**
Uses Google Gemini (or OpenAI) to optimize the input for the image model.

- **AI Image Generation**
Calls Hugging Face’s Together API (free tier) to create the image.
Supports models like black-forest-labs/FLUX.1-schnell.

- **Auto-Delivery**
Downloads the image and sends it in the Telegram chat.

## Setup Guide (3 Minutes!)

### 1. **Prerequisites**

- An n8n instance (cloud/self-hosted).
- A Telegram bot token (get it from @BotFather).
- A Hugging Face API token (free: https://huggingface.co/).

### 2. **Installation**

- Import the JSON template into n8n.
- Replace placeholders:
- Telegram API token (in the Telegram nodes).
- Hugging Face API token (in the HTTP Request node).

(Optional) Swap Gemini for OpenAI if preferred.

### 3. **Done!**

Activate the workflow—your bot is now ready to create stunning images! Simply send a command like:
“Hey, generate an image of a warrior standing on top of a mountain.”

You can keep your prompt casual or get as detailed as you like. The AI will interpret your request and craft a full, descriptive prompt for image generation. For example:
“Generate an image of a warrior wearing tattered clothes, chest out, standing on a snowy mountain.”

## Why Use This Template?
1. 100% Free – Uses Hugging Face’s free tier (no OpenAI costs).
2. No Coding – Fully visual n8n workflow.
3. Customizable – Swap AI models (Gemini/OpenAI) or image APIs.
4. Instant Results – Users get images in seconds.

## 📊 Basic Information

- **Workflow ID:** 5031
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 246
- **Downloads:** 24
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5031)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegram** 
- **stickyNote** (×3)
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
