# Build a smart personal assistant with GROQ, LLaMA & search tools

> A reasoning agent that can think, search, calculate, and remember — powered by GROQ inference and ready to deploy in one click.

Unlike traditional AI bots that only respond, this assistant reasons before replying, fetches real-time facts, does math, and keeps short-term memory of your conversation.

🔧 How it works
This template builds a conversational AI agent using the GROQ LLaMA 3 or LLaMA 4 API, combined with modular tools like:

1. 🧠 Think Tool – performs step-by-step logical reasoning
2. 🔍 SerpAPI – fetches live data from Google search
3. ➗ Calculator – handles arithmetic and math queries
4. 💾 Memory Buffer – keeps track of the last 5 messages for context

Everything is integrated inside n8n and optimized for blazing-fast replies using GROQ’s ultra-low latency.

🧠 Your Agent Will:
- Understand and analyze your queries
- Think through solutions before answering
- Pull real-time data via SerpAPI
- Perform calculations with the built-in math engine
- Recall prior context using short-term memory
- Respond clearly, conversationally — like a real assistant

🧑‍💼 Who is this template for?
Perfect for:
- AI builders and creators using GROQ + n8n
- Teams needing a real-time LLaMA-powered assistant
- Beginners exploring LangChain + n8n workflows
- Developers combining LLMs + tools + memory

🚀 How to Set Up
- Plug in your GROQ API key
- Add your SerpAPI key
- Import and run — it’s ready to chat!
- All tools are pre-wired. You can expand the memory, customize prompts, or plug in more tools.

📬 Use Cases
Connect this agent with:

- Telegram Bots 🤖
- WhatsApp via Twilio 📱
- Slack, Discord, or Gmail 💬
- Manual triggers in n8n 🔁

👉 Check out more templates by this creator:
https://n8n.io/creators/digimetalab

## 📊 Basic Information

- **Workflow ID:** 5870
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 950
- **Downloads:** 95
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5870)

## 👤 Author

- **Name:** DigiMetaLab
- **Username:** @digimetalab

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
