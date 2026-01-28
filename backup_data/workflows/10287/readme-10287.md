# Multi-AI agent router: compare OpenAI, Anthropic & Groq responses with webhooks

> ## Introduction
This workflow connects to OpenAI, Anthropic, and Groq, processing requests in parallel with automatic performance metrics. Ideal for testing speed, cost, and quality across models.
## How It Works
Webhooks trigger parameter extraction and routing. Three AI agents run simultaneously with memory and parsing. Responses merge with detailed metrics.
## Workflow Template
Webhook → Extract Parameters → Router
├→ OpenAI Agent
├→ Anthropic Agent
├→ Groq Agent
→ Merge → Metrics → Respond
## Workflow Steps
1. Webhook receives POST with prompt and settings.
2. Parameters extracted and validated.
3. Router directs by cost, latency, or type.
4. AI agents run in parallel.
5. Results merged with metadata.
6. Metrics compute time, cost, and quality.
7. Response returns outputs and recommendation.
## Setup Instructions
1. Activate Webhook with authentication.
2. Add API keys for all providers.
3. Define models, tokens, and temperature.
4. Adjust Router logic for selection.
5. Tune Metrics scoring formulas.
## Prerequisites
* n8n v1.0+ instance
* API keys: OpenAI, Anthropic, Groq
* HTTP client for testing
## Customization
Add providers like Gemini or Azure OpenAI.
Enable routing by cost or performance.
## Benefits
Auto-select efficient providers and compare model performance in real time.


## 📊 Basic Information

- **Workflow ID:** 10287
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 159
- **Downloads:** 15
- **Created:** 2025/10/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10287)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **webhook** 
- **set** 
- **code** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **merge** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
