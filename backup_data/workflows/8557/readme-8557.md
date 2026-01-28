# Transform Excel data into AI-ready vectors with OpenAI and Supabase

> ## Description
This workflow is a **practical, “dirty” solution** for real-world scenarios where frontline workers keep using Excel in their daily processes.  
Instead of forcing change, we take their spreadsheets as-is, clean and normalize the data, generate embeddings, and store everything in Supabase.

The benefit: frontline staff continue with their familiar tools, while **data analysts gain clean, structured, and vectorized data** ready for analysis or RAG-style AI applications.

## How it works
- **Frontline workers continue with Excel** – no disruption to their daily routines.  
- **Upload & trigger** – The workflow runs when a new Excel sheet is ready.  
- **Read Excel rows** – Data is pulled from the specified workbook and worksheet.  
- **Clean & normalize** – HTML is stripped, Excel dates are fixed, and text fields are standardized.  
- **Batch & switch** – Rows are split and routed into Question/Answer processing paths.  
- **Generate embeddings** – Cleaned Questions and Answers are converted into vectors via OpenAI.  
- **Merge enriched records** – Original business data is combined with embeddings.  
- **Write into Supabase** – Data lands in a structured table (`excel_records`) with vector and FTS indexes.  

## Why it’s “dirty but useful”
- **No disruption** – frontline workers don’t need to change how they work.  
- **Analyst-ready data** – Supabase holds clean, queryable data for dashboards, reporting, or AI pipelines.  
- **Bridge between old and new** – Excel remains the input, but the backend becomes modern and scalable.  
- **Incremental modernization** – paves the way for future workflow upgrades without blocking current work.  

## Outcome
Frontline workers keep their Excel-based workflows, while **data can immediately be structured, searchable, and vectorized in Supabase** — enabling AI-powered search, reporting, and retrieval-augmented generation.


## Required setup

**Supabase account**
- Create a project and enable the **pgvector** extension. 

**OpenAI API Key** 
  - Required for generating embeddings (`text-embedding-3-small`).  

**Microsoft Excel credentials**
  - Needed to connect to your workbook and worksheet.  

- ## Need Help
🔗 [LinkedIn – Wessel Bulte](https://www.linkedin.com/in/wessel-bulte/)


## 📊 Basic Information

- **Workflow ID:** 8557
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1394
- **Downloads:** 139
- **Created:** 2025/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8557)

## 👤 Author

- **Name:** Wessel Bulte
- **Username:** @uuessel

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×4)
- **splitInBatches** 
- **switch** 
- **merge** (×2)
- **httpRequest** (×2)
- **supabase** (×2)
- **postgres** 
- **microsoftExcel** 
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
