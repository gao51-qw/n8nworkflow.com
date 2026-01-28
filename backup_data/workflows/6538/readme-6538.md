# Company knowledge base agent (RAG)

> ## Overview
Turn your docs into an AI-powered internal or public-facing assistant. This chatbot workflow uses RAG (Retrieval-Augmented Generation) with Supabase vector search to answer employee or customer questions based on your company documents—automatically updated via Google Drive.

Whether it’s deployed in Telegram or embedded on your website, this agent supports voice and text input, transcribes voice messages, pulls relevant context from your internal files, and responds with a helpful, AI-generated answer. Two additional workflows listen for file changes in a shared Google Drive folder, convert them into embeddings using OpenAI, and sync them with your Supabase vector DB—so your knowledge base is always up to date.

### Who’s it for
- Startups building an internal ops or HR assistant  
- SaaS companies deploying help bots on their websites  
- Customer support teams reducing repetitive questions  
- Knowledge-driven teams needing internal AI assistants  

### How it works
- Triggered via Telegram bot (or easily swapped for website chatbot or “on chat message”)  
- If user sends a voice message, it’s transcribed to text using OpenAI Whisper  
- Input is passed to a RAG agent that:
  - Searches a Supabase vector store for relevant docs  
  - Pulls context from matching chunks using OpenAI embeddings  
  - Responds with an LLM-powered answer  
- The response is sent back as a Telegram message  
- Two separate workflows:
  - **New File Workflow**: Listens for file uploads in Google Drive, extracts and splits text, then sends to Supabase with embeddings  
  - **Update File Workflow**: Detects file edits, deletes old rows, and updates embeddings for the revised file  

### Example use case
&gt; You upload your internal policy docs and client FAQs into a Google Drive folder.  
&gt;  
&gt; Employees or customers can now ask:  
&gt; - “What’s the refund policy for annual plans?”  
&gt; - “How do I request a day off?”  
&gt; - “What tools are approved for use by the engineering team?”  
&gt;  
&gt; The chatbot instantly pulls up the right section and responds with a smart, confident answer.

### How to set up
1. Connect a Telegram bot or use n8n’s webchat / chatbot widget  
2. Hook up OpenAI for transcription, embeddings, and completion  
3. Set up a Supabase project and connect it as a vector store  
4. Upload your internal docs to Google Drive  
5. Deploy the “Add File” and “Update File” automations to manage embedding sync  
6. Customize the chatbot’s tone and personality with prompt tweaks  

### Requirements
- Telegram bot (or n8n Chat widget)  
- Google Drive integration  
- Supabase with pgvector or similar enabled  
- OpenAI API key (Whisper, Embeddings, ChatGPT)  
- Two folders: one for raw documents and one for tracking updates  

### How to customize
- Swap Supabase for Pinecone, Weaviate, or Qdrant  
- Replace Telegram with web chat, Slack, Intercom, or Discord  
- Add logic to handle fallback answers or escalate to human  
- Embed the chat widget on your site for public customer use  
- Add filters (e.g. department, date, author) to narrow down context


## 📊 Basic Information

- **Workflow ID:** 6538
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 13013
- **Downloads:** 1301
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6538)

## 👤 Author

- **Name:** Abdul Mir
- **Username:** @abdulmir

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **set** (×3)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×3)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **googleDriveTrigger** (×2)
- **googleDrive** (×2)
- **stickyNote** (×18)
- **extractFromFile** (×2)
- **supabase** 
- **limit** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **switch** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
