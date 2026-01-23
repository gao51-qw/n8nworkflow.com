# n8n Workflow Error Alerts with Google Sheets, Telegram, and Gmail

> This n8n workflow provides a robust error handling and notification system for your n8n workflows. When an error occurs, it automatically logs the error details to Google Sheets, sends a notification to a Telegram channel, and dispatches an email alert, ensuring you're immediately aware of any issues.

### How it works

- **Error Trigger:** The workflow is activated whenever an error occurs in another n8n workflow.
- **Log Error (Google Sheets):** Error details (e.g., workflow name, error message, timestamp) are appended to a specified Google Sheet, creating a centralized log for all errors.
- **Edit Fields (Manual Configuration):** This node allows you to manually set the Telegram chat ID and recipient email for notifications.
- **Notify in channel (Telegram):** An error notification containing relevant details is sent to your configured Telegram channel.
- **Send email (Gmail):** An email alert with comprehensive error information is sent to the specified recipient.

### Set up steps

This setup will take approximately 10-15 minutes.

1.  **Download the workflow:** Download this workflow and import it into your n8n instance.
2.  **Configure the Error Trigger:** This trigger will automatically activate when an error occurs in any workflow. Make sure you set this workflow as the "Error Workflow" inside the workflows where you want to be alerted. 
3.  **Configure Log error (Google Sheets):**
    - Connect your Google Sheets account credentials.
    - Specify the Google Sheet ID and the sheet name where you want to log the errors.
    - Ensure the sheet has appropriate headers (e.g., "Timestamp", "Workflow Name", "Error Message", "Error Details") to receive the data.
4.  **Configure Edit Fields:**
    - In the "Edit Fields" node, manually enter your Telegram chat ID. This is the ID of the chat or channel where you want to receive Telegram notifications.
    - Insert the recipient's email address where you want to receive email alerts.
5.  **Configure Notify in channel (Telegram):**
    - Connect your Telegram account credentials.
    - Ensure the "Chat ID" field is correctly linked to the output from the "Edit Fields" node.
6.  **Configure Send email (Gmail):**
    - Connect your Gmail account credentials.
    - Ensure the "To" email address is correctly linked to the output from the "Edit Fields" node.
    - Customize the subject and body of the email to include relevant error information from the "Error Trigger" node.
7.  **Test the workflow:** To test, you can intentionally create an error in another simple n8n workflow. This error workflow should then trigger this error handling workflow, and you can verify if the log is updated, Telegram message is sent, and email is received. Make sure that the workflow you are testing has the "Error Workflow" selected in the workflow's settings.

### Requirements

- **n8n instance:** An active n8n instance (self-hosted or cloud).
- **Google Account:** A Google account with access to Google Sheets.
- **Telegram Account:** A Telegram account and a chat/channel ID for notifications.
- **Gmail Account:** A Gmail account to send email alerts.

### Need help?
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.


## 📊 Basic Information

- **Workflow ID:** 4407
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2144
- **Downloads:** 214
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4407)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **googleSheets** 
- **set** 
- **telegram** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
