# Automated RSS to Telegram publisher with Groq AI rewriting

> ## Telegram RSS Autoposter

This workflow monitors multiple RSS feeds, detects new posts, rewrites them using AI, and sends the formatted output to your Telegram account. It helps you keep your Telegram feed active with clear, polished, and ready-to-publish content — all fully automated.

## How It Works

- A scheduled trigger runs every 30 minutes and loads all RSS feed URLs from an n8n Data Table.  
- Each feed is fetched, and only the most recent item is selected.  
- The workflow checks whether this post has already been processed.  
  - If it’s new, the link is stored in a second Data Table used for deduplication.  
- A Groq LLM rewrites the article text so it stays within Telegram’s limits and has clean, readable formatting.  
- The final message is sent to your Telegram account.

## Requirements

- Groq API key  
- Telegram bot token and your Telegram user ID  
- Two n8n Data Tables:
  - One for RSS feed URLs  
  - One for processed post links

## How to Set Up

1. Add your RSS URLs to the Data Table.  
2. Insert your Groq API key into the Groq node.  
3. Add your Telegram bot token and user ID to the Telegram node.  
4. Adjust the schedule trigger interval if needed.

## Customization Ideas

- Replace the schedule trigger with a webhook for manual on-demand checks.  
- Change the AI prompt for a different tone or formatting style.  
- Send messages to a Telegram channel instead of a private chat.  
- Add keyword filters to send only specific articles.


## 📊 Basic Information

- **Workflow ID:** 11566
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 353
- **Downloads:** 35
- **Created:** 2025/12/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11566)

## 👤 Author

- **Name:** Anton Bezman
- **Username:** @nefar1an

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **scheduleTrigger** 
- **rssFeedRead** 
- **dataTable** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **stickyNote** (×5)
- **splitInBatches** 
- **noOp** 
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
