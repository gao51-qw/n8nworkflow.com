# Automate GoHighLevel client onboarding with Google Drive, Gmail, Calendar & Slack

> ## Description
Automate your GoHighLevel (GHL) client onboarding process from the moment a deal is marked as “Won.” This workflow seamlessly generates client folders in Google Drive, duplicates contract and kickoff templates, schedules kickoff calls, sends branded welcome emails, creates onboarding tasks in GHL, and notifies your team in Slack. 🚀📂📧📅💬

## What This Template Does
- Triggers automatically when an opportunity is marked as Won in GHL 🏆
- Validates and formats client data to ensure clean records 🔍
- Creates structured client folders in Google Drive 📂
- Copies contract & kickoff deck templates with client-specific naming 📝
- Sends personalized welcome email via Gmail ✉️
- Schedules kickoff call in Google Calendar 📅
- Creates onboarding tasks in GHL for account managers ✅
- Sends Slack notifications to keep your team informed instantly 💬
- Catches errors and sends alerts to a Slack error channel 🚨

## Key Benefits
- Saves 30–45 minutes per onboarding ⏱️
- Eliminates manual data entry and human errors 🧹
- Guarantees consistent client experience across all deals 🤝
- Automates document creation & sharing 📄
- Ensures team visibility and faster response times 📲
- Built-in validation and error handling for reliability 🔐

## Features
- Webhook-based trigger from GoHighLevel ⚡
- Automatic client data formatting and validation 🛠️
- Google Drive folder & document automation with templates 📂
- Personalized Gmail welcome email with branding ✉️
- Automated kickoff call scheduling in Google Calendar 📅
- Task creation in GHL for seamless follow-up 📌
- Slack notifications for both success and error handling 💬
- Error channel with detailed failure reports 🚨

## Requirements
- n8n instance (cloud or self-hosted)
- GoHighLevel account with API access 🔑
- Google Workspace (Drive, Gmail, Calendar) 📊
- Slack workspace with Bot Token & channel access 💬
- Pre-created contract and kickoff deck templates in Google Drive 📄

## Target Audience
- Agencies & consultants using GoHighLevel for client management 🏢
- Sales teams wanting instant onboarding after a deal closes 💰
- Operations teams seeking consistent and repeatable onboarding flows ⚙️
- Account managers who need structured onboarding tasks ✅
- Businesses scaling client onboarding and reducing manual workload 🚀

## Step-by-Step Setup Instructions
- Configure GHL webhook → Trigger on “Opportunity Status Changed = Won.”
- Connect your GHL API credentials (OAuth2 or API key).
- Add Google Drive OAuth2 credentials → Set parent folder ID & template IDs.
- Configure Gmail OAuth2 → Replace hardcoded email with client email variable.
- Connect Google Calendar → Select the calendar for kickoff calls.
- Connect Slack API → Choose channels for onboarding updates and errors.
- Update template IDs for contract and kickoff deck in the workflow.
- Import workflow into n8n, map credentials, and test once.
- Enable workflow → onboarding is now fully automated. ✅

## 📊 Basic Information

- **Workflow ID:** 9138
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 486
- **Downloads:** 48
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9138)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×11)
- **webhook** 
- **googleDrive** (×3)
- **slack** (×2)
- **gmail** 
- **if** 
- **code** 
- **googleCalendar** 
- **highLevel** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
