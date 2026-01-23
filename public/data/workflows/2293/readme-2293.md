# Sync blog posts from Notion to Webflow

> ## Who is this for?
This template is for everyone who manages their blog entries in Notion and want to have an easy way to transform them to Webflow.

## What this workflow does
This workflow syncs your blog posts saved in a Notion Database once a day to Webflow.
- Sync Notion properties, rich text and cover image with your collection.
- Works with most elements: H1, H2, H3, normal text, bold text, italic text, links, quotes, bulleted lists, numbered lists, and images (under 4MB).

## Set up steps
- Connect your accounts.
- Add a "slug" field in Notion.
- Add a "Sync to Webflow?" checkbox in Notion.
- Run a test and map your collection data.

Whenever the workflow runs, all the checked posts will be updated in the Webflow collection, whether it's a new post or an existing one.




## 📊 Basic Information

- **Workflow ID:** 2293
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 3180
- **Downloads:** 318
- **Created:** 2024/6/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2293)

## 👤 Author

- **Name:** Giovanni Ruggieri
- **Username:** @gioru

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **stickyNote** (×5)
- **notion** (×6)
- **set** 
- **merge** (×3)
- **noOp** (×2)
- **filter** 
- **splitInBatches** 
- **webflow** (×3)
- **code** (×4)
- **slack** 
- **compareDatasets** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
