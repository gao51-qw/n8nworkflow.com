# Automatically add customers from Pipedrive to Stripe

> This workflow automatically adds closed deals from Pipedrive as new customers into Stripe.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/) 
- Stripe account and [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/)

## How it works
1. Pipedrive trigger node starts the workflow when a deal gets updated in Pipedrive.
2. IF node checks that the current won time is not equal to the previuos one in the deal and continues the workflow if it's true.
3. Pipedrive node extracts the organization's details to pass it further.
4. HTTP Request node searches for the same organization's details within Stripe.
5. If a customer doesn't exist within Stripe, Merge node passes a new customer details to Stripe.
6. Stripe node creates a new customer.



## 📊 Basic Information

- **Workflow ID:** 1775
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1035
- **Downloads:** 103
- **Created:** 2022/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1775)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **if** (×2)
- **pipedriveTrigger** 
- **pipedrive** 
- **httpRequest** 
- **merge** 
- **stripe** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
