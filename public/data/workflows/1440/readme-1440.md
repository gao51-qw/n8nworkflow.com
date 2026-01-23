# Handle verification for Twitter webhook

> This workflow handles the incoming call from Twitter and sends the required response for verification.

On registering the webhook with the Twitter Account Activity API, Twitter expects a signature in response. Twitter also randomly ping the webhook to ensure it is active and secure.

![workflow-screenshot](fileId:605)

**Webhook node:** Use the displayed URL to register with the Account Activity API.

**Crypto node:** In the ***Secret*** field, enter your API Key Secret from Twitter.

**Set node:** This node generates the response expected by the Twitter API.


Learn more about connecting n8n with Twitter in the [Getting Started with Twitter Webhook](https://harshil.dev/writings/getting-started-with-twitter-webhook) article.

## 📊 Basic Information

- **Workflow ID:** 1440
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 866
- **Downloads:** 86
- **Created:** 2022/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1440)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **webhook** 
- **crypto** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
