# Automate NPS survey collection & response handling with GoHighLevel, Gmail & Notion

> ## Description
Streamline your Net Promoter Score (NPS) survey process by automating survey delivery, response tracking, and structured data storage. This workflow integrates GoHighLevel, Gmail, and Notion to ensure every customer response is captured, categorized, and actionable. 💬📧📊

## What This Template Does
- Trigger from GoHighLevel when a deal moves to "Completed." ⚡
- Send NPS survey emails via Gmail to the customer automatically. ✉️
- Capture responses through a Webhook and store them in structured format. 🔗
- Process and categorize NPS responses (Promoter, Passive, Detractor). 🧮
- Save results in Notion for centralized tracking and analysis. 📒
- Send Slack notifications for quick visibility into customer satisfaction. 🔔

## Key Benefits
 ✅ Automated NPS survey delivery and response tracking
 ✅ Centralized data storage for long-term insights
 ✅ Real-time team notifications for faster action
 ✅ Standardized response categorization
 ✅ Error handling ensures no response is lost

## Features
- GoHighLevel integration to trigger surveys at the right stage
- Gmail email automation with personalized survey links
- Webhook capture for dynamic NPS responses
- Notion database integration for structured data storage
- Slack alerts for quick feedback visibility

## Requirements
- n8n instance (cloud or self-hosted)
- GoHighLevel API credentials
- Gmail API credentials (OAuth2)
- Notion API integration token
- Slack API token (optional for notifications)

## Target Audience

This workflow is ideal for Customer Success teams, SaaS businesses, agencies, and service providers who want to measure customer satisfaction at scale and act quickly on feedback.

## Step-by-Step Setup Instructions
- Configure GoHighLevel, Gmail, Notion, and Slack credentials in n8n.
- Set up a Notion database with fields for customer, score, category, and comments.
- Replace hardcoded values with environment variables ($env.GHL_API_KEY, $env.NOTION_DB_ID, etc.).
- Import the JSON into your n8n instance.
- Run once manually with test data to verify.
- Enable the workflow for automated execution. ✅

## 📊 Basic Information

- **Workflow ID:** 9227
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 172
- **Downloads:** 17
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9227)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Support Chatbot
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×13)
- **highLevel** 
- **scheduleTrigger** (×2)
- **code** (×2)
- **if** (×2)
- **gmail** (×4)
- **httpRequest** 
- **notion** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
