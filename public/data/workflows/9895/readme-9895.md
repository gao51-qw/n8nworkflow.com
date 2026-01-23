# Monitor Shopify stores for new products with BrowserAct and Slack alerts

> ![Competitors Shopify Website Monitor](https://i.postimg.cc/dQpczfP7/Screen-Shot-20251025120751.png)

## Automated E-commerce Store Monitoring for New Products Using BrowserAct

### This n8n template is an advanced competitive intelligence tool that automatically monitors competitor E-commerce/Shopify stores and alerts you the moment they launch a new product.

This workflow is essential for e-commerce store owners, product strategists, and marketing teams who need real-time insight into what their competitors are selling.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow runs on a **Schedule Trigger** to check for new products automatically (e.g., daily).
* A **Google Sheets** node fetches your master list of competitor store links from a central sheet.
* The workflow **loops** through each competitor one by one.
* For each competitor, a **Google Sheets** node first creates a dedicated tracking sheet (if one doesn't exist) to store their product list history.
* A **BrowserAct** node then scrapes the competitor's current product list from their live website.
* The scraped data is saved to the competitor's dedicated tracking sheet.
* The workflow then fetches the *newly scraped list* and the *previously stored list* of products.
* A custom **Code** node (labeled "Compare Datas") performs a difference check to reliably detect if any new products have been added.
* If a new product is detected, an **If** node triggers an immediate **Slack** alert to your team, providing real-time competitive insight.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Competitors Shopify Website New Product Monitor**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Google Sheets** credentials for storing and managing data
* **Slack** credentials for sending alerts

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [Automatically Track Competitor Products | n8n & Google Sheets Template](https://youtu.be/Gsj6IlyxdY0)

## 📊 Basic Information

- **Workflow ID:** 9895
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 216
- **Downloads:** 21
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9895)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×5)
- **slack** 
- **merge** 
- **stickyNote** (×10)
- **code** (×2)
- **n8n-nodes-browseract-workflows.browserAct** (×2)
- **if** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
