# Instagram reels creation with GPT-4o-mini and Sisif.ai

> ## Description

This workflow automates a video content pipeline that generates creative, Instagram Reel videos using AI. It combines OpenAI's GPT-4o-mini for idea generation with Sisif.ai's text-to-video AI technology to produce engaging short-form content automatically.

**Perfect for:** Content creators, social media managers, marketing teams, and anyone who wants to maintain a consistent flow of AI-generated video content without manual intervention.

## Prerequisites

- **Sisif.ai Account**: Sign up at [sisif.ai](https://sisif.ai) and get your API token from [https://sisif.ai/users/api-keys/](https://sisif.ai/users/api-keys/)
- **OpenAI Account**: Get your API key from OpenAI platform
- **n8n Instance**: Self-hosted or cloud instance

## Step-by-step setup
1. Import the workflow in n8n.
1. Create **OpenAI API** credentials [here](https://platform.openai.com/api-keys).
2. Create **Sisif.ai API** credentials [here](https://sisif.ai/users/api-keys/).
3. Add **OpenAI API** & **Sisif.ai API** creds in n8n.
4. Open the blue sticky → edit topic, style, duration, resolution.
5. Enable the Cron trigger (defaults to every 6 h).
6. Run once to test. Activate when ready.


## How it Works

The workflow operates on a scheduled cycle, generating fresh video content every 6 hours:

1. **🤖 AI Idea Generation**: OpenAI's GPT-4o-mini acts as a creative video strategist, generating unique, trend-aware video concepts optimized for Instagram and social media
2. **🎬 Video Creation**: Sisif.ai transforms each creative prompt into a high-quality 5-second video in 540x960 resolution
3. **⏱️ Smart Monitoring**: The workflow intelligently monitors video generation progress, waiting for completion before proceeding
4. **📊 Data Processing**: Final video data is structured and prepared for further use or storage

## Key Features

### ⚡ Fully Automated
- Runs every 6 hours without manual intervention
- Generates 4 unique videos daily (28 videos per week)
- Self-monitoring with automatic retry logic

### 🎯 Optimized for Social Media
- Instagram 540x960 resolution
- 5-second duration for maximum engagement
- Trend-aware content generation
- Action-packed, visual storytelling

### 🔧 Smart Architecture
- Simple HTTP requests for reliable operation
- Bearer token authentication for secure API access
- Automatic status checking and waiting logic
- Error handling and retry mechanisms

## 📊 Basic Information

- **Workflow ID:** 5452
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1395
- **Downloads:** 139
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5452)

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
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
