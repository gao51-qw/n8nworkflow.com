# Document RAG & chat agent: Google Drive to Qdrant with Mistral OCR

> # **Knowledge RAG & AI Chat Agent: Google Drive to Qdrant**

## **Description**

This workflow transforms a Google Drive folder into an intelligent, searchable knowledge base and provides a chat agent to query it.  
It’s composed of two distinct flows:  
- An **ingestion pipeline** to process documents.  
- A **live chat agent** that uses **RAG (Retrieval-Augmented Generation)** and optional **web search** to answer user questions.  

This system fully automates the creation of a “Chat with your docs” solution and enhances it with external web-searching capabilities.

---

## **Quick Implementation Steps**

1. Import the workflow JSON into your **n8n** instance.  
2. Set up credentials for **Google Drive**, **Mistral AI**, **OpenAI**, and **Qdrant**.  
3. Open the **Web Search** node and add your **Tavily AI API key** to the Authorization header.  
4. In the **Google Drive (List Files)** node, set the Folder ID you want to ingest.  
5. Run the workflow manually once to populate your **Qdrant database (Flow 1)**.  
6. Activate the workflow to enable the **chat trigger (Flow 2)**.  
7. Copy the **public webhook URL** from the *When chat message received* node and open it in a new tab to start chatting.

---

## **What It Does**

The workflow is divided into two primary functions:

### **1. Knowledge Base Ingestion (Manual Trigger)**  
This flow populates your vector database.  

- **Scans Google Drive:** Lists all files from a specified folder.  
- **Processes Files Individually:** Downloads each file.  
- **Extracts Text via OCR:** Uses **Mistral AI OCR API** for text extraction from PDFs, images, etc.  
- **Generates Smart Metadata:** A Mistral LLM assigns metadata like `document_type`, `project`, and `assigned_to`.  
- **Chunks & Embeds:** Text is cleaned, chunked, and embedded via **OpenAI’s text-embedding-3-small** model.  
- **Stores in Qdrant:** Text chunks, embeddings, and metadata are stored in a Qdrant collection (`docaiauto`).  

### **2. AI Chat Agent (Chat Trigger)**  
This flow powers the conversational interface.  

- **Handles User Queries:** Triggered when a user sends a chat message.  
- **Internal RAG Retrieval:** Searches **Qdrant Vector Store** first for answers.  
- **Web Search Fallback:** If unavailable internally, the agent offers to perform a **Tavily AI web search**.  
- **Contextual Responses:** Combines internal and external info for comprehensive answers.

---

## **Who's It For**

Ideal for:

- Teams building internal AI knowledge bases from Google Drive.  
- Developers creating **AI-powered support**, **research**, or **onboarding** bots.  
- Organizations implementing **RAG pipelines**.  
- Anyone making **unstructured Google Drive documents searchable** via chat.

---

## **Requirements**

- **n8n instance** (self-hosted or cloud).  
- **Google Drive Credentials** (to list and download files).  
- **Mistral AI API Key** (for OCR & metadata extraction).  
- **OpenAI API Key** (for embeddings and chat LLM).  
- **Qdrant instance** (cloud or self-hosted).  
- **Tavily AI API Key** (for web search).

---

## **How It Works**

The workflow runs two independent flows in parallel:

### **Flow 1: Ingestion Pipeline (Manual Trigger)**

1. **List Files:** Fetch files from Google Drive using the Folder ID.  
2. **Loop & Download:** Each file is processed one by one.  
3. **OCR Processing:**  
   - Upload file to Mistral  
   - Retrieve signed URL  
   - Extract text using **Mistral DOC OCR**  
4. **Metadata Extraction:** Analyze text using a **Mistral LLM**.  
5. **Text Cleaning & Chunking:** Split into 1000-character chunks.  
6. **Embeddings Creation:** Use **OpenAI embeddings**.  
7. **Vector Insertion:** Push chunks + metadata into **Qdrant**.  

### **Flow 2: AI Chat Agent (Chat Trigger)**

1. **Chat Trigger:** Starts when a chat message is received.  
2. **AI Agent:** Uses OpenAI + Simple Memory to process context.  
3. **RAG Retrieval:** Queries Qdrant for related data.  
4. **Decision Logic:**  
   - Found → Form answer.  
   - Not found → Ask if user wants web search.  
5. **Web Search:** Performs Tavily web lookup.  
6. **Final Response:** Synthesizes internal + external info.

---

## **How To Set Up**

### **1. Import the Workflow**
Upload the provided JSON into your **n8n** instance.

### **2. Configure Credentials**
Create and assign:

- **Google Drive** → Google Drive nodes  
- **Mistral AI** → Upload, Signed URL, DOC OCR, Cloud Chat Model  
- **OpenAI** → Embeddings + Chat Model nodes  
- **Qdrant** → Vector Store nodes  

### **3. Add Tavily API Key**
- Open **Web Search node → Parameters → Headers**  
- Add your key under **Authorization** (e.g., `tvly-xxxx`).  

### **4. Node Configuration**
- **Google Drive (List Files):** Set Folder ID.  
- **Qdrant Nodes:** Ensure same collection name (`docaiauto`).  

### **5. Run Ingestion (Flow 1)**
Click **Test workflow** to populate Qdrant with your Drive documents.  

### **6. Activate Chat (Flow 2)**
Toggle the workflow ON to enable real-time chat.  

### **7. Test**
Open the webhook URL and start chatting!

---

## **How To Customize**

- **Change LLMs:** Swap models in OpenAI or Mistral nodes (e.g., GPT-4o, Claude 3).  
- **Modify Prompts:** Edit the system message in `ai chat agent` to alter tone or logic.  
- **Chunking Strategy:** Adjust `chunkSize` and `chunkOverlap` in the Code node.  
- **Different Sources:** Replace Google Drive with AWS S3, Local Folder, etc.  
- **Automate Updates:** Add a **Cron** node for scheduled ingestion.  
- **Validation:** Add post-processing steps after metadata extraction.  
- **Expand Tools:** Add more functional nodes like Google Calendar or Calculator.

---

## **Use Case Examples**

- **Internal HR Bot:** Answer HR-related queries from stored policy docs.  
- **Tech Support Assistant:** Retrieve troubleshooting steps for products.  
- **Research Assistant:** Summarize and compare market reports.  
- **Project Management Bot:** Query document ownership or project status.

---

## **Troubleshooting Guide**

| **Issue** | **Possible Solution** |
|------------|------------------------|
| Chat agent doesn’t respond | Check OpenAI API key and model availability (e.g., `gpt-4.1-mini`). |
| Known documents not found | Ensure ingestion flow ran and both Qdrant nodes use same collection name. |
| OCR node fails | Verify Mistral API key and input file integrity. |
| Web search not triggered | Re-check Tavily API key in Web Search node headers. |
| Incorrect metadata | Tune Information Extractor prompt or use a stronger Mistral model. |

---

###  **Need Help or More Workflows?**
Want to customize this workflow for your business or integrate it with your existing tools?  
Our team at **Digital Biz Tech** can tailor it precisely to your use case  from automation logic to AI-powered enhancements.  

 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [shilpa.raju@digitalbiz.tech](mailto:shilpa.raju@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

---


## 📊 Basic Information

- **Workflow ID:** 10096
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 1394
- **Downloads:** 139
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10096)

## 👤 Author

- **Name:** DIGITAL BIZ TECH
- **Username:** @dbt

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **googleDrive** (×2)
- **httpRequest** (×3)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×14)
- **splitInBatches** 
- **set** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
