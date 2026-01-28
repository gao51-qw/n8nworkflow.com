# Publish Zoom class recordings to Google Classroom automatically

> ## About
This flow is ideal for online schools that use Zoom to teach classes and Google Classroom for storing materials and homework.

It listens for Zoom webhooks that come after each recorded call is uploaded to Zoom Cloud (you'll need Zoom paid plan).
When new meeting comes, it filters out calls that last less than 30 mins. 
After duration check, it checks if there is a Google Class that matches the call name. Your call must be named exactly as the Google Class you want the call to be uploaded to. 
If the class is found, it will extract the Class ID. This flow assumes that you have a specific topic used for storing class recordings and materials, so it will look for this topic and upload the material. If topic is not found, you'll get an email.

## Requirements
You'll need a:
- Zoom paid plan that supports Zoom Cloud
- Google cloud console to set up Classroom API and Gmail API
- OpenAI API key or any other provider

## 📊 Basic Information

- **Workflow ID:** 12637
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 7
- **Downloads:** 0
- **Created:** 2026/1/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12637)

## 👤 Author

- **Name:** Max
- **Username:** @maksik

## 🏷️ Categories

- File Management
- AI Summarization

## 🔗 Nodes Used

- **respondToWebhook** 
- **webhook** (×2)
- **set** (×4)
- **merge** 
- **code** (×5)
- **httpRequest** (×3)
- **if** (×3)
- **switch** 
- **stickyNote** (×6)
- **crypto** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
