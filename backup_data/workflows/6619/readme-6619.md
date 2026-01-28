# Analyze competitor LinkedIn posts with Bright Data + Google Gemini to Google Sheets

> markdown*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically analyzes competitor LinkedIn posts to extract strategic insights and engagement patterns. It saves you time by eliminating manual competitive analysis and provides actionable marketing intelligence from your competitors' social media activity.

## Overview
This workflow automatically scrapes LinkedIn post data including engagement metrics, comments, and content details, then uses AI to analyze the post's intent, effectiveness, and key marketing takeaways. It transforms raw LinkedIn data into structured competitive intelligence stored in Google Sheets.

## Tools Used
* **n8n**: The automation platform that orchestrates the workflow
* **Bright Data**: For scraping LinkedIn post data without restrictions
* **Google Gemini**: AI agent for intelligent post analysis and insight extraction
* **Google Sheets**: For storing structured competitive intelligence data

## How to Install
1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the scraping node
3. **Set Up Google Gemini**: Configure your Google Gemini API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and copy the template spreadsheet
5. **Customize**: Simply paste any LinkedIn post URL and run the workflow

## Use Cases
* **Marketing Teams**: Understand what content drives engagement for competitors
* **Content Strategists**: Identify successful post formats and messaging strategies
* **Social Media Managers**: Benchmark your content performance against industry leaders
* **Agencies/Consultants**: Offer LinkedIn competitive analysis as a service to clients

## Connect with Me
* **Website**: https://www.nofluff.online
* **YouTube**: https://www.youtube.com/@YaronBeen/videos
* **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
* **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #linkedinanalytics #competitiveintelligence #brightdata #webscraping #marketinga

## 📊 Basic Information

- **Workflow ID:** 6619
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 669
- **Downloads:** 66
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6619)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **manualTrigger** 
- **set** 
- **@brightdata/n8n-nodes-brightdata.brightData** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
