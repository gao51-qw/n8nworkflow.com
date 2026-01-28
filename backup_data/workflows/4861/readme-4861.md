# Google SERP + trends and recommendations with Bright Data & Google Gemini

> ### Who this is for?

Google SERP Tracker + Trends and Recommendations is an AI-powered n8n workflow that extracts Google search results via Bright Data, parses them into structured JSON using Google Gemini, and generates actionable recommendations and search trends. It outputs CSV reports and sends real-time Webhook notifications.

This workflow is ideal for:

- SEO Agencies needing automated rank & trend tracking

- Growth Marketers seeking daily/weekly search-based insights

- Product Teams monitoring brand or competitor visibility

- Market Researchers performing search behavior analysis

- No-code Builders automating search intelligence workflows

### What problem is this workflow solving?

Traditional tracking of search engine rankings and search trends is often fragmented and manual. Analyzing SERP changes and trends requires:

- Manual extraction or using unstable scrapers

- Unstructured or cluttered HTML data

- Lack of actionable insights or recommendations

This workflow solves the problem by:

- Automating real-time Google SERP data extraction using Bright Data

- Structuring unstructured search data using Google Gemini LLM

- Generating actionable recommendations and trends

- Exporting both CSV reports automatically to disk for downstream use

- Notifying external systems via Webhook

### What this workflow does

- Accepts search input, zone name, and webhook notification URL

- Uses Bright Data to extract Google Search Results

- Uses Google Gemini LLM to parse the SERP data into structured JSON

- Loops over structured results to:

- Extract recommendations

- Extract trends

- Saves both as .csv files (example below):

	- Google_SERP_Recommendations_Response_2025-06-10T23-01-50-650Z.csv

	- Google_SERP_Trends_Response_2025-06-10T23-01-38-915Z.csv

- Sends a Webhook with the summary or file reference

**LLM Usage**

Google Gemini LLM handles:

- Parsing Google Search HTML into structured JSON

- Summarizing recommendation data

- Deriving trends from the extracted SERP metadata

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).

![MCPClientAccount.png](fileId:1476)

The Value field should be set with the 
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set input fields** with the search criteria, Bright Data Zone name, Webhook notification URL.

### How to customize this workflow to your needs

**Input Customization**

- Set your target keyword/phrase in the search field

- Add your webhook_notification_url for external triggers or notifications

**SERP Source**

You can extend the Bright Data search logic to include other engines like Bing or DuckDuckGo.

**Output Format**

Edit the .csv structure in the Convert to File nodes if you want to include/exclude specific columns.

**LLM Prompt Tuning**

The Gemini LLM prompt inside the Recommendation or Trends extractor nodes can be fine-tuned for domain-specific insight (e.g., SEO vs eCommerce focus).

## 📊 Basic Information

- **Workflow ID:** 4861
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1319
- **Downloads:** 131
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4861)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **code** (×3)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **convertToFile** (×2)
- **readWriteFile** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
