# Classify and summarize WeChat articles with GPT-4 Nano to Google Sheets and Notion

> ## Who’s it for 👥
This template is perfect for content creators, marketers, and researchers managing WeChat public account articles! 🚀 It’s ideal for n8n newcomers or anyone wanting to save time on manual content analysis, especially if you use Google Sheets for tracking. 📊 Whether you’re into AI, 欧阳良宜, or automation, this is for you! 😄

## How it works / What it does 🔧
This workflow automates the retrieval, filtering, classification, and summarization of WeChat articles. 🌐 It reads RSS feed links from a Google Sheet, filters articles from the last 10 days ⏳, cleans HTML content 🧹, classifies them as relevant or not 🎯, generates insightful Chinese summaries with AI 🤖, and saves results to Google Sheets and Notion. 📝 Outputs are Slack-formatted for team collaboration! 💬

## How to set up 🛠️
1. **Prepare Google Sheets**: Use your own documentId (replace the example) and set up sheets "Save Initial Links" (gid=198451233) and "Save Processed Data" (gid=1936091950). 📋
2. **Configure Credentials**: Add Google Sheets and OpenAI API credentials—avoid hardcoding keys! 🔐
3. **Set RSS Feed**: Update the rss_feed_url in the "RSS Read" node with your WeChat RSS feed. 🌐
4. **Customize AI**: Tweak "Relevance Classification" and "Basic LLM Chain" prompts for your topics (e.g., 欧阳良宜, AI). 🎨
5. **Notion (Optional)**: Swap the databaseId (e.g., 22e79d55-2675-8055-a143-d55302c3c1b1) with your own. 📚
6. **Run Workflow**: Trigger manually via the "When clicking ‘Execute workflow’" node. 🚀
## Requirements ✅
- n8n account with Google Sheets and OpenAI integrations.
- Access to a WeChat public account RSS feed.
- Basic JSON and node config knowledge.
## How to customize the workflow 🎛️
- Topic Adjustment: Update categories in "Relevance Classification" for new topics (e.g., "technology", "education"). 🌱
- Summary Length: Modify the LLM prompt in "Basic LLM Chain" to adjust length or style. ✂️
- Output Destination: Add Slack or Email nodes for more outputs. 📩
- Date Filter: Change the "IF (Filter by Date)" condition (e.g., 7 days instead of 10). ⏰
- Scalability: Use a "Schedule Trigger" node for automation. ⏳

## 📊 Basic Information

- **Workflow ID:** 5933
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 3265
- **Downloads:** 326
- **Created:** 2025/7/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5933)

## 👤 Author

- **Name:** Seven Liu
- **Username:** @whatever

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×4)
- **if** 
- **rssFeedRead** 
- **manualTrigger** 
- **merge** (×2)
- **code** (×3)
- **set** (×4)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **notion** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
