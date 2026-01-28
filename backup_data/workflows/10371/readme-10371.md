# Create AI nature videos with Sora 2 (Kie AI), Gemini, and send to Telegram

> Generate stunning 10-second AI-crafted nature stock videos on autopilot and deliver them straight to your Telegram chat—perfect for content creators seeking effortless inspiration without the hassle of manual prompting or editing.

## 📋 What This Template Does
This workflow automates the creation and delivery of high-quality, 10-second nature-themed videos using AI generation tools. Triggered on a schedule, it leverages Google Gemini to craft precise video prompts, submits them to the Kie AI API for video synthesis, polls for completion, downloads the result, and sends it via Telegram. 
- Dynamically generates varied nature scenes (e.g., misty forests, ocean sunsets) with professional cinematography specs.
- Handles asynchronous video processing with webhook callbacks for efficiency.
- Ensures commercial-ready outputs: watermark-free, portrait aspect, natural ambient audio.
- Customizable schedule for daily/weekly bursts of creative B-roll footage.

## 🔧 Prerequisites
- n8n instance with HTTP Request and LangChain nodes enabled.
- Google Gemini API access for prompt generation.
- Kie AI API account for video creation (supports Sora-like text-to-video models).
- Telegram Bot setup for message delivery.

## 🔑 Required Credentials

### Google Gemini API Setup
1. Go to [aistudio.google.com](https://aistudio.google.com) → Create API key.
2. Ensure the key has access to Gemini 1.5 Flash or Pro models.
3. Add to n8n as "Google Gemini API" credential type.

### Kie AI API Setup
1. Sign up at [kie.ai](https://kie.ai) → Dashboard → API Keys.
2. Generate a new API key with video generation permissions (sora-2-text-to-video model).
3. Add to n8n as "HTTP Header Auth" credential (header: Authorization, value: Bearer [Your API Key]).

### Telegram Bot API Setup
1. Create a bot via @BotFather on Telegram → Get API token.
2. Note your target chat ID (use @userinfobot for personal chats).
3. Add to n8n as "Telegram API" credential type.

## ⚙️ Configuration Steps
1. Import the workflow JSON into your n8n instance.
2. Assign the required credentials to the Gemini, Kie AI, and Telegram nodes.
3. Update the Telegram node's chat ID with your target chat (e.g., personal or group).
4. Adjust the Schedule Trigger interval (e.g., daily at 9 AM) via node settings.
5. Activate the workflow and monitor the first execution for video delivery.

## 🎯 Use Cases
- Content creators automating daily social media B-roll: Generate fresh nature clips for Instagram Reels or YouTube intros without filming.
- Marketing teams sourcing versatile stock footage: Quickly produce themed videos for campaigns, like serene landscapes for wellness brands.
- Educational bots for classrooms: Deliver randomized nature videos to Telegram groups for biology lessons on ecosystems and wildlife.
- Personal productivity: Schedule motivational nature escapes to your chat for remote workers needing quick digital breaks.

## ⚠️ Troubleshooting
- Video generation fails with quota error: Check Kie AI dashboard for usage limits and upgrade plan if needed.
- Prompt output too generic: Tweak the Video Prompting Agent's system prompt for more specificity (e.g., add seasonal themes).
- Telegram send error: Verify bot token and chat ID; test with a simple message node first.
- Webhook callback timeout: Ensure n8n production URL is publicly accessible; use ngrok for local testing.

## 📊 Basic Information

- **Workflow ID:** 10371
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 964
- **Downloads:** 96
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10371)

## 👤 Author

- **Name:** Daniel Nkencho
- **Username:** @daniel-automates

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **httpRequest** (×3)
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegram** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
