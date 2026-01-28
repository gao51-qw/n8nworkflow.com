# Send DingTalk message on new Azure DevOps pull request

> This template automates sending a DingTalk message on new Azure Dev Ops Pull Request Created Events. It uses a MySQL database to store mappings between Azure users and DingTalk users; so the right users get notified. 

### Set up instructions

1. Define the path value of ReceiveTfsPullRequestCreatedMessage Webhook node of your own, copy the webhook url to create a Azure DevOps ServiceHook that call webhook with Pull Request Created event.
2. In order to configure the LoadDingTalkAccountMap node, you need to create a MySQL table as below:
|Name|Type|Length|Key|
|-|-|-|-|
|TfsAccount|varchar|255|
|UserName|varchar|255|
|DingTalkMobile|varchar|255|
3. You can customize the Ding Talk message content by editing the BuildDingTalkWebHookData node.
4. Define the URL of SendDingTalkMessageViaWebHook Http Request node as your Ding Talk group chat robot webhook URL.
5. Send test of production message from Azure DevOps to test.



## 📊 Basic Information

- **Workflow ID:** 2034
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2447
- **Downloads:** 244
- **Created:** 2023/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2034)

## 👤 Author

- **Name:** PretenderX
- **Username:** @wuliang

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **mySql** 
- **webhook** 
- **code** 
- **httpRequest** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
