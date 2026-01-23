# Sync Stripe charges to HubSpot contacts

> This workflow pushes Stripe charges to HubSpot contacts. It uses the Stripe API to get all charges and the HubSpot API to update the contacts. The workflow will create a new HubSpot property to store the total amount charged. If the property already exists, it will update the property.

## Prerequisites

- [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/).
- [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/).

## How it works

1. On a schedule, check if the property exists in HubSpot. If it doesn't exist, create it. The default schedule is once a day at midnight.
2. Once property is acertained, the first Stripe node gets all charges.
3. Once the charges are returned, the second Stripe node gets extra customer information.
4. Once the customer information is returned, `Merge data` node will merge the customer information with the charges so that the next node `Aggregate totals` can calculate the total amount charged per contact.
5. Once we have the total amount charged per contact, the `Create or update customer` node will create a new HubSpot contact if it doesn't exist or update the contact if it does exist with the total amount charged.

## 📊 Basic Information

- **Workflow ID:** 1855
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 1845
- **Downloads:** 184
- **Created:** 2023/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1855)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **if** (×3)
- **stripe** (×2)
- **scheduleTrigger** 
- **itemLists** (×2)
- **code** 
- **hubspot** 
- **merge** 
- **stickyNote** (×9)
- **httpRequest** (×2)
- **set** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
