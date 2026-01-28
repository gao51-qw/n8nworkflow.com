# Google Drive to Supabase contextual vector database sync for RAG applications

> # Workflow Summary

### This automation keeps your Supabase vector database synchronized with documents stored in Google Drive, while also making the data contextual and vector based for better retrieval.

### When a file is added or modified, the workflow extracts its text, splits it into smaller chunks, and enriches each chunk with contextual metadata (such as summaries and document details). It then generates embeddings using OpenAI and stores both the vector data and metadata in Supabase. If a file changes, the old records are replaced with updated, contextualized content.

### The result is a continuously updated and context-aware vector database, enabling highly accurate hybrid search and retrieval. 


# To setup

## 1. Connect Google Drive
•	Create a Google Drive folder to watch.
•	Connect your Google Drive account in n8n and authorize access.
•	Point the Google Drive Trigger node to this folder (new/modified files trigger the flow).

## 2. Configure Supabase
•	Please refer to the Setting Up Supabase Sticky Note. 

## 3. Connect OpenAI (or your embedding model)
•	Add your OpenAI API key in n8n credentials.


## 📊 Basic Information

- **Workflow ID:** 8200
- **Complexity:** advanced
- **Node Count:** 76
- **Views:** 689
- **Downloads:** 68
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8200)

## 👤 Author

- **Name:** Michael Taleb
- **Username:** @michaeltaleb

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **googleDrive** (×2)
- **supabase** (×7)
- **switch** 
- **crypto** 
- **aggregate** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **extractFromFile** 
- **set** (×4)
- **splitInBatches** (×3)
- **if** 
- **googleDriveTrigger** (×2)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **stickyNote** (×30)
- **httpRequest** (×2)
- **executeWorkflow** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **code** 
- **splitOut** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 76 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
