# Deep research assistant with Perplexity AI and Telegram citations

> **Turn your Telegram bot into a real-time research assistant** with this intelligent n8n workflow. Designed for founders, analysts, and knowledge workers, this automation uses Perplexity Sonar and Sonar Pro to deliver **concise, citation-rich answers** to complex queries — directly inside Telegram.

---

**🔍 What It Does**
- **✅ Smart Query Routing**  
  Automatically selects the right tool based on query complexity — Sonar for fast lookups, Sonar Pro for multi-source synthesis.

- **📚 Cited Research Summaries**  
  Includes clickable URLs from Perplexity’s source data for transparency and auditability.

- **🧠 Session Memory**  
  Maintains chat context using Telegram chat ID for follow-up questions and threaded insight.

- **🔐 Secure Access Filter**  
  Restricts bot usage to authorized Telegram users.

- **⚙️ Customizable Agent Behavior**  
  Easily adjust tone, tool preferences, and citation style via system message.

---

**🚀 Use Cases**
- Market research & competitor analysis  
- Academic and scientific deep-dives  
- Legal and transcript summarization  
- Podcast, video, and trend monitoring  
- Personal AI assistant for founders and consultants

---

**🛠 Setup Instructions**
1. Create a Telegram bot via [@BotFather](https://t.me/BotFather) and add your token.  
2. Add your OpenAI and Perplexity API keys.  
3. Update the filter node with your Telegram user ID.  
4. Deploy and start chatting — responses appear in Telegram.



## 📊 Basic Information

- **Workflow ID:** 7939
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 703
- **Downloads:** 70
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7939)

## 👤 Author

- **Name:** BizThrive.ai
- **Username:** @davids

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **perplexityTool** (×2)
- **telegramTrigger** 
- **telegram** 
- **filter** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
