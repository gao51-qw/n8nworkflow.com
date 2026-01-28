# Respond to WhatsApp messages with AI like a pro!

> This n8n template demonstrates the beginnings of building your own n8n-powered WhatsApp chatbot! Under the hood, utilise n8n's powerful AI features to handle different message types and use an AI agent to respond to the user. A powerful tool for any use-case!

## How it works
* Incoming WhatsApp Trigger provides a way to get messages into the workflow.
* The message received is extracted and sent through 1 of 4 branches for processing.
* Each processing branch uses AI to analyse, summarize or transcribe the message so that the AI agent can understand it. The supported types are **text**, **image**, **audio (voice notes)** and **video**.
* The AI Agent is used to generate a response generally and uses a wikipedia tool for more complex queries.
* Finally, the response message is sent back to the WhatsApp user using the WhatsApp node.

## How to use
Once you have setup and configured your WhatsApp account, you'll need to activate your workflow to start processing messages.

**Good to know:** Large media files may negatively impact workflow performance.

## Requirements
* WhatsApp Buisness account
* Google Gemini for LLM. Gemini is used specifically because it can accept audio and video files whereas at time of writing, many other providers like OpenAI's GPT, do not.

## Customising this workflow
* For performance reasons, consider detecting large audio and video before sending to the LLM. Pre-processing such files may allow your agent to perform better.
* Go beyond and create rich and engagement customer experiences by responding using images, audio and video instead of just text!

## 📊 Basic Information

- **Workflow ID:** 2466
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 115056
- **Downloads:** 11505
- **Created:** 2024/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2466)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **whatsApp** (×4)
- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** (×3)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **switch** 
- **stickyNote** (×11)
- **wait** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
