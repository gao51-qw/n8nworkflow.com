# Synchronize MySQL database schemas to Pinecone with OpenAI embeddings

> This workflow synchronizes MySQL database table schemas with a vector database in a controlled, idempotent manner.
Each database table is indexed as a single vector to preserve complete schema context for AI-based retrieval and reasoning.
The workflow prevents duplicate vectors and automatically handles schema changes by detecting differences and re-indexing only when required.

### How it works
- The workflow starts with a manual trigger and loads global configuration values.
- All database tables are discovered and processed one by one inside a loop.
- For each table, a normalized schema representation is generated, and a deterministic hash is calculated.
- A metadata table is checked to determine whether a vector already exists for the table.
- If a vector exists, the stored schema hash is compared with the current hash to detect schema changes.
- When a schema change is detected, the existing vector and metadata are deleted.
- The updated table schema is embedded as a single vector (without chunking) and upserted into the vector database.
- Vector identifiers and schema hashes are persisted for future executions.

### Setup steps
- Set the MySQL database name using mysql_database_name.
- Configure the Pinecone index name using pinecone_index.
- Set the vector namespace using vector_namespace.
- Configure the Pinecone index host using vector_index_host.
- Add your Pinecone API key using pinecone_apikey.
- Select the embedding model using embedding_model.
- Configure text processing options:
    - chunk_size
    - chunk_overlap
- Set the metadata table identifier using dataTable_Id.
- Save and run the workflow manually to perform the initial schema synchronization.

### Limitations
- This workflow indexes database table schemas only. Table data (rows) are not embedded or indexed.
- Each table is stored as a single vector. Very large or highly complex schemas may approach model token limits depending on the selected embedding model.
- Schema changes are detected using a hash-based comparison. Non-structural changes that do not affect the schema representation will not trigger re-indexing.

## 📊 Basic Information

- **Workflow ID:** 11971
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 60
- **Downloads:** 6
- **Created:** 2025/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11971)

## 👤 Author

- **Name:** Chandan Singh
- **Username:** @coolchandan62

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×5)
- **manualTrigger** 
- **set** (×2)
- **mySql** (×2)
- **code** 
- **dataTable** (×3)
- **if** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
