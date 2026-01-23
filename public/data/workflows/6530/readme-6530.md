# Generate personalized icebreakers

> 
## Overview

Create hyper-personalized cold outreach messages at scale by combining Google Sheets, web scraping, and AI.
This workflow is perfect for sales teams, SDRs, and agency owners looking to boost reply rates with icebreakers that *actually feel personal*. It takes lead info from a Google Sheet—including name, email, company, and website—then visits each site, pulls meaningful text, and crafts a tailored message using AI. The personalized message is then written back into your lead sheet, ready for use in cold email, LinkedIn DMs, or CRM enrichment.

### Who’s it for
- Cold email outreach specialists  
- B2B sales and SDR teams  
- Lead generation agencies  
- Founders doing outbound manually  

### How it works
- Pull lead data from Google Sheets  
- Loop through each lead and scrape their website using an HTTP node  
- Clean and format the website content  
- Use OpenAI to generate a custom-written icebreaker for each lead  
- Write the final icebreaker back into the spreadsheet

### How to set up
1. Connect your Google Sheets account  
2. Replace the spreadsheet ID and column names with your own  
3. Set up your OpenAI credentials (or whichever LLM you prefer)  
4. Tweak the prompt for tone or style  
5. Hit "Execute Workflow" and watch the sheet populate

### Requirements
- Google Sheets credentials  
- OpenAI (or any compatible LLM node)  
- The websites listed must be publicly accessible and static

### How to customize
- Modify the scraping logic to focus on specific sections (e.g. About page, Case Studies)  
- Adjust the AI prompt to match your brand’s tone  
- Add filtering logic to skip low-value leads  
- Integrate with your CRM to send the data downstream

## 📊 Basic Information

- **Workflow ID:** 6530
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1235
- **Downloads:** 123
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6530)

## 👤 Author

- **Name:** Abdul Mir
- **Username:** @abdulmir

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** (×2)
- **httpRequest** 
- **markdown** 
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **limit** 
- **manualTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
