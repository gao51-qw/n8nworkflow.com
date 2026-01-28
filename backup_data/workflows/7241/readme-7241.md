# Automate AWS IAM user management through email

> This automated n8n workflow manages AWS IAM users (create, delete, update, assign to groups) directly from email commands with automatic confirmation responses.

### Good to Know
- The workflow processes email requests via a GET Email Request node.
- Data extraction from emails is handled to identify user management commands.
- Error handling is included for invalid or missing email data.
- Responses are sent via email for each action performed.

## How It Works
- **GET Email Request** - Captures incoming email requests.
- **Extract Data from Email** - Parses email content to extract user management commands.
- **Check Type of Task** - Validates the type of task (e.g., create, delete, update).
- **Get User** - Retrieves user details from AWS IAM.
- **Get Many Users** - Fetches multiple user details if required.
- **Create User** - Creates a new IAM user.
- **Delete User** - Deletes an existing IAM user.
- **Add to Group** - Assigns a user to a group.
- **Remove from Group** - Removes a user from a group.
- **Update User** - Updates user details.
- **Make Message for Email** - Prepares a confirmation email.
- **Send Email Response** - Sends the confirmation email.

## How to Use
- Import the workflow into n8n.
- Configure the GET Email Request node to receive email commands.
- Test the workflow with sample email commands (e.g., "create user: john_doe", "add to group: admins").
- Monitor email responses and adjust command parsing if needed.

## Requirements
- AWS IAM credentials configured in n8n.
- Email service integration (e.g., SMTP settings).
- n8n environment with workflow execution permissions.

## Customizing This Workflow
- Adjust the Extract Data from Email node to support additional command formats.
- Modify the Make Message for Email node to customize confirmation messages.
- Update the AWS IAM nodes to include additional user attributes or group policies.

## 📊 Basic Information

- **Workflow ID:** 7241
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 261
- **Downloads:** 26
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7241)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **emailSend** 
- **awsIam** (×7)
- **emailReadImap** 
- **switch** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
