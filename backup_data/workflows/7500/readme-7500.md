# Monitor & alert on inactive AWS IAM users with Slack notifications

> # AWS IAM Inactive User Automation Alert Workflow

&gt; Weekly job that finds IAM users with **no activity for &gt; 90 days** and notifies a Slack channel.  
&gt; ⚠️ **Important:** AWS SigV4 for IAM must be scoped to **`us-east-1`**. Create the AWS credential in n8n with region **us-east-1** (even if your other services run elsewhere).

## **Who’s it for**
- SRE/DevOps teams that want automated IAM hygiene checks.
- Security/compliance owners who need regular inactivity reports.
- MSPs managing multiple AWS accounts who need lightweight alerting.

## **How it works / What it does**
1. **Weekly scheduler** – kicks off the workflow (e.g., every Monday 09:00).
2. **Get many users** – lists IAM users.
3. **Get user** – enriches each user with details (password status, MFA, etc.).
4. **Filter bad data** – drops service-linked users or items without usable dates.
5. **IAM user inactive for more than 90 days?** – keeps users whose **last activity** is older than 90 days.
   - Last activity is derived from any of:
     - `PasswordLastUsed` (console sign-in)
     - `AccessKeyLastUsed.LastUsedDate` (from `GetAccessKeyLastUsed` if you add it)
     - Fallback to `CreateDate` if no usage data exists (optional)
6. **Send a message (Slack)** – posts an alert for each inactive user.
7. **No operation** – path for users that don’t match (do nothing).

## **How to set up**
1. **Credentials**
   - **AWS (Predefined → AWS)**  
     - Service: `iam`  
     - Region: `us-east-1`  ← **required for IAM**  
     - Access/Secret (or Assume Role) with read-only IAM perms (see below).
   - **Slack** OAuth (bot in your target channel).

## **Requirements**
- n8n (current version).
- **AWS IAM permissions** (minimum):
  - `iam:ListUsers`, `iam:GetUser`
  - *(Optional for higher fidelity)* `iam:ListAccessKeys`, `iam:GetAccessKeyLastUsed`
- Slack bot with permission to post in the target channel.
- Network egress to `iam.amazonaws.com`.

## **How to customize the workflow**
- **Change window:** set 60/120/180 days by adjusting `minus(N, 'days')`.
- **Audit log:** append results to Google Sheets/DB with `UserName`, `Arn`, `LastActivity`, `CheckedAt`.
- **Escalation:** if a user remains inactive for another cycle, mention `@security` or open a ticket.
- **Auto-remediation (advanced):** on a separate approval path, disable access keys or detach policies.
- **Multi-account / multi-region:** iterate a list of AWS credentials (one per account; IAM stays `us-east-1`).
- **Exclude list:** add a static list or tag-based filter to skip known service users.

## **Notes & gotchas**
- Many users never sign in; if you don’t pull `GetAccessKeyLastUsed`, they may look “inactive”. Add that call for accuracy.
- `PasswordLastUsed` is null if console login never happened.
- IAM returns timestamps in ISO or epoch—use `toDate`/`toDateTime` before comparisons.

## 📊 Basic Information

- **Workflow ID:** 7500
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 185
- **Downloads:** 18
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7500)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **awsIam** (×2)
- **noOp** 
- **slack** 
- **if** 
- **filter** 
- **stickyNote** (×8)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
