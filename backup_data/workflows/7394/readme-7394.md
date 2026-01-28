# Automate GitHub trending data collection with FireCrawl, GPT and Supabase

> ## GitHub Trending to Supabase (Daily, Weekly, Monthly)

## Who is this for?

This workflow is for developers, researchers, founders, and data analysts who want a **historical dataset** of GitHub Trending repositories without manual scraping. It’s ideal for building dashboards, newsletters, or trend analytics on top of a clean Supabase table.

## What problem is this workflow solving?

Checking GitHub Trending by hand (daily/weekly/monthly) is repetitive and error-prone. This workflow **automates collection, parsing, and storage** so you can reliably track changes over time and query them from Supabase.

## What this workflow does

* Scrapes **GitHub Trending** across **Daily**, **Weekly**, and **Monthly** timeframes using **FireCrawl**.
* Extracts per-project fields: `name`, `url`, `description`, `language`, `stars`.
* Adds a `type` dimension (`daily` / `weekly` / `monthly`) to each row.
* Inserts structured results into a **Supabase** table for long-term storage.

## Setup

1. Ensure you have an n8n instance (Cloud or self-hosted).
2. Create credentials:

   * **FireCrawl API** credential (no hardcoded keys in nodes).
   * **Supabase** credential (URL + Service Role / Insert-capable key).
3. Prepare a Supabase table (example):

   ```sql
	CREATE TABLE public.githubtrending (
	id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
	created_at timestamp with time zone NOT NULL DEFAULT now(),
	data_date date DEFAULT now(),
	url text,
	project_id text,
	project_desc text,
	code_language text,
	stars bigint DEFAULT '0'::bigint,
	type text,
	CONSTRAINT githubtrending_pkey PRIMARY KEY (id)
	);
   ```
4. Import this workflow JSON into n8n.
5. Run once to validate, then schedule (e.g., daily at 08:00).


## 📊 Basic Information

- **Workflow ID:** 7394
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 416
- **Downloads:** 41
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7394)

## 👤 Author

- **Name:** Cai Yongji
- **Username:** @caiyongji

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **supabaseTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** (×3)
- **@mendable/n8n-nodes-firecrawl.firecrawl** 
- **stickyNote** 
- **set** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
