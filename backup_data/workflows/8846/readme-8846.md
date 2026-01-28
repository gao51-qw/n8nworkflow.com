# Capture and process ideas with GPT-4o-mini, Notion and Slack notifications

> ## How it works

This workflow captures idea submissions from a webhook and enriches them using AI.  
It extracts key fields like Title, Tags, Submitted By, and Created date in IST format.  
The cleaned data is stored in a Notion database for centralized tracking.  
Finally, a confirmation message is posted in Slack to notify the team.

## Step-by-step

## Step-by-step

**1. Capture and process submission**  
- **Webhook** – Receives idea submissions with text and user ID.  
- **AI Agent & OpenAI Model** – Enrich and structure the input into Title, Tags, Submitted By, and Created fields.  
- **Code** – Extracts clean data, formats tags, and prepares the entry for Notion.  

**2. Store in Notion**  
- **Add to Notion** – Creates a new database entry with mapped fields: Title, Submitted By, Tags, Created.  

**3. Notify in Slack**  
- **Send Confirmation (Slack)** – Posts a confirmation message with the submitted idea title.  
  

## Why use this?

- Centralizes idea collection directly into Notion for better organization.  
- Eliminates manual formatting with AI-powered data structuring.  
- Ensures consistency in tags, submitter info, and timestamps.  
- Provides instant team-wide visibility via Slack notifications.  
- Saves time while keeping idea management streamlined and transparent.  


## 📊 Basic Information

- **Workflow ID:** 8846
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 121
- **Downloads:** 12
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8846)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **notion** 
- **slack** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
