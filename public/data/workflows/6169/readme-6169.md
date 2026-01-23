# Gmail assistant with full Gmail history RAG using OpenAI

> # 🧠 RAG with Full Gmail history + Real time email updates in RAG using OpenAI & Qdrant

&gt; **Summary:**  
&gt; This workflow listens for new Gmail messages, extracts and cleans email content, generates embeddings via OpenAI, stores them in a Qdrant vector database, and then enables a Retrieval‑Augmented‑Generation (RAG) agent to answer user queries against those stored emails. It’s designed for teams or bots that need conversational access to past emails.

---

## 🧑‍🤝‍🧑 Who’s it for
- **Support teams** who want to surface past customer emails in chatbots or help‑desk portals  
- **Sales ops** that need AI‑powered summaries and quick lookup of email histories  
- **Developers** building RAG agents over email archives  

---

## ⚙️ How it works / What it does
1. **Trigger**  
   - **Gmail Trigger** polls every minute for new messages.  
2. **Fetch & Clean**  
   - **Get Mail Data** pulls full message metadata and body.  
   - **Code node** normalizes the body (removes line breaks, collapses spaces).  
3. **Embed & Store**  
   - **Embeddings OpenAI** node computes vector embeddings.  
   - **Qdrant Vector Store** inserts embeddings + metadata into the `emails_history` collection.  
4. **Batch Processing**  
   - **SplitInBatches** handles large inbox loads in chunks of 50.  
5. **RAG Interaction**  
   - **When chat message received** → **RAG Agent** → uses **Qdrant Email Vector Store** as a tool to retrieve relevant email snippets before responding.  
6. **Memory**  
   - **Simple Memory** buffer ensures the agent retains recent context.  

---

## 🛠️ How to set up
1. **n8n Instance**  
   - Deploy n8n (self‑hosted or via Coolify/Docker).  
2. **Credentials**  
   - Create an **OAuth2** credential in n8n for Gmail (with Gmail API scopes).  
   - Add your **OpenAI API key** in n8n credentials.  
3. **Qdrant**  
   - Stand up a Qdrant instance (self‑hosted or Qdrant Cloud).  
   - Note your host, port, and API key (if any).  
4. **Import Workflow**  
   - In n8n, go to **Workflows → Import** → paste the JSON you provided.  
   - Ensure each credential reference (Gmail & OpenAI) matches your n8n credential IDs.  
5. **Test**  
   - Click **Execute Workflow** or send a test email to your Gmail.  
   - Monitor n8n logs: you should see new points in Qdrant and RAG responses.  

---

## 📋 Requirements
- **n8n** (Self-hosted or Cloud)  
- **Gmail API** enabled on a Google Cloud project  
- **OpenAI API** access (with Embedding & Chat endpoints)  
- **Qdrant** (hosted or cloud) with a collection named `emails_history`  

---

## 🎨 How to customize the workflow
- **Change Collection Name**  
  - Update the `qdrantCollection.value` in all Qdrant nodes if you prefer a different collection.  
- **Adjust Polling Frequency**  
  - In the Gmail Trigger node, switch from `everyMinute` to `everyFiveMinutes` or a webhook‑style trigger.  
- **Metadata Tags**  
  - In **Enhanced Default Data Loader**, tweak the `metadataValues` to tag by folder, label, or sender domain.  
- **Batch Size**  
  - In **SplitInBatches**, change `batchSize` to suit your inbox volume.  
- **RAG Agent Prompt**  
  - Customize the `systemMessage` in the **RAG Agent** node to set the assistant’s tone, instruct on date handling, or add additional tools.  
- **Additional Tools**  
  - Chain other n8n nodes (e.g., Slack, Discord) after the RAG Agent to broadcast AI answers to team channels.  


## 📊 Basic Information

- **Workflow ID:** 6169
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1277
- **Downloads:** 127
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6169)

## 👤 Author

- **Name:** Zain Ali
- **Username:** @zain104

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×3)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **gmailTrigger** 
- **gmail** (×2)
- **code** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
