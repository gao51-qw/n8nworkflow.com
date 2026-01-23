# Moderate Facebook comments with AI and send reports to Slack & Telegram

> # Facebook Page Comment Moderation Scoreboard → Team Report


This workflow automatically monitors Facebook Page comments, analyzes them using AI for intent, toxicity & spam, stores moderation results in a database and sends a clear summary report to Slack and Telegram.

This workflow runs every few hours to fetch Facebook Page comments and analyze them using OpenAI. Each comment is classified as positive, neutral or negative, checked for toxicity, spam & abusive language and then stored in Supabase. A simple moderation summary is sent to Slack and Telegram.

You receive:

* Automated Facebook comment moderation
* AI-based intent, toxicity, and spam detection
* Database logging of all moderated comments
* Clean Slack & Telegram summary reports

Ideal for teams that want visibility into comment quality without manually reviewing every message.


### Quick Start – Implementation Steps

1. Import the workflow JSON into n8n.
2. Add your **Facebook Page access token** to the HTTP Request node.
3. Connect your **OpenAI API key** for comment analysis.
4. Configure your **Supabase** table for storing moderation data.
5. Connect **Slack and Telegram** credentials and choose target channels.
6. Activate the workflow — moderation runs automatically.


## What It Does

This workflow automates Facebook comment moderation by:

1. Running on a scheduled interval (every 6 hours).
2. Fetching recent comments from a Facebook Page.
3. Preparing each comment for AI processing.
4. Sending comments to OpenAI for moderation analysis.
5. Extracting structured moderation data:
	* Comment intent
	* Toxicity score
	* Spam detection
	* Abusive language detection
6. Flagging risky comments based on defined rules.
7. Storing moderation results in Supabase.
8. Generating a summary report.
9. Sending the report to Slack and Telegram.

This ensures consistent, repeatable moderation with no manual effort.


## Who’s It For
--------------------

This workflow is ideal for:

* Social media teams
* Community managers
* Marketing teams
* Customer support teams
* Moderation and trust & safety teams
* Businesses managing high-volume Facebook Pages
* Anyone wanting AI-assisted comment moderation


## Requirements to Use This Workflow

To run this workflow, you need:

* **n8n instance** (cloud or self-hosted)
* **Facebook Page access token**
* **OpenAI API key**
* **Supabase project and table**
* **Slack workspace** with API access
* **Telegram bot** and chat ID
* Basic understanding of APIs and JSON (helpful but not required)


## How It Works

1. **Scheduled Trigger** – Workflow starts automatically every 6 hours.
2. **Fetch Comments** – Facebook Page comments are retrieved.
3. **Prepare Data** – Comments are formatted for processing.
4. **AI Moderation** – OpenAI analyzes each comment.
5. **Normalize Results** – AI output is cleaned and standardized.
6. **Store Data** – Moderation results are saved in Supabase.
7. **Aggregate Stats** – Summary statistics are calculated.
8. **Send Alerts** – Reports are sent to Slack and Telegram.


## Setup Steps

1. Import the workflow JSON into n8n.
2. Open the **Fetch Facebook Page Comments** node and add:
	* Page ID
	* Access token
3. Connect your **OpenAI account** in the AI moderation node.
4. Create a Supabase table and map fields correctly.
5. Connect **Slack** and select a reporting channel.
6. Connect **Telegram** and set the chat ID.
7. Activate the workflow.


## How To Customize Nodes

### Customize Flagging Rules

Update the normalization logic to:

* Change toxicity thresholds
* Flag only spam or abusive comments
* Add custom moderation rules

### Customize Storage

You can extend Supabase fields to include:

* Language
* AI confidence score
* Reviewer notes
* Resolution status

### Customize Notifications

Slack and Telegram messages can include:

* Emojis
* Mentions (@channel)
* Links to Facebook comments
* Severity labels


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* Auto-hide or delete toxic comments
* Reply automatically to positive comments
* Detect language and region
* Generate daily or weekly moderation reports
* Build dashboards using Supabase or BI tools
* Add escalation alerts for high-risk comments
* Track trends over time


## Use Case Examples

### 1. Community Moderation

Automatically identify harmful or spam comments.

### 2. Brand Reputation Monitoring

Spot negative sentiment early and respond faster.

### 3. Support Oversight

Detect complaints or frustration in comments.

### 4. Marketing Insights

Measure positive vs negative engagement.

### 5. Compliance & Auditing

Keep historical moderation logs in a database.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-----|---------------|----------|
| No comments fetched | Invalid Facebook token | Refresh token & permissions |
| AI output invalid | Prompt formatting issue | Use strict JSON prompt |
| Data not saved | Supabase mapping mismatch | Verify table fields |
| Slack message missing | Channel or credential error | Recheck Slack config |
| Telegram alert fails | Wrong chat ID | Confirm bot permissions |
| Workflow not running | Trigger disabled | Enable Cron node |


## Need Help?

If you need help customizing, scaling or extending this workflow — such as advanced moderation logic, dashboards, auto-actions or production hardening, then our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at WeblineIndia can assist with expert automation solutions.

## 📊 Basic Information

- **Workflow ID:** 12028
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12028)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **supabase** 
- **telegram** 
- **slack** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
