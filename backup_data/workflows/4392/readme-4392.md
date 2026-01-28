# Command-based Telegram bot for article summarization & image prompts with OpenAI

> # Telegram AI Assistant: Summarize Links & Generate Images On Demand

This workflow turns any Telegram chat into a smart assistant. By typing simple commands like `/summary` or `/img`, users can trigger powerful AI actions—directly from Telegram.

---

## ✨ What It Does

This automation listens for specific commands in Telegram messages:

- `/help`: Sends a help menu explaining available commands.
- `/summary &lt;link&gt;`: Fetches a webpage, extracts its content, and summarizes it using OpenAI into 10–12 bullet points.
- `/img &lt;prompt&gt;`: Sends the image prompt to OpenAI and replies that the request has been received (designed for future integration with image APIs).

---

## 📦 Features

- ✅ Works instantly in Telegram  
- 🧠 Uses OpenAI for text summarization and image prompt processing  
- 🌐 Scrapes and cleans raw article text before summarizing  
- 📤 Replies directly to the same Telegram thread  
- 🔧 Easily expandable to support more commands  

---

## 🔧 Use Cases

- **Research Summaries**: Quickly condense articles or reports shared in chat.  
- **Content Review**: Get team-friendly TL;DRs of long blog posts or product pages.  
- **Creative Brainstorming**: Share visual ideas via `/img` and get quick prompts logged.  
- **Customer Support**: Offer instant answers in group chats (with further extension).  
- **Daily Digest Bot**: Connect to news feeds and auto-summarize updates.  

---

## 🚀 Getting Started

1. Clone this workflow and connect your Telegram Bot.  
2. Insert your OpenAI credentials.  
3. Deploy and test by messaging `/summary https://example.com` in your Telegram group or DM.  
4. Expand with new commands or connect Stability.ai or other services for real image generation.  

---

## 🔗 Author & Resources

Built by [Yaron Been](https://www.youtube.com/@YaronBeen/videos)  
Follow more automations at [nofluff.online](https://nofluff.online)


## 📊 Basic Information

- **Workflow ID:** 4392
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 885
- **Downloads:** 88
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4392)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **if** (×3)
- **telegram** (×3)
- **telegramTrigger** 
- **httpRequest** 
- **html** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
