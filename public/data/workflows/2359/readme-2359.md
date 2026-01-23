# Get custom_fields from the Stripe API

> The Stripe API does not provide custom fields in invoice or charge data. So you have to get it from the [**Checkout Sessions**](https://docs.stripe.com/api/checkout/sessions) endpoint.

But that endpoint is not easy for begginners. It has dictionary parameters and pagination settings.

This workflows solves that problem by having a preconfigured GET request that gets **all the checkout sessions from the last 7 days**.

It then transforms the data to make it easier to work with and allows you to **filter by the custom_fields** you want to get.

### Want to generate Stripe invoices automatically?

Open 👉 [**this workflow**](https://n8n.io/workflows/2675)
.

### Check out my other templates
[**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 2359
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1001
- **Downloads:** 100
- **Created:** 2024/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2359)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **splitOut** (×2)
- **httpRequest** 
- **stickyNote** (×3)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
