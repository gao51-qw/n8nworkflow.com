# Smart RSS news alert system with DeepSeek AI and Slack notifications

> ## How it works  
This workflow fetches articles from any RSS feed, processes them with an AI model (DeepSeek), and sends only the most relevant alerts directly to Slack.  

- Normalizes and deduplicates RSS items  
- Extracts article text and cleans HTML  
- Summarizes and classifies with AI (sentiment + flags)  
- Filters out irrelevant news  
- Sends real-time alerts to your Slack channel  

## Setup steps  
- Add your Slack Bot Token (via Slack API)  
- Add your DeepSeek API Key  
- Import this workflow into n8n  
- Deploy and start receiving smart news alerts in Slack  

## Use case  
Perfect for tracking **AI, startups, finance, and tech industry news** without the noise.  

---

![Slack Preview](https://raw.githubusercontent.com/TuguiDragos/RssAiNewsClassifier/refs/heads/main/Message.png)

## 📊 Basic Information

- **Workflow ID:** 8131
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 592
- **Downloads:** 59
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8131)

## 👤 Author

- **Name:** Țugui Dragoș
- **Username:** @tuguidragos

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **code** (×4)
- **if** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **slack** 
- **rssFeedReadTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
