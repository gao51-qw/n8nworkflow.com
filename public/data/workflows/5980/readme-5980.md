# Security reconnaissance with Google Dorks, Parsera scraping, and Gmail reports

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it Works:
1. - Accepts a domain from a web form
2. - Generates a list of Google dorks targeting that domain
3. - Scrapes Google search results for each dork 
4. - Filters out junk links (Google internal, non-http)
5. - Formats valid results as a markdown report
6. - Emails the report to your inbox

## For this workflow you will need to configure credentials in n8n as well as create a Parsera.io agent:

### 1. AI Scraper Account
- Create an account for: https://app.parsera.io
- Create an agent named "Google" and use the URL https://google.com
- Copy/Paste your Parsera.io API key to the 'Scrape with agent' node in the n8n workflow

### 2. Gmail OAuth2
- Go to Google Cloud Console
- Enable Gmail API
- Create OAuth2 credentials
- Copy/Paste the Gmail API key to the Gmail node in the n8n workflow






## 📊 Basic Information

- **Workflow ID:** 5980
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 756
- **Downloads:** 75
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5980)

## 👤 Author

- **Name:** Sean Birmingham
- **Username:** @knute

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **formTrigger** 
- **splitInBatches** 
- **code** (×3)
- **n8n-nodes-aiscraper.aiScraper** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
