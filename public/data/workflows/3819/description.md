Seamlessly sync newly created Shopify products into Odoo with this smart, no-code n8n workflow. Automatically checks for duplicates and creates new products only when needed – fully compatible with standard Odoo setup.

🚀 Key Features:
Trigger-based Automation: Starts instantly when a new product is created in Shopify

Duplicate Check: Searches for an existing product in Odoo using Shopify’s product SKU as the Internal Reference (Default Code)

Smart Condition Logic:

If a matching product is found, the workflow stops – preventing duplicates

If not found, a new product is created in Odoo

Auto-Creation of Odoo Product using Shopify data:

Product Name

Description

Price

Internal Reference (SKU)

Works with both Odoo Community and Enterprise editions

Fully customizable and extendable in n8n

No coding, no custom modules required

🛠 Requirements:
n8n (self-hosted or cloud)

Shopify API access

Odoo instance with standard API access

💡 A perfect solution for businesses that regularly add new products to Shopify and want them mirrored in Odoo – automatically and without manual effort.

+++++++++++++++++++++++++++++++++++++++++
Workflow functions like the integration of a Shopify product with an Odoo product.
    
1. Trigger: The workflow starts when a new product is created in Shopify.

2. Check Existing Products: It searches in Odoo to check if any product already exists with the same Internal Reference or Default Code (taken from the Shopify product data).

3. Condition:
    If a matching product is found: The workflow stops (no duplicates are created).
    If no matching product is found: It proceeds to create a new product in Odoo.

4. Create Product in Odoo: A new product is created in Odoo using the following fields from Shopify:
    Product Name
    Description
    Price
    Internal Reference (or Default Code)
