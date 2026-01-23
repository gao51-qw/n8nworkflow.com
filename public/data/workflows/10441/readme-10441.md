# Weekly Facebook ads performance reports with AI-powered analysis & Gmail delivery

> ## Who’s it for
Perfect for **marketing agencies** that manage multiple Facebook ad accounts and want to automate their weekly reporting. It eliminates manual data collection, analysis, and client updates by delivering a ready-to-share PDF report.

## How it works
Every Monday, the workflow:
1. Fetches the previous week’s campaign metrics from the Facebook Graph API.  
2. Formats and summarizes each campaign’s performance using OpenAI.  
3. Merges all summaries into one comprehensive report with insights and next-week suggestions.  
4. Converts the report into a polished PDF using any PDF generation API.  
5. Sends the final PDF report automatically to the client via Gmail.

## How to set up
1. Connect your **Facebook**, **OpenAI**, and **Gmail** accounts in n8n.  
2. Add credentials for your preferred PDF generator (e.g., PDFCrowd, Placid, etc.).  
3. Open the “Set Node” to customize recipient email, date range, or report text.  

## Requirements
- Facebook Graph API access token  
- OpenAI API key  
- Gmail credentials  
- API key for your PDF generation service  

## How to customize
You can modify the trigger day, personalize the report design, or include additional analytics such as ROAS, CPC, or conversion data for deeper insights.


## 📊 Basic Information

- **Workflow ID:** 10441
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 548
- **Downloads:** 54
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10441)

## 👤 Author

- **Name:** Muhammad Ali
- **Username:** @ali01

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **code** 
- **httpRequest** (×2)
- **scheduleTrigger** 
- **aggregate** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
