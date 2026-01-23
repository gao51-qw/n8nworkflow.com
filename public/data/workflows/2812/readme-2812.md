# Scrape any web page into structured JSON data with ScrapeNinja and AI

> Disclaimer: This template only works on self-hosted for now, as it uses a community node.

## Use Case
Web scrapers often break due to web page layout changes.
This workflow attempts to mitigate this problem by auto-generating web scraping data extractor code via LLM.

## How It Works
This workflow leverages ScrapeNinja n8n community node to: 
- scrape webpage HTML, 
- feed it into LLM (Google Gemini) and ask to write a JS extractor function code, then it 
- executes the written JS extractor against scraped HTML to extract useful data from webpage (the code is safely executed in a sandbox)

## Installation
To install ScrapeNinja n8n node, in your self-hosted instance, go to Settings -&gt; Community nodes, enter "n8n-nodes-scrapeninja", and install. 

Make sure you are using at least v0.3.0. 

See this in action:
https://www.linkedin.com/feed/update/urn:li:activity:7289659870935490560/



## 📊 Basic Information

- **Workflow ID:** 2812
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 56950
- **Downloads:** 5695
- **Created:** 2025/1/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2812)

## 👤 Author

- **Name:** Anthony
- **Username:** @scrapeninja

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **CUSTOM.scrapeNinja** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
