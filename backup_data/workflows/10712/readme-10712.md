# Auto-track YouTube stats & channel data in Notion database

> ## **Who it's for**
YouTube creators, content marketers, and anyone who wants to automatically enrich YouTube links added to a Notion database.

## **What it does**
Automatically extracts important video and channel data — including title, views, likes, comments, thumbnail, channel name, subscribers, and a custom viral score — whenever a new YouTube URL is added to Notion.

## **How it works**
1. A Notion Trigger fires when a new page is added to your database.  
2. The workflow extracts the YouTube video ID from the provided URL.  
3. A YouTube API request retrieves video details (title, views, likes, comments, thumbnail).  
4. A second YouTube API request retrieves channel information (name and subscriber count).  
5. Both sets of data are cleaned and formatted.  
6. The enriched data is written back to the same Notion page.

## **Requirements**
- YouTube Data API (OAuth2 recommended)  
- Notion integration connected to your workspace  
- This Notion template (includes all required fields):  
  https://lunar-curler-d17.notion.site/2a71d9a77486807a9006d048aa512d16?v=2a71d9a7748680eda620000ca9c112a4

## **Setup steps**
1. Duplicate the Notion template linked above.  
2. Connect your Notion credentials in n8n.  
3. Create and connect a YouTube OAuth2 credential.  
4. Assign your credential to the YouTube API nodes.  
5. Test once with a manual execution.

## 📊 Basic Information

- **Workflow ID:** 10712
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 150
- **Downloads:** 15
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10712)

## 👤 Author

- **Name:** Chris Jadama
- **Username:** @chrisjadama

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **notionTrigger** 
- **set** (×3)
- **youTube** (×2)
- **merge** 
- **notion** 
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
