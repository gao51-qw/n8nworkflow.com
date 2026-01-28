# Daily pull request summaries from GitHub to Telegram using GPT-4o-mini

> ### Stay informed about the latest n8n updates automatically!

This workflow monitors the n8n GitHub repository for new pull requests, filters updates from today, generates an AI-powered summary, and sends notifications to your Telegram channel.

### Who's it for
- n8n users who want to stay up-to-date with platform changes
- Development teams tracking n8n updates
- Anyone managing n8n workflows who needs to know about breaking changes or new features

### How it works
1. **Daily scheduled check** at 10 AM for new pull requests
2. **Fetches latest PR** from n8n GitHub repository
3. **Filters** to only process today's updates
4. **Extracts** the pull request summary
5. **AI generates** a clear, technical summary in English
6. **Sends notification** to your Telegram channel

## 📊 Basic Information

- **Workflow ID:** 10585
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 177
- **Downloads:** 17
- **Created:** 2025/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10585)

## 👤 Author

- **Name:** Mattis
- **Username:** @iiiii

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **github** 
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegram** 
- **filter** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
