# Send AI-curated weekly news digests with RSS, Vector DB & GPT-4o

> ## What this workflow does

This workflow implements a two-stage news automation system
designed for reusable and topic-driven email delivery.
News articles are continuously collected from multiple platforms
using RSS feeds and stored in a vector database with semantic
embeddings and category metadata.

Instead of fetching news on demand, the workflow separates
daily ingestion from weekly delivery. This allows the same
news data to be reused across different topics, audiences,
or delivery schedules.

On a weekly basis, relevant articles are retrieved from the
vector store based on defined areas of interest and item limits.
The selected news is then processed by an AI agent, which
converts the raw articles into a structured, email-ready format
before sending the final content to users.

## How it works

1. News articles are collected daily from multiple RSS feeds
2. Articles are categorized and stored in a vector database
3. On a weekly trigger, topic preferences are evaluated
4. Relevant articles are retrieved using vector-based search
5. An AI agent formats the content for email delivery
6. The email is sent to the user

## Setup

To use this workflow, complete the following steps:

1. Add and configure your RSS feed sources
2. Connect a vector database and embedding model
3. Configure AI model credentials for content generation
4. Set up email service credentials
5. Define weekly scheduling and topic inputs
6. Test retrieval and email output

## Customization

You can customize this workflow by:

- Adding or removing RSS feed sources
- Adjusting news categories or topic filters
- Changing the number of articles retrieved per topic
- Modifying the AI agent’s writing tone or structure
- Reusing the vector store for other content workflows
- Updating email frequency or delivery format

## Requirements

- RSS feed URLs
- Vector database credentials
- AI model credentials
- Email service credentials


## 📊 Basic Information

- **Workflow ID:** 11951
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 95
- **Downloads:** 9
- **Created:** 2025/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11951)

## 👤 Author

- **Name:** Samyotech
- **Username:** @samyotech

## 🏷️ Categories

- Social Media
- AI RAG

## 🔗 Nodes Used

- **splitOut** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **markdown** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **rssFeedRead** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
