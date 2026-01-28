# Summarize Gmail support emails with Gemini and post to Slack

> # Summarize Gmail Support Emails with Gemini and Post to Slack

This workflow automatically checks your Gmail inbox for new support emails, summarizes them using **Google Gemini** and posts concise summaries directly into **Slack**. Instead of manually reading long support emails, your team can stay updated with short, actionable insights in real-time.


## Who’s it for

* **Customer Support Teams** – to stay on top of support tickets without reading lengthy emails.
* **Operations Managers** – who need quick insights on issues raised by customers.
* **Engineering Teams** – who want alerts and summaries of support escalations in Slack.
* **Founders/Execs** – who prefer high-level summaries rather than full email threads.


## How it works

1. **Gmail Trigger – Check Support Emails**
	* The workflow runs every minute to detect new incoming emails in your support inbox.

2. **Forward Email to Gemini for Summarization**

	* Extracts the email body and prepares it for the LLM model.

3. **Gemini – Summarize Support Email**

	* Google Gemini condenses the email into a short, clear summary.

4. **Slack – Post Summary to Channel**

	* The summarized text is sent to your chosen Slack channel for instant visibility.


## How to set up

1. Connect your **Gmail account** in n8n.
2. Configure the Gmail Trigger to check emails from your support inbox (or apply filters like subject = “Support” or label = “Support”).
3. Add your **Google Gemini API credentials** in n8n.
4. Configure Gemini with a summarization prompt (e.g., “Summarize this email in 3 bullet points”).
5. Connect your **Slack account** and select the target channel.
6. Save and activate the workflow.


## Requirements

* **n8n instance** (self-hosted or cloud).
* **Google Account** with Gmail API enabled.
* **Google Gemini API access** (API key).
* **Slack workspace** with a bot token and permission to post messages.


## How to customize

* Change the **email filters** in the Gmail Trigger (e.g., only unread emails, only with label `Support`).
* Modify the **summarization style** in Gemini (bullet points, short paragraph, etc.).
* Choose a different **Slack channel** for posting (e.g., #support, #alerts, #dev-team).
* Add additional nodes for **logging into Google Sheets** or **creating Jira tickets**.


## Add-ons

* Save original emails + summaries into **Google Sheets** for tracking.
* Create **Jira or Trello tasks** automatically for high-priority issues.
* Add a **translation step** if support emails arrive in multiple languages.
* Integrate with **Zendesk** or **Freshdesk** if you also use those tools.
* Integrate OpenAI LLM models.


## Use Case Examples

* Customer sends a bug report → Gemini summarizes key points → Slack post alerts dev team instantly.
* Support email with long back-and-forth conversation → condensed into a 3-line summary in Slack.
* Team lead checks Slack daily instead of logging into Gmail to stay informed.


## Common Troubleshooting

| **Issue** | **Possible Cause** | **Solution** |
| -------------------------------- | ------------------------------------- | ---------------------------------------------------------------- |
| No emails detected | Gmail Trigger not configured properly | Check Gmail Trigger settings and labels/filters. |
| Gemini not summarizing | API key missing or invalid | Re-add Gemini API credentials in n8n. |
| Slack not receiving messages | Slack auth expired or wrong channel | Reconnect Slack account and verify channel ID. |
| Workflow runs but nothing posted | Summarization output empty | Adjust Gemini prompt or check email format (HTML vs plain text). |


## 👨‍💻Need help?

If you need assistance setting up or customizing this workflow, feel free to reach out WeblineIndia. We can help you:

* Configure Gmail filters.
* Optimize Gemini prompts for better summaries.
* Connect Slack and set up advanced alerts.
* Extend the workflow with Sheets, Jira or other integrations.

## 📊 Basic Information

- **Workflow ID:** 7594
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 513
- **Downloads:** 51
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7594)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmailTrigger** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
