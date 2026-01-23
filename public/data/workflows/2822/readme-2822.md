# AI-generated summary block for WordPress posts

> ## What is this workflow?  
This **n8n template** automates the process of adding an **AI-generated summary** at the top of your WordPress posts.  
It **retrieves, processes, and updates** your posts dynamically, ensuring efficiency and flexibility without relying on a heavy WordPress plugin.  

## Example of AI Summary Section

![Example of AI Summary Section](https://i.imgur.com/XkNKJsJ.png)  

## How It Works  
1. **Triggers** → Runs on a **scheduled interval** or via a **webhook** when a new post is published.  
2. **Retrieves posts** → Fetches content from WordPress and converts HTML to Markdown for AI processing.  
3. **AI Summary Generation** → Uses OpenAI to create a concise summary.  
4. **Post Update** → Inserts the summary at the top of the post while keeping the original excerpt intact.  
5. **Data Logging & Notifications** → Saves processed posts to **Google Sheets** and notifies a **Slack channel**.  

## Why use this workflow?  
✅ **No need for a WordPress plugin** → Keeps your site lightweight.  
✅ **Highly flexible** → Easily connect with **Google Sheets, Slack, or other services**.  
✅ **Customizable** → Adapt AI prompts, formatting, and integrations to your needs.  
✅ **Smart filtering** → Ensures posts are not reprocessed unnecessarily.  

💡 *Check the detailed sticky notes for setup instructions and customization options!*  


## 📊 Basic Information

- **Workflow ID:** 2822
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 2775
- **Downloads:** 277
- **Created:** 2025/1/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2822)

## 👤 Author

- **Name:** Dataki
- **Username:** @dataki

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitInBatches** 
- **if** 
- **webhook** 
- **scheduleTrigger** 
- **httpRequest** 
- **googleSheets** (×2)
- **markdown** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **set** (×2)
- **stickyNote** (×11)
- **dateTime** 
- **wordpress** (×4)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
