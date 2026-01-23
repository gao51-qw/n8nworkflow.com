# LINE BOT - Google Sheets file lookup with AI agent

> This workflow integrates LINE BOT, AI Agent (GPT), Google Sheets, and Google Drive to enable users to search for file URLs using natural language. The AI Agent extracts the filename from the message, searches for the file in Google Sheets, and returns the corresponding Google Drive URL via LINE BOT.

- Supports natural language queries 
(e.g., "Find file 1.pdf for me")
- AI-powered filename extraction
- Google Sheets Lookup for file URLs
- Auto-response via LINE BOT

![image.png](fileId:934)

## How to Use This Template

**1. Download & Import**
- Copy and save the Template Code as a .json file.
- Go to n8n Editor → Click Import → Upload the file.

**2. Update Required Fields**
- Replace YOUR_GOOGLE_SHEET_ID with your actual Google Sheet ID.
- Replace YOUR_LINE_ACCESS_TOKEN with your LINE BOT Channel Access Token.

**3. Activate & Test**
- Click Execute Workflow to test manually.
- Set Webhook URL in LINE Developer Console.

## Features of This Template
- Supports Natural Language Queries (e.g., “Find file 1.pdf for me”)
- AI-powered filename extraction using OpenAI (GPT-4/3.5)
- Real-time file lookup in Google Sheets
- Automatic LINE BOT Response
- Fully Automated Workflow


## 📊 Basic Information

- **Workflow ID:** 2874
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 921
- **Downloads:** 92
- **Created:** 2025/2/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2874)

## 👤 Author

- **Name:** Jaruphat J.
- **Username:** @jaruphatj

## 🏷️ Categories

- AI
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
