## Description

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