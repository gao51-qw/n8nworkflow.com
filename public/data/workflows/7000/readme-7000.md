# Emergency alert workflow for schools – notify parents & staff instantly

> This n8n workflow ensures instant notifications to parents and staff during school emergencies. It processes incoming alerts via webhooks, filters active emergencies, and sends notifications through email and Slack.

## Key Features
- **Instant Alerts**: Triggers notifications immediately upon detecting emergencies.
- **Multi-Channel**: Sends alerts via email and Slack for broad reach.
- **Automated Filtering**: Identifies and processes only active emergency alerts.
- **Reliable Delivery**: Ensures notifications reach parents and staff swiftly.
- **No Action Needed**: Skips inactive alerts without further processing.

## Workflow Process
1. **Webhook Trigger**: Receives POST requests with emergency data.
2. **Filter Emergency Alerts**: Checks and validates active emergency alerts.
3. **Send Email Alert**: Delivers email notifications to parents and staff.
4. **Send Slack Alert**: Posts real-time messages to a Slack channel.
5. **No Action for Inactive**: Ignores and stops for inactive alerts.

## Setup Instructions
- **Import Workflow**: Load the workflow into n8n using the import feature.
- **Configure Webhook**: Set up a webhook URL to receive emergency data.
- **Set Up Notifications**: Add email (e.g., Gmail) and Slack credentials.
- **Activate**: Save and enable the workflow in n8n.
- **Test**: Simulate an alert to ensure notifications work.

## Requirements
- **n8n Instance**: Hosted or cloud-based n8n environment.
- **Webhook Source**: System to send emergency data via POST.
- **Email Service**: SMTP setup for email alerts.
- **Slack Integration**: Configured Slack workspace for alerts.

## Customization Options
- **Add Channels**: Include SMS or other platforms for alerts.
- **Adjust Filters**: Modify criteria for active alerts.
- **Custom Messages**: Tailor email/Slack content for clarity.

## 📊 Basic Information

- **Workflow ID:** 7000
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 231
- **Downloads:** 23
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7000)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **emailSend** 
- **slack** 
- **noOp** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
