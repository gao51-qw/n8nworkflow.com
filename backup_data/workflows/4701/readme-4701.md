# Notify on Discord about new Epic Games free game releases

> # Description
Very straightforward workflow. It checks the Epic Games website if the HTML container with free games has changed. If it did then it will send a notification to Discord with a list of embeds containing those games.

# Requirements
- You will need to install `n8n-nodes-puppeteer` community node

# Setup
There are two nodes that notify Discord. One at the very end and one in the loop in case of error. Configure them with a webhook or a bot, whatever suits you. That's all.


## 📊 Basic Information

- **Workflow ID:** 4701
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 3058
- **Downloads:** 305
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4701)

## 👤 Author

- **Name:** Pawel
- **Username:** @labm0nkey

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **html** (×2)
- **splitOut** 
- **set** (×3)
- **merge** (×3)
- **code** (×3)
- **filter** 
- **wait** 
- **if** (×2)
- **discord** 
- **n8n-nodes-puppeteer.puppeteer** 
- **stickyNote** (×6)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
