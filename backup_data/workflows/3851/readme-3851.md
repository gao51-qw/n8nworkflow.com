# Automate Etsy data mining with Bright Data Scrape & Google Gemini

> ### Who this is for?
The Automate Etsy Data Mining with Bright Data Scrape & Google Gemini workflow is designed for eCommerce analysts, product researchers, and AI developers seeking to extract actionable insights from Etsy listings at scale. 

It is ideal for:

- **eCommerce Entrepreneurs** - Researching product demand and competition.

- **Market Analysts** - Tracking pricing, reviews, and trends across Etsy categories.

- **Product Managers** - Identifying niche opportunities and design inspirations.

- **Data Scientists & AI Engineers** - Automating product intelligence pipelines.

- **Growth Hackers** - Leveraging Etsy insights to refine product-market fit.

### What problem is this workflow solving?
Manually browsing Etsy to analyze product listings, pricing, reviews, and seller activity is slow, inconsistent, and unscalable. Scraping Etsy requires unlocking JavaScript-heavy content and structuring noisy data for analysis.

This workflow solves:

- Automated and scalable scraping of Etsy product listings using Bright Data’s infrastructure.

- A fully paginated data structured Estry production data extraction via the Google Gemini LLM.

- Enables faster decision-making for product research and competitive analysis via the fully automated paginated data extraction.

### What this workflow does

- Receives input: Sets the Esty URL for the data extraction and analysis.

- Uses Bright Data's Web Unlocker to extract content from relevant sites.

- Cleans and preprocesses the scraped content for readability.

- Sends the content to Google Gemini for:

	- Enriched results including:

		- Data persistence over the disk.

		- Sends the response to a target system via Webhook notification.

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1241)
The Value field should be set with the 
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set Esty Search Query** for setting the brand content URL and the Bright Data Zone name.
- Update the Webhook HTTP Request node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

- **Input Sources** : Replace the static URL with dynamic input from Google Sheets, Webhook, or Airtable to research multiple niches.

- **Prompt Customization** : Adjust Gemini prompts to extract specific insights for example:

	- List key features of the product

	- Summarization of the review themes
- **Data Output Options** : Update the Webhook notification to save data to:

	- Google Sheets
	- Notion or Airtable
	- SQL/NoSQL
	- Slack/Email










## 📊 Basic Information

- **Workflow ID:** 3851
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 5323
- **Downloads:** 532
- **Created:** 2025/5/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3851)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **set** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×3)
- **readWriteFile** 
- **function** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
