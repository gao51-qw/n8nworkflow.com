# Generate AI News LinkedIn Posts with GPT-4o-mini, NewsAPI, and Qdrant

> Overview
Automated LinkedIn content generator that:

Fetches trending AI news using NewsAPI
Enhances content with Qdrant vector store context
Generates professional LinkedIn posts using GPT-4o-mini
Tracks email interactions in Google Sheets
🛠️ Prerequisites
API Keys : NewsAPI, OpenAI (GPT-4o-mini), Qdrant
Accounts : Gmail Oauth, Google Sheets, LinkedIn developer API
Environment Variables :
OPENAI_API_KEY
NEWSAPI_KEY
QDRANT_URL/QDRANT_API_KEY
📁 Google Sheets Setup
Create a spreadsheet with these columns:

ISO date
Email address
Unique ID
"Approve" or "Reject"

⚙️ Setup Instructions
Pre-populate Qdrant :
Create collection "posts" with LinkedIn post examples
Add 10+ example posts for style reference
Node Configuration :
Update Gmail credentials (OAuth2)
Set fromEmail/toEmail in email nodes
Configure Google Sheets document IDs
Test Workflow :
Run Schedule Trigger manually first
Verify email notifications work
Check Qdrant vector store connectivity

🎨 Customization Options
Tone Adjustment : Modify system message in "AI Agent"
Post Style : Update prompt in "Generate LinkedIn Post"
Filter Criteria : Edit NewsAPI URL parameters
Scheduling : Change interval in Schedule Trigger

## 📊 Basic Information

- **Workflow ID:** 3691
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 431
- **Downloads:** 43
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3691)

## 👤 Author

- **Name:** Lucien
- **Username:** @lucien

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **code** (×3)
- **httpRequest** (×2)
- **gmailTrigger** 
- **gmail** (×4)
- **set** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
