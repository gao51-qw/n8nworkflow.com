# Reddit comment sentiment analysis with Bright Data and Gemini AI to Google Sheets

> 
This workflow automatically analyzes Reddit comments to understand public sentiment and community reactions. It saves you hours of manual reading by using AI to classify comments as positive, negative, or neutral, providing instant insights into how people feel about any Reddit post.

## Overview
This workflow scrapes Reddit post comments using Bright Data's web scraping capabilities, then uses Google Gemini AI to analyze the sentiment of each comment. The results are automatically saved to Google Sheets with the comment text, sentiment classification, and reasoning behind each classification.

## Tools Used
* **n8n**: The automation platform that orchestrates the workflow
* **Bright Data**: For scraping Reddit comments without restrictions or rate limits
* **Google Gemini**: AI model for intelligent sentiment analysis
* **Google Sheets**: For storing and tracking sentiment analysis results

## How to Install
1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the scraping nodes
3. **Set Up Google Gemini**: Configure your Google Gemini API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and copy the template spreadsheet
5. **Customize**: Simply paste any Reddit post URL and run the workflow

## Use Cases
* **Brand Monitoring**: Track sentiment around your brand or products on Reddit
* **Product Managers**: Understand user feedback and pain points from Reddit discussions
* **Market Research**: Analyze community reactions to news, launches, or announcements
* **Community Managers**: Monitor sentiment trends and identify issues early
* **Content Creators**: Gauge audience reactions to topics before creating content

## Connect with Me
* **Website**: https://www.nofluff.online
* **YouTube**: https://www.youtube.com/@YaronBeen/videos
* **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
* **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #sentimentanalysis #reddit #brightdata #webscraping #marketresearch #n8nworkflow #workflow #nocode #brandmonitoring #communityanalysis #redditanalytics #customersentiment #sociallistening #aianalysis #publicsentiment #marketintelligence #userresearch #communityinsights #redditmonitoring #sentimenttracking #customervoice #brandreputation #socialmediaanalysis #consumerinsights #feedbackan

## 📊 Basic Information

- **Workflow ID:** 6620
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 439
- **Downloads:** 43
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6620)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **manualTrigger** 
- **set** 
- **@brightdata/n8n-nodes-brightdata.brightData** (×2)
- **wait** 
- **limit** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
