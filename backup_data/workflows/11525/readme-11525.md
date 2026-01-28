# Build a multi-agent system with n8n, Qdrant, Gmail & OpenAI

> This template presents a multi-agent system in which a coordinating agent manages specialized sub-agents: **an AI agent for RAG** and document summarization, and **an email agent**. Each agent effectively operates in its own domain, working collaboratively under the management of the primary agent.

In addition to the two sub-agents, the coordinator agent queries the latest news by calling the [HTTPS Request Tool]( https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolhttprequest/).

💡 This template is an extended version of the initial workflow on how to [Build a RAG Agent with n8n, Qdrant & OpenAI]( https://creators.n8n.io/workflows/11468). 

The RAG sub-agent can use the [same Qdrant collection](https://drive.google.com/drive/u/2/folders/1BevhU5qdgNDFbK4D9oAYGeK0Dt5sEaxQ). You can import this example collection (n8n-rag-2437367325990310-2025-11-04-10-41-54.snapshot) of 3 documents into the free Qdrant cloud or self-hosted account, rather than creating it from scratch.

## 🔗Example files for RAG 

The template uses the following **example files** in the Google Docs format:
1. German Data Protection law: Bundesdatenschutzgesetz (BDSG)
2. Computer Security Incident Handling Guide (NIST.SP.800-61r2)
3. Berkshire Hathaway letter to shareholders from 2024 

## 🚀How to Get Started

1. Copy or import the template to your n8n instance.
2. Create your **Google Drive credentials** via the Google Cloud Console and add them to the "Get Document" node. A detailed walk-through can be found in the n8n [docs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/).
3. Create your **Gmail credentials** via the Google Cloud Console and add them to the Gmail nodes. 
4. Create a [Qdrant API](https://qdrant.tech/) key and add it to the "Search Documents" node credentials. The API key will be displayed after you have logged into Qdrant and created a Cluster.
5. Create or activate your [OpenAI API]( https://platform.openai.com/api-keys) key.
6. Create or activate your [OpenRouter API]( https://openrouter.ai/docs/api/reference/authentication) key. 
7. Create or activate your [News API]( https://newsapi.org/) key.

## 💬Chat with the main Agent to query document data, search latest news or perform Email actions

1️⃣ Ask the agent about specific information, facts, quotes, or details that are stored in the uploaded documents. 

*E.g. What should be documented during incident response?*

2️⃣ Ask the agent about recent news and current information from web sources. 

*E.g. What does BDSG say about data breaches and are there any recent cases?*

3️⃣ Ask the agent to summarize the document or information related to the documents and email it to you. 

*E.g.I need a short summary of the Berkshire Hathaway letter, please send it to my email [user@example.com].*

4️⃣ Aks the agent to update you on your recent emails.

*E.g. I’d like to know the content of the latest email from [username].*

5️⃣ Ask the agent to create a draft of the email.

*E.g. Please create an email draft of the [document] summary.*

## 🌟Adapt this template for your own use case

- **Enterprise workflows** - Google Docs processing with automated communications 
- **Research teams** - Document analysis with automatic report distribution 
- **Customer success** - Intelligent document search with follow-up email automation 
- **Content operations** - Document summarization with stakeholder notifications 
- **Compliance workflows** - Policy queries with automated alert systems

**⚠️ The current multi-agent architecture comes with certain trade-offs: the sequential nature of agent hand-offs can increase latency compared to single calls, and the full conversation history is not shared between all sub-agents.**

💻 📞[Get in touch](https://www.linkedin.com/in/yulia-dmitrievna-1112361b5/) if you want to customise this workflow or have any questions. 



## 📊 Basic Information

- **Workflow ID:** 11525
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 347
- **Downloads:** 34
- **Created:** 2025/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11525)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **googleDrive** 
- **extractFromFile** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.agentTool** (×2)
- **gmailTool** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
