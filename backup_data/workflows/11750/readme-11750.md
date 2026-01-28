# Regional prospecting for registered companies in Germany

> # Regional Prospecting for registered Companies in Germany

Find and qualify registered companies in specific regions using Implisense Search API (Handelsregister). This API provides all officially registered companies in Germany (about 2,5 million).

**Input Parameters:**
- `query`: Search terms (e.g., "software OR it")
- `regionCode`: ZIP/postal code region (e.g., "de-10")
- `industryCode`: NACE industry code (e.g., "J62")
- `pageSize`: Max results (1-1000)

**Quality Levels:**
- **High:** Score ≥15 (active, website, full address)
- **Medium:** Score &lt;15

## How it works

Phase 1: Init
Phase 2: Search
Phase 3: Vetting

## Setup steps

### 1.  **Configure Credentials**: Set up RapidAPI API credentials
   - Create an account on RapidAPI  (free tier available)
   - Insert your RapidAPI x-rapidapi-key as password

### 2. Configure Search Parameters
see above.

### 3. Connect CRM/Database
After "Merge & Log Results" node, add:
- HTTP Request node for REST API
- Database node for direct insertion
- Or CRM-specific integration node

## 📊 Basic Information

- **Workflow ID:** 11750
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 68
- **Downloads:** 6
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11750)

## 👤 Author

- **Name:** as311
- **Username:** @implisense

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×4)
- **if** (×2)
- **set** (×5)
- **stickyNote** (×5)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
