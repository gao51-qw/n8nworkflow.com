# Auto-answer GitHub PR questions with GPT-4o, Notion & Slack for dev teams

> ## 📘 Description:
This workflow automates developer Q&A handling by connecting GitHub, GPT-4o (Azure OpenAI), Notion, Google Sheets, and Slack.
 Whenever a developer comments on a pull request with a “how do I…” or “how to…” question, the workflow automatically detects the query, uses GPT-4o to generate a concise technical response, stores it in Notion for documentation, and instantly shares it on Slack for visibility.
 It reduces repetitive manual answering, boosts engineering knowledge sharing, and keeps teams informed with AI-powered insights.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 GitHub PR Comment Trigger — Starts the automation when a pull request comment is posted in a specified repository.
Action: Listens for pull_request_review_comment events.
Description: Captures comment text, author, PR number, and repository name as the trigger payload.

🔍 Validate GitHub Webhook Payload (IF Node) — Ensures the webhook data includes a valid comment URL.
 ✅ True Path: Continues to question detection.
 ❌ False Path: Sends invalid or missing data to Google Sheets for error logging.

❓ Detect Developer Question in PR Comment — Checks whether the comment includes question patterns such as “how do I…” or “how to…”.
 If a valid question is found, the workflow proceeds to the AI assistant; otherwise, it ends silently.

🧠 Configure GPT-4o Model (Azure OpenAI) — Connects to the GPT-4o model for intelligent language generation.
 Acts as the central AI engine to craft short, precise technical answers.

🤖 Generate AI Response for Developer Question — Sends the developer’s comment and PR context to GPT-4o.
 GPT analyzes the question and produces a short (2–3 line) helpful answer, maintaining professional and technical tone.

🧩 Extract GitHub Comment Metadata — Uses a JavaScript code node to structure key details (repo, user, comment, file path, PR number) into a clean JSON format.
 Prepares standardized data for storage and further use.

🧾 Save Comment Insight to Notion Database — Appends the GitHub comment, AI response, and metadata into a Notion database (“test db”).
 Acts as a centralized knowledge base for tracking and reusing AI-generated technical answers.

💬 Post AI Answer & PR Link to Slack — Sends the generated response and GitHub PR comment link to a Slack channel or user.
 Helps reviewers or teammates instantly view AI-generated suggestions and maintain active discussion threads.

🚨 Log Errors in Google Sheets (Error Handling) — Logs webhook validation or AI-processing errors into a shared Google Sheet (“error log sheet”).
 Ensures full visibility into workflow issues for future debugging.

## 🧩 Prerequisites
- GitHub OAuth credentials with webhook access
- Azure OpenAI (GPT-4o) account
- Notion API integration for the documentation database
- Slack API connection for notifications
- Google Sheets API access for error tracking

## 💡 Key Benefits
 ✅ Automated detection of developer questions in GitHub comments
 ✅ AI-generated instant answers with context awareness
 ✅ Centralized documentation in Notion for knowledge reuse
 ✅ Real-time Slack notifications for visibility and collaboration
 ✅ Continuous error logging for transparent troubleshooting

## 👥 Perfect For
- Developer teams using GitHub for code reviews
- Engineering leads wanting AI-assisted PR support
- Companies aiming to build self-learning documentation
- Teams using Notion and Slack for workflow visibility


## 📊 Basic Information

- **Workflow ID:** 10331
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10331)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **stickyNote** (×9)
- **githubTrigger** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **notion** 
- **googleSheets** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
