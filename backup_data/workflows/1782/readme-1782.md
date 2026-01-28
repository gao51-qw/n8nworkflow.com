# Enrich new accounts in Pipedrive using Datagma API

> This workflow enriches new accounts in Pipedrive using Datagma API by adding data about ICP (ideal customer profile). Instead of Pipedrive, you can use any other CRM. In this example, ideal buyers are heads of sales/business development.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)

## How it works
1. Pipedrive trigger node starts the workflow when a new company is created.
2. HTTP Request node queries data from Datagma.
3. Pipedrive node updates Pipedrive contact with new data from Datagma.
4. The Item Lists node simplifies returned data from Datagma that contain lists (arrays), enabling you to easily modify the structure for further processing without the need to use Function nodes and write custom JavaScript.
5. IF node identifies if the lead corresponds ICP.
6. HTTP Request node searches for emails in Datagma.
7. Set node prepares data for further merging.
8. Merge node combines data from multiple streams.
9. Pipedrive node adds a new person in Pipedrive.


## 📊 Basic Information

- **Workflow ID:** 1782
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 839
- **Downloads:** 83
- **Created:** 2022/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1782)

## 👤 Author

- **Name:** Lucas Perret
- **Username:** @lempire

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **itemLists** 
- **pipedrive** (×2)
- **httpRequest** (×2)
- **merge** 
- **if** 
- **set** 
- **pipedriveTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
