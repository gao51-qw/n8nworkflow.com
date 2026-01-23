# Create a Onfleet task for a new added row in Airtable

> **Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template automatically creates an Onfleet delivery task when you add in a new row in Airtable. 

**Configurations**

- Update the Airtable trigger node with your own Airtable **Base ID**, and the **table name** accordingly
- You will also need to configure how often this Airtable trigger polls, the default in this template is every **10 minutes**
- Update the Onfleet node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- You can easily change how the Onfleet task is created by mapping to additional data in the Airtable

Airtable format should adhere to Onfleet's task import functionalities, for more details please visit the [Onfleet Support Center](https://support.onfleet.com/hc/en-us/articles/360023910131#h_4667f289-d298-49bc-9faa-00898a922dab).


## 📊 Basic Information

- **Workflow ID:** 1524
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 740
- **Downloads:** 74
- **Created:** 2022/3/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1524)

## 👤 Author

- **Name:** James Li
- **Username:** @ilsemaj

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **airtableTrigger** 
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
