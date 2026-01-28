# Generate security vulnerability reports with Google Dorks, SerpAPI and PDF4me

> ## Google Dorks with SerpAPI

How it Works:
- Accepts a domain from a web form
- Generates a list of Google dorks targeting that domain
- Scrapes Google search results for each dork using SerpAPI
- Filters out junk links (Google internal, non-http)
- Formats valid results as a markdown report
- Converts the report to PDF using PDF4me
- Emails the report to your inbox with Gmail

----

# How To Use:
**Step 1.** Double Click the SerpAPI node and configure the API key
**Step 2.** Double Click each PDF4me node and configure the API key
**Step 3.** (Optional) Double Click and configure your OAuth credentials and gmail settings on the Gmail node.
**Step 4.** Click 'Execute Workflow' and wait for your report to be generated.

## 📊 Basic Information

- **Workflow ID:** 11195
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 200
- **Downloads:** 20
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11195)

## 👤 Author

- **Name:** Sean Birmingham
- **Username:** @knute

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **formTrigger** 
- **code** (×4)
- **splitInBatches** 
- **wait** 
- **if** 
- **n8n-nodes-serpapi.serpApi** 
- **n8n-nodes-pdf4me.PDF4me** (×2)
- **stickyNote** (×4)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
