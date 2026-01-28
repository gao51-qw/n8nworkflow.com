# Notion to Pinecone vector store integration

> This n8n automation is designed to extract, process, and store content from Notion pages into a Pinecone vector store. Here's a breakdown of the workflow:

**Notion - Page Added Trigger:** The automation starts by monitoring for newly added pages in a specific Notion database. It triggers whenever a new page is created, capturing the page's metadata.

**Notion - Retrieve Page Content:** Once triggered, the automation fetches the full content of the newly added Notion page, including blocks like text, images, and videos.

**Filter Non-Text Content:** The next step filters out non-text content (such as images and videos), ensuring only textual content is processed.

**Summarize - Concatenate Notion's blocks content:** The remaining text content is concatenated into a single block of text for easier processing.

**Token Splitter:** The concatenated text is then split into manageable tokens, which are chunks of text that can be used for embedding.

**Create metadata and load content:** Metadata such as the page ID, creation time, and title are added to the content, making it easy to reference and track.

**Embeddings Google Gemini:** The processed text is passed through a Google Gemini model to generate embeddings, which are numerical representations of the text that capture its semantic meaning.

**Pinecone Vector Store:** Finally, the embeddings, along with the content and metadata, are stored in a Pinecone vector store, making it searchable and ready for use in applications like document retrieval or natural language processing tasks.

This workflow ensures that every new page added to the Notion database is processed into a format that can be easily searched and used in machine learning applications. The automation runs every minute to capture new data in real-time, providing an up-to-date and searchable vector database of Notion content.

**Use Case:**

This automation converts Notion pages into vector embeddings and stores them in Pinecone for enhanced search and AI-driven insights. It’s ideal for teams using Notion for knowledge management, enabling semantic search and context-based content retrieval. For example, employees can easily find relevant information across documents, and data scientists can use AI models to analyze and summarize the content stored in Notion.

## 📊 Basic Information

- **Workflow ID:** 2797
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 4176
- **Downloads:** 417
- **Created:** 2025/1/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2797)

## 👤 Author

- **Name:** Udit Rawat
- **Username:** @ailistmaster

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **notionTrigger** 
- **notion** 
- **filter** 
- **summarize** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
