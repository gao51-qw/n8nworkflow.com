# IAM compliance automation: enforce MFA and clean up access keys in AWS

> # Automated AWS IAM Compliance Workflow for MFA Enforcement and Access Key Deactivation
&gt; This workflow leverages AWS IAM APIs and n8n automation to ensure strict security compliance by continuously monitoring IAM users for MFA (Multi-Factor Authentication) enforcement.

[![Watch the video](https://wisestackai.s3.ap-southeast-1.amazonaws.com/Red+and+Yellow+Modern+Shocking+Moments+YouTube+Thumbnail+(2).jpg)](https://www.youtube.com/watch?v=ZggCRl8z_gQ)

## **Who’s it for**
This workflow is designed for **DevOps, Security, or Cloud Engineers** responsible for maintaining IAM security compliance in AWS accounts. It's ideal for teams who want to **enforce MFA usage** and **automatically disable access** for non-compliant IAM users.

## **How it works / What it does**
This automated workflow performs a **daily check** to detect IAM users without an MFA device and deactivate their access keys.

### Step-by-step:
1. **Daily scheduler**: Triggers the workflow once a day.
2. **Get many users**: Retrieves a list of all IAM users in the account.
3. **Get IAM User MFA Devices**: Calls AWS API to get MFA device info for each user.
4. **Filter out IAM users with MFA**: Keeps only users **without any MFA device**.
5. **Send warning message(s)**: Sends Slack alerts for users who do not have MFA enabled.
6. **Get User Access Key(s)**: Fetches access keys for each non-MFA user.
7. **Parse the list of user access key(s)**: Extracts and flattens key information like `AccessKeyId`, `Status`, and `UserName`.
8. **Filter out inactive keys**: Keeps only **active** access keys for further action.
9. **Deactivate Access Key(s)**: Calls AWS API to deactivate each active key for non-MFA users.

## **How to set up**
1. **Configure AWS credentials** in your environment (IAM role or AWS access key with required permissions).
2. **Connect Slack** via the Slack node for alerting (set channel and credentials).
3. Set the **scheduler** to your preferred frequency (e.g., daily at 9AM).
4. Adjust any Slack message template or filtering conditions as needed.

## **Requirements**
- IAM user or role credentials with the following AWS IAM permissions:
  - `iam:ListUsers`
  - `iam:ListMFADevices`
  - `iam:ListAccessKeys`
  - `iam:UpdateAccessKey`
- Slack credentials (Bot token with `chat:write` permission).
- n8n environment with:
  - Slack integration
  - AWS credentials (set via environment or credentials manager)

## **How to customize the workflow**
- **Alert threshold**: Instead of immediate deactivation, you can delay action (e.g., alert first, wait 24h, then disable).
- **Change notification channel**: Modify the Slack node to send alerts to a different channel or add email integration.
- **Whitelist exceptions**: Add a Set or IF node to exclude specific usernames (e.g., service accounts).
- **Add audit logging**: Use Google Sheets, Airtable, or a database to log which users were flagged or had access disabled.
- **Extend access checks**: Include console password check (`GetLoginProfile`) if needed.

## 📊 Basic Information

- **Workflow ID:** 7598
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 301
- **Downloads:** 30
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7598)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **awsIam** 
- **stickyNote** (×9)
- **httpRequest** (×3)
- **filter** (×2)
- **scheduleTrigger** 
- **slack** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
