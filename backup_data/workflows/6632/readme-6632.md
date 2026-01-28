# Auto-respond to Instagram, Facebook & WhatsApp with Llama 3.2

> This automated n8n workflow enables AI-powered responses across multiple social media platforms, including Instagram DMs, Facebook messages, and WhatsApp chats using Meta's APIs. The system provides intelligent customer support, lead generation, and smart engagement at scale through AI-driven conversation management and automated response routing.

## **Good to Know**

* Supports multi-platform messaging across Instagram, Facebook, and WhatsApp
* Uses AI Travel Agent and Ollama Chat Model for intelligent response generation
* Includes platform memory for maintaining conversation context and history
* Automatic message processing and routing based on platform and content type
* Real-time webhook integration for instant message detection and response

## **How It Works**

* **WhatsApp Trigger** - Monitors incoming WhatsApp messages and initiates automated response workflow
* **Instagram Webhook** - Captures Instagram DM notifications and processes them for AI analysis
* **Facebook Webhook** - Detects Facebook Messenger interactions and routes them through the system
* **Message Processor** - Analyzes incoming messages from all platforms and prepares them for AI processing
* **AI Travel Agent** - Processes messages using intelligent AI model to generate contextually appropriate responses
* **Ollama Chat Model** - Provides advanced language processing for complex conversation scenarios
* **Platform Memory** - Maintains conversation history and context across multiple interactions for personalized responses
* **Response Router** - Determines optimal response strategy and routes messages to appropriate sending mechanisms
* **Instagram Sender** - Delivers AI-generated responses back to Instagram DM conversations
* **Facebook Sender** - Sends automated replies through Facebook Messenger API
* **Send Message (WhatsApp)** - Delivers personalized responses to WhatsApp chat conversations

## **How to Use**

* Import workflow into n8n
* Configure Meta's Instagram Graph API, Facebook Messenger API, and WhatsApp Business Cloud API
* Set up approved Meta Developer App with required permissions
* Configure webhook endpoints for real-time message detection
* Set up Ollama Chat Model for AI response generation
* Test with sample messages across all three platforms
* Monitor response accuracy and adjust AI parameters as needed

## **Requirements**

* Access to Meta's Instagram Graph API, Facebook Messenger API, and WhatsApp Business Cloud API
* Approved Meta Developer App
* Webhook setup and persistent token management for real-time messaging
* Ollama Chat Model integration
* AI Travel Agent configuration

## **Customizing This Workflow**

* Modify AI prompts for different business contexts (customer service, sales, support)
* Adjust response routing logic based on message content or user behavior
* Configure platform-specific message templates and formatting
* Set up custom memory storage for enhanced conversation tracking
* Integrate additional AI models for specialized response scenarios
* Add message filtering and content moderation capabilities

## 📊 Basic Information

- **Workflow ID:** 6632
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 5227
- **Downloads:** 522
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6632)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **webhook** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **switch** 
- **httpRequest** (×2)
- **whatsApp** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
