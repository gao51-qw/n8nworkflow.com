# Bitrix24 task form widget application workflow with webhook integration

> ## Use Case
Extend Bitrix24 tasks with custom widgets that display relevant task information and enable seamless interaction through a custom tab interface.

## What This Workflow Does
- Processes incoming webhook requests from Bitrix24 task interfaces
- Handles authentication and secure token validation
- Manages application installation and placement registration
- Displays task data in a custom formatted view
- Stores and retrieves configuration settings persistently
- Provides user-friendly HTML interfaces for task information

## Setup Instructions
1. Configure Bitrix24 webhook endpoints for the task widget
2. Set up authentication credentials in your Bitrix24 account
3. Install the application and register the task view tab placement
4. Customize the task data display format as needed
5. Deploy and test the application functionality within Bitrix24 tasks

## 📊 Basic Information

- **Workflow ID:** 2974
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 2004
- **Downloads:** 200
- **Created:** 2025/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2974)

## 👤 Author

- **Name:** Ferenc Erb
- **Username:** @fefehun

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **code** 
- **if** (×3)
- **httpRequest** (×2)
- **function** (×2)
- **respondToWebhook** (×4)
- **readWriteFile** (×2)
- **convertToFile** 
- **merge** (×2)
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
