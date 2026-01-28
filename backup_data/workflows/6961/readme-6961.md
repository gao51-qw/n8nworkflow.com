# Vision RAG and image embeddings using Cohere Command-A and Embed v4

> ### Cohere's new multimodal model releases make building your own Vision RAG agents a breeze. If you're new to Multimodal RAG and for the intent of this template, it means to embed and retrieve only document scans relevant to a query and then have a vision model read those scans to answer.

The benefits being (1) the vision model doesn't need to keep all document scans in context (expensive) and (2) ability to query on graphical content such as charts, graphs and tables.

### How it works
* Page extracts from a technology report containing graphs and charts are downloaded, converted to base64 and embedded using Cohere's Embed v4 model.
* This produces embedding vectors which we will associate with the original page url and store them in our Qdrant vector store collection using the Qdrant community node.
* Our Vision RAG agent is split into 2 parts; one regular AI agent for chat and a second Q&A agent powered by Cohere's Command-A-vision model which is required to read contents of images.
* When a query requires access to the technology report, the Q&A agent branch is activated. This branch performs a vector search on our image embeddings and returns a list of matching image urls. These urls are then used as input for our vision model along with the user's original query.
* The Q&A vision agent can then reply to the user using the "respond to chat" node.
* Because both agents share the same memory space, it would be the same conversation to the user.

### How to use
* Ensure you have a Cohere account and sufficient credit to avoid rate limit or token usage restrictions.
* For embeddings, swap out the page extracts for your own. You may need to split and convert document pages to images if you want to use image embeddings.
* For chat, you may want to structure the agent(s) in another way which makes sense for your environment eg. using MCP servers.

### Requirements
* Cohere account for Embeddings and LLM
* Qdrant for vector store


## 📊 Basic Information

- **Workflow ID:** 6961
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 1226
- **Downloads:** 122
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6961)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **httpRequest** (×3)
- **splitOut** 
- **aggregate** (×2)
- **n8n-nodes-qdrant.qdrant** (×2)
- **splitInBatches** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **@n8n/n8n-nodes-langchain.chat** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.toolCode** 
- **@n8n/n8n-nodes-langchain.lmChatCohere** 
- **stickyNote** (×11)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.embeddingsCohere** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
