# Get notified on Gmail, Telegram and Slack on new Stripe purchase

> Get notified when a customer completes a Stripe checkout — including all products they purchased in a single checkout session.

![image.png](fileId:1080)

Using the Stripe API can be tricky, especially when you're selling **multiple products**, **order bumps**, or **recommended add-ons** in one checkout. This workflow solves that for you.

### How it works

The template listens for successful Stripe checkout events. When a payment is completed, it retrieves **all items from the session**, including main products, bumps, and extras — and sends a full breakdown straight to your chosen app.

![image.png](fileId:1081)

You can receive the notification on:

- **Telegram**
- **WhatsApp**
- **Gmail**
- Or any other chat/notification service you prefer (Slack, Outlook etc. )

### Who is this template for?

Creators, marketers, and online sellers who:

- Use Stripe Checkout
- Want to track what customers are buying in real time
- Prefer to get notifications instantly instead of digging through Stripe logs

### How to set up

1. Connect your Stripe account and choose where you want to receive notifications.
2. Adjust the notification text for your preference, and you are done!

Everything else is already configured in the template.

### Check out my other templates

👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 3410
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1006
- **Downloads:** 100
- **Created:** 2025/4/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3410)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stripeTrigger** 
- **httpRequest** (×2)
- **splitOut** 
- **aggregate** 
- **set** 
- **telegram** 
- **stickyNote** (×5)
- **whatsApp** 
- **gmail** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
