# Create an Onfleet task when a file in Google Drive is updated

> **Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template **listens to a Google Drive update event** and **creates an Onfleet delivery task**. You can easily change which Onfleet entity to interact with.

**Configurations**

- Connect to Google Drive with your own Google credentials
- Specify the `Poll Times` and `File URL or ID` to your own preference, the poll time determines the **frequency** of this check while the file URL/ID specifies which file to **monitor**
- Update the Onfleet node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started

## 📊 Basic Information

- **Workflow ID:** 1547
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 721
- **Downloads:** 72
- **Created:** 2022/3/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1547)

## 👤 Author

- **Name:** James Li
- **Username:** @ilsemaj

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **onfleet** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
