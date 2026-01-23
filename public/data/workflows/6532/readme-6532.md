# Lead gen agent (Telegram)

> 
## Overview
Use your voice or text to command a Telegram-based AI agent that scrapes leads or generates detailed research reports—instantly.

This workflow turns your Telegram bot into a full-blown outbound machine. Just tell it what type of leads you need, and it’ll use Apollo to find and save them into a spreadsheet. Or drop in a LinkedIn profile, and it’ll generate a personalized research dossier with info like job title, company summary, industry insights, and more. It handles voice messages too—just speak your request and get the results sent back like magic.

### Who’s it for
- Cold emailers and growth marketers  
- Solo founders running outbound  
- SDRs doing daily prospecting  
- Agencies building high-quality lead lists or custom research for clients  

### How it works
- Triggered by a message (text or voice) in Telegram  
- If it’s voice, it transcribes using OpenAI Whisper  
- Uses an AI agent to interpret intent: scrape leads or research a person  
- For lead scraping:
  - Gathers criteria (e.g., location, job title) via Telegram  
  - Calls the Apollo API to return fresh leads  
  - Saves the leads to Google Sheets  
- For research reports:
  - Takes a LinkedIn profile link  
  - Uses AI and lead data tools to create a 1-page professional research report  
  - Sends it back to the user via email

### Example outputs
- **Lead scraping**: Populates a spreadsheet with names, roles, LinkedIn links, company info, emails, and more  
- **Research report**: A formatted PDF-style brief with summary of the person, company, and key facts

### How to set up
1. Connect your Telegram bot to n8n  
2. Add your OpenAI credentials (for Whisper + Chat agent)  
3. Plug in your Apollo API key or scraping tool  
4. Replace the example spreadsheet with your own  
5. Customize the prompts for tone or data depth  
6. (Optional) Add PDF generation or CRM sync

### Requirements
- Telegram Bot Token  
- OpenAI API Key  
- Apollo (or other scraping API) credentials  
- LinkedIn URLs for research functionality

### How to customize
- Replace Apollo with Clay, People Data Labs, or another scraping tool  
- Add a CRM push step (e.g. Airtable, HubSpot, Notion)  
- Add scheduling to auto-scrape daily  
- Reformat the research report as a downloadable PDF  
- Change the agent’s tone or role (e.g. “Outreach Assistant,” “Investor Scout,” etc.)


## 📊 Basic Information

- **Workflow ID:** 6532
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 4359
- **Downloads:** 435
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6532)

## 👤 Author

- **Name:** Abdul Mir
- **Username:** @abdulmir

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **switch** 
- **telegramTrigger** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
