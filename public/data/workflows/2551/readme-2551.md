# Add new clients from Notion to Clockify

> # Who is this template for?

This workflow template is ideal for anyone using Notion for project management and Clockify for time tracking. The workflow automatically adds all new clients from Notion to Clockify.

## How it works
1. Scans your Notion client table every minute for new clients
2. Adds all new clients to your Clockify workspace

## Set up Steps
1. Set up the Notion trigger node by adding your Notion API credentials as described in the [n8n Notion docs](https://docs.n8n.io/integrations/builtin/credentials/notion/).
2. Go to your Notion clients page/table and give your integration permission to acces the data on this page.  
3. Go back to n8n and select your Notion client page in the Notion trigger node.
3. Set up the Clockify node by adding your Clockify API credentials as described in the [n8n Clockify docs](https://docs.n8n.io/integrations/builtin/credentials/clockify/), select your Clockify workspace and map your client name column from Notion to the Clockify "Client Name" field.

## 📊 Basic Information

- **Workflow ID:** 2551
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 637
- **Downloads:** 63
- **Created:** 2024/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2551)

## 👤 Author

- **Name:** Manuel
- **Username:** @automate-everything

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **clockify** 
- **notionTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
