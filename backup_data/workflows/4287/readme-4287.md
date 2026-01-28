# Automate SAP Business Partner analysis with OpenAI GPT-4o & Gmail reporting

> ## Who is this for?
This workflow is intended for micro businesses, SAP users, companies, users or owners who need system simplicity in SAP. In micro businesses, SAP users or individuals, there must be the task of manually inputting a lot of data or here in partner businesses in SAP, the reality is that it is very time consuming and tiring, especially since we have to arrange it first or click one by one and send it. This is also a form of community service in n8n and n8n companies, as well as dedication to small businesses using SAP, SAP users, companies or owners who use SAP so that reality is no longer tiring and is able to answer existing reality problems automatically.

## How it works?
Easy explanation:

The First Manual Trigger Node is used when clicking to start the program running. It's like starting by clicking the button first.

After that the HTTP Request will be sent to the next node, here containing SAP.

After that, each function will program and process it into clean data.

Then after that it will be sent to Gmail via the Gmail node. The AI ​​Agent will carry out the task of reporting, analyzing and sending it via Gmail, here using model Open AI.

You can immediately see the data thoroughly, because the data has been processed. If you want to process it again, just direct the AI ​​system to process it again.

And all duties and responsibilities have been completed

Very practical and easy, plus its automatic nature. I'm sure you can understand it wisely. 

## Set up instructions
Complete what is in the nodes as stated in the notes column.

Because the other nodes have been set up neatly, what you have to set up is, first, you have to connect the Gmail and Open AI "Credential Accounts" only.

After that, enter the email address you want to send or receive in the Gmail node parameters.

Well, it's very simple.

Everything is organized wisely, so you just follow the notes or setup instructions provided, or you can add other things according to your specific purpose and congratulations you are ready to use it.

## Requirements
As a reminder:

It must be arranged in nodes, what your business description looks like, also according to the conditions of your small business, so that the AI ​​Agent matches your business knowledge base. Must have (if not, make sure you are registered) in each "Credential Account" by following the guide on how to do it n8n the guide is very complete. Don't forget to save, and make sure the workflow is active and don't forget about "Account Credentials".

## How to customize this workflow to your needs 
You can directly organize your business knowledge base in these nodes, so that according to your business in its field and what services it sells or has or here is your business partner, you can then carry out tasks and answer them.

## 📊 Basic Information

- **Workflow ID:** 4287
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1690
- **Downloads:** 169
- **Created:** 2025/5/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4287)

## 👤 Author

- **Name:** Ghufran Ridhawi
- **Username:** @ghufran-ridhawi

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×3)
- **stickyNote** (×9)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
