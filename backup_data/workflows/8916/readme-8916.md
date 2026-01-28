# Build multi-client agentic RAG document processing pipeline with Supabase Vector DB

> # Ultimate n8n Agentic RAG Template

**Author:** [Cole Medin](https://www.youtube.com/@ColeMedin)

## What is this?
This template provides a complete implementation of an **Agentic RAG (Retrieval Augmented Generation)** system in n8n that can be extended easily for your specific use case and knowledge base. Unlike standard RAG which only performs simple lookups, this agent can reason about your knowledge base, self-improve retrieval, and dynamically switch between different tools based on the specific question.

## Why Agentic RAG?
Standard RAG has significant limitations:
- Poor analysis of numerical/tabular data
- Missing context due to document chunking
- Inability to connect information across documents
- No dynamic tool selection based on question type

## What makes this template powerful:
- **Intelligent tool selection**: Switches between RAG lookups, SQL queries, or full document retrieval based on the question
- **Complete document context**: Accesses entire documents when needed instead of just chunks
- **Accurate numerical analysis**: Uses SQL for precise calculations on spreadsheet/tabular data
- **Cross-document insights**: Connects information across your entire knowledge base
- **Multi-file processing**: Handles multiple documents in a single workflow loop
- **Efficient storage**: Uses JSONB in Supabase to store tabular data without creating new tables for each CSV

## Getting Started
1. Run the table creation nodes first to set up your database tables in Supabase
2. Upload your documents through Google Drive (or swap out for a different file storage solution)
3. The agent will process them automatically (chunking text, storing tabular data in Supabase)
4. Start asking questions that leverage the agent's multiple reasoning approaches

## Customization
This template provides a solid foundation that you can extend by:
- Tuning the system prompt for your specific use case
- Adding document metadata like summaries
- Implementing more advanced RAG techniques
- Optimizing for larger knowledge bases

---

I do intend on making a local version of this agent very soon!

## 📊 Basic Information

- **Workflow ID:** 8916
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 1182
- **Downloads:** 118
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8916)

## 👤 Author

- **Name:** Growth AI
- **Username:** @growthai

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **googleDrive** 
- **googleDriveTrigger** (×2)
- **extractFromFile** (×4)
- **supabase** (×2)
- **set** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **summarize** 
- **switch** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **splitInBatches** 
- **postgres** (×6)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
