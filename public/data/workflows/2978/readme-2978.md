# Analyze Reddit posts with AI to identify business opportunities

> **Use case**
Manually monitoring Reddit for viable business ideas is time-consuming and inconsistent. This workflow automatically analyzes trending Reddit discussions using AI to surface high-potential opportunities, filter irrelevant content, and generate actionable insights - saving entrepreneurs 10+ hours weekly in market research.

**What this workflow does**
This AI-powered workflow automatically collects trending Reddit discussions, analyzes posts for viable business opportunities using GPT-4, applies smart filters to exclude low-value content, and generates scored opportunity reports with market insights. It identifies unmet customer needs through sentiment analysis, prioritizes high-potential ideas using custom criteria, and outputs structured data to Google Sheets for actionable decision-making.

**Setup**
- Add Reddit,Google and OpenAI credentials
- Configure target subreddits in **Subreddit** node
- Test workflow by testing workflow
- Review generated opportunity report in Google Sheets


**How to adjust this template**
- **Change data sources**: Replace Reddit trigger with Twitter/X or Hacker News API
- **Modify criteria**: Adjust scoring thresholds in Opportunity Calculator node
- **Add integrations**:
   - Create automatic Slack alerts for urgent opportunities
   - Generate draft business plans using AI Document Writer





## 📊 Basic Information

- **Workflow ID:** 2978
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 31336
- **Downloads:** 3133
- **Created:** 2025/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2978)

## 👤 Author

- **Name:** Alex Huang
- **Username:** @tao

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **gmail** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **merge** (×2)
- **googleSheets** 
- **if** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **reddit** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
