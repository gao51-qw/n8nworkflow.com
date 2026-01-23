# Notify user in Slack of quarantined email and create Jira ticket if opened

> This n8n workflow serves as an incident response and notification system for handling potentially malicious emails flagged by Sublime Security. It begins with a Webhook trigger that Sublime Security uses to initiate the workflow by POSTing an alert. The workflow then extracts message details from Sublime Security using an HTTP Request node, based on the provided messageId, and subsequently splits into two parallel paths.

In the first path, the workflow looks up a Slack user by email, aiming to find the recipient of the email that triggered the alert. If a user is found in Slack, a notification is sent to them, explaining that they have received a potentially malicious email that has been quarantined and is under investigation. This notification includes details such as the email's subject and sender.

The second path checks whether the flagged email has been opened by inspecting the read_at value from Sublime Security. If the email was opened, the workflow prepares a table summarizing the flagged rules and creates a corresponding issue in Jira Software. The Jira issue contains information about the email, including its subject, sender, and recipient, along with the flagged rules.

Issues that someone might encounter when setting up this workflow for the first time include potential problems with the Slack user lookup if the user information is not available or if Slack API integration is not configured correctly. Additionally, the issue creation in Jira Software may not work as expected, as indicated by the note that mentions a need for possible node replacement. Thorough testing and validation with sample data from Sublime Security alerts can help identify and resolve any potential issues during setup.

## 📊 Basic Information

- **Workflow ID:** 1975
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1982
- **Downloads:** 198
- **Created:** 2023/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1975)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **if** (×2)
- **webhook** 
- **httpRequest** (×2)
- **jira** 
- **stickyNote** (×3)
- **slack** 
- **noOp** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
