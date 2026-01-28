# Extract business leads from Gmail to Google Sheets with Slack notifications

> This workflow allows users to extract potential leads from their inboxes. The idea of a reverse outreach is based on the notion that the next big client/customer/partner might be sitting in your inbox waiting to be mined. This automation has two workflows, one that extracts from the historical emails, and the other is a scheduled event, default set to run everyday morning.

The workflow intelligently filters out emails from personal domains, system addresses (no-reply, updates), and generic company inboxes (info@, support@). The remaining emails are parsed to extract key information—company name, email address, domain, and subject—which is then stored in a Google Sheets spreadsheet. The Google Sheets node is configured to append or update based on the email address, ensuring that you never store duplicate entries. Finally, you will get a slack message with key information about the lead.

🚀 **How it works**
Manual Trigger: A manual click initiate will fetch all historical emails. the limit set to 500, which you can increase up to 5000

Periodic Trigger: The workflow is triggered by time, default is set to daily fetch.

Code nodes: Three Code nodes filter the emails based on custom rules - personal domains, system addresses, generic inboxes.

Google Sheets: The processed data is sent to a Google Sheets spreadsheet. The append or update operation automatically handles whether to create a new row or update an existing one based on the email address, preventing duplicates.

🔑 **Required Credentials**
Google (Gmail): To access your Gmail account and retrieve email messages.

Google Sheets: To connect to your spreadsheet.

Slack Bot: To Send message in a designated slack channel

🛠️ **Setup Instructions**
Configure Gmail Trigger:

Connect your Google cloud account credential in Gmail and Google sheet nodes.

Choose the schedule to run the Email fetch node that periodically watch for new emails.


Configure Code Node:

This node is pre-configured with the filtering logic. You can customize the lists of personal, blocked, or generic email parts to fit your needs.

Configure Google Sheets Node:

Connect your Google Sheets credentials.
Create a Spreadsheet with the following columns
company_name, email, domain, subject, date_received

Enter the Spreadsheet ID of your target spreadsheet in the Google sheet node along with the Sheet Name (e.g., Leads).

And that should do it! Now run the manual trigger workflow  and see the lead information showing up in your selected Slack Channel and also in the populated google sheet.


## 📊 Basic Information

- **Workflow ID:** 7752
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 182
- **Downloads:** 18
- **Created:** 2025/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7752)

## 👤 Author

- **Name:** Axiomlab.dev
- **Username:** @axiomlab

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **gmailTrigger** 
- **gmail** 
- **code** (×3)
- **slack** 
- **stickyNote** (×8)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
