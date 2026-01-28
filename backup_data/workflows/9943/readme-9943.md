# Slack auto translator (JA ⇄ EN) with GPT-4o-mini

> ## 🧠 How it works
This workflow enables automatic translation in Slack using **n8n** and **OpenAI**.  
When a user types `/trans` followed by text, n8n detects the language and replies with the translated version via Slack.

## ⚙️ Features
- Detects the input language automatically  
- Translates between **Japanese ↔ English** using **GPT-4o-mini** (temperature 0.2 for stability)  
- Sends a quick “Translating...” acknowledgement to avoid Slack’s 3s timeout  
- Posts the translated text back to Slack (public or private selectable)  
- Supports overrides like `en: こんにちは` or `ja: hello`  

## 💡 Perfect for
- Global teams communicating in Japanese and English  
- Developers learning how to connect **Slack + OpenAI + n8n**  

## 🧩 Notes
Use sticky notes inside the workflow for setup details.  
Duplicate and modify it to support mentions, group messages, or other language pairs.


## 📊 Basic Information

- **Workflow ID:** 9943
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 99
- **Downloads:** 9
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9943)

## 👤 Author

- **Name:** Tomohiro Goto
- **Username:** @taoo

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **stickyNote** (×5)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
