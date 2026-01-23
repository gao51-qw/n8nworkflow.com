# Notify on new emails with invoices in Slack

> This workflow checks for new emails in a mailbox and if the email body contains the word "invoice" it will send the attachment to Mindee. It then posts a message to Slack to let the team know a payment needs to be made, If the value of the invoice is over 1000 it will also email the finance manager.

To use this workflow you will need to configure the IMAP node to select the correct mailbox to use then configure the Mindee node to use your credentials.

Once that is done the Send Email node will need to be configured to use the correct mail server and to send to the correct people, The last thing to configure is the Slack node this will need your Slack credentials and the channel you want to post the message to.

## 📊 Basic Information

- **Workflow ID:** 1467
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2674
- **Downloads:** 267
- **Created:** 2022/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1467)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **emailReadImap** 
- **if** (×2)
- **mindee** 
- **slack** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
