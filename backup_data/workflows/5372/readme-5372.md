# Auto-reply to Google Play Store reviews with GPT-4o & sentiment analysis

> # This n8n workflow automates replying to Google Play Store reviews using AI. 

It analyzes each review’s sentiment and tone and posts a human-like response — saving time for indie devs, founders, and PMs managing multiple apps.

---

## 💡 Use Cases
- Respond to reviews at scale without sounding robotic  
- Prioritize negative sentiment feedback  
- Maintain consistent tone and support messaging  
- Free up time for teams to focus on product instead of ops

---

## 🧠 How it works
- Uses the Play Store API to fetch new app reviews
- Filters out reviews that have already been replied to
- Analyzes sentiment using OpenAI GPT-4o
- Passes sentiment and review context to an AI Agent node that crafts a reply
- Replies are posted to Play Store via Google API
- (Optional) Logs the reply to Slack for visibility

---

## ⚡ Requirements
- Google Play Developer Console access  
- Google Cloud Project with service account  
- OpenAI account (GPT-4o or mini)  
- (Optional) Slack workspace & app for logging

---

## 🙌 Don’t want to set this up yourself?
I’ll do it for you. Just drop me an email: **imarunavadas@gmail.com**

Let’s automate the boring stuff so you can focus on growth. 🚀

## 📊 Basic Information

- **Workflow ID:** 5372
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 853
- **Downloads:** 85
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5372)

## 👤 Author

- **Name:** Arunava
- **Username:** @arunava

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **merge** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **slack** 
- **scheduleTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
