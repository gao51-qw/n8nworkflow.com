# Automate school notice distribution via WhatsApp, email and Excel

> This automated n8n workflow distributes school notices to stakeholders (students, parents, and staff) via WhatsApp, email, and other channels. It streamlines the process of scheduling, validating, and sending notices while updating distribution status.

## System Architecture

- **Notice Distribution Pipeline**:
  - **Daily Notice Check - 9 AM**: Triggers the workflow daily at 9 AM via Cron.
  - **Read Notices getAll worksheet**: Retrieves notice data from a spreadsheet.
- **Validation Flow**:
  - **Validate Notice Data**: Validates and formats notice data.
- **Distribution Flow**:
  - **Process Notice Distribution**: Prepares notices for multiple channels.
  - **Prepare Email Content**: Generates personalized email content.
  - **Send Email Notice**: Delivers emails to recipients.
  - **Prepare WhatsApp Content**: Formats notices for WhatsApp.
  - **Send WhatsApp Notice**: Sends notices via WhatsApp Business API.
- **Status Update**:
  - **Update Notice Status**: Updates the distribution status in the spreadsheet.

## Implementation Guide

- **Import Workflow**: Import the JSON file into n8n.
- **Configure Cron Node**: Set to trigger daily at 9 AM (e.g., `0 9 * * *`).
- **Set Up Credentials**: Configure SMTP and WhatsApp Business API credentials.
- **Prepare Spreadsheet**: Create a Google Sheet with `notice_id`, `recipient_name`, `email`, `phone`, `notice_text`, `distribution_date`, and `status` columns.
- **Test Workflow**: Run manually to verify notice distribution and status updates.
- **Adjust Thresholds**: Modify validation rules or content formatting as needed.

## Technical Dependencies

- **Cron Service**: For scheduling the workflow.
- **Google Sheets API**: For reading and updating notice data.
- **SMTP Service**: For email notifications (e.g., Gmail, Outlook).
- **WhatsApp Business API**: For sending WhatsApp messages.
- **n8n**: For workflow automation and integration.

## Database & Sheet Structure

- **Notice Tracking Sheet** (e.g., `Notices`):
  - **Columns**: `notice_id`, `recipient_name`, `email`, `phone`, `notice_text`, `distribution_date`, `status`
  - **Example**:
    | notice_id | recipient_name | email             | phone       | notice_text                  | distribution_date | status    |
    |-----------|----------------|-------------------|-------------|------------------------------|-------------------|-----------|
    | 001       | John Doe       | john@example.com  | +1234567890 | School closed tomorrow       | 2025-08-07        | Pending   |
    | 002       | Jane Smith     | jane@example.com  | +0987654321 | Parent-teacher meeting       | 2025-08-08        | Sent      |

## Customization Possibilities

- **Adjust Cron Schedule**: Change to hourly or weekly as needed.
- **Add Channels**: Integrate additional notification channels (e.g., Slack, SMS).
- **Customize Content**: Modify email and WhatsApp message templates.
- **Enhance Validation**: Add rules for data validation (e.g., email format).
- **Dashboard Integration**: Connect to a dashboard tool for real-time status tracking.

---

### Notes
- The workflow assumes a Google Sheet as the data source. Replace `spreadsheet_id` and `range` with your actual values.
- Ensure WhatsApp Business API is properly set up with a verified phone number and token.
- Test the workflow with a small dataset to confirm delivery and status updates.

## 📊 Basic Information

- **Workflow ID:** 7035
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 816
- **Downloads:** 81
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7035)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **if** 
- **code** (×3)
- **emailSend** 
- **httpRequest** 
- **microsoftExcel** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
