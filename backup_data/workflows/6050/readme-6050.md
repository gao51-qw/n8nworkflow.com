# Collect & process trip feedback with Google Sheets and email notifications

> This n8n workflow automates the collection and processing of trip feedback data using Google Sheets as the backend. When new users are added to the system, they automatically receive feedback forms via email, and all responses are systematically processed and stored in Google Sheets for analysis and record-keeping.

## **Good to know**
* The delay buffer prevents system overload and ensures data integrity before sending notifications.
* All feedback data is automatically organized and maintained in Google Sheets for easy access and analysis.
* The workflow handles both new user onboarding and trip feedback submission seamlessly.

## **How it works**
* The `Trigger - New User Entry` node detects when a new user is added to the Google Sheets feedback form database.
* The `Delay - Process Buffer` node introduces a processing delay to ensure data is fully processed before sending notifications, avoiding premature actions.
* The `Send Email To That New User` node automatically sends a feedback form email to the newly registered user.
* When a user submits their trip feedback, the `Trigger - Trip Form Submission` node captures the submission.
* The `Tack All Feedback Item` node iterates over each form submission item to process multiple entries if present, ensuring all feedback data is handled.
* The `Update - Trip Feedback Sheet` node appends or updates the trip feedback data in the Google Sheets, maintaining an organized record of all responses.

## **How to use**
* Import the workflow into n8n and configure the nodes with your Google Sheets API credentials and email service settings.
* Set up your Google Sheets with the appropriate columns for user data and feedback responses.
* Test the workflow by adding a new user entry to verify email delivery and feedback processing.

## **Requirements**
* Google Sheets API credentials with read/write permissions
* Email service configuration (SMTP or email API)
* Access to Google Sheets containing user data and feedback forms

## **Customising this workflow**
* Modify the email template in the `Send Email To That New User` node to match your branding and feedback requirements.
* Adjust the delay timing in the `Delay - Process Buffer` node based on your system's processing needs.
* Customize the Google Sheets structure and update the `Update - Trip Feedback Sheet` node accordingly to match your data organization preferences.

## 📊 Basic Information

- **Workflow ID:** 6050
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 162
- **Downloads:** 16
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6050)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **wait** 
- **formTrigger** 
- **splitInBatches** 
- **googleSheets** 
- **emailSend** 
- **stickyNote** (×6)
- **googleSheetsTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
