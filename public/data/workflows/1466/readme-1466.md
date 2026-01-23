# Extract expenses from emails and add to Google Sheets

> This workflow will check a mailbox for new emails and if the Subject contains Expenses or Reciept it will send the attachment to Mindee for processing then it will update a Google sheet with the values.

To use this node you will need to set the Email Read node to use your mailboxes credentials and configure the Mindee and Google Sheets nodes to use your credentials.

## 📊 Basic Information

- **Workflow ID:** 1466
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 20251
- **Downloads:** 2025
- **Created:** 2022/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1466)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **if** 
- **set** (×2)
- **emailReadImap** 
- **mindee** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
