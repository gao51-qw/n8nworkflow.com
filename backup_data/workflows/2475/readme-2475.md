# Get Google search results (SERPs) for SEO research

> ## Use Case
Research search engine rankings for SEO analysis:
- You need to track keyword rankings for your website
- You want to analyze competitor positions in search results
- You need data for SEO competition analysis
- You want to monitor SERP changes over time

## What this Workflow Does
The workflow uses ScrapingRobot API to fetch Google search results:
- Retrieves SERP data for your target keywords
- Captures URL rankings and page titles
- Processes up to 5000 searches with free account
- Organizes results for SEO analysis

## Setup
1. Create a [ScrapingRobot account](https://billing.scrapingrobot.com/aff.php?aff=2) and get your API key
2. Add your ScrapingRobot API key to the HTTP Request node's `GET SERP` token parameter
3. Either connect your keyword database (column name "Keyword") or use the "Set Keywords" node
4. Configure your preferred output database connection

## How to Adjust it to Your Needs
- Modify keyword source to pull from different databases
- Adjust the number of SERP results to capture
- Customize output format for your reporting needs


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 📊 Basic Information

- **Workflow ID:** 2475
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 14401
- **Downloads:** 1440
- **Created:** 2024/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2475)

## 👤 Author

- **Name:** simonscrapes
- **Username:** @simonscrapes

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **splitOut** (×2)
- **filter** 
- **code** 
- **httpRequest** 
- **stickyNote** (×8)
- **noOp** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
