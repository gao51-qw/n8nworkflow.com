# Score SDK documentation localization readiness with Azure GPT-4o-mini and Slack alerts

> ## Description:
Make your SDK documentation localization-ready before translation with this n8n automation template.
 The workflow pulls FAQ content from Notion, evaluates each entry using Azure OpenAI GPT-4o-mini, and scores its localization readiness based on jargon density, cultural context, and translation risk. It logs results into Google Sheets and notifies your team on Slack if an FAQ scores poorly (≤5).
Perfect for developer documentation teams, localization managers, and globalization leads who want to identify high-risk content early and ensure smooth translation for multi-language SDKs.

## ✅ What This Template Does (Step-by-Step)

⚙️ Step 1: Fetch FAQs from Notion
 Retrieves all FAQ entries from your Notion database, including question, answer, and unique ID fields for tracking.

🤖 Step 2: AI Localization Review (GPT-4o-mini)
 Uses Azure OpenAI GPT-4o-mini to evaluate each FAQ for localization challenges such as:
- Heavy use of technical or cultural jargon
- Region-specific policy or legal references
- Non-inclusive or ambiguous phrasing
- Potential mistranslation risk
- Outputs a detailed report including:
- Score (1–10) – overall localization readiness
- Detected Issues – list of problematic elements
- Priority – high, medium, or low for translation sequencing
- Recommendations – actionable rewrite suggestions

🧩 Step 3: Parse AI Response
 Converts the raw AI output into structured JSON (score, issues, priority, recommendations) for clean logging and filtering.

📊 Step 4: Log Results to Google Sheets
 Appends one row per FAQ, storing fields like Question, Score, Priority, and Recommendations — creating a long-term localization quality tracker.

🚦 Step 5: Filter High-Risk Content (Score ≤5)
 Flags FAQs with low localization readiness for further review, ensuring that potential translation blockers are addressed first.

📢 Step 6: Send Slack Alerts
 Sends a Slack message with summary details for all high-risk FAQs — including their score and key issues — keeping localization teams informed in real time.

🧠 Key Features
 🌍 AI-powered localization scoring for SDK FAQs
 🤖 Azure OpenAI GPT-4o-mini integration
 📊 Google Sheets-based performance logging
 📢 Slack notifications for at-risk FAQs
 ⚙️ Automated Notion-to-AI-to-Sheets pipeline
💼 Use Cases
 🧾 Audit SDK documentation before translation
 🌐 Prioritize localization tasks based on content risk
 🧠 Identify FAQs that need rewriting for non-native audiences
 📢 Keep global documentation teams aligned on translation readiness

## 📦 Required Integrations
- Notion API – to fetch FAQ entries
- Azure OpenAI (GPT-4o-mini) – for AI evaluation
- Google Sheets API – for logging structured results
- Slack API – for sending alerts on high-risk FAQs

## 🎯 Why Use This Template?
 ✅ Detect localization blockers early in your SDK documentation
 ✅ Automate readiness scoring across hundreds of FAQs
 ✅ Reduce translation rework and cultural misinterpretation
 ✅ Ensure a globally inclusive developer experience


## 📊 Basic Information

- **Workflow ID:** 10550
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 22
- **Downloads:** 2
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10550)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **notion** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **code** 
- **googleSheets** 
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
