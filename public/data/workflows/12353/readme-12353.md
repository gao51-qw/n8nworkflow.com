# Repurpose Instagram videos to YouTube with Claude and Google Sheets tracking

> ## How It Works
This workflow automates cross-platform content distribution from Instagram to YouTube with intelligent AI enhancement. Designed for content creators, social media managers, and digital marketers who need to maximize their content reach across platforms efficiently. The template solves the challenge of manual video repurposing by automating the entire process from content retrieval to optimized publishing. It retrieves Instagram videos on schedule, generates engaging metadata using dual AI models (Anthropic Claude for creative titles/descriptions), uploads to YouTube, logs performance metrics to Google Sheets, and sends WhatsApp notifications upon completion. The workflow intelligently routes tasks between AI providers: Claude's language capabilities create compelling and platform-optimized content. This dual-model approach delivers superior results compared to single-AI solutions, combining creativity with precision for maximum engagement.

## Setup Steps
1. Configure Instagram credentials 
2. Add Anthropic API key for Claude model in AI nodes
3. Connect YouTube account and configure upload settings
4. Link Google Sheets with target spreadsheet ID for logging
5. Add WhatsApp Business API credentials

## Prerequisites
Instagram Business/Creator account with API access

## Use Cases
Social media agencies managing multiple client accounts

## Customization
Modify AI prompts for brand-specific tone, adjust scheduling frequency

## Benefits
Saves 2-3 hours daily on manual uploads, ensures consistent posting schedules

## 📊 Basic Information

- **Workflow ID:** 12353
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 18
- **Downloads:** 1
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12353)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **youTube** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **httpRequest** (×2)
- **whatsApp** 
- **stickyNote** (×5)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
