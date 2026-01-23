# Daily news digest: summarize RSS feeds with OpenAI and deliver to WhatsApp

> This n8n workflow collects and summarizes news from multiple RSS feeds, using OpenAI to generate a concise summary that can be sent to WhatsApp or other destinations. Perfect for automating your daily news digest.

🔁 Workflow Breakdown:
Schedule Trigger
Start the workflow on your desired schedule (daily, hourly, etc.).

🟨 Note: Set the trigger however you wish.

RSS Feeds (My RSS 01–04)
Fetches articles from four different RSS sources.

🟨 Note: You can add as many RSS feeds as you want.

Edit Fields (Edit Fields1–3)
Normalizes RSS fields (title, link, etc.) to ensure consistency across different sources.

Merge (append mode)
Combines the RSS items into a single unified list.

Filter
Optionally filter articles by keywords, date, or categories.

Limit
Limits the analysis to the 10 most recent articles.

🟨 Note: This keeps the result concise and avoids overloading the summary.

Aggregate
Prepares the selected news for summarization by combining them into a single content block.

OpenAI (Message Assistant)
Summarizes the aggregated news items in a clean and readable format using AI.

Send Summary to WhatsApp
Sends the AI-generated summary to a WhatsApp endpoint via webhook (yoururlapi.com). You can replace this with an email service, Google Drive, or any other destination.

🟨 Note: You can send it to your WhatsApp API, email, drive, etc.

No Operation (End)
Final placeholder to safely close the workflow. You may expand from here if needed.

## 📊 Basic Information

- **Workflow ID:** 4709
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 22284
- **Downloads:** 2228
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4709)

## 👤 Author

- **Name:** Danielle Gomes
- **Username:** @daniellegomes

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **filter** 
- **set** (×4)
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **limit** 
- **aggregate** 
- **scheduleTrigger** 
- **noOp** 
- **stickyNote** (×5)
- **rssFeedRead** (×4)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
