# Send file to kindle with Telegram Bot and Outlook

> ## Workflow Overview
This workflow automates the process of forwarding e-book files to a Kindle device using a Telegram bot and Outlook email.

## Setup Steps:

1. **Telegram Bot Setup**:  
   Create a Telegram bot via BotFather and configure its credentials in the workflow.

2. **Outlook Email Configuration**:  
   Set up your Outlook email credentials. (Currently, only Outlook is supported, but you can modify the workflow to support other email providers.)

3. **Amazon Kindle Email Setup**:  
   Find your Kindle device's email address from your Amazon account. This will be the recipient address for the e-books.

4. **Allow Email Sending to Kindle**:  
   Ensure your Amazon account is configured to allow emails from your Outlook address to send files to your Kindle.

## Workflow Explanation:

- The workflow begins with a **Telegram bot trigger** node that listens for new chat messages.

- When a new message is received, the workflow checks if the message contains a file attachment.  
  - If no file is detected, the bot will send a warning reply to the user in the chat.

- If a file is found, it will be renamed to ensure it appears correctly on the Kindle device when sent.

- The workflow then composes an email with the file attached and sends it to the Kindle's receiving address.  
  - If the email is sent successfully, the bot will notify the user with a success message in the chat.

- Only Amazon-supported file types will be accepted by Kindle.  
  - If sending fails, you will receive a notification email from Amazon in your Outlook inbox.  
  - In case of delivery issues, retry sending the file as network issues may occasionally interfere with the process.


## 📊 Basic Information

- **Workflow ID:** 2387
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1801
- **Downloads:** 180
- **Created:** 2024/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2387)

## 👤 Author

- **Name:** CreativeCreature
- **Username:** @hulb

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** 
- **telegram** (×2)
- **code** 
- **microsoftOutlook** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
