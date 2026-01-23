# Create Linear tickets from Notion content

> This workflow allows you to define multiple tickets/issues in a Notion page, then easily import them into Linear. 

### Why is it useful?

We use this workflow internally at n8n for collaboration between Product and Engineering teams:

- Engineering needs all work to be in our ticketing system (Linear) in order to keep track of it
- Product prefers to review features in Notion. This is because it and can be used to dump all your thoughts and organise them into themes afterwards, plus it better supports rich content like videos

### Features

- Supports rich formatting (bullets, images, videos, links, etc.)
- Keeps links between the Notion and Linear version, in case you need to refer back
- Allows you to assign each issue to a team member in the Notion definition
- Avoids importing the same issues twice if you run it again on the same page (meaning you can issues incrementally)

You can see an example of the required format of the Notion page [here](https://www.notion.so/Template-for-importing-Notion-blocks-as-issues-in-Linear-8848dd09892341969faedd1313eea586?pvs=21).

## 📊 Basic Information

- **Workflow ID:** 2138
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 2013
- **Downloads:** 201
- **Created:** 2024/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2138)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **splitInBatches** 
- **graphql** (×2)
- **notion** (×2)
- **aggregate** 
- **set** (×3)
- **linear** 
- **code** (×2)
- **if** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×5)
- **filter** 
- **formTrigger** 
- **respondToWebhook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
