# Generate job automation analysis with GPT-4, Tavily & Telegram

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## How It Works
This template orchestrates a multi-step workflow that constructs a comprehensive four-zone automation matrix—Green, Yellow, Red, and White—grounded in the Human Agency Scale (HAS). When a user sends a job title via Telegram, the workflow routes both text and voice messages appropriately. Voice messages are transcribed via OpenAI's Whisper, while text inputs bypass transcription. Both streams merge into a single data flow. The AI Agent node, powered by GPT-4, analyzes the user's profession and core tasks. It also leverages live context by calling the Tavily search tool, ensuring the analysis incorporates up-to-date information. After the evaluation, the workflow formats and returns the completed matrix, with detailed task examples and rationales for each zone, back to the user via Telegram.

## Setup Instructions
1. Create an OpenAI credential in n8n (model: GPT-4.1 mini).
2. Add a Tavily credential with your API key (FREE plan available).
3. Configure a Telegram Bot credential: API bot token.
4. Import this JSON as a new workflow in n8n and map credentials in each node.
5. Activate the workflow; test by sending sample job titles; adjust node timeouts and webhook settings as needed.

## Requirements
- n8n v1.0.0 or higher
- Active OpenAI API key (GPT-4.1 mini access)
- Tavily API key for web context search
- Telegram Bot token with correctly configured webhook
- Stable internet connectivity

## Audience & Problem
This template is designed for consultants, HR professionals, and analysts who need a scalable, standardized approach to evaluate which routine tasks in a given profession can be automated, which require human oversight, and which should remain manual to preserve strategic judgment, creativity, and expertise.


## 📊 Basic Information

- **Workflow ID:** 5232
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 422
- **Downloads:** 42
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5232)

## 👤 Author

- **Name:** Alex
- **Username:** @red4beard

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTrigger** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** (×3)
- **set** 
- **switch** 
- **@tavily/n8n-nodes-tavily.tavilyTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
