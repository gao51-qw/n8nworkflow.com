# Curate learning content from Reddit & RSS with GPT-4.1-mini and Google Sheets

> ## Personalized Learning Content Aggregator with AI Filtering

### Who’s it for
This workflow is for learners, educators, and professionals who want to automatically collect and filter the most relevant educational articles, tutorials, and resources based on specific keywords.

### How it works
- Fetches content from RSS feeds and Reddit based on user-defined keywords.
- AI analyzes and filters the articles to keep only **relevant, educational, and non-promotional** posts.
- Saves curated results into a Google Sheet for easy review.

### How to set up
1. Connect your **Google Sheets** and **AI** (OpenAI or LangChain) credentials.
2. Add your RSS feed URLs and keywords to Google Sheets.
3. Adjust schedule timing in the trigger node (default: 8 AM & 6 PM daily).
4. Run the workflow and check the results in your Google Sheet.

### Requirements
- Google Sheets account for storage.
- RSS feed URLs and keyword list.
- AI node (OpenAI / Gemini / Claude) for filtering logic.

### How to customize
- Change or add new content sources (e.g., YouTube, Medium, Dev.to).
- Adjust AI prompt criteria to match your learning goals.
- Save results to other platforms (e.g., Notion, Slack, or Airtable).

**Note:** This workflow uses no personal identifiers or API keys directly in nodes. All credentials are safely stored in n8n’s credential manager.

## 📊 Basic Information

- **Workflow ID:** 10007
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 145
- **Downloads:** 14
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10007)

## 👤 Author

- **Name:** higashiyama 
- **Username:** @kazushi

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **googleSheets** (×2)
- **code** (×3)
- **rssFeedRead** 
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
