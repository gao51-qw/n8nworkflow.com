# Generate personalized cold email icebreakers with GPT-4O-mini and Google Sheets

> ## How it works
This workflow helps you supercharge your cold email campaigns by enriching leads in Google Sheets with AI-generated personalization.  
For every lead in your sheet, the workflow:  
1. Fetches rows from Google Sheets  
2. Loops through each lead one by one  
3. Uses OpenAI to generate:  
   - A personalized cold email icebreaker  
   - A shortened version of the company name  
4. Saves the results back into your Google Sheet  

The result: a lead list that’s instantly ready for highly personalized cold outreach.  

## Setup steps
1. Connect your **Google Sheets account** and select the sheet with your leads.  
   - Your sheet should have columns like: first name, last name, company name, industry, city, etc.  
   - Adjust the column mapping in the “Update Row in Sheet” node to match your sheet’s structure.  
2. Connect your **OpenAI account** in the “Message a Model” node.  
3. Optionally, tweak the AI prompt to match your preferred tone of voice for icebreakers.  
4. Click **Execute Workflow** whenever you want to enrich your sheet with new personalized content.  

## Requirements
- OpenAI account (API key)  
- Google Sheets account with a lead list  
- n8n instance (self-hosted or cloud)  


## 📊 Basic Information

- **Workflow ID:** 8070
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 627
- **Downloads:** 62
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8070)

## 👤 Author

- **Name:** Rodrigo
- **Username:** @rodrigonzalezsyncra

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **splitInBatches** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
