# Generate trend-based marketing videos with Seedance AI, Perplexity, and GPT

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

🎬 Seedance Video Marketing AI Agent
Description:
This AI-powered marketing automation workflow takes a user prompt, researches trending topics, generates a compelling short-form video prompt, and sends it to the Seedance API via Wavespeed to create a ready-to-use video ad — all from a single Telegram message.

Built for marketers, founders, and content creators who want to turn trend-based ideas into visual video content without touching a video editor.

For the step-by-step video tutorial guide on how to build this workflow, check out:
https://youtu.be/2oZ5NhosKgo

🤖 How It Works:
📲 Telegram Trigger
 Kick off the workflow by messaging a short prompt (e.g., “Create a 5-second IG ad for my new perfume”) via Telegram.

📈 Trend Research with Perplexity AI (Sonar Pro)
 An AI agent scans the latest 14-day trends and selects the top marketing angle based on the product/niche input.

🧠 Video Prompt Engineer (ChatGPT)
 Crafts a concise, visually rich video generation prompt — optimized for Seedance — based on the trend insight and product.

🎥 Video Generation (Wavespeed + Seedance API)
 Sends the AI-generated prompt to Seedance via Wavespeed to generate a 5-second short-form video ad.

🔁 Status Loop & Response
 The workflow checks if the video is ready. Once complete, it sends the final video output URL back to you in Telegram.

🔧 Tools Used:
Telegram Trigger & Response

Perplexity AI (Sonar Pro)

OpenAI

Seedance API (via Wavespeed)

n8n HTTP Request, Wait, and Loop nodes

💡 Use Cases:
Auto-generate TikTok/Instagram ads from current trends

Scale creative content generation with zero design work

Plug into your marketing chatbot or campaign assistant

Use trends as visual inspiration for ad creatives

If you like the build, check out my channel and consider subscribing: https://www.youtube.com/@Automatewithmarc


## 📊 Basic Information

- **Workflow ID:** 5674
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 7530
- **Downloads:** 753
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5674)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **perplexity** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** (×2)
- **telegram** 
- **if** 
- **stickyNote** (×7)
- **wait** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
