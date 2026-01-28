# Personalized email mail merge with Google Sheets and Gmail

> ## Who is it for

This workflow is designed for anyone who wants to simplify email automation without leaving Google Sheets. You can also send out emails automatically, without even visiting Google Sheets. It’s especially useful for: 

- Marketers sending bulk or personalized campaigns
- Recruiters managing outreach from candidate lists
- Small business owners who want automated follow-ups
- Anyone who wants to trigger emails directly from sheet updates, e.g. event updates. 

## How it works

The workflow connects Google Sheets with Gmail to let you send emails in either of two ways:

1. Bulk emails (mail merge): Use data from your sheet to send an email to multiple email addresses, one by one. 
2. Triggered emails: Automatically send an email whenever specific values or conditions in your sheet are met. No need to manually copy, paste, or switch to Gmail, because the process is fully automated.

## How to set it up

1. Copy this template into your personal n8n workspace: https://docs.google.com/spreadsheets/d/1fWg_GOU0m_2cQpah7foDiz1WqTRKjCbJJCLBGCvJlXc/edit?usp=sharing
2. Connect your Google Sheets and Gmail accounts using this workflow in n8n. 
3. Select the spreadsheet and sheet you want to use.
4. Customize the email nodes with your subject line, body text, and variables (e.g., names or links from your sheet).
5. Test the workflow, then activate it to start sending emails automatically.

For a step-by-step walkthrough, check out this video guide on YouTube: https://www.youtube.com/watch?v=XJQ0W3yWR-0

## Requirements
- A Google Sheets account with your data organized in rows and columns
- A Gmail account for sending emails
- An active n8n account to run the workflow

## 📊 Basic Information

- **Workflow ID:** 8149
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1175
- **Downloads:** 117
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8149)

## 👤 Author

- **Name:** Ladies Build With AI
- **Username:** @ladiesbuildwithai

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **filter** 
- **gmail** 
- **merge** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
