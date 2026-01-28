# Automated email triage with Gmail, GPT-4o, and Slack urgency notifications

> Hourly Email Summary:
This agent scans your inbox every 4 hour and summarizes new emails into a clean, actionable Slack message. Powered by GPT-4, it classifies emails by Urgency (High, Medium, Low) and Intent (Awaiting Reply, To Respond, Comment, Notification, Marketing). No more inbox FOMO — just what you need to act fast.

Main Use Cases:
• Stay on top of important threads without refreshing your inbox constantly
• Prioritize tasks and replies based on urgency and context
• Catch missed follow-ups by surfacing emails that need a response
• Filter out noise like marketing emails or low-priority notifications
• Enable async decision-making by keeping the team updated on critical emails via Slack
• Reduce cognitive load by letting AI handle sorting and triaging
⸻

✅ Steps to Use
1. Connect Your Accounts: Add your Gmail, Slack, Google Sheets, and OpenAI credentials inside n8n.
2. Create Gmail Labels (Required): Go to your Gmail settings and create labels matching the following format:
AI Agent/To Respond, AI Agent/Awaiting Reply, AI Agent/Notification, AI Agent/Marketing, etc.
These are used by the workflow to auto-tag emails based on intent.
3. Create a Google Sheet with 2 Tabs
• Name the sheet something like “N8N - Emails”.
• Add two sheets/tabs inside:
• Sheet1 → stores all processed emails
• Sheet2 → stores only the latest batch for digest view
• In both sheets, add these columns (first row): From | Summary | Intent | Category | TimeStamp | Urgency
4. Import the Workflow: Upload or paste the .json file into your n8n instance. Make sure each node is linked to your active credentials.
4. Configure Slack Channel: In the Slack node, select the channel where you want urgent alerts and digest summaries to be posted.
5. Adjust Schedule (Optional): Default: runs every hour. You can tweak this to suit your preference (e.g., every 30 min or 2 hours).
6. Run a Test: Execute manually once to check:
• Emails are getting processed
• Labels are added correctly in Gmail
• Slack notifications are triggered
• Data is logged in Google Sheets
7. Turn It On
• Once everything looks good, activate the workflow.
• Your inbox will now be triaged in real-time — sorted, labeled, summarized.


Step-by-Step Breakdown:
1. ⏰ Schedule Trigger: Runs every hour to kick off the workflow automatically.
2. 📩 Fetch Emails & Labels
• Pulls all Gmail messages received in the last 4 hours.
• Also fetches Gmail labels to use for tagging messages based on intent.
3. 🤖 Analyze with GPT-4
• Each email is analyzed using GPT-4.
• Output includes:
• Summary
	• Urgency: High, Medium, Low
	• Intent: To Respond, Awaiting Reply, Marketing, Notification, etc.
	• Category: Customer, Investor, Spam, etc.
4. Classify and Label
• Emails are tagged with the right intent label inside Gmail.
5.🚨 Slack Alerts for High Urgency
• If an email is marked High Urgency, it sends an alert to a designated Slack channel with all key details.
6. 📊 Google Sheets Logging
• All emails are logged to two Google Sheets:
• Sheet1: All messages, for long-term record.
• Sheet2: Temporary sheet to collect latest batch for digest.
7. ⏳ Wait + Digest Preparation
• After logging, the workflow waits 30 seconds.
• It then fetches recent entries from Sheet2, filters out older messages, and groups them by Medium and Low urgency.
8. 📬 Slack Digest Summary
• A clean digest is posted on Slack showing only the Medium and Low urgency messages from the past hour — helping you catch up without inbox overload.

Uses a System Prompt to define its role as an AI Chief of Staff.

Uses a User Prompt that instructs GPT-4 to analyze each email and return a structured JSON with the following:
• summary – One-line summary of the email
• urgency – High / Medium / Low
• category – Investor, Customer, Support, Spam, Other
• Intent – One of:
	• To Respond: Needs your reply
	• Awaiting Reply: You’re waiting for a response
	• Notification: Auto-updates from tools or services
	• Meeting Update: Calendar or schedule changes
	• Marketing: Promotional or cold emails
	• FYI: Informational emails that don’t need action

The output is clean JSON with built-in guardrails to avoid hallucinations or irrelevant content. Only real message data is used for summaries and classification.

Sections with no relevant data are omitted to keep it concise.

🧩 What’s Next

This agent already cuts through inbox noise and gives you clarity — but there’s more you can build on top:

💡 Suggestions to Improve:
• Train on your past threads to make prioritization even smarter
• Allow custom rules per sender or domain (e.g. always mark investor emails as High)
• Add emoji tags or reactions in Slack to quickly mark emails as done or follow-up
• Support voice summary via Slack audio snippet or Loom integration

🚀 Next Features You Could Add:
• Reply-from-Slack: One-click smart reply suggestions that can be sent right from Slack
• Cross-inbox support: Add Outlook or multiple Gmail accounts
• Weekend Digest: A weekly email or Slack drop with trends (top senders, most flagged categories)
• Daily Timeline View: Generate a Notion page that logs the day’s most critical communication

## 📊 Basic Information

- **Workflow ID:** 6588
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1194
- **Downloads:** 119
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6588)

## 👤 Author

- **Name:** Siddhant
- **Username:** @siddhant

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **slack** (×2)
- **code** (×3)
- **googleSheets** (×3)
- **wait** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
