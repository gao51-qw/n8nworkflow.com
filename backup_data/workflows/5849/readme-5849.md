# Generate Instagram reels with Veo3 and GPT for AI-powered ad creation

> 🎬 Veo3 Instagram Reel Generator – AI-Powered Ad Creation in Minutes

Description:
This no-code workflow transforms your creative brief into an engaging Instagram Reel using OpenAI and Veo3 API (via Wavespeed) — fully automated in n8n. Just type a product, theme, or trend via chat, and get a short-form video plus caption delivered and logged, ready to post.

Perfect for marketers, creators, and content teams looking to scale their ad content output without hiring editors or creative agencies.

Watch step-by-step build video tutorial here:
https://www.youtube.com/@Automatewithmarc

⚙️ How It Works:
💬 Chat Trigger
 Start by sending a message like “Create an ad for a minimalist perfume brand using the ‘quiet luxury’ trend.”

🧠 Prompt Engineer (ChatGPT)
 Generates a 5–8 second descriptive video prompt suitable for Veo3 based on your input — including visual tone, motion, and hook.

📡 API Call to Veo3 via Wavespeed
 Submits the prompt to create a short video (9:16 ratio, ~8 seconds), then polls for the final video URL.

✍️ Caption Generator (GPT)
 Creates an Instagram-friendly caption to pair with the video, using a playful, impactful writing style.

📄 Google Sheets Integration
 Logs each generated video prompt, final video URL, caption, and status into a Google Sheet for easy management and scheduling.

🔌 Tools & Integrations:
OpenAI GPT (Prompt generation & caption copywriting)

Veo3 via Wavespeed API (Video generation)

Google Sheets (Content tracking and publishing queue)

Telegram / Chat UI trigger (Optional – easily swappable)

💡 Use Cases:
Instagram & TikTok ad generation

Creative automation for digital agencies

Short-form UGC testing at scale

Trend-driven campaign ideation

## 📊 Basic Information

- **Workflow ID:** 5849
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 3389
- **Downloads:** 338
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5849)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **if** 
- **wait** (×2)
- **googleSheets** 
- **httpRequest** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
