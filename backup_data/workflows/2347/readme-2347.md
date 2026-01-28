# Query n8n credentials with AI SQL agent

> This n8n workflow is a fun way to query and search over your credentials on your n8n instance.

**Good to know**
Your credentials should remain safe as this workflow does not decrypt or use any decrypted data.

## Example Usage
* "Which workflows are using Slack and Google Calendar?"
* "Which workflows have AI in their name but are not using openAI?"

## How it works
* Using the n8n API, it fetches all workflow data on the instance. Workflow data contains references to credentials used so this will be extracted.
* With some necessary reformatting, the workflows and their credentials metadata are stored to a SQLite database.
* Next, an AI agent is used with a custom SQL tool that reads the SQLite database created in the previous step. 
* The AI agent is instructed to perform SQL queries against our workflow credential table when asked about credentials by the user.

## Requirements
* You'll need an n8n API key. Please note that only workflows will be scoped to your API key.

## Customising the workflow

Add extra table fields to the SQLite database to answer even more complex queries such as:
* workflow status to differentiate between active and inactive workflows.

## 📊 Basic Information

- **Workflow ID:** 2347
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 5321
- **Downloads:** 532
- **Created:** 2024/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2347)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- DevOps
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **stickyNote** (×4)
- **code** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **n8n** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
