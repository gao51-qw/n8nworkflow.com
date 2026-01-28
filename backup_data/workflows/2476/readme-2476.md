# Convert URL HTML to markdown format and get page links

> ## Use Case
Transform web pages into AI-friendly markdown format:
- You need to process webpage content for LLM analysis
- You want to extract both content and links from web pages
- You need clean, formatted text without HTML markup
- You want to respect API rate limits while crawling pages

## What this Workflow Does
The workflow uses Firecrawl.dev API to process webpages:
- Converts HTML content to markdown format
- Extracts all links from each webpage
- Handles API rate limiting automatically
- Processes URLs in batches from your database

## Setup
1. Create a [Firecrawl.dev](https://www.firecrawl.dev/) account and get your API key
2. Add your Firecrawl API key to the HTTP Request node's Authorization header
3. Connect your URL database to the input node (column name must be "Page") or edit the array in `Example fields from data source`
4. Configure your preferred output database connection

## How to Adjust it to Your Needs
- Modify input source to pull URLs from different databases
- Adjust rate limiting parameters if needed
- Customize output format for your specific use case


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)


## 📊 Basic Information

- **Workflow ID:** 2476
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 4621
- **Downloads:** 462
- **Created:** 2024/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2476)

## 👤 Author

- **Name:** simonscrapes
- **Username:** @simonscrapes

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **wait** 
- **stickyNote** (×7)
- **noOp** (×2)
- **set** (×2)
- **limit** 
- **splitInBatches** 
- **splitOut** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
