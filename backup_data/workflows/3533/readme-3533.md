# Google search engine results page extraction and summarization with Bright Data

> ### Who this is for?
This workflow is designed for professionals and teams who need real-time, structured insights from Google Search results without manual effort.

### What problem is this workflow solving? 
This n8n workflow solves the problem of automating Google Search result extraction, cleanup, summarization, and AI-enhanced formatting for downstream use like sending the results to a webhook or another system. 

### What this workflow does

1. Automates Google Search via Bright Data
 - Uses Bright Data’s proxy-based SERP API to run a Google Search query programmatically. 
 - Makes the process repeatable and scriptable with different search terms and regions/zones.

2. Cleans and Extracts Useful Content
 - The **Google Search Data Extractor** uses LLM based cleaning to remove HTML/CSS/JS from the response and extract pure text data. 
 - Converts messy, unstructured web content into structured, machine-readable format.

3. Summarizes Search Results
Through the Gemini Flash + Summarization Chain, it generates a concise summary of the search results. Ideal for users who don’t have time to read full pages of search results.

4. Formats Data Using AI Agent
The AI Agent acts like a virtual assistant that: 
- Understands search results
- Formats them in a readable, JSON-compatible form
- Prepares them for webhook delivery

5. Delivers Results to Webhook
Sends the final summary + structured search result to a webhook (could be your app, a Slack bot, Google Sheets, or CRM).

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1234)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the Google Search query as you wish by navigating to the **Set Google Search Query** node.
- Update the **Webhook HTTP Request** node with the Webhook endpoint of your choice.

### How to customize This Workflow to your needs

**1. Change the Search Input**

Default: It searches a fixed query or dataset.

Customize:
- Accept input from a Google Sheet, Airtable, or a form.
 - Auto-trigger searches based on keywords or schedules.

**2. Customize Summarization Style (LLM Output)**

Default: General summary using Google Gemini or OpenAI.

Customize:

- Add tone: formal, casual, technical, executive-summary, etc.

- Focus on specific sections: pricing, competitors, FAQs, etc.

- Translate the summaries into multiple languages.

- Add bullet points, pros/cons, or insight tags.

**3.Choose Where the Results Go**

Options:

- Email, Slack, Notion, Airtable, Google Docs, or a dashboard.

- Auto-create content drafts for WordPress or newsletters.

- Feed into CRM notes or attach to Salesforce leads.


## 📊 Basic Information

- **Workflow ID:** 3533
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3591
- **Downloads:** 359
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3533)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
