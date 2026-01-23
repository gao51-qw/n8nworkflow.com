# Scrape & analyse Meta Ad Library image ads with Apify and OpenAI

> **Meta Image Ads Analyzer**
This n8n template builds an automated system to scrape, analyze, and extract insights from Meta advertising content. The workflow uses AI to perform deep analysis of image ads and organize the results in a structured format.

**How it works**
* The workflow connects to Facebook's Ad Library to scrape image ads based on a specified page ID.
* Images are filtered by reach and days running, then processed through OpenAI's GPT-4o to analyze their content.
* Each image ad is systematically analyzed to extract key components: visual description, hook elements, main offer, call-to-action, and psychological triggers.
* Results are processed through an AI agent that structures the data into standardized fields.
* Original images are saved to Google Drive for reference.
* All analysis and metadata are saved to a Google Sheet for easy access and further processing.

**How to use** 
Once you've set up your credentials and configured the output:
* Enter the Meta Ad Library URL you want to analyze in the Settings node.
* Adjust the maximum number of ads to scrape and analyze based on your needs (defaults: 300 to scrape, 10 to analyze).
* Configure the Google Drive folder to save the original ad images.
* Ensure your Google Sheets connection is set up to receive the structured analysis.
* Click "Test Workflow" to start the analysis process.

**Requirements**
* Apify account (for Meta Ad Library scraping)
* OpenAI API key (for image analysis)
* Google Drive and Google Sheets access

**Customizing this workflow**
* Modify the AI prompts in the "Analyze Image Contents" node to extract different information from the images.
* Adjust the output formats in the Structured Output Parser node.
* Change the Google Sheets mapping to match your desired output structure.
* Increase the number of ads analyzed for more comprehensive research.
* Filter ads based on different criteria by modifying the "Filter only Image Ads" node.

## 📊 Basic Information

- **Workflow ID:** 4003
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1665
- **Downloads:** 166
- **Created:** 2025/5/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4003)

## 👤 Author

- **Name:** Daniel Setzermann
- **Username:** @danielsetzermann

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **code** 
- **httpRequest** (×2)
- **sort** 
- **filter** 
- **limit** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** 
- **merge** 
- **googleSheets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
