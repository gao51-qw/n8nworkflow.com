# Generate beauty brand hashtags with Gemini AI, website analysis and SerpAPI

> ## Description

This n8n template generates high-quality, platform-ready hashtags for beauty and skincare brands by combining AI, live website analysis, and current social media trends. It is designed for marketers, agencies, and founders who want smarter hashtag strategies without manual research.

## Use cases
- Beauty & skincare brands building social media reach
- Agencies managing multiple client accounts
- Content teams creating Instagram, LinkedIn, or Facebook posts
- Founders validating brand positioning through hashtags

## What this template demonstrates
- Form-based user input in n8n
- Website scraping with HTTP Request
- AI-driven brand analysis using Gemini
- Structured AI outputs with output parsers
- Live trend research using search tools
- Automated storage in Google Sheets

## How it works
Users submit brand details through a form. The workflow scrapes the brand’s website, analyzes it with AI, generates tailored hashtags, enriches them with platform-specific trends, and stores the final result in Google Sheets.

## How to use
1. Activate the workflow  
2. Open the form URL  
3. Enter brand details and website URL  
4. Submit the form  
5. View generated hashtags in Google Sheets  

## Requirements
- Google Gemini API credentials  
- Google Sheets account  
- SerpAPI account for trend research  

## Good to know
- Website scraping is best suited for public, text-rich sites  
- Hashtags are generated dynamically based on brand tone and audience  
- You can reuse the Google Sheet as a hashtag library  

## Customising this workflow
- Change the number of hashtags generated
- Modify the AI prompt for different industries
- Add filters for banned or restricted hashtags
- Extend the workflow to auto-post to social platforms


## 📊 Basic Information

- **Workflow ID:** 12057
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 29
- **Downloads:** 2
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12057)

## 👤 Author

- **Name:** Dinakar Selvakumar
- **Username:** @jamesdinakar

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **googleSheets** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
