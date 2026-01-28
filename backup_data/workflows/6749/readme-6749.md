# Automate personalized cold emails with Apollo lead scraping and GPT-4.1

> How This Works
-
This automation automatically scrapes leads from Apollo using the Apify scraper, filters out those who do not have an Email or URL included, scrapes the leads' website content and writes personalised Icebreakers and subject lines based on the website's content.

Set Up (Step-by-Step)
-
- Connect the API keys from the Apify scraper mentioned in the workflow sticky note.
- Insert Apollo URL and the amount of leads you want to scrape.
- Connect your Slack account (if needed)

Reach Out To Me
-
Send me an Email if you need further assistance: richard@advetica-systems.com


## 📊 Basic Information

- **Workflow ID:** 6749
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 1421
- **Downloads:** 142
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6749)

## 👤 Author

- **Name:** Richard Besier
- **Username:** @richardb

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **splitInBatches** 
- **manualTrigger** 
- **googleSheets** (×2)
- **set** (×3)
- **filter** 
- **httpRequest** (×3)
- **code** 
- **slack** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
