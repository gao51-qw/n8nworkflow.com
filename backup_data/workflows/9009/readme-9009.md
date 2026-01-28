# Convert Slack messages to Notion todos using 📝 emoji reactions

> This n8n workflow turns Slack messages into actionable Notion todos — using nothing more than a simple emoji reaction.

By reacting to any Slack message with the 📝 emoji, the workflow will automatically capture the message, extract its content, and create a new Notion to_do item with a link back to the original message. A daily scheduled Slack message then reminds you of any tasks left unchecked in Notion.

Perfect for async teams who live in Slack but organize work in Notion, this template helps you bridge the gap between communication and execution—without switching tools or relying on memory.

## Who’s it for

- Teams that use Slack and Notion daily
- Product managers, leads, and async-first teams who want quick capture of action items
- Anyone tired of copy-pasting Slack messages into Notion manually

## How it works
### Emoji-triggered Notion capture

1. The workflow listens for the reaction_added event from Slack.
2. When a user reacts to a message with :memo:, it fetches the full message content and permalink. 
3. It creates a to_do block in Notion with the message and a direct link to the original Slack thread.

### Daily Slack reminder

1. Every day at 08:00, the workflow scans all to_do blocks in a designated Notion page. 
2. It filters out those that are still unchecked.
3. It aggregates the unchecked tasks and sends a single Slack message to the user with the list of open todos.

## How to set up

- Connect your Slack account and configure the trigger to watch for the :memo: reaction.
- Connect your Notion account and select a page where todos should be created.
- Customize the schedule time if needed (default is 08:00).
- (Optional) Set up the final Slack message node to send reminders to yourself or a specific team channel.

## Requirements

- A Slack app with permission to read messages and reactions
- A Notion integration with access to edit the target page
- A Notion page with blocks enabled (or create one manually)

## How to customize the workflow

- Change the emoji from :memo: to another (e.g. :fire: for urgent, :idea: for brainstorms)
- Add logic to assign Notion tasks to specific team members
- Use Slack threads, tags, or message metadata to auto-categorize tasks
- Modify the daily reminder to include due dates, priorities, or Slack buttons to check off tasks

## 📊 Basic Information

- **Workflow ID:** 9009
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 289
- **Downloads:** 28
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9009)

## 👤 Author

- **Name:** Guilherme Campos
- **Username:** @gpirescampos

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **slackTrigger** 
- **slack** (×2)
- **aggregate** 
- **scheduleTrigger** 
- **filter** (×3)
- **notion** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
