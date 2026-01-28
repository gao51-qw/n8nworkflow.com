# 🧠 Empower your AI chatbot with long-term memory and dynamic tool routing

> # Empower Your AI Chatbot with Long-Term Memory and Dynamic Tool Routing

This n8n workflow equips your AI agent with **long-term memory** and a **dynamic tools router**, enabling it to provide intelligent, context-aware responses while managing tasks across multiple tools. By combining persistent memory and modular task routing, this workflow makes your AI smarter, more efficient, and highly adaptable.

---

## 👥 Who Is This For?

1. **AI Developers & Automation Enthusiasts**: Integrate advanced AI features like long-term memory and task routing without coding expertise.  
2. **Businesses & Teams**: Automate tasks while maintaining personalized, context-aware interactions.  
3. **Customer Support Teams**: Improve user experience with chatbots that remember past interactions.  
4. **Marketers & Content Creators**: Streamline communication across platforms like Gmail and Telegram.  
5. **AI Researchers**: Experiment with persistent memory and multi-tool integration.

---

## 🚀 What Problem Does This Solve?

This workflow simplifies the creation of intelligent AI systems that retain memory, manage tasks dynamically, and automate notifications across tools like Gmail and Telegram—saving time and improving efficiency.

---

## 🛠️ What This Workflow Does

- **Save & Retrieve Memories**: Uses Google Docs for long-term storage to recall past interactions or user preferences.  
- **Dynamic Task Routing**: Routes tasks to the right tools (e.g., saving/retrieving memories or sending notifications).  
- **AI-Powered Context Understanding**: Combines OpenAI GPT-based short-term memory with long-term memory for smarter responses.  
- **Multi-Channel Notifications**: Sends updates via Gmail or Telegram.

---

## 🔧 Setup

1. **API Credentials**:
   - Connect to OpenAI (AI processing), Google Docs (memory storage), Gmail/Telegram (notifications).  
2. **Customize Parameters**:
   - Adjust the AI agent's system message for your use case.
   - Define task-routing rules in the tools router node.
3. **Test & Deploy**:
   - Verify memory saving/retrieval, task routing, and notification delivery.

---

## 💡 How to Customize

- Modify the system message in the OpenAI node to tailor your agent’s behavior.
- Add or adjust routing rules for additional tools.
- Update notification settings to match your communication preferences.


## 📊 Basic Information

- **Workflow ID:** 3025
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 35078
- **Downloads:** 3507
- **Created:** 2025/2/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3025)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **googleDocs** (×4)
- **set** (×2)
- **telegram** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **stickyNote** (×17)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
