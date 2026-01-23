# Auto-generate meeting attendee research with GPT-4o, Google Calendar, and Gmail

> ### How it works:

Whenever a new event is scheduled on your Google Calendar, this workflow generates a Meeting Briefing email, giving an overview of each person on the call and the company they work for.

It makes use of the [web search](https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses) tool on the OpenAI Responses API to make lookups.

The workflow triggers when a new event is added to the calendar, loops over each attendee, generating reports on each person and their company, collates the results, and sends the briefing as an email.

### Set up steps:

- Add your credentials for Google Calendar (for viewing events) and Gmail (to send the email)
- Add your OpenAI credentials as a Header Auth on the Company Search and Person Search nodes.
	- Name: Authorization
	- Value: Bearer {{ YOUR_API_KEY }}
- Edit the "Edit Fields" node with the email that you want to send the briefing to, and a short bit of context about yourself.

## 📊 Basic Information

- **Workflow ID:** 3796
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 8199
- **Downloads:** 819
- **Created:** 2025/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3796)

## 👤 Author

- **Name:** Adam Janes
- **Username:** @adamjanes

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **googleCalendarTrigger** 
- **filter** 
- **splitOut** 
- **splitInBatches** 
- **if** 
- **aggregate** 
- **set** (×4)
- **stickyNote** (×4)
- **markdown** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
