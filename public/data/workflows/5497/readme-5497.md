# JavaScriptSentry: detect sensitive information in JavaScript

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

**How It works:**

When the user clicks "Execute Workflow" they are prompted for a URL, from there the Puppeteer node extracts JavaScript links from the provided URL. 

The links are then filtered down to ones that are relevant to the original URL that was quieried. 

From there an AI Agent searches the provided JavaScript links for API Keys, email addresses, and PII leaks.

Finally a report is generated and sent via gmail to a desired destination. The report contains discovered links as well as any sensitive information that may have been found.

**Why It's Useful:**

This is a great tool for Cybersecurity testing. 
- For Developers, make sure your scripts are clean and you didn't leave anything behind.
- For Ethical Hackers, this is a great tool for Bug Bounties by discovering sensitive information hidden in JavaScript.

## 📊 Basic Information

- **Workflow ID:** 5497
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 973
- **Downloads:** 97
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5497)

## 👤 Author

- **Name:** Sean Birmingham
- **Username:** @knute

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **formTrigger** 
- **n8n-nodes-puppeteer.puppeteer** 
- **code** (×2)
- **aggregate** 
- **set** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
