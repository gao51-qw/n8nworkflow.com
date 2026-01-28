# Extract & analyze brand content with Bright Data and Google Gemini

> ### Who this is for?

The Brand Content Extract, Summarization & Sentiment Analysis workflow is designed for professionals and teams who need to monitor, understand, and act on public brand perception at scale. 

It is ideal for:

1. **Brand Managers** - Looking to track how their brand is portrayed online.

2. **Marketing Analysts** - Seeking insights from competitor and industry content.

3. **PR & Communications Teams** - Evaluating media tone and potential reputation risks.

4. **Data Scientists & AI Developers** - Automating content intelligence pipelines.

5. **Growth Hackers** - Performing large-scale web listening for campaign optimization.

### What problem is this workflow solving?

Manually tracking and interpreting how your brand is mentioned across blogs, news sites, or product reviews is labor-intensive and unscalable. Traditional scraping tools return raw data but lack insights like summarization, sentiment analysis etc.

This workflow addresses:

- Scalable extraction of brand-related content using Bright Data's infrastructure.

- Textual data extract for easy decision-making or alerting.

- Automated summarization of verbose or multi-paragraph articles using Gemini.

- Sentiment analysis of how a brand is being portrayed.

### What this workflow does

- Receives input: A brand URL for the data extraction and analysis.

- Uses Bright Data's Web Unlocker to extract content from relevant sites.

- Cleans and preprocesses the scraped content for readability.

- Sends the content to Google Gemini for:

	- Enriched results including:

		- Cleaned content

		- Summary

		- Sentiment Analysis

		- Sends the response to a target system via Webhook notification
		- Perists the response to disk

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1229)
The Value field should be set with the 
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set URL and Bright Data Zone** for setting the brand content URL and the Bright Data Zone name.
- Update the Webhook HTTP Request node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

- **Update Source** : Update the workflow input to read from Google Sheet or Airbase for dynamically tracking multiple brands or topics.
- **AI Prompt Customization** : Tailor Gemini prompts for: 
	- Summary length (brief vs. detailed)

	- Detailed Sentiment with the custom structured data format.

	- Brand-specific tone detection (e.g., trust, excitement, dissatisfaction)

- **Output Destinations**: Configure the output node to send the responses to various platforms, such as Slack, CRM systems, or databases.

## 📊 Basic Information

- **Workflow ID:** 3846
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 629
- **Downloads:** 62
- **Created:** 2025/5/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3846)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **function** (×3)
- **readWriteFile** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
