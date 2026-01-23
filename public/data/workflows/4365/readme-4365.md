# 🤖💬 Conversational AI Chatbot with Google Gemini for Text & Image | Telegram

> # 🤖💬 Conversational AI Chatbot with Google Gemini for Text & Image | Telegram

## Overview 📋  
Flexible and scalable chatbot template, designed mainly for Spanish conversations but capable of handling English and other languages. Integrates Google Gemini API for text and image generation, and Telegram for messaging. Supports multiple output types with potential for video, audio, and more.

---

## How It Works

### Modular Architecture & Extensibility ⚙️  
- Separate modules for data extraction, intent analysis, and adaptive response generation.  
- Easily extendable with additional tools, databases, or APIs.  

### Context & Memory Handling 🧠  
- Session-based volatile memory maintains conversation coherence.  
- Allows updates or modifications to previous images based on new requests (e.g., add a hat to a dog 🐶).  

### Intent Detection & Classification 🔍  
- Google Gemini accurately classifies user intent.  
- Two-step validation ensures context-aware, precise replies.

### Content Generation & Output ✍️🖼️  
- Generates text and images based on intent and context.  
- Designed for Telegram but adaptable to other platforms and media types (audio, video).

---

## Key Benefits ✅  
- Scalable, customizable, and production-ready architecture.  
- Supports multiple content formats: text, images, audio, and video.  
- Dynamic context and memory management for smooth, coherent conversations.  
- Native integration with Google Gemini and Telegram ensures reliable and seamless operation.  
- Suitable for diverse use cases and easy to extend with new tools or platforms.

---

## Use Cases 💼  
- Customer support virtual assistants.  
- On-demand multimedia content creation.  
- Marketing and user engagement bots.  
- AI conversational prototypes and pilots.

---

## Requirements 👨‍💻  
- n8n instance (self-hosted or cloud)  
- Google Gemini API credentials  
- Telegram bot setup (optional but recommended)

---

**Active member of the Polytechnic Artificial Intelligence Club (CIAP) at ESPOL.**

![CIAP Logo](https://images.squarespace-cdn.com/content/v1/55d9fb0ee4b0dfd798034243/01a25924-0c43-4186-8d83-f0cb89cc383d/Logo+CIAP+Vertical.png)

## 📊 Basic Information

- **Workflow ID:** 4365
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 19164
- **Downloads:** 1916
- **Created:** 2025/5/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4365)

## 👤 Author

- **Name:** Alan Bajaña Granizo
- **Username:** @thecrawlerzero

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **set** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** (×2)
- **code** (×2)
- **httpRequest** 
- **convertToFile** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.memoryManager** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **telegramTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
