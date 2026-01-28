# Capture leads in HubSpot from Typeform

> This workflow is triggered when a typeform is submitted, then it saves the sender's information into HubSpot as a new contact.

![workflow-screenshot](fileId:535)

**Typeform Trigger**: triggers the workflow when a typeform is submitted.

**Set**: sets the fields for the values from Typeform.

**HubSpot 1**: creates a new contact with information from Typeform.

**IF**: filters contacts who expressed their interest in business services.

**HubSpot 2**: updates the contact's stage to opportunity.

**Gmail**: sends an email to the opportunity contacts with informational material.

**NoOp**: takes no action for contacts who are not interested. 

## 📊 Basic Information

- **Workflow ID:** 1223
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 4555
- **Downloads:** 455
- **Created:** 2021/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1223)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **hubspot** (×2)
- **noOp** 
- **set** 
- **typeformTrigger** 
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
