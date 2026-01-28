# Automate Stripe checkout sales tracking in RD Station Marketing

> This workflow instantly sends successful Stripe Checkout payments to RD Station Marketing by creating an **Order & Payment Event** for every confirmed transaction. It’s ideal for businesses that want to automate lead tracking, unify customer data, and trigger marketing automation flows at the moment of sale.

## Who’s it for

This template is designed for online sellers, course creators, SaaS businesses, and marketers who use **Stripe Checkout** for payments and **RD Station Marketing** for lead management and automation. If you want real-time revenue data inside RD Station without manual work, this workflow is for you.

## **How it works**

* Stripe triggers the workflow whenever a Checkout Session is completed.

* The workflow checks the payment status and retrieves the list of purchased items.

* A new **Order & Payment Event** is sent to RD Station Marketing using the community node.

* You can extend the workflow to include customer details captured during checkout.

## **How to set up**

1. Edit the **Stripe Trigger** and **getItems** nodes with your Stripe API keys.

2. Add your **RD Station Marketing** credentials in the `send2RDMKT` node.

3. In production, copy the workflow’s webhook URL and add it to your Stripe Webhook settings.

4. Test the workflow with a real or test payment.

## **Requirements**

* A Stripe account and valid [API keys](https://docs.stripe.com/keys)

* An [RD Station Marketing](https://indiquei.app/L5nlhp) account

* Installation of the community node: [RD Station Marketing for n8n](https://www.npmjs.com/package/n8n-nodes-rdstation-marketing)

**Disclaimer:** This workflow requires a **self-hosted** n8n instance because it uses a community node.

## **How to customize the workflow**

You can extend the payload sent to RD Station Marketing to include additional fields such as customer name, email, coupon codes, or metadata collected in Stripe Checkout. Feel free to add routers, conditionals, or enrichment nodes depending on your marketing logic.



## 📊 Basic Information

- **Workflow ID:** 11704
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11704)

## 👤 Author

- **Name:** Fred Carbonare
- **Username:** @fredcarbonare

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stripeTrigger** 
- **splitOut** (×2)
- **filter** 
- **httpRequest** (×2)
- **merge** 
- **aggregate** 
- **set** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
