# Personalized email automation using Google Docs, Pinecone, GPT-4o and Gmail

> **What Problem Does This Solve?** 🛠️
This workflow automates the process of extracting information from a Google Doc, storing it in a Pinecone vector database, and using it to personalize and send emails based on user input via chat. It eliminates the manual steps of gathering recipient data, writing messages, and dispatching emails providing a fully automated, intelligent communication system.

Perfect for teams that need to:

* Maintain dynamic contact lists

* Personalize bulk or contextual email outreach

* Use chat interfaces to trigger intelligent email actions

---
**Target Audience:**
Sales teams, marketing departments, HR staff, startup founders, or anyone looking to automate AI-powered communication workflows.

---

**What Does It Do?** 🌟
* Extracts content from a Google Docs document (e.g., a list of contacts or structured notes)

* Splits, embeds, and stores that content in Pinecone for semantic search

* Listens for incoming chat messages using n8n's chatTrigger

* Uses LangChain agents with OpenAI to:

   * Search Pinecone for contextually relevant information (e.g., email addresses)

   * Compose personalized emails based on instructions

* Sends emails using the Gmail API, triggered dynamically from the AI output
---
**Key Features** 📋
* Google Docs integration for live document data

* Embedding & vector search with Pinecone for AI lookups

* Custom LangChain agents with tool calling logic (search + send)

* Full support for OpenAI models (GPT-4o)

* Personalized email generation with dynamic name and message filling

* Modular design: plug-and-play with other tools like CRMs, Notion, etc.

---

**Setup Instructions**

**Prerequisites** 
* **n8n Instance:** Self-hosted or cloud instance

* **Google Docs Account:** For reading input content

* **Pinecone Account:** For storing document data semantically

* **OpenAI Account:** For generating embeddings and messages

* **Gmail Account:** With Gmail OAuth2 credentials for sending emails

---

**Installation Steps** 📦

**1. Import the Workflow**
Import the provided JSON files into your n8n instance.

 **2.Configure Credentials**
Go to **n8n &gt; Credentials**, and set up:

* **Google Docs API**

* **OpenAI API**

* **Pinecone API**

* **Gmail OAuth2**

**3. Set Your Pinecone Index & Namespace**
Ensure you have a working Pinecone index (e.g., n8ndocs) and namespace (e.g., docsmail).

**4. Test the Full Flow**

* Run the Google Docs → Pinecone embedding workflow to prepare data.

* Send a message to the chatTrigger endpoint (e.g., "Send an offer to User").

* Check the execution log to verify correct tool usage and Gmail delivery.

---

**How It Works** 🔍

**1. Data Preparation:**

* Google Doc content is fetched and chunked.

* OpenAI embeddings are created.

* Data is stored in Pinecone under a specific namespace.

**2. Chat Trigger:**

* A webhook captures chat input.

* The LangChain agent interprets the user request.

* The agent uses two tools:

   * Vectorstore_mails: Retrieves relevant emails via Pinecone vector search

   * send_mail: Uses an internal n8n sub-workflow to send Gmail messages

**3. Mail Generation & Delivery:**

* Email is personalized using recipient info (name/email from Pinecone)

* Message follows a clean, friendly format with clear subject and closing

* Delivered via Gmail integration



## 📊 Basic Information

- **Workflow ID:** 5757
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1039
- **Downloads:** 103
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5757)

## 👤 Author

- **Name:** Belgacem Dhiflaoui
- **Username:** @kacemdh

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **stickyNote** (×3)
- **googleDocs** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
