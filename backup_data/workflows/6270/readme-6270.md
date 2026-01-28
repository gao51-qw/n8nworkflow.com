# Build your first AI agent

> ## How it works

This template launches your very first **AI Agent** —an AI-powered chatbot that can do more than just talk— it can take action using tools.

Think of an AI Agent as a smart assistant, and the tools are the apps on its phone. By connecting it to other nodes, you give your agent the ability to interact with real-world data and services, like checking the weather, fetching news, or even sending emails on your behalf.

This workflow is designed to be the perfect starting point:
*   **The Chat Interface:** A `Chat Trigger` node provides a simple, clean interface for you to talk to your agent.
*   **The Brains:** The `AI Agent` node receives your messages, intelligently decides which tool to use (if any), and formulates a helpful response. Its personality and instructions are fully customizable in the "System Message".
*   **The Language Model:** It uses **Google Gemini** to power its reasoning and conversation skills.
*   **The Tools:** It comes pre-equipped with two tools to demonstrate its capabilities:
    1.  **Get Weather:** Fetches real-time weather forecasts.
    2.  **Get News:** Reads any RSS feed to get the latest headlines.
*   **The Memory:** A `Conversation Memory` node allows the agent to remember the last few messages, enabling natural, follow-up conversations.

### Set up steps

**Setup time: ~2 minutes**

You only need one thing to get started: a free Google AI API key.

1.  **Get Your Google AI API Key:**
    *   Visit Google AI Studio at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).
    *   Click **"Create API key in new project"** and copy the key that appears.

2.  **Add Your Credential in n8n:**
    *   On the workflow canvas, go to the **`Connect your model`** (Google Gemini) node.
    *   Click the **Credential** dropdown and select **`+ Create New Credential`**.
    *   Paste your API key into the **API Key** field and click **Save**.

3.  **Start Chatting!**
    *   Go to the **`Example Chat`** node.
    *   Click the **"Open Chat"** button in its parameter panel.
    *   Try asking it one of the example questions, like: *"What's the weather in Paris?"* or *"Get me the latest tech news."*

That's it! You now have a fully functional AI Agent. Try adding more tools (like Gmail or Google Calendar) to make it even more powerful.

## 📊 Basic Information

- **Workflow ID:** 6270
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 432789
- **Downloads:** 43278
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6270)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×7)
- **rssFeedReadTool** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
