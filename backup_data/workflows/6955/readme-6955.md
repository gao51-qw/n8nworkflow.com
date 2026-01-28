# Sync new Shopify products to Odoo

> Seamlessly sync newly created Shopify products into Odoo with this smart, no-code n8n workflow. It automatically checks for duplicates and creates new products only when needed – fully compatible with a standard Odoo setup.

**🚀 Key Features:**
- **Trigger-based Automation:** The workflow starts instantly when a new product is created in your Shopify store.
- **Intelligent Duplicate Check:** It searches for an existing product in Odoo using the Shopify product's SKU as the Internal Reference.
- **Smart Conditional Logic:**
	- If a matching product is found, the workflow automatically stops to prevent creating duplicates.
	- If no match is found, it proceeds to create a new product in Odoo.
- **Automatic Product Creation:** Creates a new Odoo product by mapping the following data from Shopify:
	- Product Name
	- Public Price
	- Internal Reference
	- Description
- **Universal Compatibility:** Works with both Odoo Community and Enterprise editions without any custom modules.
- **Fully Customizable:** The workflow is open and can be easily extended in the n8n canvas to add more fields or custom logic.

**🛠 Requirements:**
- An n8n instance (self-hosted or cloud).
- Shopify credentials with API access.
- Odoo credentials with standard XML-RPC API access.

**💡 Use Case:**
This workflow is the perfect solution for any business that regularly adds new products to Shopify and needs them automatically mirrored in Odoo for inventory, sales, or accounting purposes. Eliminate manual data entry, save time, and ensure your product catalogs are always in sync.

## 📊 Basic Information

- **Workflow ID:** 6955
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 103
- **Downloads:** 10
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6955)

## 👤 Author

- **Name:** Candra Reza
- **Username:** @candrareza

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **start** 
- **shopifyTrigger** 
- **odoo** (×2)
- **if** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
