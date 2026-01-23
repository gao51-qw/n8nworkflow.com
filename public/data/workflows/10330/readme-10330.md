# Automate API FAQ quality testing with GPT-4o-mini, Google Sheets & Slack alerts

> ## Description:
Keep your API documentation accurate and reliable with this n8n automation template.
 The workflow automatically tests your FAQ content related to authentication and rate limits, evaluating each answer using Azure OpenAI GPT-4o-mini for completeness, edge-case coverage, and technical clarity. It logs all results to Google Sheets, scores FAQs from 0–10, and sends Slack alerts when low-quality answers are detected.
Ideal for API teams, developer relations managers, and technical writers who want to maintain high-quality documentation with zero manual review effort.

## ✅ What This Template Does (Step-by-Step)

▶️ Manual Trigger or On-Demand Run
 Start the evaluation anytime you update your FAQs — perfect for regression testing before documentation releases.

📖 Fetch FAQ Q&A from Google Sheets
 Reads FAQ questions and answers from your designated test sheet (columns A:B). Each Q&A pair becomes a test case for AI evaluation.

🤖 AI Evaluation via GPT-4o-mini
 Uses Azure OpenAI GPT-4o-mini to evaluate how well each FAQ covers critical aspects of API authentication and rate limiting.
 The AI provides a numeric score (0–10) and a short explanation.

🔍 Parse & Format AI Results
 Extracts structured JSON data (Question, Score, Explanation, Timestamp) and prepares it for reporting and filtering.

💾 Save Evaluation to Google Sheets
 Appends all results to a Results Sheet (A:D) — creating a running history of FAQ quality audits.

⚠️ Filter for Low-Scoring FAQs
 Identifies any FAQ with a score below 7, flagging them as needing review or rewrite.

🔔 Send Slack Alerts for Weak Entries
 Posts an alert message in your chosen Slack channel, including:
The question text
Score received
AI’s explanation
Link to the full results sheet
This ensures your documentation team can quickly address weak or incomplete FAQ answers.

## 🧠 Key Features
 🤖 AI-powered FAQ quality scoring (0–10)
 📊 Automated tracking of doc health over time
 📥 Seamless Google Sheets integration for results storage
 ⚙️ Slack notifications for underperforming FAQs
 🧩 Ideal for continuous documentation improvement

## 💼 Use Cases
 📘 Validate FAQ accuracy before API documentation updates
 ⚡ Auto-test new FAQ sets during content refresh cycles
 🧠 Ensure API rate limit and auth topics cover all edge cases
 📢 Alert documentation owners about weak answers instantly

## 📦 Required Integrations
- Google Sheets API – for reading and storing FAQs and test results
- Azure OpenAI (GPT-4o-mini) – for evaluating FAQ coverage and clarity
- Slack API – for sending quality alerts and notifications

## 🎯 Why Use This Template?
 ✅ Ensures API FAQ accuracy and completeness automatically
 ✅ Replaces tedious manual content reviews with AI scoring
 ✅ Builds an ongoing record of documentation improvements
 ✅ Keeps technical FAQs consistent, relevant, and developer-friendly


## 📊 Basic Information

- **Workflow ID:** 10330
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 136
- **Downloads:** 13
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10330)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **set** (×2)
- **googleSheets** (×3)
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **if** 
- **slack** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
