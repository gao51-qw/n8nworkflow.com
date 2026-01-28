# 🌐 Confluence page AI chatbot workflow

> ### 🌐 Confluence Page AI Chatbot Workflow

This n8n workflow template enables users to interact with an AI-powered chatbot designed to retrieve, process, and analyze content from Confluence pages. By leveraging Confluence's REST API and an AI agent, the workflow facilitates seamless communication and contextual insights based on Confluence page data.

---

### 🌟 How the Workflow Works

#### 🔗 Input Chat Message
- The workflow begins when a user sends a chat message containing a query or request for information about a specific Confluence page.

#### 📄 Data Retrieval
- The workflow uses the Confluence REST API to fetch page details by ID, including its body in the desired format (e.g., storage, view).
- The retrieved HTML content is converted into Markdown for easier processing.

#### 🤖 AI Agent Interaction
- An AI-powered agent processes the Markdown content and provides dynamic responses to user queries. The agent is context-aware, ensuring accurate and relevant answers based on the Confluence page's content.

#### 💬 Dynamic Responses
- Users can interact with the chatbot to:
  - Summarize the page's content.
  - Extract specific details or sections.
  - Clarify complex information.
  - Analyze key points or insights.

---

### 🚀 Use Cases

- **📚 Knowledge Management**: Quickly access and analyze information stored in Confluence without manually searching through pages.
- **📊 Team Collaboration**: Facilitate discussions by summarizing or explaining page content during team chats.
- **🔍 Research and Documentation**: Extract critical insights from large documentation repositories for efficient decision-making.
- **♿ Accessibility**: Provide an alternative way to interact with Confluence content for users who prefer conversational interfaces.

---

### 🛠️ Resources for Getting Started

1. **Confluence API Setup**:
   - Generate an API token for authentication via Atlassian's account management portal.
   - Refer to Confluence's REST API documentation for endpoint details and usage instructions.

2. **n8n Installation**:
   - Install n8n locally or on a server using the official installation guide.

3. **AI Agent Configuration**:
   - Set up OpenAI or other supported language models for natural language processing.



## 📊 Basic Information

- **Workflow ID:** 3012
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 15602
- **Downloads:** 1560
- **Created:** 2025/2/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3012)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×4)
- **httpRequest** (×2)
- **markdown** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.manualChatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
