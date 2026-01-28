# Multi-channel website downtime alerts with UptimeRobot, Slack, WhatsApp & Notion

> ## Description
- Automates website downtime detection and notifications using UptimeRobot.
- Triggers alerts via Slack, WhatsApp, or Email when a website goes down.
- Creates a task in Notion and tags the responsible engineer for resolution.

## Essential Information
- Monitors website status via UptimeRobot webhook.
- Sends immediate alerts to multiple channels (Slack, WhatsApp, Email).
- Generates a Notion task to track and assign downtime resolution.

## System Architecture
- **Downtime Detection Pipeline**:
  - **UptimeRobot Webhook Trigger**: Detects website status changes (triggers on "down" status).
- **Alert Generation Flow**:
  - **Send Slack Alert**: Notifies the team via Slack.
  - **Send WhatsApp Alert**: Sends a message via WhatsApp.
  - **Send Email Alert**: Emails the team about the downtime.
- **Task Management**:
  - **Create Notion Task**: Creates a task in Notion and tags the responsible engineer.

## Implementation Guide
- Import the workflow JSON into n8n.
- Configure UptimeRobot webhook with the workflow URL (trigger on "down" status).
- Set up Slack, WhatsApp, and Email credentials.
- Configure Notion integration and specify the responsible engineer tag.
- Test with a simulated downtime event.
- Monitor alert delivery and task creation accuracy.

## Technical Dependencies
- UptimeRobot API for website monitoring and webhook triggers.
- Slack API for team notifications.
- WhatsApp API (e.g., Twilio) for messaging.
- Email service (e.g., SMTP) for email alerts.
- Notion API for task management.
- n8n for workflow automation.

## Customization Possibilities
- Adjust UptimeRobot trigger to include additional status conditions (e.g., "paused").
- Customize alert messages in Slack, WhatsApp, and Email nodes.
- Modify Notion task template to include more details (e.g., downtime duration).
- Add escalation logic for unresolved issues.
- Integrate with additional tools (e.g., PagerDuty) for alerts.

## 📊 Basic Information

- **Workflow ID:** 6645
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 207
- **Downloads:** 20
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6645)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **webhook** 
- **slack** 
- **emailSend** 
- **notion** 
- **whatsApp** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
