# Extract and structure Hacker News job posts with Gemini AI and save to Airtable

> ## Workflow Overview

This workflow automatically fetches the latest "Ask HN: Who is hiring?" posts from Hacker News, extracts individual job listings, cleans the raw text, converts them into structured job listings using Google Gemini AI, and saves them into Airtable.

## Components

It’s a full end-to-end automation system combining:

* **Algolia API** for HN data
* **Text cleaning**
* **Gemini AI (via LangChain)** for parsing job descriptions
* **Structured JSON extraction**
* **Airtable integration** to store the final data

## 🎯 Use Cases

* Automatically build a job board from HN posts
* Track startup hiring trends
* Feed remote job alerts into a CRM or Slack
* Enrich a hiring intelligence database

## 🔧 Nodes & Services Used

* HTTP Request (Algolia + Firebase API)
* SplitOut, Set, Filter, Function, Limit
* Google Gemini (via LangChain integration)
* Output Parser Structured
* Airtable (API token required)

## 📌 Credentials Required

* Google Gemini (PaLM/Gemini API)
* Airtable Personal Access Token
* Algolia Application ID & API Key (via Header Auth)

## 📦 Tags

hacker-news, jobs, airtable, ai, gemini, automation, hn, langchain, workflow

## Screenshots

![Screen Shot 20250521 at 5.56.21 PM.png](fileId:1352)


## 📊 Basic Information

- **Workflow ID:** 4278
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 701
- **Downloads:** 70
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4278)

## 👤 Author

- **Name:** Puspak
- **Username:** @dpreddy

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** (×3)
- **set** (×2)
- **filter** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** (×2)
- **limit** 
- **airtable** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
