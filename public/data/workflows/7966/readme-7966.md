# Website content chatbot with Pinecone, Airtable & OpenAI for RAG applications

> ### This n8n workflow shows how to **extract website content, index it in Pinecone, and leverage Airtable to power a chat agent for customer Q&A**.

Use cases include:  
* Building a **knowledge base** from your website.  
* Creating a **chatbot** that answers customer queries using your own site content.  
* Powering **RAG workflows** for FAQs, support docs, or product knowledge.  

---

### How it works
* Workflow starts with a **manual trigger** or chat message.  
* Website content is fetched via **HTTP Request**.  
* The **HTML body** is extracted and converted into clean **Markdown**.  
* Text is split into chunks (~500 chars with 50 overlap) using the **Character Text Splitter**.  
* **OpenAI embeddings** are generated for each chunk.  
* Content and embeddings are stored in **Pinecone** with namespace separation.  
* A **Chat Agent** (powered by OpenAI or OpenRouter) retrieves answers from Pinecone and Airtable.  
* **Memory buffer** allows multi-turn conversations.  
* A **billing tool** (Airtable) provides dynamic billing-related answers when needed.  

---

### How to use
* Replace the sample website URL in the **HTTP Request** node with your own domain or content source. 
* Update Normalize code based on markdown content output to remove noise. 
* Adjust chunk size in the **Text Splitter** for your website markdown output.  
  * In this example, the **Character Text Splitter with separator `######`** worked really well.  
  * Always check the **Markdown output** to fine-tune your splitting logic.  
* Update **Pinecone namespace** to match your project.  
* Customize the **Chat Agent system prompt** to fit your brand voice and response rules.  
* Connect to your own **Airtable schema** if you want live billing/payment data access.  

---

### Requirements
* **OpenAI account** (for embeddings + chat model).  
* **Pinecone account** (vector DB for semantic search).  
* **Airtable account** (if using the billing tool).  
* (Optional) **OpenRouter account** (alternative chat model provider).  
* n8n self-hosted or cloud.  

---

### Need Help?  
Ask in the [n8n Forum](https://community.n8n.io/)!  

Happy Automating! 🚀


## 📊 Basic Information

- **Workflow ID:** 7966
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 918
- **Downloads:** 91
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7966)

## 👤 Author

- **Name:** Alok Kumar
- **Username:** @alokkumar

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **manualTrigger** 
- **httpRequest** 
- **set** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **airtableTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.agentTool** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
