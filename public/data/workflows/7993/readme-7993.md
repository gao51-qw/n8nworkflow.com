# Complete WooCommerce to Odoo integration: Sync orders, products & customers

> 📖 Description (WooCommerce Version)

This workflow functions like the integration of WooCommerce products with Odoo products, WooCommerce customers with Odoo customers, and WooCommerce orders with Odoo sales orders containing multiple products.

🔔 Trigger (WooCommerce – Order Created)

The workflow starts when a new order is created in WooCommerce.

🔄 Loop Through Each Line Item in the Order
For each product in the WooCommerce order:
Check if Product Exists in Odoo (via Internal Reference/Default Code):
If the product exists, proceed.

If the product does not exist, create it in Odoo with:
Product Name
Description
Price
Internal Reference (Default Code)

👤 Check if Customer Contact Exists in Odoo (via Email)

If the contact exists, proceed.

If the contact does not exist, create a new contact in Odoo with:
Full Name
Email Address
Phone Number

Shipping or Billing Address (as available)

📝 Create a Sale Order in Odoo

Create a new Sale Order in Odoo using:
The matched or newly created Customer Contact
All the matched or newly created Products from the WooCommerce order (with correct quantities and pricing)
Each WooCommerce product in the order is matched to the corresponding Odoo product using the Internal Reference field.
👉 This ensures a seamless sync between WooCommerce and Odoo, keeping your orders, products, and customers aligned automatically.

Setup referecence:
https://docs.n8n.io/integrations/builtin/credentials/woocommerce/
https://docs.n8n.io/integrations/builtin/credentials/odoo/

## 📊 Basic Information

- **Workflow ID:** 7993
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 233
- **Downloads:** 23
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7993)

## 👤 Author

- **Name:** Evozard
- **Username:** @evozardconsulting

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **wooCommerceTrigger** 
- **code** (×10)
- **splitOut** (×2)
- **odoo** (×8)
- **stickyNote** (×18)
- **switch** (×2)
- **splitInBatches** (×2)
- **if** 
- **noOp** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
