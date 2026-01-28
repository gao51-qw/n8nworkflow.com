# Chat with AI models via OpenRouter using Mistral

> This n8n workflow demonstrates how to build an automated AI chat system using OpenRouter.ai.
It includes a manual trigger, sets a model and user message, sends a POST request to the OpenRouter chat API,
and summarizes the response.

Workflow Steps:
1. Manual Trigger – Starts the workflow when executed manually.
2. Set Node – Defines:
   - Model: mistralai/mistral-small-3.2-24b-instruct:free
   - Message: What is the meaning of life?
3. HTTP Request – Sends a POST request to https://openrouter.ai/api/v1/chat/completions
   using Bearer Token Authentication with the model and message as JSON.
4. Summarize – Extracts and summarizes the AI’s response (choices[0].message.content).

Use Cases:
- AI chatbot automation
- Content summarization
- Testing AI prompts in real-time
- Educational demos using OpenRouter.ai
- Lightweight conversational tools with no external server


## 📊 Basic Information

- **Workflow ID:** 5998
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 672
- **Downloads:** 67
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5998)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **set** 
- **summarize** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
