# Automated recruitment status updates via Slack notifications

> ### How It Works ⚙️
This workflow acts as a communication bridge for your candidate pipeline:

1.  **Webhook Trigger (Status Update):** 🚀 The workflow activates when it receives data indicating a candidate's status has changed. This data could come from an internal form, a custom script, or a webhook from a basic Applicant Tracking System (ATS).
2.  **Extract & Prepare Data (Function):** 🧹 This node processes the incoming data. It extracts key information such as the candidate's name, the position they applied for, their previous status (if available), and their new status. It then formats this information into a clear, concise message suitable for a notification.
3.  **Send Slack Notification:** 📢 The prepared message is sent to a designated Slack channel (e.g., `#recruitment-updates`). This provides instant, real-time updates to your team, ensuring everyone is on the same page.
    * **(Alternative: Send Email Notification):** This node can easily be swapped with a Gmail or SendGrid node to send email notifications to a predefined list of recipients instead of Slack.

### How to Set Up 🛠️
Follow these steps carefully to get your "Automated Candidate Status Notifier" workflow up and running:

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the entire JSON code for this workflow.
2.  **Configure Webhook Trigger (Status Update):**
    * Locate the 'Webhook Trigger (Status Update)' node (1. Webhook Trigger).
    * Activate the workflow. n8n will provide a unique 'Webhook URL'.
    * **Crucial Step:** Configure your data-sending system (e.g., a form submission, an ATS's webhook settings, or your custom script) to send candidate status update data (preferably in JSON format via POST request) to this n8n Webhook URL.
3.  **Configure Extract & Prepare Data (Function):**
    * Locate the 'Extract & Prepare Data' node (2. Extract & Prepare Data).
    * **Adjust Field Names:** Review the `functionCode` inside this node. **You MUST adjust the variable assignments (e.g., `inputData.candidateName`, `inputData.position`)** to accurately match the exact field names your sending system uses for candidate name, position, new status, old status, and notes. Use the 'Test Workflow' feature after sending a test webhook to inspect the incoming `items[0].json.body` data structure.
    * The node automatically formats messages for Slack and Email.
4.  **Configure Send Slack Notification:**
    * Locate the 'Send Slack Notification' node (3. Send Slack Notification).
    * **Credentials:** Select your existing Slack API credential or click 'Create New' to set one up. Replace `YOUR_SLACK_CREDENTIAL_ID` with the actual ID or name of your credential from your n8n credentials.
    * **Channel:** Replace `YOUR_SLACK_CHANNEL_ID_OR_NAME` with the exact ID or name of the Slack channel where you want to receive notifications (e.g., `#recruitment-updates`).
    * **OPTIONAL: Switch to Email Notification (Gmail/SendGrid/etc.):**
        * **Delete** the 'Send Slack Notification' node.
        * Add a new 'Gmail' or 'SendGrid' (or your preferred email service) node.
        * Configure its credentials.
        * Set the 'To Email' field (e.g., `your-team-email@example.com`).
        * Set the 'Subject' to `={{ $json.emailSubject }}`.
        * Set the 'HTML' body to `={{ $json.emailBody }}`.
        * Connect it from the 'Extract & Prepare Data' node.
5.  **Review and Activate:**
    * Thoroughly review all node configurations. Ensure all placeholder values (like `YOUR_...`) are replaced and settings are correct.
    * Click the 'Save' button in the top right corner.
    * Finally, toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your automated candidate status notifier is now live, keeping your team updated in real-time!

## 📊 Basic Information

- **Workflow ID:** 6360
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 172
- **Downloads:** 17
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6360)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **webhook** 
- **function** 
- **slack** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
