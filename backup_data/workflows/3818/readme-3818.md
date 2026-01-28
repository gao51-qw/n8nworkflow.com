# Sync new Shopify customers to Odoo contacts

> This workflow functions by integrating Shopify customers into Odoo customers.

1. Trigger: Shopify – New Customer Created
   The workflow starts when a new customer is added in Shopify.

2. Action: Odoo – Search Contact by Email
   It checks in Odoo to see if a contact already exists with the same email address as the Shopify customer.

3. Condition: Email Match Check
    If a contact with the same email is found, the workflow ends (no duplicate contact is created).
    If no match is found, the workflow proceeds to the next step.

4. Action: Odoo – Create New Contact
   A new contact is created in Odoo using the customer's:
    Full name
    Email address
    Phone number
    Full Address (whichever is available)

## 📊 Basic Information

- **Workflow ID:** 3818
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1142
- **Downloads:** 114
- **Created:** 2025/5/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3818)

## 👤 Author

- **Name:** Evozard
- **Username:** @evozardconsulting

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **filter** 
- **odoo** (×2)
- **shopifyTrigger** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
