# Generate blog posts from YouTube videos with OpenAI GPT for WordPress & Webflow

> # Description

**Who's it for:** Content creators, marketers, and businesses who publish on both YouTube and blog platforms.

**What it does:** Monitors your YouTube channel for new videos and automatically creates SEO-optimized blog posts using AI, then publishes to WordPress or Webflow.

**How it works:**
1. RSS Feed Trigger polls YouTube videos (every X amount of time)
2. Extracts video metadata (title, description, thumbnail)
3. YouTube node extracts full description for extra context
4. Uses OpenAI (you can choose any model) to generate 600-800 word blog post
5. Publishes to WordPress AND/OR Webflow with error handling
6. Sends notifications to Telegram if publishing fails

**Requirements:**
- YouTube channel ID (avoid tutorial channels for better results)
- OpenAI API key (or similar)
- WordPress OR Webflow credentials
- Telegram bot (optional, for error notifications)

**Setup steps:**
1. Replace `YOUR_CHANNEL_ID` in RSS Feed Trigger
2. Add OpenAI credentials in AI generation node
3. Configure WordPress and/or Webflow credentials
4. Add Telegram bot for error notifications (optional). If you choose to set up   Telegram, you need to input your channel ID.
5. Test with manual execution first

**Customization:**
- Modify AI prompt for different content styles
- Adjust polling frequency (30-60 minutes recommended)
- Add more CMS platforms
- Add content verification (is content larger than 600 characters? if not, improve)

## 📊 Basic Information

- **Workflow ID:** 10046
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 855
- **Downloads:** 85
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10046)

## 👤 Author

- **Name:** Dahiana
- **Username:** @mssporto

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **wordpress** 
- **webflow** 
- **stickyNote** (×8)
- **telegram** (×2)
- **scheduleTrigger** 
- **rssFeedRead** 
- **youTube** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **markdown** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
