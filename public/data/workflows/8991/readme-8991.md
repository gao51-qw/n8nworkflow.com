# Generate curated local news digests with Gemini AI for Discord

> ## AI-Powered Local News Digest to Discord (or Slack/Telegram/WhatsApp)

Stay on top of what’s happening in your community without drowning in endless RSS feeds.  

This workflow pulls in local news sources daily, filters duplicates, and uses Google’s Gemini API to rank the most relevant stories before sending a clean digest straight to Discord. (Easily adaptable for Slack, Telegram, WhatsApp, or email.)  

### How it Works
1. **Daily Trigger** – Runs every morning at 8AM by default.  
2. **Collect Feeds** – Pulls in stories from multiple RSS feeds (customizable to your region).  
3. **Deduplicate & Prepare** – Removes repeats and cleans article data.  
4. **AI Scoring** – Uses Gemini API to score stories by relevance.  
5. **Filter & Sort** – Keeps only the top articles (default: 5).  
6. **Deliver Digest** – Formats and sends the summary to Discord (or another messaging app).  

### Why Use This
- **Save time** – Skip endless scrolling through local feeds.  
- **Stay relevant** – AI ranks stories so you only get what matters most.  
- **Be flexible** – Works with any RSS feed and can send to Discord, Slack, Telegram, WhatsApp, or email.  
- **Newsletter/Blogs** – Get daily, relevant updates to share on social media, your newsletters, etc.


Perfect for individuals, teams, or community groups who want a daily, high-quality snapshot of local news. 📰⚡


## 📊 Basic Information

- **Workflow ID:** 8991
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 419
- **Downloads:** 41
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8991)

## 👤 Author

- **Name:** Kaden Reese
- **Username:** @kadenreese

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **rssFeedRead** (×5)
- **merge** 
- **code** (×4)
- **httpRequest** 
- **sort** 
- **limit** 
- **discord** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
