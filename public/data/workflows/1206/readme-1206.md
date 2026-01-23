# Process Shopify new orders with Zoho CRM and Harvest

> This workflow is triggered when a new order is created in Shopify. Then:
- the order information is stored in Zoho CRM,
- an invoice is created in Harvest and stored in Trello,
- if the order value is above 50, an email with a discount coupon is sent to the customer and they are added to a MailChimp campaign for high-value customers; otherwise, only a "thank you" email is sent to the customer.

Note that you need to replace the *List ID* in the *Trello node* with your own ID (see [instructions in our docs](https://docs.n8n.io/nodes/n8n-nodes-base.trello/#example-usage)). Same goes for the *Account ID* in the *Harvest node* (see [instructions here](https://docs.n8n.io/credentials/harvest/#using-access-token)).

## 📊 Basic Information

- **Workflow ID:** 1206
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 4686
- **Downloads:** 468
- **Created:** 2021/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1206)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **zohoCrm** 
- **trello** 
- **set** 
- **if** 
- **gmail** (×2)
- **mailchimp** 
- **shopifyTrigger** 
- **harvest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
