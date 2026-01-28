# Automated TikTok video creation pipeline with GPT-4o-mini and Sisif.ai

> ## Description

This workflow creates an automated video content pipeline that generates creative TikTok-style videos using AI. It combines OpenAI's GPT-4o-mini for idea generation with Sisif.ai's text-to-video AI technology to produce engaging short-form content automatically.

**Perfect for:** Content creators, social media managers, marketing teams, and anyone who wants to maintain a consistent flow of AI-generated video content without manual intervention.

## Prerequisites

- **Sisif.ai Account**: Sign up at [sisif.ai](https://sisif.ai) and get your API token from [sisif.ai/api/](https://sisif.ai/api/)
- **OpenAI Account**: Get your API key from OpenAI platform
- **n8n Instance**: Self-hosted or cloud instance

## How it Works

The workflow operates on a scheduled cycle, generating fresh video content every 6 hours:

1. **🤖 AI Idea Generation**: OpenAI's GPT-4o-mini acts as a creative video strategist, generating unique, trend-aware video concepts optimized for TikTok and social media
2. **🎬 Video Creation**: Sisif.ai transforms each creative prompt into a high-quality 5-second video in 540x960 resolution
3. **⏱️ Smart Monitoring**: The workflow intelligently monitors video generation progress, waiting for completion before proceeding
4. **📊 Data Processing**: Final video data is structured and prepared for further use or storage

## Key Features

### ⚡ Fully Automated
- Runs every 6 hours without manual intervention
- Generates 4 unique videos daily (28 videos per week)
- Self-monitoring with automatic retry logic

### 🎯 Optimized for Social Media
- TikTok-perfect 540x960 resolution
- 5-second duration for maximum engagement
- Trend-aware content generation
- Action-packed, visual storytelling

### 🔧 Smart Architecture
- Simple HTTP requests for reliable operation
- Bearer token authentication for secure API access
- Automatic status checking and waiting logic
- Error handling and retry mechanisms

## 📊 Basic Information

- **Workflow ID:** 4969
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 14760
- **Downloads:** 1476
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4969)

## 👤 Author

- **Name:** Vlad Temian
- **Username:** @vtemian

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **wait** 
- **if** 
- **function** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
