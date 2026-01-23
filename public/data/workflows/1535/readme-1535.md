# Automate testimonials in Strapi with n8n

> This is the workflow powering the n8n demo shown at StrapiConf 2022.

![image.png](fileId:624)

The workflow searches matching Tweets every 30 minutes using the [Interval](https://docs.n8n.io/nodes/n8n-nodes-base.interval/) node and listens to Form submissions using the [Webhook](https://docs.n8n.io/nodes/n8n-nodes-base.webhook/) node.

Sentiment analysis is handled by Google using the [Google Cloud Natural Language](https://docs.n8n.io/nodes/n8n-nodes-base.googleCloudNaturalLanguage/) node before the result is stored in Strapi using the [Strapi](https://docs.n8n.io/nodes/n8n-nodes-base.strapi/) node.

(These were originally two separate workflows that have been combined into one to simplify sharing.)

## 📊 Basic Information

- **Workflow ID:** 1535
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2271
- **Downloads:** 227
- **Created:** 2022/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1535)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **set** (×2)
- **strapi** (×2)
- **interval** 
- **if** (×3)
- **twitter** 
- **webhook** 
- **googleCloudNaturalLanguage** (×2)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
