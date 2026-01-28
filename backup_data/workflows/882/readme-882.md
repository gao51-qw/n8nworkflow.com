# Store the output of a phantom in Airtable

> This workflow allows you to store the output of a phantom in Airtable. This workflow uses the LinkedIn Profile Scraper phantom. Configure and launch this phantom from your Phantombuster account before executing the workflow.

![workflow-screenshot](fileId:375)

The workflow uses the following node:

**Phantombuster node:** The Phantombuster node gets the output of the LinkedIn Profile Scraper phantom that ran earlier. You can select a different phantom from the ***Agent*** dropdown list, but make sure to configure the workflow accordingly.

**Set node:** Using the Set node we are setting the data for the workflow. The data that we set in this node will be used by the next nodes in the workflow. Based on your use-case, you can modify the node.

**Airtable node:** The Airtable node allows us to append the data in an Airtable. Based on your use-case you can replace this node with any other node.

Instead of storing the data in Airtable, you can store the data in a database or Google Sheet, or send it as an email using the Send Email node, Gmail node, or Microsoft Outlook node.

## 📊 Basic Information

- **Workflow ID:** 882
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1997
- **Downloads:** 199
- **Created:** 2021/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/882)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **phantombuster** 
- **set** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
