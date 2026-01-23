# Generate custom recipes and restaurant-style food images with Telegram bot

> AI Chef Bot is a smart virtual chef built with n8n and Telegram.
Users can ask for any dish, and the bot:

Generates a detailed recipe (ingredients + step-by-step instructions).

Creates a photorealistic restaurant-style plated food image of the dish.

Sends both recipe text and food image back on Telegram.

👉 Live Demo Bot: http://t.me/botaichefrobotbot

Perfect for food lovers, restaurants, cooking groups, or anyone who wants an interactive AI-powered chef.

🌟 Features
- 🔗 Telegram Integration – chat with the bot in real time.
- 🍽 AI Recipe Generator – instant, structured recipes for any dish.
- 🎨 Text-to-Image AI – turns recipes into beautiful food images.
- 🍴 Restaurant-Style Plating – elegant ceramic/slate/glass plating only.
- 📸 Photo-Realistic Images – styled like professional food photography.
- ⚡ Automated Workflow – no manual steps, everything runs inside n8n.

⚙️ Installation
- Import this workflow into your n8n instance.
- Configure your Telegram Bot Token (from BotFather).
- Configure your OpenRouter API Key for AI text + image generation.
- Save and activate the workflow.
- Go to Telegram and send any dish name (e.g., Polpette di pesce).

The bot replies with:
📖 A full recipe.
📸 A restaurant-plated realistic food image.

## 📊 Basic Information

- **Workflow ID:** 8221
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 630
- **Downloads:** 63
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8221)

## 👤 Author

- **Name:** Md Sabirul Islam
- **Username:** @shishirislam80

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegramTrigger** 
- **telegram** (×2)
- **httpRequest** 
- **set** 
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
