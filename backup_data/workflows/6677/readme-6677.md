# Error log monitor with SSH, Slack alerts & Jira ticket creation

> ## Description
- Automates monitoring of error logs and notifies developers of critical errors.
- Sends Slack alerts for critical and non-critical errors, with auto-creation of Jira tickets for critical issues.

## Essential Information
- Triggers manually or on a scheduled basis (e.g., every 5 minutes).
- Reads and parses server logs to detect errors.
- Alerts developers via Slack and creates Jira tickets for critical errors.

## System Architecture
- **Error Detection Pipeline**:
  - **Manual Trigger**: Initiates the workflow manually.
  - **Schedule Every 5min**: Schedules automatic runs every 5 minutes.
  - **Set Config**: Configures basic parameters for log reading.
  - **Read Error Logs**: Executes SSH command to fetch server logs.
  - **Wait For All Logs**: Ensures all logs are read.
- **Error Processing Flow**:
  - **Parse Logs**: Parses logs and categorizes critical vs. non-critical errors.
  - **IF Critical Error**: Filters for critical errors.
- **Alert and Ticket Creation**:
  - **Send Slack Alert**: Sends detailed alerts for critical errors via Slack.
  - **Create Jira Ticket**: Creates a Jira ticket for critical errors.
  - **Send Non-Critical Alert**: Sends simple alerts for non-critical errors via Slack.

## Implementation Guide
- Import the workflow JSON into n8n.
- Configure SSH credentials for log access.
- Set up Slack and Jira integrations with appropriate credentials.
- Test with a manual trigger and sample log data.
- Adjust the schedule (e.g., every 5min) and error parsing rules as needed.
- Monitor alert accuracy and ticket creation.

## Technical Dependencies
- SSH access for reading server logs.
- Slack API for team notifications.
- Jira API for bug ticket creation.
- n8n for workflow automation and scheduling.

## Customization Possibilities
- Adjust the Cron schedule for different intervals (e.g., every 10min).
- Modify `Parse Logs` node to refine error categorization rules.
- Customize Slack alert messages in `Send Slack Alert` and `Send Non-Critical Alert` nodes.
- Enhance Jira ticket details in `Create Jira Ticket` node (e.g., add priority).
- Add email notifications for additional alert channels.

## 📊 Basic Information

- **Workflow ID:** 6677
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 531
- **Downloads:** 53
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6677)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **ssh** 
- **code** 
- **if** 
- **slack** (×2)
- **jira** 
- **wait** 
- **stickyNote** (×10)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
