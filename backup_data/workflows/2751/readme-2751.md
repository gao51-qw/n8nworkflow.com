# 🤖 Telegram messaging agent for text/audio/images

> 🤖 This n8n workflow creates an intelligent Telegram bot that processes multiple types of messages and provides automated responses using AI capabilities. The bot serves as a personal assistant that can handle text, voice messages, and images through a sophisticated processing pipeline.

## Core Components

**Message Reception and Validation** 📥
- 🔄 Implements webhook-based message reception for real-time processing
- 🔐 Features a robust user validation system that verifies sender credentials
- 🔀 Supports both testing and production webhook endpoints for development flexibility

**Message Processing Pipeline** ⚡
- 🔄 Uses a smart router to detect and categorize incoming message types
- 📝 Processes three main message formats:
  - 💬 Text messages
  - 🎤 Voice recordings
  - 📸 Images with captions

**AI Integration** 🧠
- 🤖 Leverages OpenAI's GPT-4 for message classification and processing
- 🗣️ Incorporates voice transcription capabilities for audio messages
- 👁️ Features image analysis using GPT-4 Vision API for processing visual content

## Technical Architecture

**Webhook Management** 🔌
- 🌐 Maintains separate endpoints for testing and production environments
- 📊 Implements automatic webhook status monitoring
- ⚡ Provides real-time webhook configuration updates

**Error Handling** ⚠️
- 🔍 Features comprehensive error detection and reporting
- 🔄 Implements fallback mechanisms for unprocessable messages
- 💬 Provides user feedback for failed operations

**Message Classification System** 📋
- 🏷️ Categorizes incoming messages into tasks and general conversation
- 🔀 Implements separate processing paths for different message types
- 🧩 Maintains context awareness across message processing

## Security Features

**User Authentication** 🔒
- ✅ Validates user credentials against predefined parameters
- 👤 Implements first name, last name, and user ID verification
- 🚫 Restricts access to authorized users only

## Response System

**Intelligent Responses** 💡
- 🤖 Generates contextual responses based on message classification



## 📊 Basic Information

- **Workflow ID:** 2751
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 53200
- **Downloads:** 5320
- **Created:** 2025/1/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2751)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **if** 
- **telegram** (×11)
- **stickyNote** (×10)
- **webhook** 
- **httpRequest** (×3)
- **set** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **convertToFile** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.textClassifier** (×2)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
