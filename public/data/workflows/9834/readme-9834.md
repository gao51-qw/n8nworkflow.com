# Automate employee onboarding with GPT-4o: Jira, Notion & Gmail integration

> ## 📘 Description
This workflow automates the employee onboarding process by creating Jira accounts, generating Notion onboarding checklists, crafting AI-generated welcome messages, and sending personalized welcome emails — all automatically.
 It provides a complete hands-free onboarding experience for HR and IT teams by connecting Jira, Notion, Google Sheets, Gmail, and Azure OpenAI.
 Failures (like Jira account creation errors) are logged into Google Sheets to ensure full transparency and no missed onboardings.

- ## ⚙️ What This Workflow Does (Step-by-Step)
- 🟢 When Clicking “Execute Workflow”
Manually triggers the entire onboarding automation. Useful for testing or initiating onboarding on demand for a new hire.
- 👤 Define New Hire Profile Data
Structures all essential employee information into a clean dataset including name, email, start date, buddy, and access links (Slack, GitHub, Jira, Notion).
-  Acts as the single source of truth for all downstream systems ensuring consistent, error-free onboarding data.
- 🎫 Create Jira User Account
Automatically creates a Jira account for the new employee using REST API calls.
-  Includes email, display name, username, and product access (Jira Software).
-  Removes the need for manual admin setup and ensures immediate access to project boards.
- ✅ Validate Jira Account Creation Success: Checks if the Jira API response contains a valid accountId.
-  If successful → continues onboarding.
-  If failed → logs error to Google Sheets.
-  Ensures downstream steps don’t continue if Jira setup fails.
- 📊 Log Jira Provisioning Failures to Error Sheet
- Appends any account creation errors (duplicate emails, invalid permissions, or API issues) into an “error log sheet” in Google Sheets.
-  Helps HR/IT monitor issues and manually resolve them.
-  Guarantees no silent onboarding failures.

📋 Generate Notion Onboarding Checklist
- Creates a personalized Notion page titled “{Name} - Onboarding Checklist” that includes:
- Welcome message
- Access links (Slack, GitHub, Jira)
- Assigned buddy details
- Start date and status
- Optionally, embedded videos or docs
-  Gives each new hire a structured hub to manage onboarding tasks independently.

- 🤖 AI-Generated Welcome Message Creator
- Uses GPT-4o (Azure OpenAI) to craft a friendly, motivational welcome message for the new employee.
-  Incorporates name, buddy, and access details with emojis and warm tone.
-  Ensures every message feels human and engaging — not robotic.
- 🧠 GPT-4o Language Model Configuration
- Configures the AI assistant persona for personalized onboarding messages.
-  Ensures tone consistency, friendliness, and empathy across all communications.
- 🔗 Consolidate Onboarding Data Streams
- Merges data from Jira, Notion, and AI message generation into a single payload.
-  This ensures the final email contains every onboarding element — access links, checklist URL, and the AI-generated message.

📧 Format Comprehensive Welcome Email
- Generates a complete HTML-formatted email with:
- Personalized greeting
- AI-generated welcome message
- Clickable links (Jira, Notion, Slack, GitHub)
- Buddy info and start date
-  Designed for mobile responsiveness and branded presentation.
- 📬 Send Welcome Email to New Hire
- Sends the final welcome email to the employee’s inbox with the subject:
- “Welcome to Techdome, {Name}! 🎉”
-  Includes all essential access information, links, and team introductions — ensuring the new hire starts strong on Day 1.
- 
## 🧩 Prerequisites
Jira Admin API credentials
Notion API integration
Gmail OAuth2 credentials
Azure OpenAI (GPT-4o) access
Google Sheets document for logging errors

## 💡 Key Benefits
 ✅ Fully automated new hire onboarding
 ✅ AI-generated personalized communications
 ✅ Real-time error logging for IT transparency
 ✅ Seamless integration across Jira, Notion, and Gmail
 ✅ Professional first-day experience with zero manual work

## 👥 Perfect For
HR teams managing multiple onboardings
IT admins automating access provisioning
Startups scaling employee onboarding
Organizations using Jira + Notion + Gmail stack


## 📊 Basic Information

- **Workflow ID:** 9834
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 643
- **Downloads:** 64
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9834)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×10)
- **set** 
- **httpRequest** 
- **if** 
- **googleSheets** 
- **notion** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **merge** 
- **code** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
