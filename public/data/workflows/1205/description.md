This workflow automatically promotes your new Shopify products on Twitter and Telegram. This workflow is also featured in the blog post [*6 e-commerce workflows to power up your Shopify store*](https://n8n.io/blog/no-code-ecommerce-workflow-automations/#promote-your-new-products-on-social-media).

## Prerequisites

- A Shopify account and [credentials](https://docs.n8n.io/integrations/credentials/shopify/)
- A Twitter account and [credentials](https://docs.n8n.io/integrations/credentials/twitter/)
- A Telegram account and [credentials](https://docs.n8n.io/integrations/credentials/telegram/) for the channel you want to send messages to.

## Nodes

- [Shopify Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.shopifytrigger/) triggers the workflow when you create a new product in Shopify.
- [Twitter node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.twitter/) posts a tweet with the text "Hey there, my design is now on a new product! Visit my {shop name} to get this cool {product title} (and check out more {product type})".
- [Telegram node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.telegram/) posts a message with the same text as above in a Telegram channel.