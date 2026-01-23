# Auto-generate and post Instagram reels with Veo3, OpenAI, and Blotato

> 📱 Veo3 Instagram Agent – Create & Auto-Post Reels with Blotato

Description:
This no-code workflow automates the full pipeline of generating and publishing Instagram Reels using Veo3 (via Wavespeed API). From prompt to post, it handles content ideation, short-form video generation, caption writing, logging, and even automatic publishing to Instagram via Blotato.

Perfect for creators, brands, and marketers who want to scale content creation without needing to shoot or edit videos manually.

🔗  Watch the full step-by-step tutorial on how to build this workflow:
https://youtu.be/s-KzxeKWmIA?si=6x8WKMeiyWodZWVq

Google Sheet Template: https://docs.google.com/spreadsheets/d/1bA-PQTrvekC1Rti-XumGANgjIwLjvcFCqoIxVCYsq2E/edit?usp=sharing

🚀 What This Workflow Does:
Trigger via Chat or Telegram
 Start with a simple message like:
 "Make a reel for a luxury minimalist candle brand using calm aesthetics."

AI Video Prompt Generation
 Uses OpenAI to craft a visually rich, platform-optimized video description prompt.

🎞️ Video Creation with Veo3 API
 Submits your prompt to Veo3 to create a short video (9:16 ratio, 8 seconds) with motion, tone, and trend styles.

✍️ Caption Writing
 An AI agent writes an engaging and playful caption based on the video content.

📄 Google Sheets Logging
 Stores prompt, video URL, caption, and status in a GSheet to keep track of all generated assets.

📤 Auto-Publish to Instagram
 Posts the video + caption directly to Instagram using Blotato’s social media publishing API.

🔌 Tools & Integrations Used:
OpenAI for prompt & caption generation

Wavespeed API (Veo3) for video generation

Google Sheets for tracking

Blotato for scheduling & publishing content

n8n for orchestration and automation logic

💡 Use Cases:
Content calendar automation for small teams

Trend-based ad creation and testing

UGC-style reel generation for e-commerce

Rapid ideation & creative experimentation

## 📊 Basic Information

- **Workflow ID:** 5910
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 17229
- **Downloads:** 1722
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5910)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **wait** (×2)
- **httpRequest** (×4)
- **if** 
- **set** 
- **googleSheets** (×2)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
