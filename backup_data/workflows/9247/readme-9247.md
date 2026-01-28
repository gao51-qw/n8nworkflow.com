# Smart chat routing between Gemini and GPT models based on query complexity

> # Adaptive LLM Router for Optimized AI Chat Responses

Elevate your AI chatbots with intelligent model selection: automatically route simple queries to cost-effective LLMs and complex ones to powerful ones, balancing performance and expenses seamlessly.

## What It Does

This workflow listens for chat messages, uses a lightweight Gemini model to classify query complexity, then selects and routes to the optimal LLM (Gemini 2.5 Pro for complex, OpenAI GPT-4.1 Nano for simple) to generate responses—ensuring efficient resource use.

## Key Features

- **Complexity Classifier** - Quick assessment using Gemini 2.0 Flash
- **Dynamic Model Switching** - Routes to premium or budget models based on needs
- **Chat Trigger** - Webhook-based for real-time conversations
- **Current Date Awareness** - Injects $now into system prompt
- **Modular Design** - Easy to add more models or adjust rules
- **Cost Optimization** - Reserves heavy models for demanding tasks only

## Perfect For

- **Chatbot Developers**: Build responsive, cost-aware AI assistants
- **Customer Support**: Handle routine vs. technical queries efficiently
- **Educational Tools**: Simple facts vs. in-depth explanations
- **Content Creators**: Quick ideas vs. detailed writing assistance
- **Researchers**: Basic lookups vs. complex analysis
- **Business Apps**: Optimize API costs in production environments

## Technical Highlights

Harnessing n8n's LangChain nodes, this workflow demonstrates:
- Webhook triggers for instant chat handling
- Agent-based classification with strict output rules
- Conditional model selection for AI chains
- Integration of multiple LLM providers (Google Gemini, OpenAI)
- Scalable architecture for expanding model options

Ideal for minimizing AI costs while maximizing response quality. No coding required—import, configure credentials, and deploy!

## 📊 Basic Information

- **Workflow ID:** 9247
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 302
- **Downloads:** 30
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9247)

## 👤 Author

- **Name:** Daniel Nkencho
- **Username:** @daniel-automates

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.modelSelector** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
