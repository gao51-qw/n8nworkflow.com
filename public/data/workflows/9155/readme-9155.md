# Daily AI news monitoring and summarization with GPT-4 from Google & Hacker News to Telegram

> 📰 What This Workflow Does

This intelligent news monitoring system automatically:

• **RSS Feed Aggregation**: Pulls the latest headlines from Google News RSS feeds and Hacker News
• **AI Content Filtering**: Identifies and prioritizes AI-related news from the past 24 hours
• **Smart Summarization**: Uses OpenAI to create concise, informative summaries of top stories
• **Telegram Delivery**: Sends formatted news digests directly to your Telegram channel
• **Scheduled Execution**: Runs automatically every morning at 8:00 AM (configurable)

🎯 Key Features

✅ **Multi-Source News**: Combines Google News and Hacker News for comprehensive coverage
✅ **AI-Powered Filtering**: Automatically identifies relevant AI and technology news
✅ **Intelligent Summarization**: OpenAI generates clear, concise summaries with key insights
✅ **Telegram Integration**: Instant delivery to your preferred chat or channel
✅ **Daily Automation**: Scheduled to run every morning for fresh news updates
✅ **Customizable Timing**: Easy to adjust schedule for different time zones

🔧 How It Works

1. **Scheduled Trigger**: Workflow activates daily at 8:00 AM (or your preferred time)
2. **RSS Feed Reading**: Fetches latest articles from Google News and Hacker News feeds
3. **Content Filtering**: Identifies AI-related stories from the past 24 hours
4. **AI Summarization**: OpenAI processes and summarizes the most important stories
5. **Telegram Delivery**: Sends formatted news digest to your Telegram channel

📋 Setup Requirements

• **OpenAI API Key**: For AI-powered news summarization
• **Telegram Bot**: Create via @BotFather and get bot token + chat ID
• **RSS Feed Access**: Google News and Hacker News RSS feeds (public)

⚙️ Configuration Steps

1. **Set Up Telegram Bot**:
   - Message @BotFather on Telegram
   - Create new bot with /newbot command
   - Save bot token and chat ID

2. **Configure OpenAI**:
   - Add OpenAI API credentials in n8n
   - Ensure access to GPT models for summarization

3. **Update RSS Feeds**:
   - Verify Google News RSS feed URLs
   - Confirm Hacker News feed accessibility

4. **Schedule Timing**:
   - Adjust Schedule Trigger for your time zone
   - Default: 8:00 AM daily (modify as needed)

5. **Test & Deploy**:
   - Run test execution to verify all connections
   - Activate workflow for daily automation

🎨 Customization Options

**Time Zone Adjustment**: Modify Schedule Trigger for different regions
**News Sources**: Add additional RSS feeds for broader coverage
**Filtering Criteria**: Adjust AI prompts to focus on specific topics
**Summary Length**: Customize OpenAI prompts for different detail levels
**Delivery Format**: Modify Telegram message formatting and structure

💡 Use Cases

• **AI Professionals**: Stay updated on latest AI developments and industry news
• **Tech Teams**: Monitor technology trends and competitor announcements
• **Researchers**: Track academic and industry research developments
• **Content Creators**: Source material for AI-focused content and newsletters
• **Business Leaders**: Stay informed about AI market trends and opportunities

## 📊 Basic Information

- **Workflow ID:** 9155
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1171
- **Downloads:** 117
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9155)

## 👤 Author

- **Name:** Mano
- **Username:** @manocontent

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **rssFeedRead** (×2)
- **limit** 
- **code** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
