# Add Netlify form submissions to Airtable

> This workflow demonstrates how to use the Netlify Trigger node to capture form submissions and add it Airtable. You can reuse the workflow to add the data to another similar database by replacing the Airtable node with the corresponding node.

![workflow-screenshot](fileId:544)

**Netlify Trigger node:** This node triggers the workflow when a new form is submitted. Select your site from the ***Site Name/ID*** dropdown list and the form from the ***Form ID*** dropdown list.

**Set node:** This node extract the required data from the Netlify Trigger node. In this example, we only want to add the Name, Email, and Role of the user.

**Airtable node:** This node appends the data to Airtable. If you want the data to Google Sheets or a database, replace this node with the corresponding node.

## 📊 Basic Information

- **Workflow ID:** 1253
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 1001
- **Downloads:** 100
- **Created:** 2021/10/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1253)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **netlifyTrigger** 
- **set** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
