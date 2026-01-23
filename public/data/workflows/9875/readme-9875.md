# Transform meeting notes into Asana tasks & Slack summaries with GPT-4o

> ## Transform meeting notes into organized tasks automatically

This workflow uses AI to extract action items, decisions, and key details from any meeting notes format—then creates tasks in Asana and sends a formatted summary to Slack.

Perfect for sales teams, project managers, and anyone who wants to stop manually tracking action items from meetings.

## What gets extracted
- Action items with assignees and due dates
- Key decisions made
- Pain points or challenges mentioned
- Budget discussions
- Next meeting dates

## How it works

The workflow uses a simple form where you paste meeting notes (from AI notetakers like Otter.ai, manual notes, or any text). GPT-4o analyzes the content and extracts structured data.

Each action item becomes an Asana task with the assignee name, due date, and full meeting context in the notes. All tasks are then aggregated into a formatted Slack message with clickable links, key decisions, pain points, and budget info.

Your team gets a complete meeting summary without reading through pages of notes.

## Setup requirements
- OpenAI API key for GPT-4o
- Asana workspace with OAuth2 connection
- Slack workspace with OAuth2 connection

## Customization ideas
- Replace the form trigger with an email trigger to auto-process notes sent to a specific inbox
- Modify the AI prompt to extract additional fields like risks, dependencies, or next steps
- Add conditional logic to route different meeting types to different Asana projects or Slack channels
- Connect to other project management tools like ClickUp, Monday.com, or Jira instead of Asana
- Add Google Calendar integration to automatically schedule next meetings

## Good to know
- GPT-4o costs approximately $0.01-0.03 per meeting analysis
- The form can be shared with your team for easy submission
- All meeting context is preserved in Asana task notes for reference
- Slack messages include clickable task links for quick access

## 📊 Basic Information

- **Workflow ID:** 9875
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 307
- **Downloads:** 30
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9875)

## 👤 Author

- **Name:** Kareem
- **Username:** @kareem

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×2)
- **asana** 
- **aggregate** 
- **slack** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
