# Activate and deactivate workflows on schedule using native n8n API

> ## How it works
This workflow will activate and deactivate a selected other workflow on schedule.

&gt; ⚠️ Warning!
&gt; This approach **won't work for trial users** as it requires n8n API that is not available to trial users.
&gt; See [https://docs.n8n.io/api/](https://docs.n8n.io/api/) for details.

## Set up steps
1. Adjust activation/deactivation **schedule** per your needs. [Custom (cron) interval](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/#custom-cron-interval) is a recommended approach.
2. Set targeted **Workflow ID**. You will find it in the URL of the workflow you want to manage.
![img](https://community.n8n.io/uploads/default/original/3X/8/a/8aa6297de2cffb3de23c221aee62065610525f5f.png)
3. Set **n8n API credentials**:
- Create an API key: [how to](https://docs.n8n.io/api/authentication/)
- Create n8n credentials using the API key: [how to](https://docs.n8n.io/credentials/add-edit-credentials/#create-a-credential)

This workflow uses **[n8n node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n/)**.

#DevOps #workflow-management

---

## Other useful stuff

Need a universal Error workflow to **catch both execution and trigger errors**? Here you go:
[Error handling: Send email via Gmail on execution or trigger-level errors](https://n8n.io/workflows/3075-error-handling-send-email-via-gmail-on-execution-or-trigger-level-errors/)

More stuff [by Olek](https://n8n.io/creators/olek/) and do not forget to backup your workflows often by [automating](https://n8n.io/workflows/?q=Backup).

## 📊 Basic Information

- **Workflow ID:** 3229
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1535
- **Downloads:** 153
- **Created:** 2025/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3229)

## 👤 Author

- **Name:** Olek
- **Username:** @olek

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **n8n** (×2)
- **set** 
- **merge** (×2)
- **scheduleTrigger** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
