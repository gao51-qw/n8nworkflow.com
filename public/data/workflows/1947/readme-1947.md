# Sql to XML export with XSL template formatting

> This workflow demonstrates how to export SQL to XML and present the data nicely formatted using an XSL Template.

The upper part of the workflow starts with a webhook. Then it gets several random records from the SQL table and converts them into an XML string. Then a final XML file is created that contains a link to the XML Stylesheet file.

The lower part of the workflow contains a helper Webhook that reads an XSL Template from the GitHub gist and serves it back via the Respond to Webhook node. This is required to comply with the CORS rules of modern browsers. These rules dictate that both XML data and a stylesheet file should come from the same domain.

## 📊 Basic Information

- **Workflow ID:** 1947
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 2088
- **Downloads:** 208
- **Created:** 2023/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1947)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **webhook** (×2)
- **mySql** 
- **set** 
- **itemLists** 
- **xml** 
- **html** 
- **moveBinaryData** 
- **respondToWebhook** (×2)
- **httpRequest** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
