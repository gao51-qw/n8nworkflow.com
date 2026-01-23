# Discover viral social media trends with Gemini Flash & Apify scraping

> ## How it works
This workflow is a professional-grade market intelligence tool designed to bridge the gap between search interest and social media engagement. It automates the end-to-end process of trend discovery and content strategy.

1. **Detection:** Polls Google Trends RSS daily for rising regional search queries.
2. **Parallel Extraction:** Concurrently triggers industrial-grade **Apify** actors to scrape TikTok, Instagram, and X (Twitter) without the risk of account bans.
3. **Data Aggregation:** Uses custom JavaScript logic to clean and merge disparate data points, optimizing them for LLM processing.
4. **AI Analysis:** **Google Gemini Flash** analyzes the data to identify core topics, sentiment, and trend strength.
5. **Granular Delivery:** Delivers individual, structured reports for each identified trend directly to **Discord** via Webhooks.

## Set up steps
1. **API Credentials:** Prepare your **Apify API Token** and **Google Gemini API Key**.
2. **Discord Setup:** Create a Webhook in your Discord server and paste the URL into the Discord node.
3. **Regional Configuration:** Set your target country code (e.g., `JP`, `ID`, `US`) in the **"Edit Fields"** node at the start of the workflow.
4. **Node Settings:** Ensure all scraper nodes are set to "Continue on Fail" to maintain workflow resilience.

## Requirements
* Apify Account.
* Google Gemini API Key.
* Discord Server for report delivery.

## 📊 Basic Information

- **Workflow ID:** 12178
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 447
- **Downloads:** 44
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12178)

## 👤 Author

- **Name:** Aslamul Fikri Alfirdausi
- **Username:** @asla

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** (×6)
- **@apify/n8n-nodes-apify.apify** (×3)
- **merge** 
- **discord** 
- **splitOut** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
