# WhatsApp-to-social-media content generation with GPT-4 & approval workflow

> 

Send one WhatsApp message → Get AI-optimized content across 7+ social platforms.

## Who It's For
Solopreneur managing multiple platforms on the go (X/Twitter, Instagram, LinkedIn, Facebook, TikTok, Threads, YouTube Shorts).

## What It Solves
Eliminates 80% of manual content creation work while maintaining brand consistency across all channels.

## How It Works

**AI Content Generation**
- GPT-4/Gemini creates platform-specific posts with hashtags, CTAs, and emojis
- Auto-generates images via OpenAI/Pollinations.ai
- SERP API finds relevant trending content

**Approval Workflow**
- HTML email previews for human review
- Double-approval system via Gmail integration

**One-Click Publishing**
- Instagram/Facebook (Graph API)
- X/Twitter (Official API) 
- LinkedIn (Sales Navigator)

## Setup Requirements
- API keys: OpenAI, Gemini, social platform tokens, ImgBB, SERP API
- Gmail and Telegram for notifications
- Replace "your-unique-id" placeholders in API nodes

## Customization
- **Content**: Edit AI prompts for brand voice
- **Approval**: Modify email templates and thresholds
- **Analytics**: Connect Google Sheets for tracking
- **Images**: Switch between AI image generators

## 📊 Basic Information

- **Workflow ID:** 6769
- **Complexity:** advanced
- **Node Count:** 54
- **Views:** 1002
- **Downloads:** 100
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6769)

## 👤 Author

- **Name:** Jamot
- **Username:** @jamot

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×17)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **httpRequest** (×6)
- **merge** (×4)
- **facebookGraphApi** (×2)
- **twitter** 
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **aggregate** 
- **gmail** (×2)
- **if** (×2)
- **set** (×5)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 54 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
