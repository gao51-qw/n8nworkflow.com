# Add new products to Stripe when product added to Pipedrive

> This workflow adds a new product in Stripe whenever a new product has been added to Pipedrive.

## Prerequisites

- Stripe account and [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/)
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/) 

## How it works
1. Pipedrive trigger node starts the workflow when a new product is added.
2. HTTP Request node creates a new product in Stripe using previuos input.
3. Merge node combines data of both Pipedrive and Stripe inputs. The output will contain the data of Pipedrive input merged with the data of Stripe input. The merge occurs based on the index of the items.
4. The Item Lists node splits prices to separate items.
5. HTTP Request node creates price records in Stripe.

## 📊 Basic Information

- **Workflow ID:** 1777
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1109
- **Downloads:** 110
- **Created:** 2022/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1777)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **pipedriveTrigger** 
- **functionItem** 
- **httpRequest** (×2)
- **merge** 
- **set** 
- **itemLists** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
