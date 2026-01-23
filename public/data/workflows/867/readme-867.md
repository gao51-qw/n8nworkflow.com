# Create, add an attachment, and send a draft using Microsoft Outlook

> This workflow allows you to create, add an attachment, and send a draft using the Microsoft Outlook node.

![workflow-screenshot](fileId:364)

**Microsoft Outlook node:** This node creates a draft message with HTML content. You can either set the content as Text or HTML. You can also add the recipients to the draft in this node.

**HTTP Request node:** This node fetches the logo of n8n from a URL and returns the binary data. You might want to fetch files from your machine or another email or a database. You can replace this node with the relevant node.

**Microsoft Outlook1 node:** This node adds the attachment that we receive from the previous node to the draft message that we created.

**Microsoft Outlook2 node:** This node sends the draft message to a recipient. Since we didn't mention the recipient in the Microsoft Outlook node, we add the recipient in this node. You can also enter multiple recipients.

## 📊 Basic Information

- **Workflow ID:** 867
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 10262
- **Downloads:** 1026
- **Created:** 2020/12/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/867)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **microsoftOutlook** (×3)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
