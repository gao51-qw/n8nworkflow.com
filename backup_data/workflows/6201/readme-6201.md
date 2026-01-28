# Automated birthday emails with Google Sheets, OpenRouter GPT-4o & Gmail

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Send Automated Personalized Birthday Emails Using Google Sheets, OpenRouter AI, and Gmail

## 🧠 What This Workflow Does
This workflow sends personalized birthday greetings via email every morning using data from Google Sheets and messages generated with AI. It’s great for communities, schools, small businesses, or anyone who wants to automate meaningful connections.

## ⚙️ Features
🗓 Daily Birthday Check — Runs every day at 9 AM
📋 Google Sheets Integration — Reads user data: Name, Email, DOB
🔍 Smart Date Matching — Extracts day & month from DOB to match today’s date
🤖 OpenRouter AI Integration — Generates a custom subject + email message
🛠 Function Node Cleanup — Separates AI response into subject & body
📬 Gmail Node — Sends personalized birthday wishes instantly

## 🔧 Tech Stack
1. Google Sheets
2. OpenRouter (or OpenAI-compatible model)
3. Gmail

## 💡 Use Cases
1. Educators sending birthday emails to students
2. Team leads acknowledging team members’ birthdays
3. Freelancers staying in touch with clients
4. 1Coaches or mentors maintaining personal rapport

## 📝 Requirements
1. Google Sheet with columns: Name, DOB (DD/MM/YYYY), and Email
2. Gmail account with OAuth2 connected
3. OpenRouter (or OpenAI) API key
4. Basic understanding of n8n nodes



## 📊 Basic Information

- **Workflow ID:** 6201
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1377
- **Downloads:** 137
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6201)

## 👤 Author

- **Name:** Parth Pansuriya
- **Username:** @parthpansuriya

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** 
- **filter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
