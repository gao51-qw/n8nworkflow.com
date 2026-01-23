# AI voice chat using webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs

> ## Who is this for?
This workflow is designed for businesses or developers looking to integrate voice-based chat applications with dynamic responses and conversational memory.

## What problem does this solve?
It automates AI-powered voice conversations, maintaining context between sessions and converting speech-to-text and text-to-speech.

## What this workflow does:
The workflow receives audio input, transcribes it using OpenAI, and processes the conversation using Google Gemini Chat Model (you can use OpenAI Chat Model). Responses are converted back to speech using ElevenLabs.

## Prerequisites:
You'll need API keys for:
* OpenAI (you can obtain it from OpenAI website)
* ElevenLabs (you can obtain it from their website)
* Google Gemini (You can obtain it from `Google AI Studio`)

## Setup:
* Configure you API keys
* Ensure that the value `(voice_message)` in the `"Path"` parameter  in the Webhook node is used as the name of the parameter that will contain the voice message you are sending via the HTTP Post request.

## 📊 Basic Information

- **Workflow ID:** 2405
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 39374
- **Downloads:** 3937
- **Created:** 2024/9/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2405)

## 👤 Author

- **Name:** Ayoub
- **Username:** @ayoub-n8n

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryManager** (×2)
- **stickyNote** (×4)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **respondToWebhook** 
- **httpRequest** 
- **limit** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
