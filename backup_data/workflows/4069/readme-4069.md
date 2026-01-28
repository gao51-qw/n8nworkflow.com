# Complete Shopify to Odoo integration: Sync orders, products & customers

> This workflow functions like the integration of Shopify products with Odoo products, Shopify customers with Odoo customers, and paid Shopify orders with Odoo sales orders containing multiple products.
 
1. Trigger (Shopify – Order Created & Paid): The workflow starts when a new order is created in Shopify and its status is marked as paid.
 
2. Loop Through Each Line Item in the Order:
    For each product in the order:
        Check if Product Exists in Odoo (via Internal Reference/Default Code)
	    If the product exists, proceed.
	    If the product does not exist, create it in Odoo with the following details:
	        Product Name
		Description
		Price
		Internal Reference (Default Code)
 
3. Check if Customer Contact Exists in Odoo (via Email):
    If the contact exists, proceed.
    If the contact does not exist, create a new contact in Odoo with:
        Full Name
        Email Address
        Phone Number
        Shipping or Billing Address (as available)
 
4. Create a Sale Order in Odoo:
    Create a new Sale Order in Odoo using:
        The matched or newly created Customer Contact
        The matched or newly created All the Products in the Shopify order (with correct quantities and pricing)
    Each Shopify product in the order is matched to the corresponding Odoo product using the Internal Reference field
    
Integration Setup References:
 
    Shopify Integration Setup:
    https://docs.n8n.io/integrations/builtin/credentials/shopify/
 
    Odoo Integration Setup:
    https://docs.n8n.io/integrations/builtin/credentials/odoo/


## 📊 Basic Information

- **Workflow ID:** 4069
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 955
- **Downloads:** 95
- **Created:** 2025/5/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4069)

## 👤 Author

- **Name:** Evozard
- **Username:** @evozardconsulting

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **shopifyTrigger** 
- **odoo** (×8)
- **code** (×4)
- **splitOut** (×2)
- **filter** (×2)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
