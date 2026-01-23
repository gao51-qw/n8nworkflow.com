# Personalized AI tech newsletter using RSS, OpenAI and Gmail

> ## Combine Tech News in a Personalized Weekly Newsletter

This n8n template automates the collection, storage, and summarization of technology news from top sites, turning it into a concise, personalized weekly newsletter.

If you like staying informed but want to reduce daily distractions, this workflow is perfect for you. It leverages RSS feeds, vector databases, and LLMs to read and curate tech content on your behalf—so you only receive what truly matters.

---

## How it works

* A **daily scheduled trigger** fetches articles from multiple popular tech RSS feeds like Wired, TechCrunch, and The Verge.
* Fetched articles are:

  * **Normalized** to extract titles, summaries, and publish dates.
  * **Converted to vector embeddings** via OpenAI and stored in memory for fast semantic querying.
* A **weekly scheduled trigger** activates the AI summarization flow:

  * The AI is provided with your interests (e.g., *AI, games, gadgets*) and the desired number of items (e.g., 15).
  * It queries the vector store to retrieve relevant articles and summarizes the most newsworthy stories.
  * The summary is converted into a clean, email-friendly format and sent to your inbox.

---

## How to use

1. Connect your **OpenAI** and **Gmail** accounts to n8n.
2. Customize the list of RSS feeds in the “Set Tech News RSS Feeds” node.
3. Update your interests and number of desired news items in the “Your Topics of Interest” node.
4. Activate the workflow and let the automation run on schedule.

---

## Requirements

* **OpenAI** credentials for embeddings and summarization
* **Gmail** (or another email service) for sending the newsletter

---

## Customizing this workflow

* Want to use different sources? Swap in your own RSS feeds, or use an API-based news aggregator.
* Replace the in-memory vector store with **Pinecone**, **Weaviate**, or another persistent vector DB for longer-term storage.
* Adjust the agent's summarization style to suit internal updates, industry-specific briefings, or even entertainment recaps.
* Prefer chat over email? Replace the email node with a **Telegram bot** to receive your personalized tech newsletter directly in a Telegram chat.


## 📊 Basic Information

- **Workflow ID:** 3986
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 64622
- **Downloads:** 6462
- **Created:** 2025/5/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3986)

## 👤 Author

- **Name:** Miha
- **Username:** @miha

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **splitOut** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** (×2)
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **markdown** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **rssFeedRead** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
