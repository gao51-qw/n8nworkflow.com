# Evaluate hybrid search for legal question-answering using Qdrant & BM25/mxbai

> ## Evaluate Hybrid Search on Legal Dataset
*This is the second part of **"Hybrid Search with Qdrant & n8n, Legal AI."**
The first part, [**"Indexing"**](https://n8n.io/workflows/7945-hybrid-search-with-qdrant-and-n8n-legal-ai-indexing/), covers preparing and uploading the dataset to Qdrant.*

### Overview
This pipeline demonstrates how to perform **Hybrid Search** on a [Qdrant collection](https://qdrant.tech/documentation/concepts/collections/#collections) using questions and text chunks (containing answers) from the  
[LegalQAEval dataset (isaacus)](https://huggingface.co/datasets/isaacus/LegalQAEval).

On a small subset of questions, it shows:  
- How to set up hybrid retrieval in Qdrant with:  
  - [BM25](https://en.wikipedia.org/wiki/Okapi_BM25)-based keyword retrieval;
  - [mxbai-embed-large-v1](https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1) semantic retrieval;  
  - **Reciprocal Rank Fusion (RRF)**, a simple zero-shot fusion of the two searches;
- How to run a basic evaluation:  
  - Calculate **hits@1** — the percentage of evaluation questions where the top-1 retrieved text chunk contains the correct answer  


After running this pipeline, you will have a quality estimate of a simple hybrid retrieval setup.  
From there, you can reuse Qdrant’s **Query Points** node to build a **legal RAG chatbot**.  

### Embedding Inference
- By default, this pipeline uses [**Qdrant Cloud Inference**](https://qdrant.tech/documentation/cloud/inference/) to convert questions to embeddings.  
- You can also use an **external embedding provider** (e.g. OpenAI).  
  - In that case, minimally update the pipeline, similar to the adjustments showed in **Part 1: Indexing**.  

### Prerequisites
- **Completed Part 1 pipeline**, *"Hybrid Search with Qdrant & n8n, Legal AI: Indexing"*, and the collection created in it;
- All the requirements of **Part 1 pipeline**;

### Hybrid Search
The example here is a **basic hybrid query**. You can extend/enhance it with:
- Reranking strategies;  
- Different fusion techniques;
- Score boosting based on metadata;
- ...  

More details: [Hybrid Queries in Qdrant](https://qdrant.tech/documentation/concepts/hybrid-queries/).  

#### P.S.
- To ask retrieval in Qdrant-related questions, join the [Qdrant Discord](https://discord.gg/ArVgNHV6).  
- Star [Qdrant n8n community node repo](https://github.com/qdrant/n8n-nodes-qdrant) &lt;3


## 📊 Basic Information

- **Workflow ID:** 7946
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1647
- **Downloads:** 164
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7946)

## 👤 Author

- **Name:** Jenny 
- **Username:** @mrscoopers

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** (×2)
- **httpRequest** (×2)
- **filter** (×2)
- **n8n-nodes-qdrant.qdrant** 
- **merge** 
- **splitInBatches** 
- **set** (×3)
- **aggregate** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
