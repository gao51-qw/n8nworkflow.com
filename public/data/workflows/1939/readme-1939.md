# Send labeled email to a Notion database

> This workflow sends the contents of an email to a Notion database. The email must be labeled with a specific label for the workflow to trigger. The email subject will be the title of the Notion page, and a snippet of the email body will be the content of the Notion page. The email link will be added to the Notion page as a property.

## Prerequisites

Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works

On scheduled intervals, find all emails with a specific label. For each email, check if the email already exists in the Notion database. If it does not exist, create a new page in the Notion database, otherwise do nothing. When the task in the Notion database is checked off, the label will be removed from the email.

### Setup

This workflow requires that you set up a Notion database or use an existing one with at least the following fields:

- Title (title)
- Thread ID (text)
- Email thread (URL)

Additionally, create a label that will be used to trigger the workflow in Gmail. In this workflow, the label is called "Notion".

## 📊 Basic Information

- **Workflow ID:** 1939
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 7456
- **Downloads:** 745
- **Created:** 2023/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1939)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **dateTime** 
- **gmail** (×2)
- **notion** (×2)
- **if** (×2)
- **notionTrigger** 
- **noOp** (×2)
- **merge** 
- **httpRequest** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
