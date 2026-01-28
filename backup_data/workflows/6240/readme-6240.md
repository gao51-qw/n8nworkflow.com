# Multi-service terminal: Access Gmail, X, Telegram & news with Gemini AI

> This workflow receives plain English instructions from a retro console via a webhook. Using an AI agent, it can combine multiple tools to read general RSS news headlines, stock market updates, emails, calendar events, search X, send Telegram messages, and run Linux commands. The idea is to avoid using smartphones or regular laptops in the morning, and instead use a retro console installed on an old notebook or netbook. You will need to copy a Python script onto the notebook, configure the webhook URL, and set up all the required credentials.

Steps: 
1. Setup Gemini API key, Google Gmail and Calendar credentials from console.google.com
2. Setup X credentials, RSS URL, etc
3. Obtain the webhook URL and paste into the Python code to be executed at the Linux machine
4. Run the python script with python3 console.py

Note: if you ask for a Linux command, the command will not only be returned but also executed.


## 📊 Basic Information

- **Workflow ID:** 6240
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 362
- **Downloads:** 36
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6240)

## 👤 Author

- **Name:** Roni Bandini
- **Username:** @bandini

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **dateTimeTool** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **twitterTool** 
- **stickyNote** (×2)
- **webhook** 
- **respondToWebhook** 
- **marketstackTool** 
- **rssFeedReadTool** 
- **telegramTool** 
- **gmailTool** 
- **googleCalendarTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
