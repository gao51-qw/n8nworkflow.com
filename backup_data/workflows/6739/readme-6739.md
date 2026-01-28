# Sentiment analysis of product reviews using Google Sheets & OpenAI

> # 🧠 Sentiment Analysis of Product Reviews using Google Sheets & OpenAI

## 🚀 Quick Implementation Steps

**Automated customer feedback analyzer**:

- **Trigger**: Google Sheets triggers on new product review rows.
- **Sentiment Analysis**: Review text sent to OpenAI.
- **Writeback**: Resulting sentiment (Positive, Neutral, Negative) is written back to the sheet.

Just connect your credentials and sheet — you're ready to go!

## 🔍 What It Does

This workflow automatically analyzes user-submitted product reviews and classifies them by sentiment using OpenAI’s powerful language models. It eliminates the need to manually sift through feedback by tagging each review with a sentiment score.

The sentiment result is then written back to the Google Sheet next to the original review, enabling you to get a fast, clear snapshot of overall customer perception, satisfaction and pain points. Whether you're monitoring 10 or 10,000 reviews, this process scales effortlessly and updates every minute.

## 👤 Who’s It For

This workflow is designed for:

- **E-commerce teams** collecting user reviews.
- **Product teams** monitoring customer feedback.
- **Marketing teams** identifying promotable reviews.
- **Support teams** watching for negative experiences.
- **SaaS platforms**, apps, and survey tools managing structured text feedback.

## ✅ Requirements

You’ll need:

- A Google Sheet with two columns: `Review` and `Sentiment`
- Google Sheets OAuth2 credentials in n8n
- OpenAI API Key (for GPT-4o-mini or GPT-3.5)
- n8n instance with LangChain and OpenAI nodes enabled

## ⚙️ How It Works

1. **Google Sheets Trigger**: Watches for new rows every minute
2. **OpenAI Integration**:
   - Uses LangChain’s `Sentiment Analysis` node
   - Passes review text into GPT-4o-mini via the `OpenAI Chat Model` node
3. **Sheet Update**: The sentiment result (Positive, Negative, or Neutral) is written into the `Sentiment` column in the same row.

Sticky Notes included for better visual understanding inside the workflow editor.

## 🛠️ Steps to Configure and Use

### 1. Prepare Your Google Sheet

Make sure your sheet is named `Sheet1` with the following structure:

| Review                                | Sentiment |
|---------------------------------------|-----------|
| Absolutely love it!                  |           |
| Not worth the price.                 |           |

### 2. Set Up Credentials

- **Google Sheets**: OAuth2 credentials
- **OpenAI**: API Key added via `OpenAI API` credential in n8n

### 3. Import & Activate Workflow

- Import the workflow JSON into your n8n instance.
- Assign the proper credentials to the trigger and OpenAI nodes.
- Activate the workflow.

## 🧩 How To Customize

- 🛎️ **Alerting**: Add Slack/Email nodes for negative sentiment alerts
- 🔄 **Triggering**: Change the polling interval to real-time triggers (e.g., webhook)
- 📊 **Extended Sentiment**: Modify sentiment categories (e.g., "Mixed", "Sarcastic")
- 🧾 **Summary Report**: Add Cron + Aggregation nodes for daily/weekly summaries
- 🧠 **Prompt Tuning**: Adjust system prompt for deeper or context-based sentiment evaluation

## 🧱 Add‑ons (Optional Features)

- Email Digest of Negative Reviews
- Google Drive Logging
- Team Notification via Slack
- Summary to Notion, Airtable, or Google Docs

## 📌 Use Case Examples

- **Online Stores**: Auto-tag reviews for reputation monitoring
- **Product Teams**: See which feature releases generate positive or negative buzz
- **CX Dashboards**: Feed real-time sentiment to internal BI tools
- **Marketing**: Extract glowing reviews for social proof
- **Support**: Triage issues by flagging critical comments instantly

*...and many more applications wherever text feedback is collected.*

## 🧰 Troubleshooting Guide

| Issue                    | Possible Cause                              | Suggested Fix                                      |
|-------------------------|---------------------------------------------|---------------------------------------------------|
| Sentiment not updating  | Sheet credentials missing or misconfigured  | Reconnect Google Sheets OAuth2                   |
| Blank sentiment         | Review column empty or misaligned           | Ensure proper column header & value present      |
| OpenAI errors           | Invalid or expired API key                  | Regenerate API Key from OpenAI and re-auth       |
| Workflow doesn’t run    | Polling settings incorrect                  | Confirm interval & document ID in trigger node   |

## 🤝 Need Help?

If you need assistance for

- ✅ Help setting up this workflow
- ⚙️ Customizing prompts or output
- 🚀 Automating your full review pipeline

👉 Contact us today at WeblineIndia. We will be happy to assist.


## 📊 Basic Information

- **Workflow ID:** 6739
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 697
- **Downloads:** 69
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6739)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheetsTrigger** 
- **googleSheets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
