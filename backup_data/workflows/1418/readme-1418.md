# Create an RSS feed based on a website's content

> This workflow parses content from a website (for this example, [Baserow's release page](https://baserow.io/blog/category/release)) and creates an RSS feed based on the extracted data.

## Prerequisites

- Some familiarity with HTML and CSS selectors

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow when new content (a new Baserow release) is published on a website.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required URLs and links for the RSS feed.
- [HTTP Request node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httprequest) fetches data from a specified website page.
- [HTML Extract nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.htmlextract/) extract the posts and their fields (such as date, title, description, and link) from the website.
- [Item Lists node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.itemlists/) iterates over each post on the page.
- [Date & Time node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.datetime/) converts the date of the post to a different format.
- [Function Item node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.functionitem/) creates RSS items for each post.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) creates the response code for the RSS feed.
- [Respond to Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.respondtowebhook/) returns the RSS feed in response to the Webhook node.

The result of this workflow would look like this:
![image.png](fileId:600)

## 📊 Basic Information

- **Workflow ID:** 1418
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 42079
- **Downloads:** 4207
- **Created:** 2022/1/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1418)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **itemLists** 
- **htmlExtract** (×2)
- **httpRequest** 
- **set** (×2)
- **dateTime** 
- **functionItem** 
- **webhook** 
- **respondToWebhook** 
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
