# Enrich contact information with HubSpot and ClearBit

> This workflow enriches the information of a new contact that gets added to HubSpot.

![workflow-screenshot](fileId:554)

**HubSpot Trigger:** This node triggers the workflow when a new contact gets added to HubSpot.

**Get Contact:** This node fetches the information of the new contact.

**Clearbit:** This node returns the data of the person and the company associated with the email address.

**Update Contact:** This node will update the contact with the information returned by the Clearbit node. Based on your use case, you can select which fields you want to update.

## 📊 Basic Information

- **Workflow ID:** 1296
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 2406
- **Downloads:** 240
- **Created:** 2021/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1296)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **clearbit** 
- **hubspotTrigger** 
- **hubspot** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
