# Automate workflow execution with Telegram Bot Command Center

> # Telegram Command Center

## ℹ️ What is this workflow
This workflow is using Telegram chat as a command center. Simple interface for user to run wokflows and receive answers by Telgram message or other mediums like email etc.

## 💼 Business Cases
- User want to initiate a wokflows by different commands

## ⚙️ How Does It Work
1. wokflow listen to telgram command from user
1. check if user has authorize and proceed, or send access denied message with uer Account ID. Account ID can use for authorize user in the workflow
1. Route to the relevant workflow based on command. If command doesnt exist, it will return with the list of commands
1. If command valid, it will call the Sub-workflow with input parameter and reply back with the relevant message.

## 🔗 Integrated Services
- Telegram bot API key
- Sub-Workflow for the command

## 🛠 How to Set Up
1. Install the workflow template.  
2. Configure Telegram credential
3. Update Access Control by Authorize Account ID
4. Update Valie Commands
5. Update List of command to switch
6. Connect to right SUbworkflows
7. Update/Select Telgram reply

## 📊 Basic Information

- **Workflow ID:** 9951
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 441
- **Downloads:** 44
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9951)

## 👤 Author

- **Name:** Amir
- **Username:** @amandegar

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **code** (×2)
- **telegram** (×6)
- **executeWorkflow** (×3)
- **stickyNote** (×8)
- **if** 
- **set** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
