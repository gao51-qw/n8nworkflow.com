# Get comments from Facebook page

> **This workflow automates the collection of comments from posts on a Facebook Page.**  

Providing clean, structured data for analysis or further automation.

**What this workflow does**
- Fetches recent posts from a Facebook Page.
- Retrieves comments for each post.
- Outputs structured data of Comments and Posts for further use.

**Setup**
- Facebook Graph API: Connect your Access Token with the required permissions (pages_read_engagement, pages_read_user_content).
- Workflow: Set the Page ID and the number of posts to fetch in the "Set Number of Latest Posts to Fetch" node.


## 📊 Basic Information

- **Workflow ID:** 2533
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 12340
- **Downloads:** 1234
- **Created:** 2024/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2533)

## 👤 Author

- **Name:** Sira Ekabut
- **Username:** @siraekabut

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** (×2)
- **filter** 
- **set** (×2)
- **facebookGraphApi** (×2)
- **merge** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
