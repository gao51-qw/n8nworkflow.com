# Automated NASA patent lead generation & scoring with OpenAI, Google, and Notion

> ## Who is this for
This workflow is designed for **Innovation Managers**, **Tech Transfer Offices**, and **Business Development Representatives** looking to find commercial partners for new technologies.

## What it does
This template automates the process of scouting startups that might be a good fit for NASA patents.

1. **Search**: It fetches patents from the NASA Tech Transfer API based on a keyword you define.
2. **Find**: It searches Google to identify startups operating in related fields.
3. **Enrich**: It crawls the identified startup's website to extract context about their business.
4. **Analyze**: Using OpenAI, it scores the "fit" between the patent and the startup and drafts a personalized outreach email.
5. **Save**: High-scoring leads are enriched with LinkedIn company pages and saved directly to a Notion database.

## How to set up
1. **Configuration**: In the **Configuration** node, set the `keyword` variable to the technology topic you want to search for (e.g., "robotics").
2. **NASA API**: Get a free API key from `api.nasa.gov` and enter it in the **NASA Patents API** node parameters.
3. **Apify**: Connect your Apify account credential. You will need credits to run the `google-search-scraper` and `website-content-crawler` actors.
4. **OpenAI**: Connect your OpenAI credential.
5. **Notion**: Create a database with the following properties and connect it in the **Create Notion Lead** node:
   - `Company` (Text)
   - `Website` (URL)
   - `LinkedIn` (URL)
   - `Email` (Email)
   - `Score` (Number)
   - `Draft Email` (Text)
   - `NASA Tech` (Text)

## Requirements
- **NASA API Key**: Free to obtain.
- **Apify Account**: Requires `google-search-scraper` and `website-content-crawler` actors.
- **OpenAI API Key**: For analysis and text generation.
- **Notion Account**: To store the leads.

## 📊 Basic Information

- **Workflow ID:** 11309
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 47
- **Downloads:** 4
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11309)

## 👤 Author

- **Name:** Takumi Oku
- **Username:** @oku09

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** 
- **splitInBatches** 
- **@apify/n8n-nodes-preview-apify.apify** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **notion** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
