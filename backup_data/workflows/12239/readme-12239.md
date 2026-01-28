# Audit Confluence space permissions and public links for compliance

> ## Audit permissions in Confluence to ensure compliance

This workflow scans selected **Confluence spaces** for **public exposure risks**, helping teams identify unintended access and potential data leakage.

### What it does
- Detects public exposure risks in Confluence spaces, including:
  - **Anonymous access permissions** at space level
  - Whether **public links are enabled**
  - Pages with **active or blocked public links**
- Uses **Confluence REST API v2** together with the **Atlassian GraphQL API**.
- Produces a consolidated per-space report containing:
  - Anonymous access permissions
  - Public link status
  - Pages with public links (title, status, URL, enabled-by user)
- Ideal for **security audits**, **compliance reviews**, and **data leakage prevention**.

### How it works
- The workflow starts via a **Manual Trigger**.
- A **Set Variables** node defines:
  - `atlassianDomain`
  - `spaceKeys` (comma-separated)
- **Get Spaces (v2)** retrieves matching spaces and splits them into individual items.
- For each space, three **GraphQL queries** run in parallel:
  - Retrieve **anonymous access permissions**
  - Check **public link feature status** at space level
  - Fetch **pages with public links** (ON / BLOCKED)
- Results from all three queries are merged and normalized into a single per-space report.

### Setup
- Configure the **Set Variables** node:
  - `atlassianDomain` → your Confluence base URL  
  - `spaceKeys` → comma-separated list (e.g. `ENG, HR`)
- Create an **HTTP Basic Auth** credential for Atlassian:
  - Email + API token
  - Assign it to all HTTP and GraphQL nodes
- Ensure the credential has permission to:
  - Read spaces
  - Read space permissions
  - Access GraphQL endpoints
- Execute the workflow manually to generate the report.

### Notes
- Uses the **Atlassian GraphQL API**, which exposes permission and public-link data not fully available via REST.
- Pages with blocked public links are included for visibility.
- The GraphQL page query fetches up to **250 pages per space**.

## 📊 Basic Information

- **Workflow ID:** 12239
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 7
- **Downloads:** 0
- **Created:** 2025/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12239)

## 👤 Author

- **Name:** Alexander Schnabl
- **Username:** @alexschnabl

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×5)
- **graphql** (×3)
- **splitOut** 
- **stickyNote** (×5)
- **merge** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
