# Sync payment and customer data between Stripe and Pipedrive

> This workflow combines customers' details with their payment data and passes the input to Pipedrive as a note to the organization.

## Prerequisites

- Stripe account and [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/)
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)

## How it works
1. Cron node triggers the workflow every day at 8 a.m.
2. HTTP Request node searches for payments in Stripe.
3. The Item Lists node creates separate items from a list of payment data.
4. Merge node takes in the payment data as an input 1.
5. Stripe node gets all the customers data.
6. Set node renames customer-related data fields and keeps only needed fields.
7. Merge node takes in the customer data as an input 2.
8. Merge node combines the payment data with the customers one.
9. Pipedrive node searches for the organization and creates a note with payment data.

## 📊 Basic Information

- **Workflow ID:** 1776
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1878
- **Downloads:** 187
- **Created:** 2022/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1776)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stripe** 
- **set** 
- **merge** (×2)
- **pipedrive** (×2)
- **functionItem** (×2)
- **itemLists** 
- **httpRequest** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
