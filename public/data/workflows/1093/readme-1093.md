# Build a self-hosted URL shortener with a dashboard

> This workflow creates an automatic self-hosted URL shortener. It consists of three sub-workflows:

1. **Short URL creation** for extracting the provided long URL, generating an ID, and saving the record in the database. It returns a short link as a result.
2. **Redirection** for extracting the ID value, validating the existence of its correspondent record in the database, and returning a redirection page after updating the visits (click) count.
3. **Dashboard** for calculating simple statistics about the saved record and displaying them on a dashboard.

Read more about this use case and how to set up the workflow in the blog post [*How to build a low-code, self-hosted URL shortener in 3 steps*](https://n8n.io/blog/how-to-build-a-low-code-self-hosted-url-shortener/).

## Prerequisites

- A local proxy set up that redirects the n8n.ly domain to your n8n instance
- An Airtable account and [credentials](https://docs.n8n.io/integrations/credentials/airtable/)
- Basic knowledge of JavaScript, HTML, and CSS

## Nodes

- [Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) trigger the sub-workflows on calls to a specified link.
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) route the workflows based on specified query parameters.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required values returned by the previous nodes (id, longUrl, and shortUrl).
- [Airtable nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.airtable/) retrieve records (values) from or append records to the database.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) calculates statistics on link clicks to be displayed on the dashboard, as well as its design.
- [Crypto node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.crypto/) generates a SHA256 hash.

## 📊 Basic Information

- **Workflow ID:** 1093
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 6001
- **Downloads:** 600
- **Created:** 2021/5/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1093)

## 👤 Author

- **Name:** mohamed ali
- **Username:** @dali

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** (×3)
- **set** (×12)
- **if** (×4)
- **crypto** 
- **airtable** (×5)
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
