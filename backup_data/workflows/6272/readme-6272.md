# Track top social media trends with Reddit, Twitter, and GPT-4o to SP/Drive

> ## Who’s it for  
Content creators, marketers, journalists, and product teams who need a quick, automated snapshot of what the internet is talking about—served as a ready-to-use spreadsheet every morning.

## How it works / What it does  
1. **Manual Trigger / Cron** starts the flow.  
2. **Set Config** picks today’s date and a topic keyword (default “Artificial Intelligence”).  
3. **API calls** gather trend data:  
   • **Reddit API** → /r/artificial “hot” posts.  
   • **Twitter (X) Trends** via our own plemeo endpoint or any other social API.  
   (Add additional sources before the **Merge Data** node—Instagram, YouTube, TikTok, etc.)  
4. **Aggregate Content** concatenates raw titles; **AI Agent** (GPT-4o) analyses them and returns the top 5 trends in JSON.  
5. **Prepare Excel** formats each trend into rows; **Create Excel** turns them into an `.xlsx` file.  
6. **Upload** the file to **SharePoint** (swap for Google Drive, Dropbox, S3—just replace the node).  

## How to set up  
1. Import the template into n8n (cloud or self-hosted).  
2. Create credentials: Reddit OAuth2, OpenAI, and your preferred storage (SharePoint, Drive, etc.).  
3. In **Set Config** choose your default `topic`; adjust the cron schedule if required.  
4. If you’re using Google Drive/Dropbox: delete the SharePoint node and add the corresponding upload node instead.  
5. (Optional) Add more APIs—duplicate **Merge Data** inputs and map their results in **Aggregate Content**.  
6. Save & activate. A spreadsheet called `social-media-trends.xls` appears in your target folder each run.

## Requirements  
- n8n 1.33 +  
- Reddit app (OAuth2)  
- OpenAI account
- One storage credential: SharePoint, Google Drive, Dropbox, or any other supported provider

## How to customize  
- Change the number of trends: edit the limit in **Aggregate Content** and the prompt in **AI Agent**.  
- Want CSV instead of Excel? Swap **Create Excel** for **Spreadsheet File → to File (CSV)**.  
- Push trends to Slack/Teams: branch after **Prepare Excel** and add a chat node.  
- Fully serverless? Trigger via webhook instead of manual/cron.

## 📊 Basic Information

- **Workflow ID:** 6272
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 834
- **Downloads:** 83
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6272)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **merge** 
- **code** (×2)
- **spreadsheetFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **microsoftSharePoint** 
- **set** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
