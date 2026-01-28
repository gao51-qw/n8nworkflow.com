# Build a RAG agent with n8n, Qdrant & OpenAI

> This template helps you to create an intelligent document assistant that can answer questions from uploaded files.

It shows a complete single-vector RAG (Retrieval-Augmented Generation) system that automatically processes documents, lets you chat with it in natural language and provides accurate, source-cited responses.

The workflow consists of two parts: **the data loading pipeline** and **RAG AI Agent** that answers your questions based on the uploaded documents. 

To test tis workflow, you can use the following example files in a shared [Google Drive folder](https://drive.google.com/drive/u/2/folders/1BevhU5qdgNDFbK4D9oAYGeK0Dt5sEaxQ).

💡 Find more information on creating RAG AI agents in n8n [on the official page](https://n8n.io/rag/).

## 🔗Example files 

The template uses the following example files in the Google Docs format:

1. German Data Protection law: Bundesdatenschutzgesetz (BDSG)
2. Computer Security Incident Handling Guide (NIST.SP.800-61r2)
3. Berkshire Hathaway letter to shareholders from 2024 

## 🚀How to get started

1. Copy or import the template to your n8n instance.
2. Create your **Google Drive credentials** via the Google Cloud Console and add them to the trigger node "Detect New Files". A detailed walk-through can be found in the n8n [docs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/).
3. Create a [Qdrant API](https://qdrant.tech/) key and add it to the "Insert into Vector Store" node credentials. The API key will be displayed after you have logged into Qdrant and created a Cluster.
4. Create or activate your [OpenAI API](https://platform.openai.com/api-keys) key.

## 1️⃣ Import your data and store it in a vector database

✅ Upload files to Google Drive. 

**IMPORTANT**: This template supports files in Google Docs format. New files will be downloaded in HTML format and converted to Markdown. This preserves the overall document structure and improves the quality of responses.

- Open the shared Google Drive folder
- Create a new folder on your Google Drive
- Activate the workflow
- Copy the files from the shared folder to your new folder

The webhook will catch the added files and you will see the execution in your "Executions" tab.

***Note**: If the webhook doesn’t see the files you copied, try adding them to your Google Drive folder from the opened shared files via the **Move to** feature.*

✅ Chunk, embed, and store your data with a connected OpenAI embedding model and Qdrant vector store.

A Qdrant collection – vector storage for your data – will be created automatically after the n8n webhook has caught your data from Google Drive. You can name your collection in the "Insert into Vector Store" node.

## 2️⃣ Add retrieval capabilities and chat with your data

✅ Select the database with imported data in the “Search Documents” sub-node of an AI Agent. 

✅ Start a chat with your agent via the chat interface: it will retrieve data from the vector store and provide a response. 

❓You can ask the following questions based on the example files to test this workflow:

- What are the main steps in incident handling? 
- What does Warren Buffett say about mistakes at Berkshire?
- What are the requirements for processing personal data?
- Do any documents mention data breach notification?

## 🌟Adapt the workflow to your own use case

- **Knowledge management** - Query company docs, policies, and procedures 
- **Research assistance** - Search through academic papers and reports 
- **Customer support** - Build agents that reference product documentation 
- **Legal/compliance** - Query contracts, regulations, and legal documents 
- **Personal productivity** - Chat with your notes, articles, and saved content

The workflow automatically detects new files, processes them into searchable vector chunks, and maintains conversation context. Just drop files in your Google Drive folder and start asking questions.

💻 📞[Get in touch with me](https://www.linkedin.com/in/yulia-dmitrievna-1112361b5/) if you want to customise this workflow or have any questions.

## 📊 Basic Information

- **Workflow ID:** 11468
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 393
- **Downloads:** 39
- **Created:** 2025/12/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11468)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **httpRequest** 
- **merge** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
