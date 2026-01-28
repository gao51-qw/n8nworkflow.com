# Send Gmail messages with custom aliases and attachments via API

> # This n8n template allows you to send emails with a custom alias from your Gmail account
Since the native Gmail node has some limitations regarding use of email aliases, this template allows you to set up your own internal endpoint/sub-workflow to send emails as an email alias .

# How it works
This workflow uses a Code node and the Gmail API via an HTTP node to format the email content and send using an alias on your Gmail account.

# Setup instructions
1. You must have added the email address as an alias you wish to send as in your Gmail account, guide on how to do so [here](https://support.google.com/mail/answer/22370?hl=en).
2. You must have created a Gmail credential in N8N, guide on how to do so [here](https://docs.n8n.io/integrations/builtin/credentials/google/).
3. Use your Gmail OAuth Credential in the HTTP node. 
4. Use this template as an API endpoint or a sub-workflow, and send this payload to it via POST:
```
{
  "senderName": "SENDER NAME HERE",
  "fromEmail": "FROM EMAIL HERE",
  "replyTo": "REPLY TO EMAIL HERE",
  "toEmail": "jacob@vwork.digital",
  "subject": "SUBJECT LINE HERE",
  "htmlBody": "HTML BODY HERE - MUST BE JSON STRINGIFIED",
  "file_urls": [
    "FILE URLS FOR ATTACHMENTS HERE"
  ]
}
```
# Notes
Only the following are required fields:
- fromEmail
- toEmail
- subject
- htmlBody
	
# Customizing this workflow
You can easily convert this to a sub-workflow by swapping out the Webhook trigger for a "When executed by another workflow" trigger


## 📊 Basic Information

- **Workflow ID:** 5613
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 753
- **Downloads:** 75
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5613)

## 👤 Author

- **Name:** Jacob @ vwork Digital
- **Username:** @jacob-vwork-digital

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **httpRequest** (×2)
- **code** 
- **splitOut** 
- **if** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
