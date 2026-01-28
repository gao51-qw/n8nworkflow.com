# Launch AWS EC2 instances from Google Sheets using Terraform

> This automated n8n workflow enables launching AWS EC2 instances directly from a Google Sheets document. Users can specify instance details (e.g., region, instance type, key pair) in a Google Sheet, triggering the workflow to create EC2 instances via the AWS API. The workflow updates the sheet with instance information and sends confirmation emails.

## Fundamental Aspects
- **Google Sheets Trigger**: Initiates the workflow when a new row is added or updated in the Google Sheet.
- **Extract Instance Details**: Parses region, instance type, key pair name, and instance name from the sheet.
- **Validate Inputs**: Checks for required fields and valid AWS configurations.
- **Launch EC2 Instance**: Uses the AWS EC2 API to launch the specified instance.
- **Update Google Sheet**: Adds instance ID and status to the sheet.
- **Send Confirmation Email**: Notifies the user via email with instance details.

## Setup Instructions
- **Import the Workflow into n8n**: Download the workflow JSON and import it via the n8n interface.
- **Configure API Credentials**:
  - Set up Google Sheets API credentials with appropriate permissions.
  - Configure AWS IAM credentials with EC2 launch permissions.
  - Configure SMTP credentials for email notifications.
- **Prepare Google Sheet**: Create a sheet with columns for region, instance type, key pair name, instance name, instance ID, and status.
- **Run the Workflow**: Activate the Google Sheets trigger and test by adding a row with instance details.
- **Verify Responses**: Check the Google Sheet for updated instance IDs and emails for confirmation.
- **Adjust Parameters**: Fine-tune AWS region settings or email templates as needed.

## Technical Dependencies
- **Google Sheets API**: For reading and writing data.
- **AWS EC2 API**: For launching and managing instances.
- **SMTP Service**: For sending confirmation emails.
- **n8n**: For workflow automation and integration.

## Customization Possibilities
- **Add Instance Types**: Support additional EC2 instance types.
- **Enhance Validation**: Add checks for AWS limits or quotas.
- **Support Tags**: Include custom tags for launched instances.
- **Add Logging**: Integrate with a logging service for workflow tracking.
- **Customize Emails**: Adjust email content or add attachments.

## 📊 Basic Information

- **Workflow ID:** 7295
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 651
- **Downloads:** 65
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7295)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **scheduleTrigger** 
- **googleSheets** (×2)
- **ssh** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
