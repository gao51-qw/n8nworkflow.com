# AI YouTube trend explorer – n8n automation workflow with Gemini/ChatGPT

> ### This n8n template helps you automatically discover, analyze, and track trending topics and videos on YouTube using an AI-powered agent.

Use cases are many: This workflow is perfect for **YouTube creators** needing fresh video ideas, **digital marketers** scouting new campaign topics, **social media managers** who want to catch trends early, and **researchers** who want to analyze what’s viral.

## How It Works
- The workflow starts whenever a chat message is received (e.g., a trend question, a topic prompt, or a request for insights).
- Incoming chat is routed to the **AI Agent – Trend Explorer** node:
     + First, the agent triggers the **Workflow – YouTube Search** tool to gather the latest trending topics and keywords from YouTube.
     + Next, the agent supplies this real-time YouTube data to the **OpenAI Chat Model** for deep analysis, trend interpretation, and unique insights.
     + To provide context-aware answers and track ongoing interests, the agent also references a **Simple Memory** module, recalling past queries, and user instructions.
- Finally, the result is a fast, data-driven, and smart trend report delivered instantly to your chat.

## How To Set Up
- Download the workflow package (including 2 .json files) and import it into your n8n interface.
- Set up necessary access in the following components of the **AI Agent - Trend Explorer** node:
    + **OpenAI Chat Model**: allows API connection for trend insights.
    + **Workflow – YouTube Search**: searches for trending videos based on the query.
    + **Simple Memory** (optional): enhances experience for ongoing sessions.
- Start by sending a chat message on n8n.
- Check the response from the AI agent in the same chat box.
- Ask follow-ups, explore deeper, or trigger new searches - all in one chat thread.

## Requirements
- n8n instance (self-hosted or cloud).
- Set up API access to **OpenAI Chat Model** for chat-based AI.

## How To Customize
- **Connect to your favorite chat platforms**: Easily integrate with additional chat triggers such as Telegram, Slack, or your preferred messaging app.
- **Choose your preferred AI model**: If you want a different viewpoint, simply swap OpenAI Chat Model for Google Gemini, Claude, or any compatible LLM model in your workflow.
- **Upgrade memory for smarter conversations**: For long-term recall or more advanced, context-aware chats, replace **Simple Memory** with a vector database like Pinecone or Redis.

## Need Help?
If you’d like this workflow customized to fit your tools and platforms availability, or if you’re looking to build a tailored AI Agent for your own business - please feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.

Join our community on different platforms for support, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle




## 📊 Basic Information

- **Workflow ID:** 5296
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 12246
- **Downloads:** 1224
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5296)

## 👤 Author

- **Name:** Agent Circle
- **Username:** @agentcircle

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
