# Index legal documents for hybrid search with Qdrant, OpenAI & BM25

> ## Index Legal Dataset to Qdrant for Hybrid Retrieval
*This pipeline is the first part of **"Hybrid Search with Qdrant & n8n, Legal AI"**.  
The second part, [**"Hybrid Search with Qdrant & n8n, Legal AI: Retrieval"**](https://n8n.io/workflows/7946-hybrid-search-with-qdrant-and-n8n-legal-ai-retrieval/), covers retrieval and simple evaluation.* 

### Overview
This pipeline transforms a [Q&A legal corpus from Hugging Face (isaacus)](https://huggingface.co/datasets/isaacus/LegalQAEval) into vector representations and indexes them to Qdrant, providing the foundation for running [**Hybrid Search**](https://qdrant.tech/articles/hybrid-search/), combining:

- [**Dense vectors**](https://qdrant.tech/documentation/concepts/vectors/#dense-vectors) (embeddings) for semantic similarity search;  
- [**Sparse vectors**](https://qdrant.tech/documentation/concepts/vectors/#sparse-vectors) for keyword-based exact search.


After running this pipeline, you will have a Qdrant collection with your legal dataset ready for hybrid retrieval on [BM25](https://en.wikipedia.org/wiki/Okapi_BM25) and dense embeddings: either [mxbai-embed-large-v1](https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1) or [text-embedding-3-small](https://platform.openai.com/docs/models/text-embedding-3-small).

#### Options for Embedding Inference
This pipeline equips you with two approaches for generating dense vectors:

1. Using [**Qdrant Cloud Inference**](https://qdrant.tech/documentation/cloud/inference/), conversion to vectors handled directly in Qdrant;
2. Using external provider, e.g. OpenAI for generating embeddings.

#### Prerequisites
- A cluster on [Qdrant Cloud](https://cloud.qdrant.io/)  
  - Paid cluster in the US region if you want to use **Qdrant Cloud Inference**  
  - Free Tier Cluster if using an external provider (here OpenAI)  
- Qdrant Cluster credentials: 
  - You'll be guided on how to obtain both the **URL** and **API_KEY** from the Qdrant Cloud UI when setting up your cluster;  
- An **OpenAI API key** (if you’re not using Qdrant’s Cloud Inference);  

#### P.S.
- To ask retrieval in Qdrant-related questions, join the [Qdrant Discord](https://discord.gg/ArVgNHV6).  
- Star [Qdrant n8n community node repo](https://github.com/qdrant/n8n-nodes-qdrant) &lt;3

## 📊 Basic Information

- **Workflow ID:** 7945
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 1992
- **Downloads:** 199
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7945)

## 👤 Author

- **Name:** Jenny 
- **Username:** @mrscoopers

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **n8n-nodes-qdrant.qdrant** (×6)
- **if** (×2)
- **stickyNote** (×7)
- **manualTrigger** 
- **splitOut** (×3)
- **httpRequest** (×3)
- **splitInBatches** (×2)
- **aggregate** (×3)
- **limit** 
- **merge** (×2)
- **summarize** (×2)
- **set** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
