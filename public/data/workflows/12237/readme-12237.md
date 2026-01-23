# Generate stale page reports for Confluence spaces with REST API v1 and v2

> ## Report stale pages in Confluence

This workflow generates a **stale page report** for Confluence spaces, helping teams keep documentation accurate, relevant, and actively maintained.

### What it does
- Identifies Confluence pages **not updated within a defined cutoff period** (in days).
- Supports both:
  - **Confluence REST API v1 (CQL search)**, and
  - **Confluence REST API v2** (spaces + pages).
- Produces a clean, aggregated report including:
  - Page title  
  - Page status  
  - Last updated date  
  - Days overdue  
  - Direct page URL
- Ideal for **content audits**, **documentation hygiene**, and **ownership reviews**.

### How it works
- The workflow starts via a **Manual Trigger**.
- A **Set Variables** node defines:
  - Atlassian domain
  - Space keys to scan
  - Cutoff age (in days)
  - API version toggle (v1 or v2)
- Two execution paths are supported:
  - **API v1**: Uses CQL search to fetch outdated pages directly.
  - **API v2**: Fetches spaces → pages → filters pages by last modified date.
- All pages are normalized into a consistent format.
- Results are **aggregated into a single `stalePages` array** for easy reuse in downstream steps.

### Setup
- Configure the **Set Variables** node:
  - `atlassianDomain` → your Confluence base URL  
  - `spaceKeys` → comma-separated space keys (e.g. `DOCS, ENG`)  
  - `cutoffDateDays` → age threshold (e.g. `90`)  
  - `apiV2` → `true` (recommended) or `false` for legacy CQL
- Create an **HTTP Basic Auth credential**:
  - Atlassian email + API token
  - Assign it to all HTTP Request nodes
- Optional:
  - Extend the workflow with email notifications, Slack alerts, or CSV exports.

### Notes
- **API v2 is recommended** and future-proof; API v1 is included for legacy compatibility.
- Pagination limits are set to **50 items per request** — increase if your spaces contain many pages.
- If no results are returned:
  - Verify space keys
  - Check cutoff logic
  - Confirm API permissions for the token
- Tested against **Confluence Cloud**.


## 📊 Basic Information

- **Workflow ID:** 12237
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 4
- **Downloads:** 0
- **Created:** 2025/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12237)

## 👤 Author

- **Name:** Alexander Schnabl
- **Username:** @alexschnabl

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **httpRequest** (×3)
- **stickyNote** (×5)
- **filter** 
- **switch** 
- **splitOut** (×2)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
