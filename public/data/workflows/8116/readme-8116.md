# Automate meeting notes summaries with Gemini AI & Slack notifications

> # 📝 Meeting Notes Summarizer & Slack Notifier

Easily keep your team aligned by summarizing meeting notes, extracting action items, and delivering them directly to Slack.

## 🚀 What This Workflow Does
- ⏰ Triggers on a schedule to fetch meeting data from your note-taking tool  
- 📄 Retrieves meeting summaries and action items using the MeetGeek API  
- 🤖 Uses Google Gemini AI to generate concise summaries and action points  
- 🎨 Restructures the output into Slack Block Kit format  
- 📢 Sends daily Slack notifications with clear summaries and actionable tasks  

## 👥 Who Is This For?
- 👩‍💼 Teams that want automated daily meeting briefs  
- 📌 Project managers who need action items clearly assigned  
- 🌍 Remote or hybrid teams using Slack as their main communication hub  
- ⏳ Anyone looking to reduce the time spent reviewing long meeting notes  

## 🛠️ Technical Requirements
- 🔑 API key & credentials for your meeting note-taking app  
- 🤝 Google Gemini AI credentials  
- 💬 Slack workspace with proper OAuth setup  

## ⚡ Set Up the Workflow with Ease
1. 🗂️ Configure your meeting note API in the “Get Meetings List” and “Summary” nodes.  
2. 🤖 Add Gemini AI credentials for generating summaries.  
3. 🔗 Connect your Slack channel for notifications.  
4. ✅ Activate the workflow so that your team will start receiving daily meeting insights automatically.  

## 🎨 Want to Customize It Further?
- 🔄 Change the trigger schedule (daily, weekly, or after each meeting).  
- 🎭 Modify the Slack Block Kit layout for different formatting styles.  
- 📧 Add extra integrations like email, Notion, or Google Docs to save notes.  
- ✍️ Adjust the AI prompt for different summary styles (short/long, formal/casual, etc.).  
- 🔍 Filter meetings by specific teams, projects, or keywords.  
- 🌐 Customize the API URL in the HTTP Request node to connect with other note-taking tools or different API endpoints.  


## 📊 Basic Information

- **Workflow ID:** 8116
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 476
- **Downloads:** 47
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8116)

## 👤 Author

- **Name:** SayOne Technologies
- **Username:** @sayonetech

## 🏷️ Categories

- Internal Wiki
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **aiTransform** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **slack** 
- **httpRequestTool** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **splitOut** 
- **httpRequest** 
- **dateTime** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
