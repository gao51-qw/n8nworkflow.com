# Serve inspirational quotes on-demand via webhook using ZenQuotes API

> This n8n template lets you instantly serve batches of inspirational quotes via a webhook using the free ZenQuotes API. It’s perfect for developers, content creators, community managers, or educators who want to add dynamic, uplifting content to websites, chatbots, or internal tools—without writing custom backend code.

---

# 🔧 How it works
- A Webhook node listens for incoming HTTP requests on your chosen path.
- Get Random Quote from ZenQuotes sends an HTTP Request to https://zenquotes.io/api/random?count=5 and retrieves five random quotes.
- Format data uses a Set node to combine each quote (q) and author (a) into a single string:
"“quote” – author".
- Send response returns a JSON array of objects { quote, author } back to the caller.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Developers building motivational Slack or Discord bots.
- Website owners adding on-demand quote widgets.
- Educators or trainers sharing daily inspiration via webhooks.
- Anyone learning webhook handling and API integration in n8n.

---

# 🗂️ Response Structure
Your webhook response will be a JSON array, for example:

```json
[
{
"quote": "Life is what happens when you're busy making other plans.",
"author": "John Lennon"
},
{
"quote": "Be yourself; everyone else is already taken.",
"author": "Oscar Wilde"
}
]
```

---

# ⚙️ Setup Instructions
- Import the workflow JSON into your n8n instance.
- In the Webhook node, set your desired path (e.g., /inspire).
- (Optional) Change the count parameter in the HTTP Request node to fetch more or fewer quotes.
- Activate the workflow.
- Test by sending an HTTP GET or POST to https://&lt;your-n8n-domain&gt;/webhook/&lt;path&gt;.


## 📊 Basic Information

- **Workflow ID:** 4065
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 679
- **Downloads:** 67
- **Created:** 2025/5/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4065)

## 👤 Author

- **Name:** ist00dent
- **Username:** @ist00dent

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **stickyNote** (×5)
- **httpRequest** 
- **webhook** 
- **respondToWebhook** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
