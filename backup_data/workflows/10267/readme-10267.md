# Generate news cards from Spotify emotions with LLM, Google News and APITemplate.io

> ## 📄 Workflow Overview

Title: Spotify Emotion-to-News Card Generator (APITemplate.io + Slack)

## What it does:
This workflow analyzes the emotion of your recently played Spotify track using OpenRouter (LLM), fetches a related trending Google News article, generates a visual news card with APITemplate.io, and posts it to Slack.

## 👥 Who’s it for

Music lovers, marketers, and developers who want to automatically turn their listening mood into a visual daily digest or Slack update.

## ⚙️ How it works

Spotify Trigger — Fetch your recently played tracks.

LLM (Emotion Analyzer) — Infer the main emotion from the track title and artist.

Google News Query — Build an RSS URL based on the emotion keyword.

RSS Reader — Retrieve trending news headlines.

APITemplate.io — Render the top article into an image card.

Slack — Post title, link, and card image into your channel.

## 🧰 Requirements

Spotify API credentials

OpenRouter API key

APITemplate.io account (with template ID)

Slack OAuth2 connection

## 🪄 How to customize

Replace the APITemplate.io template ID with your own.

Adjust the RSS URL language (hl=en-US → hl=ja-JP for Japanese news).

Modify the Slack message text for your preferred channel tone.

## ⚠️ Disclaimer

If you use community nodes (LangChain), this template is for self-hosted n8n only.

## 📊 Basic Information

- **Workflow ID:** 10267
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 61
- **Downloads:** 6
- **Created:** 2025/10/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10267)

## 👤 Author

- **Name:** noda
- **Username:** @shusaku

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** 
- **spotify** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **splitInBatches** 
- **set** 
- **rssFeedRead** 
- **code** 
- **apiTemplateIo** 
- **slack** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
