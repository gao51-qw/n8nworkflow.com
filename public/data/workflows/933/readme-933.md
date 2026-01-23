# Add subscribed customers to Airtable automatically

> This workflow allows you to receive updates when a customer is subscribed to a list in GetResponse and add them to a base in Airtable.

![workflow-screenshot](fileId:409)

**GetResponse Trigger node:** This node triggers the workflow when a customer is added to a list. Based on your use-case, you can select a different event.

**Set node:** The Set node is uded here to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. For this workflow, we set the name and email of the customer.

**Airtable node:** The data from the **Set node** is added to a table in Airtable. Based on your use-case, you may want to add the infromation about the customer to a CRM instead of a table in Airtable. Replace the Airtable node with the node of the CRM where you want to add the data.

## 📊 Basic Information

- **Workflow ID:** 933
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 586
- **Downloads:** 58
- **Created:** 2021/2/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/933)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **airtable** 
- **set** 
- **getResponseTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
