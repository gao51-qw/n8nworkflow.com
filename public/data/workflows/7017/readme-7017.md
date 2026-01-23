# Filter cybersecurity news for your tech stack (OpenAI + Pinecone RAG)

> ## What it does:
Collects cybersecurity news from trusted RSS feeds and uses OpenAI’s Retrieval-Augmented Generation (RAG) capabilities with Pinecone to filter for content that is directly relevant to your organization’s tech stack. “Relevant” means the AI looks for news items that mention your specific tools, vendors, frameworks, cloud platforms, programming languages, operating systems, or security solutions — as described in your .txt scope documents. By training on these documents, the system understands the environment you operate in and can prioritize news that could affect your security posture, compliance, or operational stability. Once filtered, summaries of the most important items are sent to your work email every day.

## How it works
- **Pulls in news from multiple cybersecurity-focused RSS feeds:** The workflow automatically collects articles from trusted, high-signal security news sources. These feeds cover threat intelligence, vulnerability disclosures, vendor advisories, and industry updates.
- **Filters articles for recency and direct connection to your documented tech stack:** Using the publish date, it removes stale or outdated content. Then, leveraging your .txt scope documents stored in Pinecone, it checks each article for references to your technologies, vendors, platforms, or security tools.
- **Uses OpenAI to generate and review concise summaries:** For each relevant article, OpenAI creates a short, clear summary of the key points. The AI also evaluates whether the article provides actionable or critical information before passing it through.
- **Trains on your scope using Pinecone Vector Store (free) for context-aware filtering:** Your scope documents are embedded into a vector store so the AI can “remember” your environment. This context ensures the filtering process understands indirect or non-obvious connections to your tech stack.
- **Aggregates and sends only the most critical items to your work email:** The system compiles the highest-priority news items into one daily digest, so you can review key developments without wading through irrelevant stories.

## What you need to do:
1. Setup your OpenAI and Pinecone credentials in the workflow
2. Create and configure a Pinecone index (dimension 1536 recommended)
	1. Pinecone is free to setup.
	2. Setup Pinecone with a single free index.
	3. Use a namespace like: scope.
	4. Make sure the embedding model is the same for all of your Pinecone references.
3. Submit .txt scope documents listing your technologies, vendors, platforms, frameworks, and security products.
	1. .txt does not need to be structured.
	2. Add as much detail as possible.
4. Update AI prompts to accurately describe your company’s environment and priorities.


## 📊 Basic Information

- **Workflow ID:** 7017
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 1797
- **Downloads:** 179
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7017)

## 👤 Author

- **Name:** Will Carlson
- **Username:** @will-carlson

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **rssFeedRead** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **gmail** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×6)
- **if** (×3)
- **merge** 
- **noOp** (×3)
- **code** 
- **wait** (×2)
- **splitInBatches** (×2)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
