# Document Q&A with RAG: Query PDF content using Weaviate and OpenAI

> # RAG over a PDF with Weaviate
This workflow allows you to upload a PDF file and ask questions about it using the Question and Answer Chain and the Weaviate Vector Store nodes.

## Who it's for
This workflow is the simplest possible implementation of RAG with Weaviate in n8n. It's intended to act as an extendable template for RAG over your own documents.

## Prerequisites
1.  **An existing Weaviate cluster.** You can view instructions for setting up a **local cluster** with Docker [here](https://weaviate.io/developers/weaviate/installation/docker-compose#starter-docker-compose-file) or a **Weaviate Cloud** cluster [here](https://weaviate.io/developers/wcs/quickstart).
2.  **API keys** to generate embeddings and power chat models. We use [OpenAI](https://openai.com/), but feel free to switch out the models as you like.
3.  **Self-hosted n8n instance.** See this [video](https://www.youtube.com/watch?v=kq5bmrjPPAY&t=108s) for how to get set up in just three minutes.

## How it works
### Part 1: Manually upload data
In this example, we manually upload a 100+ page article from arXiv called ["A Survey of Large Language Models"](https://arxiv.org/pdf/2303.18223). But you can replace this with your own more advanced data pipeline, if you wish.
### Part 2: Embed and load data into Weaviate collection
Here, we generate embeddings for the full-text of the article and store them in Weaviate.
### Part 3: Perform RAG over PDF file with Weaviate
In this part of the workflow, you can enter your query by running the Chat Node and get a RAG response grounded in context via the Question and Answer Chain node.


## How to run the workflow
1. Go through the prerequisites, creating a Weaviate cluster (can be local or cloud), downloading self-hosted n8n, and adding your API keys and other credentials.
2. Select the embedding and chat models you'd like to use.
3. Upload a PDF file you want to ask questions about.
4. Execute the rest of the workflow.


## 📊 Basic Information

- **Workflow ID:** 7170
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2011
- **Downloads:** 201
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7170)

## 👤 Author

- **Name:** Mary Newhauser
- **Username:** @maryn

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStoreWeaviate** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **extractFromFile** 
- **set** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×4)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
