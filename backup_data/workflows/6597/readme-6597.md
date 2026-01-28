# Monetize your private LLM models with x402 & Ollama

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![x402ollama.png](fileId:1960)

# Monetize Your Private LLM Models with x402 and Ollama

Self-hosting custom LLMs is becoming more popular and easier with turn-key inferencing tools like [Ollama](https://ollama.com/). With Ollama you can host your own proprietary models for customers in a private cloud or on your own hardware. 

But monetizing custom-trained, propietary models is still a challenge, requiring integrations with payment processors like Stripe, which don't support micropayments for on-demand API consumption. 

With this free workflow you can quickly monetize your proprietary LLM models with the [x402](https://x402.org) payment scheme in n8n with [1Shot API](https://1shotapi.com). 

## Setup Steps:

1. Authenticate the 1Shot API node against your 1Shot API business account. 
2. Point the 1Shot API simulate and execute nodes at the x402-compatible payment token you'd like to receive as payment.
3. Configure the Ollama n8n node in the workflow (with optional authentication) to forward to your Ollama API endpoint and let users query it through an n8n webhook endpoint while paying you directly in your preferred stablecoin (like [USDC](https://www.circle.com/usdc)). 

Through x402, users and AI agents can pay per-inference, whith no overhead wasted on centralized payment processors. 

## Walkthrough Tutorial

Check out the [YouTube tutorial](https://youtu.be/YjdFS9VDOMo) for this workflow so see the full end-to-end process.

## 📊 Basic Information

- **Workflow ID:** 6597
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 542
- **Downloads:** 54
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6597)

## 👤 Author

- **Name:** 1Shot API
- **Username:** @oneshotapi

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **if** (×3)
- **code** 
- **n8n-nodes-1shot.oneShot** 
- **n8n-nodes-1shot.oneShotSynch** 
- **respondToWebhook** (×3)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmOllama** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
