# Classify developer questions with GPT-4o from Slack to Notion & Airtable

> ## 📘 Description:
This workflow automates the Developer Q&A Classification and Documentation process using Slack, Azure OpenAI GPT-4o, Notion, Airtable, and Google Sheets.
Whenever a new message is posted in a specific Slack channel, the workflow automatically:
- Captures and validates the message data
- Uses GPT-4o (Azure OpenAI) to check if the question matches any existing internal FAQs
- Logs answered questions into Notion as new FAQ entries
- Sends unanswered ones to Airtable for human follow-up
- Records any workflow or API errors into Google Sheets
This ensures that every developer query is instantly categorized, documented, and tracked, turning daily Slack discussions into a continuously improving knowledge base.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 Slack Channel Trigger – Developer Q&A
 Triggers the workflow whenever a new message is posted in a specific Slack channel. Captures message text, user ID, timestamp, and channel info.

🧩 Validate Slack Message Payload (IF Node)
 Ensures the incoming message payload contains valid user and text data.
 ✅ True Path → Continues to extract and process the message
 ❌ False Path → Logs error to Google Sheets

💻 Extract Question Metadata (JavaScript)
 Cleans and structures the Slack message into a standardized JSON format — removing unnecessary characters and preparing a clean “question object” for AI processing.

🧠 Classify Developer Question (AI) (Powered by Azure OpenAI GPT-4o)
 Uses GPT-4o to semantically compare the question with an internal FAQ dataset.
 If a match is found → Marks as answered and generates a canonical response
 If not → Flags it as unanswered

🧾 Parse AI JSON Output (Code Node)
 Converts GPT-4o’s text output into structured JSON so that workflow logic can reference fields like status, answer_quality, and canonical_answer.

⚖️ Check If Question Was Answered (IF Node)
 If status == "answered", the question is routed to Notion for documentation; otherwise, it’s logged in Airtable for review.

📘 Save Answered Question to Notion FAQ
 Creates a new Notion page under the “FAQ” database containing the question, AI’s canonical answer, and answer quality rating — automatically building a self-updating internal FAQ.

📋 Log Unanswered Question to Airtable
 Adds unresolved or new questions into Airtable for manual review by the developer support team. These records later feed back into the FAQ training loop.

🚨 Log Workflow Errors to Google Sheets
 Any missing payloads, parsing errors, or failed integrations are logged in Google Sheets (error log sheet) for transparent tracking and debugging.

## 🧩 Prerequisites:
- Slack API credentials (for message trigger)
- Azure OpenAI GPT-4o API credentials
- Notion API connection (for FAQ database)
- Airtable API credentials (for unresolved questions)
- Google Sheets OAuth connection (for error logging)

## 💡 Key Benefits:
 ✅ Automates Slack Q&A classification
 ✅ Builds and updates internal FAQs with zero manual input
 ✅ Ensures all developer queries are tracked
 ✅ Reduces redundant questions in Slack
 ✅ Maintains transparency with error logs

## 👥 Perfect For:
- Engineering or support teams using Slack for developer communication
- Organizations maintaining internal FAQs in Notion
- Teams wanting to automatically capture and reuse knowledge from real developer interactions


## 📊 Basic Information

- **Workflow ID:** 10339
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 37
- **Downloads:** 3
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10339)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Internal Wiki
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **stickyNote** (×10)
- **slackTrigger** 
- **if** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **notion** 
- **airtable** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
