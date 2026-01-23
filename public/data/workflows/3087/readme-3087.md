# Travel AI agent - AI-powered travel planner

> 
## Overview

An n8n workflow automating business travel planning via Telegram. Uses AI and APIs to find and book flights/hotels efficiently.

## Prerequisites

- **Telegram Bot** (BotFather)
- **API Keys**: OpenAI (transcription), SerpAPI (flights/hotels), DeepSeek (AI processing)
- **n8n Instance** with API access

## Setup Instructions

1. **Import Workflow**: Upload JSON to n8n.
2. **Configure API Credentials**: Set up Telegram, OpenAI, SerpAPI, and DeepSeek keys.
3. **Webhook Activation**: Ensure Telegram webhook is active with HTTPS.
4. **Test**: Send a Telegram message and verify execution.

## Workflow Operation

### 1. User Input Processing

- Telegram bot triggers workflow, extracts text/audio.
- OpenAI transcribes voice messages.
- AI (DeepSeek) extracts key travel details (locations, dates, accommodation needs).

### 2. Travel Search

- **Flights**: Uses SerpAPI for flight options (airlines, times, prices).
- **Hotels**: Fetches accommodations with dynamic check-out date.

### 3. AI Recommendations & Customization

- **DeepSeek** generates structured travel plans.
- Users can **modify prompts** to adjust AI responses for personalized results.
- Professional, well-structured responses with links.

### 4. Response Delivery

- Sends travel recommendations via Telegram with clear details.

## Use Cases

Ideal for business professionals, executive assistants, frequent travelers, and small businesses.

## Customization & Troubleshooting

- Adjust memory handling and API calls.
- Modify prompts to refine AI output.
- Ensure API keys are active and network is accessible.


## 📊 Basic Information

- **Workflow ID:** 3087
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 4966
- **Downloads:** 496
- **Created:** 2025/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3087)

## 👤 Author

- **Name:** Badr
- **Username:** @b4dr

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **stickyNote** 
- **switch** 
- **set** 
- **telegramTrigger** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
