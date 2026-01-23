# 🤖 Build an interactive AI agent with chat interface and multiple tools

> ## How it works

This template is a complete, hands-on tutorial that lets you build and interact with your very first AI Agent.

Think of an AI Agent as a standard AI chatbot with **superpowers**. The agent doesn't just talk; it can **use tools** to perform actions and find information in real-time. This workflow is designed to show you exactly how that works.

1.  **The Chat Interface (Chat Trigger):** This is your window to the agent. It's a fully styled, public-facing chat window where you can have a conversation.
2.  **The Brain (AI Agent Node):** This is the core of the operation. It takes your message, understands your intent, and intelligently decides which "superpower" (or tool) it needs to use to answer your request. The agent's personality and instructions are defined in its extensive system prompt.
3.  **The Tools (Tool Nodes):** These are the agent's superpowers. We've included a variety of useful and fun tools to showcase its capabilities:
    *   Get a random joke.
    *   Search Wikipedia for a summary of any topic.
    *   Calculate a future date.
    *   Generate a secure password.
    *   Calculate a monthly loan payment.
    *   Fetch the latest articles from the n8n blog.
4.  **The Memory (Memory Node):** This gives the agent a short-term memory, allowing it to remember the last few messages in your conversation for better context.


When you send a message, the agent's brain analyzes it, picks the right tool for the job, executes it, and then formulates a helpful response based on the tool's output.

## Set up steps

**Setup time: ~3 minutes**

This template is nearly ready to go out of the box. You just need to provide the AI's "brain."

1.  **Configure Credentials:** This workflow requires an API key for an AI model. Make sure you have credentials set up in your n8n instance for either **Google AI (Gemini)** or **OpenAI**.
2.  **Choose Your AI Brain (LLM):**
    *   By default, the workflow uses the **Google Gemini** node. If you have Google AI credentials, you're all set!
    *   If you prefer to use **OpenAI**, simply **disable the Gemini node** and **enable the OpenAI node**. You only need one active LLM node. Make sure it is connected to the Agent parent node.
3.  **Explore the Tools:** Take a moment to look at the different tool nodes connected to the `Your First AI Agent` node. This is where the agent gets its abilities! You can add, remove, or modify these to create your own custom agent.
4.  **Activate and Test!**
    *   Activate the workflow.
    *   Open the **public URL** for the `Example Chat Window` node (you can copy it from the node's panel).
    *   Start chatting! Try asking it things like:
        *   "Tell me a joke."
        *   "What is n8n?"
        *   "Generate a 16-character password for me."
        *   "What are the latest posts on the n8n blog?"
        *   "What is the monthly payment for a $300,000 loan at 5% interest over 30 years?"

## 📊 Basic Information

- **Workflow ID:** 5819
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 48693
- **Downloads:** 4869
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5819)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** 
- **dateTimeTool** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **cryptoTool** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **rssFeedReadTool** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
