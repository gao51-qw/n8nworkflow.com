# Analyze Meta Ad Library Video Ads with Gemini and store results in Google Sheets

> # Meta Ads Analyzer

This n8n template builds an automated system to scrape, analyze, and extract insights from Meta advertising content. The workflow uses AI to perform deep analysis of video ads and organize the results in a structured format.

**How it works**
* The workflow connects to Facebook's Ad Library to scrape video ads based on a specified page ID.
* Videos are filtered by reach and processed through Google's Gemini AI to analyze their content.
* Each video is systematically analyzed for its hook, transcript, advertising format, concept, and narrative structure.
* Results are processed through an AI agent that structures the data into standardized fields.
* All analysis is saved to a Google Sheet for easy access and further processing.

**How to use**
Once you've set up your Credentials and configured the output:
* Configure the Google Sheets connection for data output.
* Specify the Meta Ad Library URL you want to analyze.
* Adjust the maximum number of ads to scrape and analyze based on your needs.
* Click "Test Workflow" to start the analysis process.

**Requirements**
* Apify account (for Meta Ad Library scraping)
* Google Gemini 
* Google Sheets 

**Customizing this workflow**
* Modify the AI prompts in the Settings node to extract different information from the videos.
* Adjust the output formats in the AI Agent and Structured Output Parser nodes.
* Change the Google Sheets mapping to match your desired output structure.
* Increase the number of ads analyzed for more comprehensive research.

## 📊 Basic Information

- **Workflow ID:** 3069
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 2264
- **Downloads:** 226
- **Created:** 2025/3/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3069)

## 👤 Author

- **Name:** Daniel Setzermann
- **Username:** @danielsetzermann

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** (×2)
- **stickyNote** (×4)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **wait** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **sort** 
- **filter** 
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
