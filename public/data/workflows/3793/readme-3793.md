# Optimize Amazon ads with GPT-4o for bid, budget & keyword recommendations

> ### Overview
This template is designed for Amazon sellers and advertisers who want to automate their campaign performance analysis and bidding strategy. It solves the common challenge of manually reviewing Sponsored Products reports and guessing how to adjust keywords, placements, and budgets. By combining Amazon Advertising reports with OpenAI's GPT-4o, this workflow delivers real-time, personalized optimization instructions — automatically.

### Features
📥 Automatically downloads Sponsored Products reports from Google Drive

🧠 Uses AI to analyze campaign, keyword, placement, targeting, and budget performance

📊 Supports both .csv and .xlsx report formats

🔁 Handles multiple ASINs and scales easily across ad accounts

📧 Sends structured optimization recommendations to your inbox via Gmail

🗂 Built-in logic to normalize filenames and correctly map reports

🧹 Includes error handling and formatting cleanup for AI-ready input

### Requirements
To use this workflow, you’ll need:

An Amazon Ads account with access to Sponsored Products reports

A Google Drive folder where Amazon Ads reports are delivered (manually or via Gmail automation)

A Gmail account (for sending summaries)

An OpenAI API key with access to GPT-4o

Optional: a developer account for the Amazon Ads API to fully automate report generation in the future

### Setup Instructions
📂 Connect your Amazon Ads reports folder in the Google Drive node

🔐 Add your credentials to the OpenAI and Gmail nodes

📝 Schedule five reports in the Amazon Ads Console:

Search Term Report → Detailed

Targeting Report → Detailed

Campaign Report → Summary

Placement Report → Summary

Budget Report → Summary
Use “Last 30 Days”, “Daily”, and .xlsx or .csv format

🔁 (Optional) Automate report ingestion using Gmail + Drive workflows

🧪 Test with one account, then replicate across additional ad accounts as needed

⏱️ Setup time: 15–30 minutes
📌 All field-specific guidance is included in workflow notes`


## 📊 Basic Information

- **Workflow ID:** 3793
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3544
- **Downloads:** 354
- **Created:** 2025/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3793)

## 👤 Author

- **Name:** Brian Money
- **Username:** @aspereo

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **merge** 
- **code** 
- **set** (×4)
- **stickyNote** (×7)
- **gmail** 
- **extractFromFile** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
