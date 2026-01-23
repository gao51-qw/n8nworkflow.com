# Send a message with an inline embedded image with Gmail

> The built-in Gmail node doesn't yet support embedding images within the body of the email, but you can pull this off using the HTTP node, and this template shows you how.

## Requirements
- A Gmail account

## How it works
The workflow downloads an image, converts it into the format that the Gmail API expects (base64), packages it into a multipart MIME email and uses the HTTP node to send it.


## 📊 Basic Information

- **Workflow ID:** 2280
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3700
- **Downloads:** 370
- **Created:** 2024/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2280)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **httpRequest** (×2)
- **extractFromFile** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
