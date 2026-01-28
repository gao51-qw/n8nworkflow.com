# Automated meeting summaries: Google Meet to Slack with Vexa.ai and GPT-4o

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Automated Meeting Bot: Google Meet → AI Summary → Slack

## How it works
Automatically joins Google Meet calls, transcribes conversations, and posts AI-generated summaries to Slack - completely hands-free meeting notes for busy teams.

The workflow triggers when a Google Meet starts in your calendar, joins the meeting with a bot, waits for completion, then generates and posts a structured summary to your Slack channel.

## Set up steps
* Connect Google Calendar API for meeting detection
* Set up Vexa.ai account and obtain API key for meeting bot functionality  
* Configure OpenAI API credentials for AI-powered summarization
* Create Slack bot token and add to desired channel
* Update calendar ID and Slack channel in workflow settings
* Test with a sample meeting to verify end-to-end functionality

Keep detailed descriptions in sticky notes inside your workflow for easy configuration and troubleshooting.

## 📊 Basic Information

- **Workflow ID:** 7072
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 723
- **Downloads:** 72
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7072)

## 👤 Author

- **Name:** Vladimir
- **Username:** @vilin1927

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **googleCalendarTrigger** 
- **slack** 
- **@n8n/n8n-nodes-langchain.agent** 
- **wait** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
