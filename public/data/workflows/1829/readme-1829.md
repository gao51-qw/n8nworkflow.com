# Create Mautic contact on a new Shopify customer

> This workflow creates a new contact in Mautic when a new customer is created in Shopify. By default, the workflow will fill the first name, last name, and email address. You can add any other fields you require.

# Prerequisites

- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/).
- Mautic account and [Mautic credentials](https://docs.n8n.io/integrations/builtin/credentials/mautic/).

# How it works

1. Triggers on a new customer in Shopify.
2. Sends the required data to Mautic to create a new contact.

## 📊 Basic Information

- **Workflow ID:** 1829
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 1056
- **Downloads:** 105
- **Created:** 2022/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1829)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **shopifyTrigger** 
- **mautic** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
