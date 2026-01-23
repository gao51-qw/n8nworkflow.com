# Extract & summarize Yelp business review with Bright Data and Google Gemini

> ### Who this is for?
Extract & Summarize Yelp Business Review is an automated workflow that extracts the Yelp business reviews using Bright Data Web Unlocker, process and formats the raw data, summarizes using the Google Gemini's LLM, and forward the concise summary with the review respose to a specified webhook endpoint.

This workflow is tailored for:

- Local SEO Specialists who need structured insights from Yelp reviews to optimize listings.

- Business Owners wanting quick summaries of what customers love or complain about.

- Reputation Managers who monitor brand sentiment and identify customer pain points.

- Data Analysts & Researchers extracting Yelp review patterns at scale.

- AI Product Builders needing clean Yelp review data as input for their LLMs or recommender systems.

### What problem is this workflow solving?

Yelp reviews are rich in customer sentiment but messy to work with manually. This workflow solves:

- The pain of scraping Yelp review content manually.

- The challenge of building the structured data with the summary.

- The need for structured outputs suitable for analysis, reports, or AI input.

### What this workflow does
This automated pipeline does the following:

- **Bright Data Integration**: Queries Yelp and scrapes business listing data using Bright Data's Web Unlocker.

- **Structured Data Formatting**: Formats the Yelp review data to a structured response in JSON format.

- **Google Gemini Summarization**: Sends the cleaned reviews to Google Gemini to:

- **Output Delivery**: Returns the structured response with the concise summary over the webhook endpoint.

### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1238)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the Yelp Business Review URL with the Bright Data zone by navigating to the **Set Yelp URL with the Bright Data Zone** node.
- Update the **Webhook Notifier for the merged response** node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

This workflow is built to be flexible - whether you’re a market researcher, entrepreneur, or data analyst. Here's how you can adapt it to fit your specific use case:

- **Target Specific Business Categories**
Update the Yelp Business Review input to scrape different businesses like gyms, salons etc.

- **Limit Reviews**
Add filters by description, location, page range to get the top reviews.

- **Tweak the Data Extraction Node**
Update the **Structured Data Extractor** node Output Parser for building the JSON response with the appropriate fields or attributes.

- **Tweak the Summarization Prompt**
Modify the Gemini prompt to generate a comprehensive summary.

- **Send Output to Other Destinations**
Replace the Webhook URL to forward output to:

1. Google Sheets
2. Airtable
3. Slack or Discord
4. Custom API endpoints




## 📊 Basic Information

- **Workflow ID:** 3682
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 604
- **Downloads:** 60
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3682)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×2)
- **set** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **merge** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
