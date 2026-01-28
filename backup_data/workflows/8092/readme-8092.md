# Automated Shopify abandoned cart alerts from Razorpay to Telegram

> ## Who it’s for

This workflow is built for Shopify store owners using Magic Checkout (Razorpay). Since Shopify’s default abandoned cart recovery doesn’t work with third-party checkouts, you’re left without an easy way to track or follow up. This workflow solves that gap by sending you automatic Telegram alerts with every abandoned cart—so you stay on top of potential sales without lifting a finger.

There's sticky notes inside for each node to explain everything you need!

## What it does

1. The workflow runs automatically every 6 hours. Here’s the flow:
2. Fetch abandoned cart data from Razorpay using the API.
3. Format the data into clean, readable text (customer info, cart details, order value).
3. Send the message directly to your Telegram bot.
5. Instead of logging into Shopify or Razorpay to check, you’ll get a notification straight in Telegram.

## What you need

1. A Telegram account with a bot (create one via BotFather).
2. Your Telegram bot token and client ID.
3. Your Razorpay API key from your Razorpay dashboard.

## How to set it up

1. Import this workflow into your n8n workspace.
2. Create a new API profile with your Razorpay credentials.
3. Add your Telegram bot details to the Telegram nodes in n8n.
4. (Optional) Adjust the trigger time—default is every 6 hours, but you can make it run more or less frequently.

## Why it helps

This is a free, no-code workaround for a real Shopify limitation. By automating abandoned cart alerts, you save time, cut manual checks, and follow up faster with customers. Even a single recovered cart can pay off the effort. Plus, you can customize it—add more customer info, link directly to their checkout, or even connect it with Slack or email tools.

## 📊 Basic Information

- **Workflow ID:** 8092
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8092)

## 👤 Author

- **Name:** vibin
- **Username:** @vibin

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **cron** 
- **code** (×2)
- **httpRequest** 
- **telegram** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
