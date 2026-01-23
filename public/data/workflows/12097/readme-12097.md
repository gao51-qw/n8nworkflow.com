# Create an all-in-one Discord assistant with Gemini, Llama Vision & Flux images

> This n8n template demonstrates how to build **O'Carla**, an advanced all-in-one Discord AI assistant. It intelligently handles natural conversations, professional image generation, and visual file analysis within a single server integration.

Use cases are many: Deploy a smart community manager that remembers past interactions, an on-demand artistic tool for your members, or an AI that can "read" and explain uploaded documents and images!

## Good to know
* **API Costs:** Each interaction costs vary depending on the model used (Gemini vs. OpenRouter). Check your provider's dashboard for updated pricing.
* **Infrastructure:** This workflow requires a separate Discord bot script (e.g., Node.js) to forward events to the n8n Webhook. It is recommended to host the bot using **PM2** for 24/7 uptime.

## How it works
1. **Webhook Trigger:** Receives incoming data (text and attachments) from your Discord bot.
2. **Intent Routing:** The workflow uses conditional logic to detect if the user wants an image (via keyword `gambar:`), a vision analysis (via attachments), or a standard chat.
3. **Multi-Model Intelligence:**
   * **Gemini 2.5:** Powers rapid and high-quality general chat reasoning.
   * **Llama 3.2 Vision (via OpenRouter):** Specifically used to describe and analyze images or text-based files.
   * **Flux (via Pollinations):** Uses a specialized AI Agent to refine prompts and generate professional-grade images.
4. **Contextual Memory:** A 50-message buffer window ensures O'Carla maintains the context of your conversation based on your Discord User ID.
5. **Clean UI Output:** Generated image links are automatically shortened via **TinyURL** to keep the Discord chat interface tidy.

## How to use
1. Connect your **Google Gemini** and **OpenRouter** API keys in the respective nodes.
2. Replace the Webhook URL in your bot script with this workflow's **Production Webhook URL**.
3. Type `gambar: [your prompt]` in Discord to generate images.
4. Upload an image or file to Discord to trigger the AI Vision analysis.

## Requirements
* n8n instance (Self-hosted or Cloud).
* Google Gemini API Key.
* OpenRouter API Key.
* Discord Bot Token and hosting environment.

## Customising this workflow
O'Carla is highly flexible. You can change her personality by modifying the **System Message** in the Agent nodes, adjust the memory window length, or swap the LLM models to specialized ones like Claude 3.5 or GPT-4o.



## 📊 Basic Information

- **Workflow ID:** 12097
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 65
- **Downloads:** 6
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12097)

## 👤 Author

- **Name:** Aslamul Fikri Alfirdausi
- **Username:** @asla

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×3)
- **respondToWebhook** (×4)
- **code** (×12)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **if** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **httpRequest** (×4)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
