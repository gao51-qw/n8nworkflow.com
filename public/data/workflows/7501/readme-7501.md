# Send Slack alerts for AWS IAM access keys older than 365 days

> # AWS IAM Access Key Rotation Reminder Automation Workflow
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/aws-iam-access-key-rotation-alert-with-n8n.jpg)](https://youtu.be/tW2y_dRvcs0)
## **Who’s it for**
- DevOps/SRE teams responsible for AWS account security.  
- Security/compliance officers ensuring key rotation policies are followed.  
- Any AWS account owner who wants automatic detection of stale access keys. 

## **How it works / What it does**
1. **Weekly Scheduler** — triggers the workflow on a recurring basis.  
2. **Get Many Users** — fetches all IAM users in the AWS account.  
3. **Get User Access Key(s)** — retrieves the access keys associated with each user.  
4. **Filter Out Inactive Keys** — removes keys that are not active (e.g., status `Inactive`).  
5. **Access Key Older Than 365 Days** — checks the key creation date and flags keys older than one year.  
6. **Send Slack Message** — notifies a Slack channel with details of the outdated key(s) for review and action.  
7. **No Operation** — safely ends the workflow if no keys match the condition.  

## **How to set up**
- Configure the **Weekly Scheduler** to run at your desired cadence (e.g., every Monday).  
- Use **Get Many Users** to list all IAM users.  
- For each user, call **ListAccessKeys** (`Get User Access Key(s)`) to fetch their key metadata.  
- Apply a filter to keep only keys with status `Active`.  
- Add a condition to compare `CreateDate` against `today - 365 days`.  
- Send results to Slack using the **Slack Post Message** node.  

## **Requirements**
- n8n (latest version).  
- AWS credential in n8n configured for **us-east-1** (IAM requires signing with this region).  
- IAM permissions:  
  - `iam:ListUsers`  
  - `iam:ListAccessKeys`  
- Slack bot credentials with permission to post messages in the desired channel.  

## **How to customize the workflow**
- **Change threshold** — adjust the `365 days` condition to 90, 180, or any other rotation policy.  
- **Escalation** — mention `@security` or create a Jira/Ticket when old keys are found.  
- **Logging** — push flagged results into a Google Sheet, database, or log management system for audit.  
- **Automation** — instead of only notifying, add a step to automatically deactivate keys older than the threshold (after approval).  
- **Multi-account support** — duplicate or loop across multiple AWS credentials if you manage several AWS accounts.  

## 📊 Basic Information

- **Workflow ID:** 7501
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 132
- **Downloads:** 13
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7501)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **awsIam** 
- **noOp** 
- **slack** 
- **stickyNote** (×7)
- **httpRequest** 
- **filter** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
