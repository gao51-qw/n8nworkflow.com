# Sync Outlook calendar events to Notion

> This workflow syncs Outlook Calendar events to a Notion database. The Outlook Calendar event must be within a specific time frame (default of within next year) for the workflow to pick up the event. The event subject will be the title of the Notion page, and the event link will be added to the Notion page as a property.

## Prerequisites

- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
- Microsoft account and [Microsoft credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoft/).

## How it works

On scheduled intervals, find all Outlook Calendar events within a specific time frame. For each event, check if the event already exists in the Notion database. If it does not exist, create a new page in the Notion database, otherwise update the existing page.

## Setup

This workflow requires that you set up a Notion database or use an existing one with at least the following fields:

- Title (title)
- Date (date)
- Event ID (text)
- Link (URL)

## 📊 Basic Information

- **Workflow ID:** 1945
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 3698
- **Downloads:** 369
- **Created:** 2023/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1945)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **notion** (×3)
- **merge** 
- **if** 
- **dateTime** 
- **itemLists** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
