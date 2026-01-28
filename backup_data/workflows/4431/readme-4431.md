# Notion AI summary & tags

> **What This Workflow Does:**

This n8n workflow automatically generates an AI-powered summary and relevant tags whenever a new row is added to your Notion database. 

Simply save any URL to your Notion database using the [Notion Web Clipper] Chrome extension or [Save to Notion]—on both desktop and mobile. 

This keeps all your saved content organized in one place instead of scattered across different platforms.

**How it works:**

1. The workflow is triggered when a new row is added to your Notion database (it checks for updates every minute).

2. It retrieves the content from the saved URL.

3. An AI agent analyzes the content to generate a summary and relevant tags.

4. The AI output is then formatted properly.

5. Finally, the formatted summary and tags are saved into the appropriate columns in your Notion database.


**Notes:**

Make sure your Notion database includes the following columns:

URL – Stores the content URL you want to summarize.

AI Summary – Where the AI-generated summary will be added.

Tags – Where the AI-generated tags will be saved.



## 📊 Basic Information

- **Workflow ID:** 4431
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1888
- **Downloads:** 188
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4431)

## 👤 Author

- **Name:** Parnain
- **Username:** @parnian

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **notionTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** 
- **code** 
- **notion** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
