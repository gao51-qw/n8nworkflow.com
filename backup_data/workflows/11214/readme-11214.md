# Generate AI-powered Strava performance evolution reports with Google Sheets & GPT-5-nano

> Automatically analyze your full sports performance evolution using your Strava activities, enriched with AI insights and delivered directly to your email — all powered by your own n8n instance.

---

## ✨ Why this workflow?

Stop manually reviewing your training history.
This workflow automates the entire analysis: collecting activities, filtering by date range, comparing progress, generating a structured AI report, storing it, and emailing it to you.

* **Battle-tested:** refined across multiple Strava accounts to ensure strong error handling and stable performance.
* **Fully documented:** each block is cleanly structured; logic is easy to follow.
* **Safe & robust:** handles missing fields, invalid dates, empty ranges, and malformed inputs.
* **Flexible:** change the analysis period (week/month/year/total), language, and recipient in one single node (OPTIONS).
* **Zero manual work:** reports arrive automatically.

---

## 🧠 What does the workflow do?

* Reads your entire Strava activity dataset from Google Sheets.
* Filters activities by your chosen range (last week, last month, last year, or all time).
* Formats each activity as “Activity 1, Activity 2, …” (from newest to oldest).
* Sends the full historical dataset + the previous AI report (if available) to GPT-5-nano.
* Generates a complete performance report with six sections:

  * Evolution
  * Best improvements
  * Setbacks
  * Performance patterns
  * Current state
  * Recommendations
* Saves the new report in a separate Google Sheet for long-term tracking.
* Converts the AI output into clean, professional Markdown → HTML.
* Sends you a styled email with the final report.

---

## 🛠️ Technologies & APIs Used

* **n8n** (cloud or self-hosted)
* **OpenAI** (GPT-5-nano for analysis)
* **Google Sheets API** (activity log + report archive)
* **Gmail/SMTP** (email delivery)
* **Strava data imported into Sheets** (activity database)

---

## ⚡ Who is this for?

* Athletes who want automated tracking of their evolution.
* Coaches who need structured, periodic reports.
* Data-driven users who love learning from their training history.
* Anyone who wants AI-powered insights without subscriptions or external dashboards.
* n8n fans exploring advanced automations.

---

## 🎯 Problems Solved

* No more manual comparison of activities.
* Automatic detection of improvements and regressions.
* A complete evolution report is always stored and searchable.
* Every analysis is emailed in clean, easy-to-read formatting.
* Eliminates the need for external reporting tools.

---

## 📝 Quick Setup

1. Import the `.json` workflow into your n8n.
2. Add your credentials:

   * OpenAI API key
   * Google Sheets
   * Email (SMTP or Gmail)
3. Make sure your Strava activities are synced into the main Sheet.
4. Adjust name, email, language, and range in **OPTIONS**.
5. Run manually or let the scheduler handle it automatically.
6. Also keep in mind that each generated report has an approximate cost of **$0.01** in OpenAI API usage.

---

## 📦 What’s included?

* n8n workflow file (`.json`)
* Internal documentation inside the flow
* Automatic report archiving
* Basic support by email
* Professional AI-generated performance reports sent directly to you

---

Please note that the price of this workflow may increase in future updates, although all updates will remain free for existing users. 


## 📊 Basic Information

- **Workflow ID:** 11214
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11214)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **code** (×3)
- **googleSheets** (×5)
- **set** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stopAndError** (×2)
- **scheduleTrigger** 
- **formTrigger** 
- **gmail** (×2)
- **markdown** 
- **limit** 
- **strava** (×2)
- **stickyNote** (×8)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
