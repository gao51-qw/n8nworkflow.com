# Auto-post breaking news content using Perplexity AI to X (Twitter)

> Stay ahead of the curve and keep your followers informed—automatically.  
This n8n workflow uses Perplexity AI to generate insightful answers to scheduled queries, then auto-posts the responses directly to X (Twitter).

---

### ⚙️ What this workflow does

1. **Scheduled Trigger** – Runs at set times (daily, hourly, etc.).
2. **searchQuery** – Define what kind of trending or relevant insight you want (e.g. “latest AI trends”).
3. **set API Key** – Securely insert your Perplexity API key.
4. **Perplexity API Call** – Fetches a short, insightful response to your query.
5. **Post to X** – Automatically publishes the result as a tweet.

---
### 🧩 Requirements

- An [n8n](https://n8n.partnerlinks.io/5xf5bs8y3ruv) account (self-hosted or cloud)
- A [Perplexity API key](https://www.perplexity.ai)
- A connected X (Twitter) account via n8n’s credentials

---

### ✅ Setup Steps

1. Add this workflow into your n8n account.
2. Edit the `searchQuery` node with a topic (e.g. “What’s new in ecommerce automation?”).
3. Paste your Perplexity API key into the `set API key` node.
4. Connect your X (Twitter) account in the final node.
5. Adjust the schedule timing to suit your content frequency.

---

### 💡 Ideas to Improve

- 💬 Add a formatting step to shorten or hashtag the response.
- 📊 Pull multiple trending questions and auto-schedule posts.
- 🔁 Loop responses to queue a full week of content.
- 🌐 Translate content before posting to reach a global audience.

---

### 🆘 Need help?

Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.


## 📊 Basic Information

- **Workflow ID:** 3822
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 4398
- **Downloads:** 439
- **Created:** 2025/5/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3822)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** 
- **twitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
