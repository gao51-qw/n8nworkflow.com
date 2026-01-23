# Automated news video generation with HeyGen AI, Apify, and GPT-4.1 Mini

> ## Overview
This n8n workflow automates the creation of AI-generated news recap videos using HeyGen's avatar technology. The template scrapes daily newsletter content, uses AI to generate engaging scripts, and produces professional video summaries with synthetic avatars and voices—all without manual intervention.

## Use Cases
1. **Daily News Digests**: Automatically convert Morning Brew or similar newsletters into short-form video content for social media platforms like TikTok, Instagram Reels, or YouTube Shorts.
2. **Content Repurposing**: Transform written blog posts, articles, or reports into engaging video summaries for broader audience reach.
3. **Automated Social Media Content**: Schedule daily video updates for your audience without recording equipment or on-camera presence.

## How It Works
The workflow operates in three main stages:

**Stage 1 - Content Acquisition**: The Apify Web Scraper node fetches the latest newsletter content from Morning Brew, extracting markdown-formatted text for processing.

**Stage 2 - Script Generation**: An AI agent powered by GPT-4 analyzes the content and creates a concise 40-60 word script highlighting the top 2-4 stories in an engaging, conversational tone perfect for short-form video.

**Stage 3 - Video Production**: The script is sent to HeyGen's API, which generates a video featuring your custom AI avatar delivering the content. The workflow includes intelligent polling to check video completion status before proceeding.

## Customization Options
- **Avatar & Voice Selection**: Use the "Get Avatars" and "Get Voices" nodes to browse available options and customize your video presenter
- **Content Source**: Modify the News Scraper node URL to pull from any website or RSS feed
- **Script Style**: Adjust the AI prompt in the Script Writer node to change tone, length, or focus areas
- **Video Dimensions**: Configure aspect ratios (landscape, portrait, square) for different platforms

## Prerequisites
- HeyGen API key (for video generation)
- OpenRouter API key (for AI script writing)
- Apify token (for web scraping)

---

# 🛠️ Setup Guide  
## **Author: [Jadai Kongolo](https://www.youtube.com/@jadaikongolo)**

Follow these steps to configure your HeyGen + n8n automation workflow:

1. Go to [HeyGen](https://app.heygen.com/), create your AI avatar and voice.  
   - You can import your [ElevenLabs](https://www.elevenlabs.io/) voice clone, or let HeyGen clone your voice automatically.

2. Connect your **HeyGen API key** to the following nodes:
   - `Generate Video`
   - `Get Video`
   - `Get Avatars`
   - `Get Voices`

3. If you want to test out the **"Create video with polling"** flow:
   - Connect your [OpenRouter](https://openrouter.ai/) API key.
   - Connect your **Apify token** in the node called `News`.

Make sure all credentials are properly stored and referenced in your environment or credentials store for best security and reuse.

---

## Recommended Node Renaming for Clarity

To improve workflow readability, consider renaming these nodes:

| Current Name | Suggested Name | Purpose |
|--------------|----------------|---------|
| `News` | `Scrape Morning Brew Newsletter` | Fetches newsletter content |
| `Script Writer` | `AI Script Generator` | Creates video script from content |
| `Generate Video1` | `HeyGen Video Creation` | Initiates video generation |
| `Get Video1` | `Check Video Status` | Polls for video completion |
| `30 Seconds` | `Wait for Video Processing` | Initial wait period |
| `If` | `Check if Video Complete` | Validates completion status |
| `Wait` | `Retry Video Status Check` | Waits before re-polling |

## 📊 Basic Information

- **Workflow ID:** 10158
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 574
- **Downloads:** 57
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10158)

## 👤 Author

- **Name:** Jadai kongolo
- **Username:** @jadai-ai-automation

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×7)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **wait** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
