# Automate YouTube Shorts creation from Telegram prompts using Gemini and VEO

> ## Who this workflow is for

This workflow is designed for content creators, marketing teams, and automation builders who want to produce short-form video content at scale without manual editing.

It is especially useful for teams posting consistently to YouTube Shorts, Instagram Reels, or TikTok who want a repeatable, automated content pipeline driven by AI.

---

## What this workflow does

This n8n automation converts a single Telegram message into a fully generated short-form video using AI.

When a message is sent to a Telegram bot, the workflow:
- Generates a structured short-form video script using Gemini
- Creates multiple cinematic video clips using VEO
- Merges clips into a single short video
- Generates a title, description, and hashtags optimized for short-form platforms
- Delivers the finished video asset and metadata back to Telegram or storage

The entire process runs automatically without requiring manual scripting, editing, or clip assembly.

---

## How the workflow works

1. A Telegram message triggers the workflow with a short content idea
2. An AI model generates a multi-part script optimized for short-form video
3. Video clips are generated for each script segment using VEO
4. Clips are merged into a final vertical video
5. Metadata (title, description, hashtags) is generated and attached
6. The completed short is delivered for review or publishing

---

## How to set up the workflow

1. Connect your Telegram bot credentials
2. Configure your Gemini and VEO credentials
3. Review the prompt templates used for script and clip generation
4. Adjust output destinations (Telegram, Google Drive, or manual upload)
5. Activate the workflow

All required credentials are stored securely using n8n credential management.

---

## Requirements

- Telegram Bot
- Google Gemini credentials
- VEO video generation access
- n8n instance (cloud or self-hosted)

---

## How to customize the workflow

- Modify the AI prompts to match your content style or niche
- Change clip length or number of generated scenes
- Add automatic posting to YouTube Shorts or other platforms
- Extend the workflow with analytics or scheduling steps

---

**Author:** Hyrum Hurst  
**Company:** QuarterSmart  
**Contact:** hyrum@quartersmart.com


## 📊 Basic Information

- **Workflow ID:** 11617
- **Complexity:** advanced
- **Node Count:** 45
- **Views:** 932
- **Downloads:** 93
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11617)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.googleGemini** (×6)
- **telegramTrigger** 
- **googleDrive** (×5)
- **set** (×5)
- **merge** 
- **wait** (×2)
- **telegram** (×8)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** (×4)
- **httpRequest** (×3)
- **youTube** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 45 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
