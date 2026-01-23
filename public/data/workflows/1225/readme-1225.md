# Export new deals from HubSpot to Slack and Airtable

> This workflow is triggered when a new deal is created in HubSpot. Then, it processes the deal based on its value and stage.

The first branching follows three cases:

- If the deal is closed and won, a message is sent in a Slack channel, so that the whole team can celebrate the success.
- If a presentation has been scheduled for the deal, then a Google Slides presentation template is created.
- If the deal is closed and lost, the deal’s details are added to an Airtable table. From here, you can analyze the data to get insights into what and why certain deals don’t get closed.

The second branching follows two cases:

- If the deal is for a new business and has a value above 500, a high-priority ticket assigned to an experienced team member is created in HubSpot
- If the deal is for an existing business and has a value below 500, a low-priority ticket is created.

![workflow-screenshot](fileId:536)

## 📊 Basic Information

- **Workflow ID:** 1225
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1817
- **Downloads:** 181
- **Created:** 2021/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1225)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **set** 
- **switch** 
- **if** 
- **hubspot** (×3)
- **slack** 
- **airtable** 
- **googleSlides** 
- **hubspotTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
