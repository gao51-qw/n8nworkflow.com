# Elastic alert notification via Microsoft Graph API

> ## **Who is this template for?**

This template is for teams and administrators who use n8n to monitor Elastic alerts and want to receive automated email notifications when an alert is triggered. It leverages Microsoft Graph API to send emails and provides an efficient way to notify users about alerts directly in their inbox.

## **How it works?**

The template connects to the Elastic API to retrieve alert data. When a new alert is detected, the workflow processes the alert content and sends an email notification via Microsoft Graph API. The email includes alert details such as the alert name, timestamp, severity, and a summary of the message, allowing for quick action or review.

## **Setup steps**

Step 1: Set up OAuth2 Credentials in n8n for Microsoft Graph API with Mail.Send permission.
Step 2: Configure your Elastic API endpoint in the HTTP Request node to retrieve alerts.
Step 3: Modify the email recipients in the template to specify who will receive the alert notifications.
Step 4: Customize the email format, if necessary, to include additional alert details or adjust the message.

## 📊 Basic Information

- **Workflow ID:** 2523
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1251
- **Downloads:** 125
- **Created:** 2024/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2523)

## 👤 Author

- **Name:** Aditya Gaur
- **Username:** @autom8r

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** (×2)
- **scheduleTrigger** 
- **if** 
- **noOp** (×2)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
