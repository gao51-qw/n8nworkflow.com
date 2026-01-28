# Manage newsletter signups in Baserow

> This is the workflow that I presented at the April 9, 2021 n8n Meetup.

This workflow uses [Baserow.io](https://baserow.io) to store registration information collected using n8n as both the web server and the data processor.

To get this workflow working properly, you will either need to run it on n8n.cloud or using the on premise version with people having the ability to connect to n8n externally.

You will need an account on [Baserow.io](https://baserow.io) to store your subscriptions with a table with the following fields:

- GUID
- First Name
- Last Name
- Email
- Confirmed




## 📊 Basic Information

- **Workflow ID:** 1028
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1607
- **Downloads:** 160
- **Created:** 2021/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1028)

## 👤 Author

- **Name:** jason
- **Username:** @tephlon

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** (×3)
- **moveBinaryData** 
- **function** (×2)
- **webhook** (×3)
- **httpRequest** (×3)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
