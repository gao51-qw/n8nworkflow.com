# Transform Reddit discussions into LinkedIn post ideas with GPT-4o and Google Sheets

> ## Who’s it for  
This workflow is for **marketers, founders, and content strategists** who want to identify **business opportunities** by analyzing Reddit discussions. It’s ideal for **B2B, SaaS, and tech professionals** looking for fresh LinkedIn post ideas or trend insights.

## How it works / What it does  
This workflow automatically:  
1. **Fetches Reddit posts & comments** based on a selected subreddit and keyword.  
2. **Extracts pain points & insights** using OpenAI (ChatGPT) to identify key frustrations and trends.  
3. **Generates LinkedIn post ideas** with headlines, hooks, and CTAs tailored for professional audiences.  
4. **Saves all results into Google Sheets** for easy tracking, editing, and sharing.

It uses AI to turn unstructured Reddit conversations into actionable content marketing opportunities.

## How to set up  
1. Clone this workflow in your n8n instance.  
2. **Configure credentials**:  
   - **Reddit OAuth2** (for fetching posts & comments)  
   - **OpenAI API key** (no hardcoding—use credentials in n8n)  
   - **Google Sheets OAuth2** (for output)  
3. Run the workflow or trigger it using the built-in **Form Trigger** (provide subreddit & keyword).  
4. Check the generated **Google Sheet** for analyzed insights and post suggestions.

## Requirements  
- n8n (self-hosted or cloud)  
- Reddit account with API credentials  
- OpenAI API key (GPT-4o recommended)  
- Google Sheets account  

## How to customize the workflow  
- Change the **AI prompt** to adjust tone or depth of insights.  
- Add filtering logic to target posts with higher engagement.  
- Modify the Google Sheets output schema to include custom fields.  
- Extend it with Slack/Email notifications to instantly share top insights.

## 📊 Basic Information

- **Workflow ID:** 6383
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 637
- **Downloads:** 63
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6383)

## 👤 Author

- **Name:** clearcue.ai
- **Username:** @clearcue

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** (×2)
- **reddit** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **filter** 
- **aggregate** 
- **set** (×4)
- **merge** (×2)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
