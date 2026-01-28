# Generate frozen ASMR product videos with Gemini, Veo3, GPT-4o and post to YouTube, TikTok, Instagram and Pinterest

> Takes a product image from Google Sheets, adds frozen effect with Gemini, generates ASMR video with Veo3, writes captions with GPT-4o, and posts to 4 platforms automatically.

## How it works

1. Schedule trigger picks first unprocessed row from Google Sheet
2. Downloads product image and sends to Gemini for frozen/ice effect
3. Uploads frozen image to ImgBB (Veo3 needs public URL)
4. Veo3 generates 10-12s ASMR video with ice cracking sounds
5. GPT-4o writes platform-specific titles and captions
6. Uploads simultaneously to YouTube, TikTok, Instagram, Pinterest
7. Updates sheet status and sends Telegram notification

## Setup

Replace these placeholders in the workflow:
- YOUR_GOOGLE_AI_API_KEY (Gemini)
- YOUR_KIE_AI_API_KEY (Veo3)
- YOUR_IMGBB_API_KEY (free)
- YOUR_UPLOAD_POST_API_KEY
- YOUR_GOOGLE_SHEET_ID
- YOUR_PINTEREST_BOARD_ID
- YOUR_PINTEREST_USERNAME
- YOUR_TIKTOK_USERNAME
- YOUR_INSTAGRAM_USERNAME
- YOUR_TELEGRAM_CHAT_ID

## Google Sheet format

| topic | image_url | status |
|-------|-----------|--------|
| Dior Sauvage — Dior | https://example.com/img.jpg | |

Leave status empty. Workflow sets it to `processing` then `uploaded`.

## Requirements

- Gemini API key - [Google AI Studio](https://makersuite.google.com/app/apikey)
- Kie.ai account - [kie.ai](https://kie.ai)
- ImgBB API key - [api.imgbb.com](https://api.imgbb.com/)
- OpenAI API key
- upload-post.com account with connected TikTok/IG/Pinterest
- YouTube channel with OAuth

## 📊 Basic Information

- **Workflow ID:** 11756
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/12/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11756)

## 👤 Author

- **Name:** Servify
- **Username:** @servifylabs

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **httpRequest** (×9)
- **wait** (×2)
- **if** 
- **code** (×5)
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **youTube** 
- **scheduleTrigger** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
