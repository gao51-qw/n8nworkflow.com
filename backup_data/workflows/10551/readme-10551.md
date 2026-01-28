# Auto-publish Facebook posts from Google Sheets with Slack & email alerts

> ## 📊 Description
Simplify your social media publishing process by automating post scheduling from Google Sheets directly to Meta (Facebook Pages). 📅💬 This workflow detects pending posts, uploads images with captions to your Facebook Page, updates the sheet status, and sends real-time notifications via Slack and email — keeping your marketing team always in sync. 🚀

## What This Template Does
1️⃣ Trigger – Monitors a Google Sheet for new or pending posts every minute. ⏰
 2️⃣ Filter – Identifies the latest “pending” entry for publishing. 🔍
 3️⃣ Extract – Captures post details like caption, image URL, and ID. 🧾
 4️⃣ Publish – Uploads the post to your Meta (Facebook) Page using the Graph API. 📤
 5️⃣ Validate – Confirms success or failure of the post operation. ✅
 6️⃣ Notify – Sends instant Slack and email updates on publishing status. 💌
 7️⃣ Update – Marks the published post as “Completed” in Google Sheets. 📊

## Key Benefits
✅ Hands-free publishing from Google Sheets to Meta
 ✅ Instant Slack and email alerts for post outcomes
 ✅ Prevents duplicate or failed post uploads
 ✅ Centralized content tracking and status updates
 ✅ Improves consistency and speed in social media operations

## Features
- Google Sheets trigger for post scheduling
- Facebook Graph API integration for auto-posting
- Slack and Outlook notifications for success/error alerts
- Automatic sheet updates post-publication
- Error handling and reporting for failed posts

## Requirements
- Google Sheets OAuth2 credentials
- Facebook Page Access Token via Graph API
- Slack Bot token for notifications
- Outlook or SMTP credentials for email updates
- Target Audience
- Marketing teams managing Facebook content calendars 📆
- Social media managers seeking automated posting 📣
- Agencies coordinating client content delivery 📋
- Teams tracking campaign publishing performance 📊


## 📊 Basic Information

- **Workflow ID:** 10551
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 229
- **Downloads:** 22
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10551)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×5)
- **googleSheetsTrigger** 
- **code** 
- **set** 
- **facebookGraphApi** 
- **if** 
- **slack** (×2)
- **microsoftOutlook** 
- **googleSheets** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
