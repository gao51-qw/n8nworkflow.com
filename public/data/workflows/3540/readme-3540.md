# Generate company stories from LinkedIn with Bright Data & Google Gemini

> ### Who this is for?

The LinkedIn Company Story Generator is an automated workflow that extracts company profile data from LinkedIn using Bright Data's web scraping infrastructure, then transforms that data into a professionally written narrative or story using a language model (e.g., OpenAI, Gemini). The final output is sent via webhook notification, making it easy to publish, review, or further automate.

This workflow is tailored for:​

- **Marketing Professionals**: Seeking to generate compelling company narratives for campaigns.​

- **Sales Teams**: Aiming to understand potential clients through summarized company insights.​

- **Content Creators**: Looking to craft stories or articles based on company data.​

- **Recruiters**: Interested in obtaining concise overviews of companies for talent acquisition strategies.​

### What problem is this workflow solving?

Manually gathering and summarizing company information from LinkedIn can be time-consuming and inconsistent. This workflow automates the process, ensuring:​

- **Efficiency**: Quick extraction and summarization of company data.​

- **Consistency**: Standardized summaries for uniformity across use cases.​

- **Scalability**: Ability to process multiple companies without additional manual effort.

### What this workflow does

The workflow performs the following steps:​

- **Input Acquisition**: Receives a company's name or LinkedIn URL as input.​

- **Data Extraction**: Utilizes Bright Data to scrape the company's LinkedIn profile.​

- **Information Parsing**: Processes the extracted HTML content to retrieve relevant company details.​

- **Summarization**: Employs AI Google Gemini to generate a concise company story.

- **Output Delivery**: Sends the summarized content to a specified webhook or email address.

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1230)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the LinkedIn URL by navigating to the **Set LinkedIn URL** node.
- Update the **Webhook HTTP Request** node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

- **Input Variations**: Modify the **Set LinkedIn URL** node to accept a different company LinkedIn URL.

- **Data Points**: Adjust the HTML Data Extractor Node to retrieve additional details like employee count, industry, or headquarters location.​

- **Summarization Style**: Customize the AI prompt to generate summaries in different tones or formats (e.g., formal, casual, bullet points).​

- **Output Destinations**: Configure the output node to send summaries to various platforms, such as Slack, CRM systems, or databases.



## 📊 Basic Information

- **Workflow ID:** 3540
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1043
- **Downloads:** 104
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3540)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **if** (×2)
- **set** (×2)
- **httpRequest** (×5)
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
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
