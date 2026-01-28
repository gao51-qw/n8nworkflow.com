# Gmail to vector embeddings with PGVector and Ollama

> Gmail to Vector Embeddings with PGVector and Ollama

# Who is this for?

**Everyone!** Did you dream of asking an AI "*what hotel did I stay in for holidays last summer?*" or "*what were my marks last semester like?*".

Dream no more, as [vector similarity searches](https://www.pinecone.io/learn/vector-embeddings/) and **this workflow** are the foundations to make it possible (as long as the information appears in your e-mails 😅).

## 100% local

This workflow is designed to use locally-hosted open source. **Ollama** as LLM provider, `nomic-embed-text` as the embeddings model, and **pgvector** as the vector database engine, on top of **Postgres**.

## But.. how?!

Firstly, specify the date you created your Gmail account on, then manually run the workflow in order to bulk read all your e-mail in monthly batches. Your database is now populated!

Now it's the task for other workflows to query the vector database.

**Activate the workflow** so that new e-mail is continuously added by the `Gmail Trigger` upon receiving it.

### Structured AND Vectorized

This workflow stores your e-mail activity in two ways:
- In a structured table
- In a vector embeddings table

And the information in both of them can be correlated by Gmail's messages `id`, which is stored in the vectors table as metadata property `emails_metadata.id`.

That way consumers can benefit from both worlds! ✨ Vector similarity searches enable semantic searches, while structured queries can retrieve more factual data like the message `id`, its *date* or who it came *from*.

### Other useful templates

My template [Chat with Your Email History using Telegram, Mistral and Pgvector for RAG](https://n8n.io/workflows/3763-chat-with-your-email-history-using-telegram-mistral-and-pgvector-for-rag/) is a ready-made solution to consume this workflow.

You may also pair this workflow with my other template to [Email Assistant: Convert Natural Language to SQL Queries with Phi4-mini and PostgreSQL](https://n8n.io/workflows/3761-email-assistant-convert-natural-language-to-sql-queries-with-phi4-mini-and-postgresql/) and you'll enable RAG workflows that use both structured and vectorized databases.

## Customizations

I suppose the e-mail provider could be changed, but then you'd have to identify an alternative `id` field. `Message-ID` would be a more standard option.

There are a few opinionated choices as to what metadata to store, but those shouldn't need adjustments.

## 📊 Basic Information

- **Workflow ID:** 3762
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 3246
- **Downloads:** 324
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3762)

## 👤 Author

- **Name:** Alfonso Corretti
- **Username:** @acorretti

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsOllama** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **gmailTrigger** 
- **splitInBatches** 
- **splitOut** 
- **if** 
- **manualTrigger** 
- **noOp** 
- **stickyNote** (×4)
- **set** (×2)
- **postgres** (×2)
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** 
- **code** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
