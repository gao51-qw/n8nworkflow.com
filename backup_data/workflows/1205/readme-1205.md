# Promote new Shopify products on Twitter and Telegram

> This workflow automatically promotes your new Shopify products on Twitter and Telegram. This workflow is also featured in the blog post [*6 e-commerce workflows to power up your Shopify store*](https://n8n.io/blog/no-code-ecommerce-workflow-automations/#promote-your-new-products-on-social-media).

## Prerequisites

- A Shopify account and [credentials](https://docs.n8n.io/integrations/credentials/shopify/)
- A Twitter account and [credentials](https://docs.n8n.io/integrations/credentials/twitter/)
- A Telegram account and [credentials](https://docs.n8n.io/integrations/credentials/telegram/) for the channel you want to send messages to.

## Nodes

- [Shopify Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.shopifytrigger/) triggers the workflow when you create a new product in Shopify.
- [Twitter node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.twitter/) posts a tweet with the text "Hey there, my design is now on a new product! Visit my {shop name} to get this cool {product title} (and check out more {product type})".
- [Telegram node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.telegram/) posts a message with the same text as above in a Telegram channel.

## 📊 Basic Information

- **Workflow ID:** 1205
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 5270
- **Downloads:** 527
- **Created:** 2021/8/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1205)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **twitter** 
- **telegram** 
- **shopifyTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
