# Auto-caption & post videos to Instagram & TikTok with Submagic, Postiz & OpenAI

> # 🎥 Auto-Caption & Autopost Videos to Instagram & TikTok

## Description
Automate your short-form content pipeline! This workflow takes any video uploaded to a specific Google Drive folder, generates engaging captions with Submagic, and then auto-posts the finished video (with AI-generated captions) directly to Instagram or TikTok via Postiz. Captions are further refined with OpenAI for brand-ready social text. Finally, each published video is logged into a Google Sheet for tracking.

👉 Watch step-by-step build of this workflow on: www.youtube.com/@automatewithmarc

## How It Works

Google Drive Trigger – Detects new video uploads.

Submagic API – Adds styled captions automatically.

Wait + Poll – Monitors job status until the captioned video is ready.

Download Video – Retrieves the finished captioned video.

Upload to Postiz – Sends the file to Postiz for multi-platform posting.

Caption Agent (OpenAI) – Generates optimized Instagram/TikTok captions.

Post to Instagram/TikTok – Publishes the video with caption.

Update Log – Saves video details, captions, and status into Google Sheets.

## Why You’ll Love It

⚡ Hands-off publishing — videos go from raw to posted automatically.

📝 AI captions + Submagic styling — engaging text and visual consistency.

📊 Content tracking — every post logged in Google Sheets.

🎯 Perfect for Reels & TikToks — optimized for fast workflows and social reach.

## Requirements

- Google Drive account
- Submagic API key
- Postiz account (for IG/TikTok posting)
- OpenAI API key (for caption generation)
- Google Sheets account

## 📊 Basic Information

- **Workflow ID:** 7992
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1564
- **Downloads:** 156
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7992)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **httpRequest** (×5)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **if** 
- **wait** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
