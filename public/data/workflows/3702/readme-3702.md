# Extract & summarize Indeed company info with Bright Data and Google Gemini

> ### Who this is for?
Extract & Summarize Indeed Company Info is an automated workflow that extracts the Indeed company profile information using Bright Data Web Unlocker, transform it using Google Gemini’s LLM, and forward the transformed response with the summary to a specified webhook for downstream use.

This workflow is tailored for:

- Recruiters and HR teams looking to assess companies quickly during talent sourcing.

- Job seekers researching potential employers and needing summarized company insights.

- Market researchers and analysts monitoring competitor or industry players.

### What problem is this workflow solving?
Searching and evaluating company profiles on Indeed manually can be time-consuming and inefficient, especially when dealing with large volumes of companies. Manually browsing, copying, and summarizing company descriptions, reviews, and ratings from Indeed hinders productivity and limits real-time insights.

This workflow solves this by:

- Automating the extraction of company details from Indeed using Bright Data Web Unlocker.

- Summarizing the raw data using Google Gemini's language model for a quick, human-readable overview.

- Sending the transformed response with the summary to a chosen endpoint, like Slack, Notion, Airtable, or a custom webhook.

### What this workflow does

This automated pipeline does the following:

- Scrape Indeed company profile pages (e.g., ratings, description, reviews) using Bright Data’s Web Unlocker.

- Transform the scraped content into structured JSON using n8n’s built-in tools.

- Summarize and extract meaningful insights using Google Gemini's large language model.

- Forward the summarized data to a specified webhook or app for real-time access, storage, or analysis.

- Forward the formatted response to a specified webhook or app for real-time access, storage, or analysis.


### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the search query, Bright Data zone by navigating to the **Set Indeed Search Query** node.
- Update the Webhook Notifier with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

This workflow is built to be flexible - whether you're a company or a market researcher, entrepreneur, or data analyst. Here’s how you can adapt it to fit your specific use case:

- **Changing the data source**: 
Replace the Indeed search input with other job or business listing platforms if needed (e.g., Glassdoor, Crunchbase)

- **Refining the LLM prompt**: 
Tailor the Gemini prompt to transform or summarize the Indeed company information in a specific format.

- **Routing the output to different destinations**: 
Send summaries or transformed response to Google Sheets, Airtable, or CRMs like HubSpot or Salesforce etc.


## 📊 Basic Information

- **Workflow ID:** 3702
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 656
- **Downloads:** 65
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3702)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **stickyNote** (×2)
- **set** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
