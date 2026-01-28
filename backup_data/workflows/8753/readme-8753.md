# Customer onboarding help requests (Typeform to Gmail & Sheets)

> ## Description
Automatically capture customer onboarding help requests from Typeform, log them in Google Sheets, validate email addresses, and send a professional HTML welcome email via Gmail. Ensures smooth onboarding communication with audit-ready tracking and error handling. 📝📧

## What This Template Does
- Monitors Typeform submissions for new onboarding help requests. 📥
- Logs all responses into Google Sheets with structured fields. 📊
- Validates email addresses to prevent errors. ✅
- Generates professional HTML welcome emails with company branding. 🎨
- Sends onboarding emails directly via Gmail. 📧
- Handles missing or invalid emails with error logging. ⚠️

## Key Benefits
- Streamlines customer onboarding request handling. ⏱️
- Creates a centralized log for analytics and audits. 🧾
- Improves customer experience with branded email communication. 💡
- Reduces manual effort in follow-up and data entry. 🔄
- Ensures reliable handling of incomplete or invalid submissions. 🛡️

## Features
- Typeform trigger for new form submissions. 📝
- Automatic Google Sheets logging of customer details. 📈
- Conditional email validation before sending. 🔍
- Dynamic HTML email generation with customer details. 🎨
- Automated Gmail delivery of welcome emails. 📧
- Error handling node for missing/invalid email submissions. 🚨

## Requirements
- n8n instance (cloud or self-hosted).
- Typeform API credentials with webhook permissions.
- Google Sheets OAuth2 credentials with spreadsheet write access.
- Gmail OAuth2 credentials with send email permissions.
- Pre-configured Google Sheet for onboarding request tracking.

## Target Audience
- Customer success and onboarding teams. 👩‍💻
- SaaS startups managing onboarding inquiries. 🚀
- Support teams handling product/service onboarding. 🛠️
- SMBs looking for efficient onboarding automation. 🏢
- Remote teams needing structured onboarding workflows. 🌐

### Step-by-Step Setup Instructions
- Connect Typeform, Google Sheets, and Gmail credentials in n8n. 🔑
- Insert your Typeform form ID in the trigger node. 📝
- Replace the Google Sheet ID with your tracking sheet. 📊
- Map form fields to spreadsheet columns (ensure headers match). 🔗
- Customize email HTML template with branding and company info. 🎨
- Update sender email in the Gmail node. 📧
- Test the workflow with a sample form submission. ✅


## 📊 Basic Information

- **Workflow ID:** 8753
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 214
- **Downloads:** 21
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8753)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Content Creation
- Support Chatbot

## 🔗 Nodes Used

- **typeformTrigger** 
- **googleSheets** (×2)
- **if** 
- **gmail** 
- **code** (×2)
- **stickyNote** (×14)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **clickUp** 
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
