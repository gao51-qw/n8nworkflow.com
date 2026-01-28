# Shopify orders to D365 Business Central sales orders / sales invoices

> ## Workflow Information 📌

### Purpose 🎯
The intention of this workflow is to integrate New Shopify Orders into MS Dynamics Business Central:

- **Point-of-Sale (POS):** POS orders will be created in Business Central as Sales Invoices given no fulfillment is expected.
- **Web Orders:** This type of orders will be created as Business Central Sales Orders.

### How to use it 🚀
1. Edit the "D365 BC Environment Settings" node with your own account values (Company Id, Tenanant Id, Tax & Discount Items).
2. Go to the "Shopify" node and edit the connection with your environment. More help [here](https://docs.n8n.io/integrations/builtin/credentials/shopify/).
3. Go to the "Lookup Customers" node to edit the Business Central connection details with your environment settings.
4. Set the required filters on the "Shopify Order Filter" node.
5. Edit the "Schedule Trigger" node with the required frequency.

### Useful Workflow Links 📚
1. [Step-by-step Guide/ Integro Cloud Solutions](https://z0v4z2m6gixudcjglfbe.guidejar.xyz/categories/business-central)
2. [Business Central REST API Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/)
3. [Video Demo](https://www.loom.com/share/9e218cd53cf14a93bcb55d7b3d47ec45?sid=5fdfb8ab-8205-468a-b514-67193abac455)


### Need Help?
Contact me at:
✉️greg.lopez@integrocloudsolutions.com
📥 https://www.linkedin.com/in/greg-lopez-08b5071b/





## 📊 Basic Information

- **Workflow ID:** 2079
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 3575
- **Downloads:** 357
- **Created:** 2024/2/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2079)

## 👤 Author

- **Name:** Greg Lopez
- **Username:** @greglopez

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** (×11)
- **stickyNote** (×8)
- **shopify** 
- **scheduleTrigger** 
- **splitInBatches** 
- **if** (×4)
- **set** (×7)
- **code** 
- **noOp** (×2)
- **splitOut** (×2)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
