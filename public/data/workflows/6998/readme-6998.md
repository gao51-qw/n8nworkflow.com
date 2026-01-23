# Automated student progress reports from LMS to parents via Gmail & Google Sheets

> This n8n workflow automatically creates and sends regular performance summaries to parents using data from a Learning Management System (LMS). It pulls student grades and attendance, formats them into easy-to-read reports, and emails them without any manual work.

## Good to Know
- **Fully Automated**: Generates reports and sends emails using LMS data.
- **Regular Updates**: Sends summaries on a set schedule (e.g., every Monday at 9 AM).
- **Clear Reports**: Includes student grades, attendance, and progress notes.
- **Error Alerts**: Notifies admins via email if something goes wrong.
- **Scalable**: Works for multiple students across different classes.

## How It Works
### Report Generation Flow
1. **Weekly Trigger**: Starts the process every Monday at 9 AM.
2. **Fetch LMS Data**: Pulls grades, attendance, and progress from the LMS.
3. **Process Data**: Organizes the data into a clear report format.
4. **Generate HTML Report**: Creates a readable report with student details.
5. **Send Email to Parents**: Emails the report to parents’ addresses.
6. **Log Report Delivery**: Records the sent reports in a log.

## Example Sheet Columns
- **Student ID**: Unique identifier for each student.
- **Name**: Full name of the student.
- **Grade**: Current academic grade or score.
- **Attendance**: Percentage of classes attended.
- **Progress Notes**: Brief comments on performance.
- **Report Date**: Date the report was generated.

## How to Use
1. **Import Workflow**: Add the workflow to n8n using the “Import Workflow” option.
2. **Set Up LMS Access**: Configure n8n with LMS credentials to fetch data.
3. **Configure Email**: Add parent email addresses and set up an email service (e.g., Gmail).
4. **Activate Workflow**: Save and turn on the workflow in n8n.
5. **Check Logs**: Verify reports are sent and logs are updated.

## Requirements
- **n8n Instance**: Self-hosted or cloud-based n8n setup.
- **LMS Access**: API or credentials to connect to the LMS.
- **Email Service**: SMTP setup (e.g., Gmail) for sending reports.
- **Admin Oversight**: Someone to monitor and fix any errors.

## Customizing This Workflow
- **Change Schedule**: Adjust the trigger to send reports weekly or monthly.
- **Add More Data**: Include extra LMS fields like behavior notes.
- **Custom Email**: Change the email template for a personalized touch.

## 📊 Basic Information

- **Workflow ID:** 6998
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 555
- **Downloads:** 55
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6998)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **googleSheets** (×2)
- **splitInBatches** 
- **httpRequest** 
- **code** (×2)
- **gmail** (×2)
- **stickyNote** (×2)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
