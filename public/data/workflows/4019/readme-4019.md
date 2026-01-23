# Automate daily YouTrack task summaries to Discord by assignee

> # Daily YouTrack In-Progress Tasks Summary to Discord by Assignee

Keep your team in sync with a daily summary of tasks currently **In Progress** in YouTrack — automatically posted to your **Discord** channel.

This workflow queries issues, filters them by status, groups them by **assignee** and **priority**, and sends a formatted message to Discord. It's perfect for teams that need a lightweight, automated stand-up report.

&gt; 📝 This workflow uses **Discord** as an example. You can easily replace the messaging integration with Slack, Mattermost, MS Teams, or any other platform that supports incoming webhooks.

## Use Case

- Remote development teams using YouTrack + Discord
- Replacing daily stand-up meetings with async updates
- Project managers needing quick visibility into active tasks

## Features

- **Scheduled** daily execution (default: weekdays at 09:00)
- **Status filter**: only issues marked as `In Progress`
- **Grouping** by assignee and priority
- **Custom mapping** for user mentions (YouTrack → Discord)
- **Clean Markdown output** for Discord, with direct task links

## Setup Instructions

### YouTrack Configuration

1. **Get a permanent token**:
   - Go to your YouTrack profile → Account Security → Authentication
   - Create a new permanent token with "Read Issue" permissions
   - Copy the token value

2. **Set the base API URL**:
   - Format: `https://yourdomain.youtrack.cloud/api/issues`
   - Replace `yourdomain` with your actual YouTrack instance

3. **Identify custom field IDs**:
   - Method 1: Go to YouTrack → Administration → Custom Fields → find your "Status" field and note its ID
   - Method 2: Use API call `GET /api/admin/customFieldSettings/customFields` to list all field IDs
   - Method 3: Inspect a task's API response and look for field IDs in the `customFields` array
   - Example Status field ID: `105-0` or `142-1`

### Discord Configuration

- Create a **webhook URL** in your Discord server:
  - Server Settings → Integrations → Webhooks → New Webhook
  - Choose target channel and copy the webhook URL
  - Extract webhook ID from URL (numbers after `/webhooks/`)

## Environment Variables & Placeholders

| Placeholder | Description |
|-------------|-------------|
| `{{API_URL}}` | Your YouTrack API base URL |
| `{{TOKEN}}` | YouTrack permanent token |
| `{{FIELD_ID}}` | ID of the "Status" custom field |
| `{{QUERY_FIELDS}}` | Fields to fetch (e.g., summary, id) |
| `{{PROJECT_LINK}}` | Link to your YouTrack project |
| `{{USER_X}}` | YouTrack usernames |
| `{{DISCORD_ID_X}}` | Discord mentions or usernames |
| `{{NAME_X}}` | Display names |
| `{{WEBHOOK_ID}}` | Discord webhook ID |
| `{{DISCORD_CHANNEL}}` | Discord channel name |
| `{{CREDENTIAL_ID}}` | Your credential ID in n8n |

## Testing the Workflow

1. **Test YouTrack connection**:
   - Execute the "HTTP Request YT" node individually
   - Verify that issues are returned from your YouTrack instance
   - Check if the Status field ID is correctly filtering tasks

2. **Verify filtering**:
   - Run the "Filter fields" node
   - Confirm only "In Progress" tasks pass through

3. **Check message formatting**:
   - Execute the "Discord message" node
   - Review the generated message content and formatting

4. **Test Discord delivery**:
   - Run the complete workflow manually
   - Verify the message appears in your Discord channel

5. **Schedule verification**:
   - Enable the workflow
   - Test weekend skip functionality by temporarily changing dates

## Customization Tips

- **Language**: All labels/messages are in English — customize if needed
- **User mapping**: Adjust assignee → Discord mention logic in the message builder
- **Priorities**: Update the `priorityMap` to reflect your own naming structure
- **Schedule**: Modify the trigger time in the `Schedule Trigger` node
- **Alternative platforms**: Swap out the Discord webhook for another messaging service if preferred

## 📊 Basic Information

- **Workflow ID:** 4019
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 620
- **Downloads:** 62
- **Created:** 2025/5/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4019)

## 👤 Author

- **Name:** Halfbit 🚀
- **Username:** @halfbit

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **stickyNote** (×3)
- **scheduleTrigger** 
- **code** (×2)
- **if** 
- **httpRequest** 
- **filter** 
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
