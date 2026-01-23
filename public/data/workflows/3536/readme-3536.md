# Extract & summarize Bing Copilot search results with Gemini AI and Bright Data

> ### Who is this for?
This workflow automates the process of querying Bing's Copilot Search, extracting structured data from the results, summarizing the information, and sending a notification via webhook. It leverages the Microsoft Copilot to retrieve search results and integrates AI-powered tools for data extraction and summarization.

### What problem is this workflow solving?

1. **Data Analysts and Researchers**: Who need to gather and summarize information from Bing search results efficiently.​

2. **Developers and Engineers**: Looking to integrate Bing search data into applications or services.​

3. **Digital Marketers and SEO Specialists**: Interested in monitoring search engine results for specific keywords or topics.

### What this workflow does

Manually extracting and summarizing information from search engine results can be time-consuming and error-prone. This workflow automates the process by:​

1. Performing Bing searches using Bright Data's Bing Search API.​

2. Extracting structured data from the search results.​

3. Summarizing the extracted information using AI tools.​

4. Sending the summarized data to a specified endpoint via webhook.

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1240)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Perform a Bing Copilot Request** node with the prompt you wish to perform the search.
- Update the **Structured Data Webhook Notifier** node with the Webhook endpoint of your choice.
- Update the **Summary Webhook Notifier** node with the Webhook endpoint of your choice.


### How to customize this workflow to your needs

1. **Modify Search Queries**: Adjust the search terms to target different topics or keywords.​

2. **Change Data Extraction Logic**: Customize the extraction process to capture specific data points from the search results.​

3. **Alter Summarization Techniques**: Integrate different AI models or adjust parameters to change how summaries are generated.​

4. **Update Webhook Endpoints**: Direct the summarized data to different endpoints as required.​

5. **Schedule Workflow Runs**: Set up automated triggers to run the workflow at desired intervals.


## 📊 Basic Information

- **Workflow ID:** 3536
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 707
- **Downloads:** 70
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3536)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **if** (×2)
- **set** 
- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
