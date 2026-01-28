# 💥🛠️Build a web search chatbot with GPT-4o and MCP Brave Search

> ##  MCP AI Chatbot using Brave Search

Disclaimer:  This workflow only works with local installations of n8n because it uses a community MCP node

![image.png](fileId:1017)

### **Who is this for?**
This workflow is ideal for developers, automation enthusiasts, and businesses looking to integrate AI-powered chat capabilities into their workflows. It's particularly useful for those leveraging Brave Search and MCP tools to enhance user interactions and streamline data retrieval.

### **What problem is this workflow solving?**
This workflow addresses the challenge of creating an intelligent chatbot that can process user queries, execute searches using Brave Search, and provide responses enriched by AI. It simplifies the integration of multiple tools into a cohesive system, saving time and effort for users who need a robust conversational AI solution.

### **What this workflow does**
- Listens for incoming chat messages using the **Chat Trigger** node.
- Processes user input with an **AI Agent** powered by GPT-4o.
- Retrieves relevant tools using the **MCP Get Brave Tools** node.
- Executes specific search queries via the **MCP Execute Brave Search** node.
- Maintains short-term memory of conversations with the **Simple Memory** node.

### **Setup**
1. **Prerequisites**:
   - Access to an n8n instance (self-hosted).
   - API credentials for OpenAI and MCP Client Tools.
   - Brave Search API key.

2. **Steps**:
   - Import the workflow JSON into your n8n instance.
   - Configure the API credentials for OpenAI and MCP Client Tools in their respective nodes.
   - Set up your Brave Search API key in the MCP nodes. https://brave.com/search/api/

3. **Testing**:
   - Use the built-in chat interface to send test messages.
   - Verify that the chatbot processes queries and returns results as expected.

### **How to customize this workflow to your needs**
- Modify the AI Agent's prompt settings to tailor responses to your specific use case.
- Adjust the memory buffer in the Simple Memory node to retain more or less conversational context.
- Replace or add additional tools in the MCP nodes to expand functionality.


## 📊 Basic Information

- **Workflow ID:** 3189
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 24388
- **Downloads:** 2438
- **Created:** 2025/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3189)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **n8n-nodes-mcp.mcpClientTool** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
