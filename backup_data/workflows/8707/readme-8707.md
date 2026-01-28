# From sitemap crawling to vector storage: Creating an efficient workflow for RAG

> **This template crawls a website from its sitemap, deduplicates URLs in Supabase, scrapes pages with Crawl4AI, cleans and validates the text, then stores content + metadata in a Supabase vector store using OpenAI embeddings. It’s a reliable, repeatable pipeline for building searchable knowledge bases, SEO research corpora, and RAG datasets.**
⸻
## **Good to know**
	•	Built-in de-duplication via a scrape_queue table (status: pending/completed/error).
	•	Resilient flow: waits, retries, and marks failed tasks.
	•	Costs depend on Crawl4AI usage and OpenAI embeddings.
	•	Replace any placeholders (API keys, tokens, URLs) before running.
	•	Respect website robots/ToS and applicable data laws when scraping.

## **How it works**
	1.	Sitemap fetch & parse — Load sitemap.xml, extract all URLs.
	2.	De-dupe — Normalize URLs, check Supabase scrape_queue; insert only new ones.
	3.	Scrape — Send URLs to Crawl4AI; poll task status until completed.
	4.	Clean & score — Remove boilerplate/markup, detect content type, compute quality metrics, extract metadata (title, domain, language, length).
	5.	Chunk & embed — Split text, create OpenAI embeddings.
	6.	Store — Upsert into Supabase vector store (documents) with metadata; update job status.
## **Requirements**
	•	Supabase (Postgres + Vector extension enabled)
	•	Crawl4AI API key (or header auth)
	•	OpenAI API key (for embeddings)
	•	n8n credentials set for HTTP, Postgres/Supabase
## **How to use**
	1.	Configure credentials (Supabase/Postgres, Crawl4AI, OpenAI).
	2.	(Optional) Run the provided SQL to create scrape_queue and documents.
	3.	Set your sitemap URL in the HTTP Request node.
	4.	Execute the workflow (manual trigger) and monitor Supabase statuses.
	5.	Query your documents table or vector store from your app/RAG stack.

## **Potential Use Cases**

This automation is ideal for:

- Market research teams collecting competitive data
- Content creators monitoring web trends
- SEO specialists tracking website content updates
- Analysts gathering structured data for insights
- Anyone needing reliable, structured web content for analysis

## **Need help customizing?**
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/mariela-ceo-founder/)


## 📊 Basic Information

- **Workflow ID:** 8707
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 787
- **Downloads:** 78
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8707)

## 👤 Author

- **Name:** Mariela Slavenova
- **Username:** @marielabg

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×3)
- **xml** 
- **splitOut** (×2)
- **splitInBatches** (×2)
- **wait** (×2)
- **if** (×4)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **set** (×2)
- **supabase** (×6)
- **code** (×6)
- **stickyNote** (×5)
- **postgres** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
