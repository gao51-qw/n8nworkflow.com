# Automated Web Scraper: Niche Job/Product Monitor With Telegram Alert

> **How it works**

This workflow is your personal digital assistant for tracking specific information on websites that lack APIs or RSS feeds. It's perfect for keeping an eye on:

- Niche job postings on specialized forums or company career pages.

- Product availability or price changes on smaller e-commerce sites.

- Any specific text or data appearing on a public webpage.

It automatically:

- Visits a specified webpage on a schedule (e.g., hourly, daily).

- Intelligently extracts specific data points (like job titles, links, product names, or stock status) from the page's HTML using advanced selectors.

- Notifies you via Telegram when new relevant information is found or if a change occurs.

Stop manually refreshing pages and let automation bring the critical updates directly to you!

**Set up steps**

Setting up this workflow is more involved than basic automations due to the web scraping aspect, typically taking around 20-40 minutes. You'll need to:

- Identify the exact URL of the webpage you want to monitor.

- Learn how to find CSS Selectors or XPath for the specific data elements you want to extract from the webpage (a browser's developer tools are essential here).

- Authenticate your Telegram account to receive notifications.

- Optionally, set up an AI service (like OpenAI) if you want to summarize extracted content.

All detailed setup instructions and specific configuration guidance, including how to find CSS selectors, are provided within the workflow itself using sticky notes.

## 📊 Basic Information

- **Workflow ID:** 6663
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1985
- **Downloads:** 198
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6663)

## 👤 Author

- **Name:** Piotr Sobolewski
- **Username:** @piotrsobolewski

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **htmlExtract** 
- **if** 
- **function** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
