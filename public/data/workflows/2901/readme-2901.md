# Convert Notion to markdown and back to Notion

> This workflow converts Notion pages to markdown, and then converts that markdown back to Notion blocks. It will triple the content of the last updated page it finds. This is useless by itself, but you can copy-paste from this workflow to create your own.

## Prerequisites
A notion account with some pages or databases

## Setup instructions
Create a notion credential and share some pages as described here: https://docs.n8n.io/integrations/builtin/credentials/notion/

## How it works
- The HTTP Request gets notion child blocks from a page, because the default n8n block only gets plain text and no links.
- The first code block converts it to markdown.
- The second code block converts it back to Notion blocks
- The last HTTP block appends everything to the original Notion page, essentially duplicating it for the purpose of demoing the script.

I hope in the future we get official n8n blocks that extract markdown, or use markdown to write to Notion. There is community block that also does this, but this template is easier: you can simply copy-paste the blocks from this workflow.


## 📊 Basic Information

- **Workflow ID:** 2901
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3765
- **Downloads:** 376
- **Created:** 2025/2/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2901)

## 👤 Author

- **Name:** Anton Vanhoucke
- **Username:** @antonvh

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **notionTrigger** 
- **notion** 
- **code** (×3)
- **splitOut** 
- **httpRequest** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
