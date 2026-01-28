# Subscribe to new releases of a Github repository via Gmail

> 
This is a very simple workflow that lets you subscribe to any github repository for the latest release (using n8n as example).

## How it works: 
- daily poll to Github repository for release for latest (stable) version of n8n
- parses the content to HTML
- sends a gmail

## Setup steps:
- add your gmail credentials (or use other email node of choice)
- change the url to the right Github repository you want to check regularly 
- change the `To` email address to the email that you want to receive the updates for

## Feedback & Questions

If you have any questions or feedback about this workflow - Feel free to get in touch at [ria@n8n.io](mailto:ria@n8n.io)

## 📊 Basic Information

- **Workflow ID:** 2278
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1044
- **Downloads:** 104
- **Created:** 2024/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2278)

## 👤 Author

- **Name:** Ria
- **Username:** @riascho

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **gmail** 
- **httpRequest** 
- **splitOut** 
- **markdown** 
- **scheduleTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
