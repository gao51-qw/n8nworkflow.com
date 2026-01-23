# Summarize Glassdoor company info with Google Gemini and Bright Data web scraper

> ### Who is this for?
This workflow is designed for HR professionals, employer branding teams, talent acquisition strategists, market researchers, and business intelligence analysts who want to monitor, understand, and act upon employee sentiment and company perception on Glassdoor.

It's ideal for organizations that value real-time feedback, are tracking employer brand perception, or need summarized insights for leadership reporting without sifting through thousands of raw reviews.

### What problem is this workflow solving?
Manually reviewing and analyzing Glassdoor reviews is tedious, subjective, and not scalable especially for larger companies or those with many subsidiaries.
This workflow:
- Automates review collection by making a Glassdoor company request via the Bright Data Web Scrapper API.
- Uses Google Gemini to summarize the content.
- Sends an actionable summary to HR dashboards, leadership teams, or alert systems via the Webhook notification.


### What this workflow does
- Makes an HTTP Request to Glassdoor via the Bright Data Web Scrapper API.
- Polls the BrightData Glassdoor for the completion of the request.
- Downloads the Glassdoor response when a new snapshot is ready.
- Sends the prompt to Google Gemini for summarization.
- Delivers the summarized insights (strengths, weaknesses, sentiment, patterns) to a configured webhook or dashboard endpoint.

### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1236)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- A webhook or endpoint to receive the summary (e.g., Slack, Notion, or custom HR dashboard).

### How to customize this workflow to your needs

1.  Change Summary Focus by updating the **Summarization of Glassdoor Response** node Summarization methods and prompts to extract specific insights:
- Cultural feedback
- Leadership issues
- Compensation comments
- Exit motivation
2. Update the **HTTP Request to Glassdoor** node with a specific Glassdoor Company information that you are looking for.
3. Format the output to produce a customized summary to Markdown or HTML for rich delivery.
4. Integrate with HR Systems
- BambooHR, Workday, SAP SuccessFactors via API.
- Google Sheets or Airtable
 	

## 📊 Basic Information

- **Workflow ID:** 3532
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1635
- **Downloads:** 163
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3532)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **if** 
- **set** 
- **stickyNote** (×2)
- **httpRequest** (×4)
- **wait** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
