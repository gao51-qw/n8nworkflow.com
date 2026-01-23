Stay ahead of the curve and keep your followers informed—automatically.  
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
