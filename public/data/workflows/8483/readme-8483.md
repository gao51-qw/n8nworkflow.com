# Lead qualification & auto-assignment with GPT-4 Mini: Google Sheets to ClickUp

> **Description**

Eliminate confusion in sales hand-offs with this ClickUp Task Assignment & Ownership automation! This workflow automatically creates and assigns ClickUp tasks whenever a lead’s status changes to “Qualified” or “Hot,” ensuring seamless ownership and accountability.

With AI-generated lead summaries, synchronized task details, and automatic updates between Google Sheets and ClickUp, your sales team gets crystal-clear context for every opportunity—without manual effort.

**What This Template Does**

📅 Runs every 5 minutes to check for new or updated leads
 📋 Fetches lead records (status, contact, company info) from Google Sheets
 🕒 Detects leads marked as “Qualified” or “Hot” for task creation
 🤖 Generates AI summaries of company background + sales intent
 📝 Creates ClickUp tasks with assignee, due date, and lead context
 🔄 Updates Google Sheets with ClickUp task ID, owner, and status

**Prerequisites**
- Google Sheets with lead details (Name, Email, Status, Company)
- ClickUp API credentials
- OpenAI API key (for AI summaries)
- n8n instance (self-hosted or cloud)
- Step-by-Step Setup
- Prepare your Google Sheet with columns: Name, Email, Status, Company, Task ID.
- Connect Google Sheets to n8n and set up periodic checks (e.g., every 5 minutes).
- Add a conditional check for “Qualified” or “Hot” leads.
- Use the OpenAI API to generate a short AI summary for each lead.
- Create a new ClickUp task with:
  - Title = Lead Name / Company
  - Description = AI summary + lead details
  - Assignee = Rep handling that lead
  - Due date = Based on SLA
- Update the Google Sheet with ClickUp Task ID, Owner, Status.

**Customization Ideas**
- Add Slack/Telegram alerts for every new task created.
- Assign leads dynamically based on round-robin logic.
- Include priority tags (Hot, Warm, Cold) in ClickUp tasks.
- Extend workflow to CRM sync (HubSpot, Zoho, Salesforce).

**Key Benefits**
✅ Ensures every qualified lead gets a dedicated owner
 ✅ Provides AI-powered summaries for instant clarity
 ✅ Keeps ClickUp and Google Sheets in sync automatically
 ✅ Reduces missed follow-ups and speeds up hand-offs

**Perfect For**
- Sales Teams
- BDRs & SDRs
- Sales Managers ensuring accountability & ownership
- Businesses scaling lead hand-off processes

## 📊 Basic Information

- **Workflow ID:** 8483
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 44
- **Downloads:** 4
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8483)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **cron** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×8)
- **code** (×2)
- **clickUp** 
- **googleSheets** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
