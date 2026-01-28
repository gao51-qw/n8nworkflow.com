# Telegram AI chatbot

> The workflow starts by listening for messages from Telegram users. The message is then processed, and based on its content, different actions are taken. If it's a regular chat message, the workflow generates a response using the OpenAI API and sends it back to the user. If it's a command to create an image, the workflow generates an image using the OpenAI API and sends the image to the user. If the command is unsupported, an error message is sent. Throughout the workflow, there are additional nodes for displaying notes and simulating typing actions.

![bot_workflow_annotated.png](fileId:711)

## 📊 Basic Information

- **Workflow ID:** 1934
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 213327
- **Downloads:** 21332
- **Created:** 2023/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1934)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** 
- **stickyNote** (×4)
- **set** (×2)
- **openAi** (×3)
- **telegram** (×4)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
