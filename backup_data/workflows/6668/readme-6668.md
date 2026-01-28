# Daily company online presence monitor with AI sentiment analysis & multi-platform tracking

> How it works

This workflow provides a comprehensive daily overview of your chosen company's online presence. It automatically:

- Scans diverse online sources including Google News, Reddit, and YouTube for mentions of your specified company and keywords.

- Leverages Artificial Intelligence to analyze the sentiment (positive, negative, neutral) and provide concise summaries for each new mention.

- Intelligently tracks and deduplicates content using a persistent local database, ensuring you only receive alerts for genuinely new discussions or articles, preventing redundant notifications.

- Compiles a structured, categorized daily report detailing new mentions by source and sentiment.

- Delivers this insightful report directly to your email inbox.

Gain unparalleled visibility into your company's online reputation and public perception across various digital channels!

**Set up steps**

Setting up this comprehensive workflow is more involved, typically taking around 25-50 minutes, due to multiple data sources, AI integration, and database management. You'll need to:

- Define your company's name and a comprehensive list of search keywords.

- Authenticate your preferred email service (e.g., Gmail).

- Obtain an API key for your chosen AI service (e.g., OpenAI).

- Authenticate your Reddit account.

- Authenticate your Google (YouTube) account (for YouTube API access).

- Understand the nuances of general internet monitoring, acknowledging that capturing "all" content is practically impossible without highly specialized (and expensive) enterprise tools.

All detailed setup instructions and specific configuration guidance are provided within the workflow itself using sticky notes.

## 📊 Basic Information

- **Workflow ID:** 6668
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 498
- **Downloads:** 49
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6668)

## 👤 Author

- **Name:** Piotr Sobolewski
- **Username:** @piotrsobolewski

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **cron** 
- **set** 
- **rssFeed** 
- **function** (×6)
- **reddit** 
- **youTube** 
- **itemLists** 
- **sqlite** (×3)
- **openAi** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
