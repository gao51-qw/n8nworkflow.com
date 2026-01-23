# Automate lead response with GPT and human approval to Airtable CRM

> ## AI-Assisted Lead Follow-Up With Human Approval

This workflow automates your lead response process from end to end. When someone submits your n8n Form, the workflow generates an AI-written follow-up email, sends that draft to your sales team for approval, and then sends the approved email to the lead or marks it as needing revision. All lead details, drafts, approval decisions, and timestamps are stored in Airtable.

### Ideal For

- Teams that want AI to draft emails while keeping a human approval step

- Businesses receiving inbound inquiries that need fast, consistent responses

- Users building a simple form → email → CRM workflow

- Teams that want a record of all drafts and approval outcomes

### What This Template Provides

- AI-generated follow-up email drafts

- Human approval flow, using Approve and Reject links

- Automatic Airtable logging of leads, drafts, and statuses

- Fully automated pipeline triggered by a simple form submission

## Setup Steps (5–10 minutes)
### Connect Your Credentials

- Gmail

- Airtable

- OpenAI

### Create Your Airtable Table

Use the following fields:

- Name
- Email
- Phone
- Company Name
- Message
- Status
- Email Draft
- Created On

### Add Your Airtable Base ID and Table ID

Insert them into the Workflow Configuration node.

### Enter Your Company Details

Add your:

- Name
- Title
- Company name
- Email
- Phone number
- Website
- Etc.

These values will appear in the final approved email sent to the lead.
### Set the Sales Approval Email

Specify the email address where draft approval requests should be sent.

### Deploy the Approval Webhook

Switch the Webhook node to the Production URL, and confirm that the Approve and Reject links point to it.

### Publish Your n8n Form

Submit a test lead to verify:

- AI draft generation

- Approval email delivery

- Airtable logging

- Final email sending

## Why Use This Template?

This workflow creates a reliable, semi-automated follow-up process that blends AI speed with human judgment. It ensures consistent communication, maintains accurate CRM records, and reduces manual work without requiring a full CRM platform.

## 📊 Basic Information

- **Workflow ID:** 11059
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 119
- **Downloads:** 11
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11059)

## 👤 Author

- **Name:** Calvin Cunningham
- **Username:** @calvinc4

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **wait** 
- **if** 
- **gmail** (×2)
- **airtable** (×2)
- **formTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
