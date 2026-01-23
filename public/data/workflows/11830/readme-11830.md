# Auto-upload Instagram videos to YouTube with GPT-4o and Google Sheets tracking

> ## 📊 Description
Automate your cross-platform publishing workflow by automatically uploading Instagram videos to YouTube with AI-optimized titles and tags. 🚀🎬 This workflow runs every six hours, fetches newly posted Instagram videos, checks Google Sheets to avoid duplicate uploads, generates SEO-ready YouTube metadata using GPT-4o, downloads the video in high quality, uploads it to YouTube, and logs the full upload details for tracking. Perfect for creators, agencies, and businesses managing multi-platform content distribution at scale. 📈✨

## 🔁 What This Template Does
1️⃣ Runs every 6 hours to fetch recent Instagram media via Graph API. ⏰
 2️⃣ Splits the media list and filters for today’s video posts only. 🎥
 3️⃣ Checks Google Sheets to see if the video was already uploaded. 🔎
 4️⃣ Sends Instagram caption to AI to generate:
 — a YouTube-optimized title (max 60 chars)
 — SEO-friendly tags extracted from text + hashtags
 5️⃣ Downloads the Instagram video binary file. ⬇️
 6️⃣ Waits 3 seconds to avoid YouTube rate limits. ⏳
 7️⃣ Uploads the video to YouTube with:
 — title
 — tags
 — caption as description
 8️⃣ Logs the upload details into Google Sheets (ID, title, link, date, status). 📊
 9️⃣ Prevents future duplicate uploads using a spreadsheet lookup. ✔️

## ⭐ Key Benefits
✅ Fully automates Instagram → YouTube video publishing
 ✅ AI-generated metadata increases YouTube visibility & search ranking
 ✅ Duplicate upload prevention ensures clean channel management
 ✅ Tracks upload history in a Google Sheet for transparency
 ✅ Requires zero manual downloading, editing, or re-uploading
 ✅ Ideal for creators, brands, community managers & agencies

## 🧩 Features
- Instagram Business API media fetch
- Filter for today’s videos using timestamps
- Google Sheets duplicate checker
- GPT-4o caption analysis for metadata generation
- Structured JSON output for reliable AI parsing
- YouTube video upload with custom metadata
- Spreadsheet logging with append/update
- Automatic scheduling with cron trigger
- Full workflow batching & safe retry logic

## 🔐 Requirements
- Facebook Graph API credentials (Instagram Business Account)
- YouTube OAuth2 credentials
- OpenAI API key (GPT-4o)
- Google Sheets OAuth2 credentials
- A Google Spreadsheet for tracking uploaded videos
- Instagram Business Account ID + Access Token

## 🎯 Target Audience
- Social media creators & influencers
- Digital marketing agencies
- YouTube automation teams
- Brands repurposing Instagram content for YouTube
- Content managers handling multiple accounts
- Community managers needing hands-free cross-posting


## 📊 Basic Information

- **Workflow ID:** 11830
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11830)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **if** (×2)
- **splitInBatches** 
- **httpRequest** 
- **facebookGraphApi** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **youTube** 
- **set** 
- **wait** 
- **googleSheets** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
