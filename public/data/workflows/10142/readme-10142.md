# Website chatbot with Google Drive knowledge base using GPT-4 and Mistral AI

> #  AI-Powered Website Chatbot with Google Drive Knowledge Base


##  Overview
This workflow combines **website chatbot intelligence** with **automated document ingestion and vectorization** — enabling live Q&A from both **chat input** and **processed Google Drive files**.  
It uses **Mistral AI** for OCR + embeddings, and **Qdrant** for vector search.

---

##  Chatbot Flow
- **Trigger:** `When chat message received` or `webhook` based upon deployed chatbot
- **Model:** `OpenAI gpt-4.1-mini`
- **Memory:** `Simple Memory (Buffer Window)`
- **Vector Search Tool:** `Qdrant Vector Store `
- **Embeddings:** `Mistral Cloud`
- **Agent:** `website chat agent`
  - Responds based on `chatdbtai` Supabase content
  - Enforces brand tone and informative documents.
  - Integratration  with both:
    - **Embedded chat** UI
    - **Webhook** 

---

##  Document → Knowledge Base Pipeline
Triggered manually to keep vector store up-to-date.

### Steps
1. **Google Drive (brand folder)**  
   → Fetch files from folder `Website kb (ID: 1o3DK9Ceka5Lqb8irvFSfEeB8SVGG_OL7)`
2. **Loop Over Items**  
   → For each file:
   - `Set metadata`
   - `Download file`
   - `Upload to Mistral` for OCR
   - `Get Signed URL`
   - `Run OCR extraction` (`mistral-ocr-latest`)
3. **If OCR success**  
   → Pass to chunking pipeline  
   Else → skip and continue
4. **Chunking Logic (`Code` node)**  
   - Splits document into 1,000-character JSON chunks  
   - Adds metadata (source, char positions, file ID)
5. **Default Data Loader + Text Splitter**  
   → Prepares chunks for embedding
6. **Embeddings (Mistral Cloud)**  
   → Generates embeddings for text chunks
7. **Qdrant Vector Store (Insert mode)**  
   → Saves embeddings into `docragtestkb` collection
8. **Wait**  
   → Optional delay between batches

---

##  Integrations Used
| Service | Purpose | Credential |
|----------|----------|------------|
| **Google Drive** | File source | `Google Drive account 6 rn dbt` |
| **Mistral Cloud** | OCR + embeddings | `Mistral Cloud account 2 dbt rn` |
| **Qdrant** | Vector storage | `QdrantApi account` |
| **OpenAI** | Chat model | `OpenAi account 8 dbt digi` |

---

##  Agent System Prompt Summary
&gt; “You are the official AI assistant for this website.  
Use `chatdbtai` only as your knowledge source.  
Respond conversationally, list offerings clearly, link blogs, and say  
‘I couldn’t find that on this site’ if no match.”

---

##  Key Features
- ✅ Automated OCR + chunking → vectorization  
- ✅ Persistent memory for chat sessions  
- ✅ Multi-channel (Webhook + Embedded Chat)  
- ✅ Fully brand-guided, structured responses  
- ✅ Live data retrieval from Qdrant vector store  


---

##  Summary
&gt; A unified workflow that turns brand files + web content into a **knowledge base** that powers a intelligent chatbot — capable of responding to visitors in real time, powered by **Mistral**, **OpenAI**, and **Qdrant**.

---

###  **Need Help or More Workflows?**
Want to customize this workflow for your business or integrate it with your existing tools?  
Our team at **Digital Biz Tech** can tailor it precisely to your use case  from automation logic to AI-powered enhancements.  

💡 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [shilpa.raju@digitalbiz.tech](mailto:shilpa.raju@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

---

## 📊 Basic Information

- **Workflow ID:** 10142
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 1221
- **Downloads:** 122
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10142)

## 👤 Author

- **Name:** DIGITAL BIZ TECH
- **Username:** @dbt

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **if** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsMistralCloud** (×2)
- **manualTrigger** 
- **set** (×2)
- **httpRequest** (×3)
- **stickyNote** (×9)
- **googleDrive** (×2)
- **code** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
