# Gmail customer support auto-responder with Ollama LLM and Pinecone RAG

> # Gmail Customer Support Auto-Responder with Ollama LLM and Pinecone RAG

**Built by Setidure Technologies**  
Automate intelligent, friendly replies to customer queries using AI, vector search, and Gmail — all without human effort.

---

## Overview

This is a ready-to-deploy smart customer support automation template for businesses that want to reply to emails instantly and accurately with the warmth of a human agent.  

It uses **Gmail**, **LangChain agents**, **Ollama-hosted LLMs**, and **Pinecone vector search** to craft contextual, brand-aligned replies at scale.

&gt; **Note:** This template uses community nodes and requires a **self-hosted n8n instance**.

---

## What the Workflow Does

### 1. Triggers on Incoming Emails  
- Uses Gmail Trigger node to listen for new messages  
- Activates every minute to ensure fast responses

### 2. Classifies Email Intent  
- A LangChain Text Classifier detects whether the email is a Customer Support query  
- Non-relevant emails are skipped

### 3. Generates AI Response  
- An AI Agent powered by Ollama generates the email reply  
- Follows a predefined tone: "Mr. Aashit Sharma from Setidure Technologies"  
- Written in a warm, human tone with natural phrasing

### 4. Retrieves FAQ-Based Knowledge  
- Connects to Pinecone vector database for real-time FAQ retrieval  
- Enhances responses with specific, accurate product or policy information

### 5. Labels Email in Gmail  
- Automatically tags emails with labels like `Handled` or `Auto-Replied` for easy tracking

### 6. Sends Email Reply  
- Sends the generated response back to the customer  
- Includes personal sign-off and clean formatting

---

## Tech Stack Used

- Gmail Trigger & Send Nodes  
- LangChain AI Agent & Classifier  
- Ollama LLMs (e.g., phi4, llama3)  
- Pinecone Vector Store  
- Custom Prompts for Brand Persona  
- Local Embeddings using Ollama

---

## Key Features

- Fully automated — no human action needed  
- Local LLMs ensure data privacy  
- Real-time answers powered by vector search  
- Brand-personality aligned tone  
- Organized inbox with Gmail labels

---

## Best For

- Startups scaling support with limited staff  
- SaaS companies or e-commerce businesses  
- Privacy-conscious enterprises using local LLMs  
- Teams building branded auto-communication workflows

---

## Customization Tips

- Modify AI prompt to reflect your brand's voice and tone  
- Expand classifier for more email categories  
- Replace Gmail output with Slack, Notion, or your CRM  
- Update Pinecone FAQ index to match evolving support content

---

## 📊 Basic Information

- **Workflow ID:** 4760
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 583
- **Downloads:** 58
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4760)

## 👤 Author

- **Name:** Aashit Sharma
- **Username:** @aashitsharma

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **stickyNote** 
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.lmOllama** 
- **@n8n/n8n-nodes-langchain.embeddingsOllama** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
