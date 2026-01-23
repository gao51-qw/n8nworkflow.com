# Personal portfolio CV  Rag chatbot - with conversation store and email summary

> ## Personal Portfolio CV Rag Chatbot - with Conversation Store and Email Summary


### Target Audience
This template is perfect for:

Individuals looking to create a working professional and interactive personal portfolio chatbot. 

Developers interested in integrating RAG Chatbot functionality with conversation storage.
 

### 1. Description
Create a stunning Personal Portfolio CV with integrated RAG Chatbot capabilities, including conversation storage and daily email summaries.

### 2.Features:

#### Training: Setup Ingestion stage
Upload your CV to Google Drive and let the Drive trigger updates to read your resume cv and convert it into your vector database (RAG purpose). Modify any parts as needed.

#### Chat & Track:
 Use any frontend/backend interface to call the chat API and chat history API.

#### Reporting Daily Chat Conversations:
 Receive daily automatic summaries of chat conversations. Data stored via NocoDB.

### 3.Setup Guide:
 
#### Step-by-Step Instructions:

Ensure all credentials are ready. Follow the notes provided.

1. Ingestion:
Upload your CV to Google Drive.
The Drive triggers RAG update in your vector database. You can change the folder name, files and indexname of the vector database accordingly.
2. Chat:
Use any frontend/backend interface to call the chat API (refer to the notes for details) .

[optional] Use any frontend/backend interface to call the update chat history API (refer to the notes for details).

3.Tracking Chat:

Get daily automatic summaries of chat conversations.Format email conversations report as you like.

You are ready to go!




## 📊 Basic Information

- **Workflow ID:** 2987
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 4316
- **Downloads:** 431
- **Created:** 2025/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2987)

## 👤 Author

- **Name:** Sean Lon
- **Username:** @seanlon

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **stickyNote** (×11)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **googleDriveTrigger** (×2)
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **webhook** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **respondToWebhook** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **nocoDb** (×2)
- **code** 
- **html** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
