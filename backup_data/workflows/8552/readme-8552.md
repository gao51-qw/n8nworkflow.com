# Orchestrate web crawls with Scrapyd and automated data enrichment

> ## How it works
This workflow runs a spider job in the background via Scrapyd, using a YAML config that defines selectors and parsing rules. When triggered, it schedules the spider with parameters (query, project ID, page limits, etc.). The workflow polls Scrapyd until the job finishes. Once complete, it fetches the output items, enriches them (parse JSONL, deduplicate, extract ID/part number/make/model/part name, normalize price), sorts results, and returns structured JSON. Optional debug outputs such as logs, HTML dumps, and screenshots are also collected.

## How to use
Use the manual trigger for testing, or replace it with webhook, schedule, or other triggers. Adjust the runtime parameters (q, project_id, pages, etc.) directly in the workflow when running. The background spider config (YAML and spider code) must be updated separately — this workflow only orchestrates and enriches results, it does not define scraping logic.

## Requirements

- Scrapyd service for job scheduling & status tracking

- A deployed spider with a valid YAML config (adjust selectors there)
 
- JSON Lines output (items.jl) from the spider
 
- Endpoints for optional artifacts (logs, HTML, screenshots)
 
- n8n with HTTP, Wait, Code, and Aggregate nodes enabled

## Customising this workflow

- Update the YAML config if the target website structure changes

- Modify the enrichment code to extract different fields (e.g., categories, ratings)

- Adjust deduplication (cheapest, newest, or other logic)

- Toggle debug retrieval depending on performance/storage needs

- Extend webhook response to integrate with databases, APIs, or downstream workflows

## 📊 Basic Information

- **Workflow ID:** 8552
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 392
- **Downloads:** 39
- **Created:** 2025/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8552)

## 👤 Author

- **Name:** 21CEL
- **Username:** @persiangru

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×8)
- **code** (×2)
- **if** (×2)
- **wait** 
- **splitInBatches** (×2)
- **aggregate** (×2)
- **splitOut** (×2)
- **respondToWebhook** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
