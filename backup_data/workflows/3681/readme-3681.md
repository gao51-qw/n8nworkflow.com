# Extract Amazon best seller electronic info with Bright Data and Google Gemini

> ### Who this is for?

Extract Amazon Best Seller Electronic Info is an automated workflow that extracts best seller data from Amazon's Electronics section using Bright Data Web Unlocker, transform it into structured JSON using Google Gemini's LLM, and forwards a fully structured JSON response to a specified webhook for downstream use.

This workflow is tailored for:

- **eCommerce Analysts**
Who need to monitor Amazon best-seller trends in the Electronics category and track changes in real-time or on a schedule.

- **Product Intelligence Teams**
Who want structured insights on competitor offerings, including rankings, prices, ratings, and promotions.

- **AI-powered Chatbot Developers**
Who are building assistants capable of answering product-related queries with fresh, structured data from Amazon.

- **Growth Hackers & Marketers**
Looking to automate competitive research and surface trending product data to inform pricing strategies.

- **Data Aggregators and Price Trackers**
Who need reliable and smart scraping of Amazon data enriched with AI-driven parsing.

### What problem is this workflow solving?
Keeping up with Amazon's best sellers in Electronics is a time-consuming, error-prone task when done manually.This workflow automates the process, ensuring:​

- Automating Data Extraction from Amazon Best Sellers using Bright Data, ensuring reliable access to real-time, structured data.

- Enhancing Raw Data with Google Gemini, turning product lists into structured JSON using the Google Gemini LLM.

- Sending Results to a Webhook, enabling seamless integration into dashboards, databases, or chatbots.

### What this workflow does

The workflow performs the following steps:​

- Extracts Amazon Best Seller Electronics page info using Bright Data's Web Unlocker API.

- Processes the unstructured content using Google Gemini's Flash Exp model to extract structured product data.

- Sends the structured information to a webhook endpoint.

### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1237)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the Amazon URL with the Bright Data zone by navigating to the **Amazon URL with the Bright Data Zone** node.
- Update the Webhook HTTP Request node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

This workflow is built to be flexible - whether you're a market researcher, e-commerce entrepreneur, or data analyst. Here's how you can adapt it to fit your specific use case:

- **Change the Amazon Category**
Update the Amazon URL with the topic of your interest such as Computers & Accessories, Home Audio, etc.

- **Customize the Gemini Prompt**
Update the Gemini prompt to get different styles of output — comparison tables, summaries, feature highlights, etc.

- **Send Output to Other Destinations**
Replace the Webhook URL to forward output to:

1. Google Sheets
2. Airtable
3. Slack or Discord
4. Custom API endpoints





## 📊 Basic Information

- **Workflow ID:** 3681
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2907
- **Downloads:** 290
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3681)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
