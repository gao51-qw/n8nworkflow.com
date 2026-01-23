# Generate AI-curated Reddit digests for Telegram, Discord & Slack with Gemini

> Automatically fetch, curate, and distribute Reddit content digests using AI-powered filtering. This workflow monitors multiple subreddits, ranks posts by relevance, removes spam and duplicates, then delivers beautifully formatted digests to Telegram, Discord, or Slack.

## Who's it for

Perfect for content creators tracking trends, marketers monitoring discussions, researchers following specific topics, and community managers staying informed. Anyone who wants high-quality Reddit updates without manually browsing multiple subreddits.

## How it works

The workflow fetches top posts from your chosen subreddits using Reddit's JSON API (no authentication required). Posts are cleaned, deduplicated, and filtered by upvote threshold and custom keywords. An AI model (Google Gemini, OpenAI, or Claude) then ranks remaining posts by relevance, filters out low-quality content, and generates a formatted digest. The final output is delivered to your preferred messaging platform on a schedule or on-demand.

## Setup requirements

- n8n version 1.0+
- AI provider API key (Google Gemini recommended - has free tier)
- At least one messaging platform configured:
  - Telegram bot token + chat ID
  - Discord webhook URL  
  - Slack OAuth token + channel access

## How to set up

1. Open the **Configuration** node and edit subreddit list, post counts, and keywords
2. Configure the **Schedule Trigger** or use manual execution
3. Add your AI provider credentials in the **AI Content Curator** node
4. Enable and configure your preferred delivery platform (Telegram/Discord/Slack)
5. Test with manual execution, then activate the workflow

## Customization options

- **Subreddits**: Add unlimited subreddits to monitor (comma-separated)
- **Time filters**: Choose from hour, day, week, month, year, or all-time top posts
- **Keywords**: Set focus keywords to prioritize and exclude keywords to filter out
- **Post count**: Adjust how many posts to fetch vs. how many appear in final digest
- **AI prompt**: Customize ranking criteria and output format in the AI node
- **Schedule**: Use cron expressions for hourly, daily, or weekly digests
- **Output format**: Modify the formatting code to match your brand style

Add email notifications, database storage, or RSS feed generation by extending the workflow with additional nodes.

## 📊 Basic Information

- **Workflow ID:** 10246
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 417
- **Downloads:** 41
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10246)

## 👤 Author

- **Name:** Hemanth Arety
- **Username:** @hemantharety

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×11)
- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **if** 
- **telegram** 
- **discord** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
