# Advanced AI demo (presented at AI Developers #14 meetup)

> This workflow was presented at the AI Developers meet up in San Fransico on 24 July, 2024. 

### AI workflows
1. Categorize incoming Gmail emails and assign custom Gmail labels. This example uses the Text Classifier node, simplifying this usecase.
2. Ingest a PDF into a Pinecone vector store and chat with it (RAG example)
3. AI Agent example showcasing the HTTP Request tool. We teach the agent how to check availability on a Google Calendar and book an appointment.

## 📊 Basic Information

- **Workflow ID:** 2358
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 25839
- **Downloads:** 2583
- **Created:** 2024/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2358)

## 👤 Author

- **Name:** Max Tkacz
- **Username:** @max-n8n

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **slack** 
- **stickyNote** (×13)
- **code** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **httpRequest** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **gmail** (×2)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **webhook** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
