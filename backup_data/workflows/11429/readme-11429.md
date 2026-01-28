# Automate client onboarding across Google Drive, Slack, Notion & Gmail with GPT-4o-mini

> Who is this for?
This template is perfect for agencies, consultancies, freelancers, and project-based teams who want to eliminate repetitive onboarding tasks. If you're tired of manually creating folders, Slack channels, and project pages every time a new client signs a contract, this automation will save you hours.
What this workflow does
When a new contract PDF is uploaded to a designated Google Drive folder, this workflow automatically:

Parses the filename to extract client name, project name, and contact email
Creates a project folder structure in Google Drive with organized subfolders
Creates a dedicated Slack channel for project communication
Sets up a Notion project page with initial kickoff tasks
Logs project details to a master Google Sheet for tracking
Drafts a personalized welcome email using OpenAI GPT-4o-mini
Notifies your team on Slack with all relevant links when complete

Setup steps
Time required: ~15 minutes

Configure OAuth credentials for Google Drive, Gmail, Google Sheets, Slack, and Notion
Add your OpenAI API key for AI-powered email drafting
Update the "Set Config Variables" node with your specific IDs:

Google Drive parent folder ID
Notion database ID
Google Sheet ID
Slack notification channel ID


Set up the trigger folder in Google Drive where contracts will be uploaded
Prepare your Google Sheet with columns: Client, Project Code, Notion Link, Slack Channel, Drive Folder

Requirements

Google Workspace account (Drive, Gmail, Sheets)
Slack workspace with bot permissions to create channels
Notion workspace with API integration
OpenAI API key

File naming convention
Upload PDF files using this format:
ClientName_ProjectName_email@example.com.pdf
Example: AcmeCorp_WebsiteRedesign_john@acme.com.pdf
How to customize

Add more subfolders: Duplicate the "Create Deliverables Subfolder" node
Customize the email prompt: Edit the "AI Draft Welcome Email" node
Add more Notion properties: Extend the "Create Notion Project Page" node
Change notification format: Modify the "Notify Team on Slack" message

## 📊 Basic Information

- **Workflow ID:** 11429
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 147
- **Downloads:** 14
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11429)

## 👤 Author

- **Name:** 長谷　真宏
- **Username:** @masa0258

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **googleDriveTrigger** 
- **code** 
- **set** 
- **googleDrive** (×2)
- **slack** (×2)
- **notion** (×2)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
