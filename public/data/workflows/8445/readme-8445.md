# Migrate Pinecone index to Weaviate class with Airtable pagination

> ## Who’s it for  
This workflow is designed for developers, data engineers, and AI teams who need to migrate a Pinecone Cloud index into a Weaviate Cloud class index **without recalculating the vectors (embeddings)**.  
It’s especially useful if you are consolidating vector databases, moving from Pinecone to Weaviate for hybrid search, or preparing to deprecate Pinecone.  
⚠️ Note: The dimensions of the two indexes must match.

## How it works  
The workflow automates migration by batching, formatting, and transferring vectors along with their metadata:  

1. **Initialization** – Uses Airtable to store the pagination token. The token starts with a record initialized as `INIT` (Name=`INIT`, Number=`0`).  
2. **Pagination handling** – Reads batches of vector IDs from the Pinecone index using `/vectors/list`, resuming from the last stored token.  
3. **Vector fetching** – For each batch, retrieves embeddings and metadata fields from Pinecone via `/vectors/fetch`.  
4. **Data transformation** – Two **Code nodes** (`Prepare Fetch Body` and `Format2Weaviate`) are included to correctly structure the body of each HTTP request and map metadata into Weaviate-compatible objects.  
5. **Data loading** – Inserts embeddings and metadata into the target Weaviate class through its REST API.  
6. **State persistence** – Updates the pagination token in Airtable, ensuring the next run resumes from the correct point.  
7. **Scheduling** – The workflow runs on a defined schedule (e.g., every 15 seconds) until all data has been migrated.

## How to set up  
1. **Airtable setup**  
   - Create a Base (e.g., `Cycle`) and a Table (e.g., `NextPage`).  
   - The table should have two columns:  
     - `Name` (text) → stores the pagination token.  
     - `Number` (number) → stores the row ID to update.  
   - Initialize the first and only row with (`INIT`, `0`).  

2. **Source and target configuration**  
   - Make sure you have a Pinecone index and namespace with embeddings.  
   - Manually create a target Weaviate Cluster and a target Weaviate Class with the same vector dimensions.  
   - In the **Parameters** node of the workflow, configure the following values:  

   | Parameter           | Description                                                                                  | Example Value |
   |---------------------|----------------------------------------------------------------------------------------------|---------------|
   | **pineconeIndex**   | The name of your Pinecone index to read vectors from.                                        | `my-index` |
   | **pineconeNamespace** | The namespace inside the Pinecone index (leave empty if unused).                            | `default` |
   | **batchlimit**      | Number of records fetched per iteration. Higher = faster migration but heavier API calls.    | `100` |
   | **weaviateCluster** | REST endpoint of your Weaviate Cloud instance.                                               | `https://dbbqrc9itXXXXXXXXX.c0.europe-west3.gcp.weaviate.cloud` |
   | **weaviateClass**   | Target class name in Weaviate where objects will be inserted.                                | `MyClass` |

3. **Credentials**  
   - Configure Pinecone API credentials.  
   - Configure Weaviate Bearer token.  
   - Configure Airtable API key.  

4. **Activate**  
   - Import the workflow into n8n, update the parameters, and start the schedule trigger.

## Requirements  
- Pinecone Cloud account with a configured index and namespace.  
- Weaviate Cloud cluster with a class defined and matching vector dimensions.  
- Airtable account and base to store pagination state.  
- n8n instance with credentials for Pinecone, Weaviate, and Airtable.

## How to customize the workflow  
- Adjust the **batchlimit** parameter to control performance (higher values = fewer API calls, but heavier requests).  
- Adapt the `Format2Weaviate` Code node if you want to change or expand the metadata stored.  
- Replace Airtable with another persistence store (e.g., Google Sheets, PostgreSQL) if preferred.  
- Extend the workflow to send migration progress updates via Slack, email, or another channel.  


## 📊 Basic Information

- **Workflow ID:** 8445
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 90
- **Downloads:** 9
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8445)

## 👤 Author

- **Name:** Br1
- **Username:** @bruno-menegolli

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **set** (×3)
- **airtable** (×3)
- **noOp** 
- **stickyNote** (×3)
- **scheduleTrigger** 
- **code** (×2)
- **httpRequest** (×4)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
