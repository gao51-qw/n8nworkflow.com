# Vectorize Medical Procedures for Semantic Search with TUSS, Gemini & pgVector

> ## Description

This workflow vectorizes the TUSS (Terminologia Unificada da Saúde Suplementar) table by transforming medical procedures into vector embeddings ready for semantic search.

It automates the import of TUSS data, performs text preprocessing, and uses Google Gemini to generate vector embeddings. The resulting vectors can be stored in a vector database, such as PostgreSQL with pgvector, enabling efficient semantic queries across healthcare data.

## What Problem Does This Solve?
Searching for medical procedures using traditional keyword matching is often imprecise. This workflow enhances the search experience by enabling semantic similarity search, which can retrieve more relevant results based on the meaning of the query instead of exact word matches.

## How It Works

1. Import TUSS data: Load medical procedure entries from the TUSS table.
2. Preprocess text: Clean and prepare the text for embedding.
3. Generate embeddings: Use Google Gemini to convert each procedure into a semantic vector.
4. Store vectors: Save the output in a PostgreSQL database with the pgvector extension.

## Prerequisites

1. An n8n instance (self-hosted).
2. A PostgreSQL database with the pgvector extension enabled.
3. Access to the Google Gemini API.
4. TUSS data in a structured format (CSV, database, or API source).

## Customization Tips
You can adapt the preprocessing logic to your own language or domain-specific terms.

Swap Google Gemini with another embedding model, such as OpenAI or Cohere.

Adjust the chunking logic to control the granularity of semantic representation.


## Setup Instructions
Prepare a source (database or CSV) with TUSS data. You need at least two fields:

 - CD_ITEM (Medical procedure code)

 - DS_ITEM (Medical procedure description)

Configure your Oracle or PostgreSQL database credentials in the Credentials section of n8n.

Make sure your PostgreSQL database has pgVector installed.

Replace the placeholder table and column names with your actual TUSS table.

Connect your Google Gemini credentials (via OpenAI proxy or official connector).

Run the workflow to vectorize all medical procedure descriptions.

![image.png](fileId:1894)

## 📊 Basic Information

- **Workflow ID:** 6543
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 454
- **Downloads:** 45
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6543)

## 👤 Author

- **Name:** Thiago Vazzoler Loureiro
- **Username:** @thiagovazzoler

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStorePGVector** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **stickyNote** (×3)
- **manualTrigger** 
- **n8n-nodes-oracle-database-parameterization.Oracle Database with Parameterization** 
- **code** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
