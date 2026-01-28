# Query Perplexity AI from your n8n workflows

> This workflow illustrates how to use Perplexity AI in your n8n workflow. 

Perplexity is a free AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.

---

### Credentials Setup 

1/ Go to the perplexity dashboard, purchase some credits and create an API Key

[https://www.perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)

2/ In the perplexity Request node, use Generic Credentials, Header Auth. 

For the name, use the value "Authorization"
And for the value "Bearer pplx-e4...59ea" (Your Perplexity Api Key)

---

### AI Model 
**Sonar Pro** is the current top model used by perplexity. 
If you want to use a different one, check this page: 

[https://docs.perplexity.ai/guides/model-cards](https://docs.perplexity.ai/guides/model-cards)

## 📊 Basic Information

- **Workflow ID:** 2824
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 24556
- **Downloads:** 2455
- **Created:** 2025/1/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2824)

## 👤 Author

- **Name:** Emmanuel Bernard - n8n Expert Lausanne
- **Username:** @n8ninja

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **httpRequest** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
