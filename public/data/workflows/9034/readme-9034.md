# Automate lead generation with Apollo, AI parsing, and timed email follow-ups

> ## Good to know:
- The workflow runs every hour with a randomized delay of 5–20 minutes to help distribute load.
- It records the exact date and time a lead is emailed so you can track outreach.
- Follow-ups are automatically scheduled two days after the initial email.

## How it works:

1. After apify completes, the JSON data is retrieved and inserted into the proper JSON node (only the JSON is removed — nothing else).
2. The agent then runs on its own, parsing the data and pushing it to Google Sheets.
3. When a lead is emailed, the system tags it with the date and time for tracking.
4. Two days later the workflow automatically triggers a follow-up, again on an hourly schedule with the same time delay.

## How to use:

1. Start by connecting your apify account to retrieve data.
2. Place the returned JSON into the designated JSON node.
3. Configure your Google Sheet where the data will be stored.
4. Adjust the time delay window or follow-up period if needed.
5. Insert your email credentials and the message.
 
## Requirements:

- Apify account with active leads/data.
- Google Sheet for storing and managing parsed lead information.
- n8n credentials configured for your accounts.
- email credentials

Customising this workflow:

You can easily extend this template to include other CRMs, different time delays, or additional notification steps. For example, push new leads to Slack, send SMS notifications, or trigger downstream analytics dashboards automatically.

## 📊 Basic Information

- **Workflow ID:** 9034
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 526
- **Downloads:** 52
- **Created:** 2025/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9034)

## 👤 Author

- **Name:** Deniz
- **Username:** @denizdinc

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **wait** (×2)
- **googleSheets** (×7)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **gmail** (×2)
- **limit** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **manualTrigger** 
- **formTrigger** 
- **httpRequest** 
- **scheduleTrigger** (×2)
- **if** (×3)
- **splitInBatches** 
- **code** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
