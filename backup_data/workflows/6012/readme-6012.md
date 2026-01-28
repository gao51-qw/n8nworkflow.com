# Create a privacy-focused AI assistant with Telegram, Ollama, and Whisper

> Title: Create a Privacy-Focused AI Assistant with Telegram, Ollama, and Whisper

PersonalAssistant is a fully-local, intelligent AI agent that assists you with daily tasks through voice or text interaction via Telegram. It is designed for users who want the convenience of a smart assistant without sacrificing privacy or relying on paid APIs or cloud infrastructure.

## Prerequisites
Before you begin, ensure you have the following set up:

n8n Instance: A running instance of n8n.

Telegram Bot: A Telegram bot created with a valid API token. You can create one by talking to the BotFather.

Ollama: Ollama running locally with a downloaded language model (e.g., llama3.2:1b).

Whisper ASR API: A local API endpoint for audio transcription using a Whisper model. This workflow is pre-configured for an endpoint at http://localhost:9000/asr.

## What It Can Do
Respond to general questions: Get answers about weather, facts, reminders, and more.

Handle tasks: Create and manage to-do lists.

Provide inspiration: Get motivational quotes or affirmations.

Journaling assistant: Use prompts to support mental clarity.

Speech-to-Text: Convert Telegram voice messages into text for the AI to process.

## How It Works
Input Handling (Text or Voice): The workflow triggers when you send a voice note or text message to your Telegram bot.

Authorization: It first checks if the message is from an authorized Telegram User ID.

Routing: A switch directs the workflow based on the message type. Text messages go directly to the AI, while voice messages are first sent for transcription.

Transcription: Voice messages are sent to your local Whisper ASR API to be converted into text.

LLM Reasoning: The text is processed by a local language model (like LLaMA 3.2) via Ollama, which generates a smart response.

Telegram Response: The final answer is sent back to you as a text message in Telegram.

## Setup Instructions
Configure Telegram Credentials: In the Telegram Trigger node, select your Telegram API credentials from the dropdown menu. Do the same for all other Telegram nodes in the workflow.

Set Your User ID: In the Authorization Check If node, you must set your personal Telegram User ID to allow access.

Click on the node.

In the "Value 2" field, enter your numeric Telegram User ID.

Tip: You can find your ID by sending a message to a bot like @userinfobot.

Configure Whisper API URL: If your Whisper ASR service is running on a different URL, update the Whisper ASR HTTP Request node.

Click on the node.

Change the URL from http://localhost:9000/asr to your endpoint.

Configure the Ollama Model: In the Ollama Chat Model node, select your Ollama credentials and specify the model you wish to use (e.g., llama3.2:1b).

Activate Workflow: Save and activate the workflow. You can now send messages to your bot!

## Customization
Change the AI Persona: Modify the prompt in the AI Agent node to change the assistant's personality, tone, or instructions.

Use a Different AI Model: Simply change the model name in the Ollama Chat Model node to experiment with different local LLMs.

Adjust Memory: In the Simple Memory node, you can change the Context Window Length to control how many past conversations the AI remembers.

Add More Tools: Expand the workflow by connecting the AI Agent to other nodes like a calendar, a to-do list app, or a web search tool.

## Privacy-First by Design
All data processing—including speech recognition, reasoning, and generation—happens entirely offline on your local machine.

No voice recordings are sent to cloud servers.

No chat data leaves your device.

Operates even without an internet connection (once set up).

## 📊 Basic Information

- **Workflow ID:** 6012
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1320
- **Downloads:** 132
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6012)

## 👤 Author

- **Name:** Alberto
- **Username:** @albertob12

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **telegram** (×3)
- **switch** 
- **if** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **renameKeys** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
