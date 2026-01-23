# Daily auto-generated tweets from trending topics using Perplexity & GPT-4o

> This workflow auto-generates and posts a tweet once per day using real-time insights from the web. It uses Perplexity to fetch trending topics, OpenAI to summarize them into a tweet, and the Twitter API to publish.

⚙️ Set up steps
Set your Perplexity API key in the HTTP Request node.

Add your OpenAI API key to the Message Model node.

Authenticate your Twitter API credentials in the second HTTP Request node.

Modify the schedule trigger to run daily at your preferred time.

All logic is pre-configured — simply plug in your credentials and you're live.

## 📊 Basic Information

- **Workflow ID:** 6981
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 931
- **Downloads:** 93
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6981)

## 👤 Author

- **Name:** Grant Warfield
- **Username:** @gwarfield

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
