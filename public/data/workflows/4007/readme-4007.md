# Generate recipes from ingredients with Ollama AI Chef Agent

> ## What It Does
The Chef Agent is your AI-powered kitchen companion—ready to turn leftover ingredients into meal inspiration. It's a simple, fun n8n automation that:
- Accepts a list of ingredients via webhook
- Uses Ollama AI to suggest 5 creative recipes or food ideas
- Recommends up to 3 missing ingredients to improve the dish
- Returns a fallback message if the AI is unavailable
- Includes setup notes for beginners

## Requirements
- An active n8n instance (local or hosted)
- Ollama AI running locally (or another LLM via HTTP request)
- A webhook endpoint (defaults to `/lets-cook`)

## Why You’ll Love It
- Fully customizable for your use case or favorite LLM
- Great intro to AI + workflow automation
- Comes with playful Clown Mutiny flair:
&gt; “Powered by Clown Mutiny’s taste-bud liberation division.”

## Installation
1. Import the provided JSON template into your n8n workspace.
2. Configure your AI node to match your local Ollama instance.
3. Trigger the flow by sending a `POST` request to the webhook:

```json
{
  "ingredients": "eggs, rice, spinach"
}

## 📊 Basic Information

- **Workflow ID:** 4007
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2105
- **Downloads:** 210
- **Created:** 2025/5/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4007)

## 👤 Author

- **Name:** Clown Mutiny
- **Username:** @clownmutiny

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
