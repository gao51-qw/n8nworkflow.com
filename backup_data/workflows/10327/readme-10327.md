# Client review collection & sentiment analysis with HighLevel, GPT-4o, Gmail & Slack

> ## 📘 Description:
This automation streamlines client review collection and sentiment summarization for Techdome using HighLevel CRM, Azure OpenAI GPT-4o, Gmail, Slack, and Google Sheets.
It starts by pulling recently won deals from HighLevel, then generates and sends AI-written HTML review request emails with built-in Google Review and feedback form links.
After waiting 24 hours, it fetches the client’s reply thread, summarizes the sentiment using GPT-4o, and posts a clean update to Slack for team visibility.
Any failures—API errors, empty responses, or data validation issues—are logged automatically to Google Sheets for full transparency and QA.
The result: a fully hands-free Client Appreciation + Feedback Intelligence Loop, improving brand perception and internal responsiveness.

## ⚙️ What This Workflow Does (Step-by-Step)

▶️ When Clicking ‘Execute Workflow’ (Manual Trigger)
 Allows on-demand execution or scheduled testing of the workflow. Initiates the fetch for all newly “Won” deals from HighLevel CRM.

🏆 Fetch All Won Deals from HighLevel
 Retrieves all opportunities labeled “won” in HighLevel, gathering essential client details such as name, email, and deal information to personalize outgoing emails.

🔍 Validate Deal Fetch Success (IF Node)
 Checks each record for a valid id field.
 ✅ True Path: Moves ahead to generate AI email content.
 ❌ False Path: Logs the event to Google Sheets under the error log sheet.

🧠 Configure GPT-4o Model (Azure OpenAI)
 Initializes the GPT-4o engine that powers all language-generation tasks in this workflow—ensuring precise tone, correct formatting, and safe structured HTML output.

💌 Generate Personalized Review Request Email (AI Agent)
 Uses GPT-4o to create a tailored, HTML-formatted email thanking the client for their business and requesting feedback.
 Includes two clickable CTA buttons:

⭐ Google Review Link:  
📝 Internal Feedback Form: Google Form link for in-depth feedback
 Each email maintains Techdome’s friendly, brand-consistent voice with clean inline CSS styling.

📨 Send Review Request Email to Client (Gmail Node)
 Automatically sends the AI-generated email to the client’s registered address through Gmail.
 Ensures timely post-service communication without manual follow-ups.

⏳ Wait for 24 Hours Before Next Action
 Pauses the workflow for 24 hours to give clients time to read and respond to the review request.

📥 Retrieve Email Thread for Response (Gmail Node)
 After the waiting period, fetches the Gmail thread associated with the initial email to capture client replies or feedback messages.

🧠 Configure GPT-4o Model (Summarization Engine)
 Prepares another GPT-4o instance specialized for summarizing client replies into concise, sentiment-aware Slack messages.

💬 Summarize Client Feedback (AI Agent)
 Analyzes the Gmail thread and produces a short Slack-formatted summary using this structure:

🎉 *New Client Review Received!**Client:* &lt;Name&gt;  
*Feedback:* &lt;Message snippet&gt;  
*Sentiment:* Positive / Neutral / Negative
Focuses on tone clarity and quick readability for internal teams.

📢 Announce Review Summary in Slack
 Posts the AI-generated summary in a designated Slack channel, keeping success and support teams instantly informed of client sentiments and feedback trends.

📊 Log Errors in Google Sheets
 Appends all failures—including fetch issues, missing fields, or parsing errors—to the Google Sheets “error log sheet,” maintaining workflow reliability and accountability.

## 🧩 Prerequisites
- HighLevel CRM OAuth credentials (to fetch deals)
- Azure OpenAI GPT-4o access (for AI-driven writing and summarization)
- Gmail API connection (for sending & reading threads)
- Slack API integration (for posting summaries)
- Google Sheets access (for error logging)

## 💡 Key Benefits
 ✅ Automates personalized review outreach after project completion
 ✅ Waits intelligently before analyzing responses
 ✅ Uses GPT-4o to summarize client sentiment in human tone
 ✅ Sends instant Slack updates for real-time visibility
 ✅ Keeps audit logs of all errors for debugging

## 👥 Perfect For
- Client Success and Account Management Teams
- Agencies using HighLevel CRM for project delivery
- Teams aiming to collect consistent client feedback and reviews
- Businesses wanting AI-assisted sentiment insights in Slack



## 📊 Basic Information

- **Workflow ID:** 10327
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 127
- **Downloads:** 12
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10327)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **if** 
- **googleSheets** 
- **highLevel** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **gmail** (×2)
- **wait** 
- **slack** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
