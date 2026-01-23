# Store Notion's Pages as Vector Documents into Supabase with OpenAI

> ***Workflow updated on 17/06/2024:** 
Added 'Summarize' node to avoid creating a row for each Notion content block in the Supabase table.*

## Store Notion's Pages as Vector Documents into Supabase

**This workflow assumes you have a Supabase project with a table that has a vector column. If you don't have it, follow the instructions here:** [Supabase Langchain Guide](https://supabase.com/docs/guides/ai/langchain?queryGroups=database-method&database-method=sql)

## Workflow Description

This workflow automates the process of storing Notion pages as vector documents in a Supabase database with a vector column. The steps are as follows:

1. **Notion Page Added Trigger**:
   - Monitors a specified Notion database for newly added pages. You can create a specific Notion database where you copy the pages you want to store in Supabase.
   - Node: `Page Added in Notion Database`

2. **Retrieve Page Content**:
   - Fetches all block content from the newly added Notion page.
   - Node: `Get Blocks Content`

3. **Filter Non-Text Content**:
   - Excludes blocks of type "image" and "video" to focus on textual content.
   - Node: `Filter - Exclude Media Content`

4. **Summarize Content**:
   - Concatenates the Notion blocks content to create a single text for embedding.
   - Node: `Summarize - Concatenate Notion's blocks content`

5. **Store in Supabase**:
   - Stores the processed documents and their embeddings into a Supabase table with a vector column.
   - Node: `Store Documents in Supabase`

6. **Generate Embeddings**:
   - Utilizes OpenAI's API to generate embeddings for the textual content.
   - Node: `Generate Text Embeddings`


7. **Create Metadata and Load Content**:
   - Loads the block content and creates associated metadata, such as page ID and block ID.
   - Node: `Load Block Content & Create Metadata`

8. **Split Content into Chunks**:
   - Divides the text into smaller chunks for easier processing and embedding generation.
   - Node: `Token Splitter`

## 📊 Basic Information

- **Workflow ID:** 2290
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 6874
- **Downloads:** 687
- **Created:** 2024/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2290)

## 👤 Author

- **Name:** Dataki
- **Username:** @dataki

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **stickyNote** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **notionTrigger** 
- **notion** 
- **filter** 
- **summarize** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
