# Telegram bot: analyze images with GPT-4o-Mini/NVIDIA Vila & generate images with Stable Diffusion 3

> ## Introduction
Transform your Telegram bot into an AI vision system using GPT-4o-Mini and NVIDIA Stable Diffusion 3. Perfect for content moderators, researchers, and developers.

## Workflow Explanatory
1. **At start**: Processes Telegram messages: images→analysis, text→image generation
2. **At Router**: Routes by content type
3. **Upper path**: Analyzes images using Nvidia Vila + GPT-4o-Mini
4. **Lower path**: Generates images from text via Stable Diffusion 3
5. **At Merge**: Combines AI results
6. **At Gmail**: Emails processed results

## How It Works
1. **Telegram Trigger** listens for messages (images, text, documents)
2. **Content Router** directs images → AI analysis, text → image generation
3. **Image Analysis**: Downloads image → GPT-4o-Mini vision analysis → Email results
4. **Image Generation**: Text prompt → Stable Diffusion 3 → Email generated image
5. **Gmail Notifications** send formatted reports

## Prerequisites
- Telegram Bot token (via @BotFather)
- OpenAI API key (GPT-4 Vision)
- NVIDIA API key (free tier available)
- Gmail OAuth2 credentials

## Setup Steps
## Setup Steps
1. ** Create Telegram Bot** - Create Telegram bot and obtain token
2. ** Configure API Credentials** - Configure API credentials in HTTP Request nodes
3. ** Set Up Gmail OAuth2** - Set up Gmail OAuth2
4. ** Import and Activate Workflow** - Import workflow, update credentials, and activate

## Customization Options
- Add more AI models (Anthropic, Gemini)
- Route audio/documents to transcription/OCR
- Replace Gmail with Slack or Discord
- Connect to databases for storage

## Benefits
- **Speed**: Seconds per analysis vs. hours manually
- **Accuracy**: AI-powered visual understanding
- **Intelligence**: Historical tracking enables trend analysis



## 📊 Basic Information

- **Workflow ID:** 9823
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 332
- **Downloads:** 33
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9823)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **code** (×2)
- **httpRequest** (×2)
- **merge** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **switch** 
- **telegram** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
