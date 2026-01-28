# Reddit brand engagement with AI comment generation and Slack notifications

> ## What This Does
Automatically finds relevant Reddit posts where your brand can add value, generates helpful AI comments, and sends the best opportunities to your Slack channel for review.

## Setup Requirements
- Reddit API credentials
- OpenAI API key  
- Slack webhook URL

## Quick Setup

### Reddit API
1. Create app at reddit.com/prefs/apps (select "script" type)
2. Add client ID and secret to n8n credentials

### Configure Subreddits
Edit the workflow to monitor subreddits relevant to your business:
```
entrepreneur, startups, smallbusiness, [your_niche]
```

### AI Prompt Setup
Customize the OpenAI node with your brand context:
```
You're helping in [subreddit] discussions. When relevant, mention how [your_product] solves similar problems. Be helpful first, promotional second.
```

### Slack Integration
Add your webhook URL to get notifications with:
- Post title and link
- AI-generated comment
- Engagement score (1-10)

## Key Features
- **Smart Filtering**: AI evaluates if a post is worth engaging with
- **Brand-Aware Comments**: Generated responses stay on-brand and helpful
- **Team Review**: All opportunities go to Slack before posting
- **Multiple Subreddits**: Monitor several communities simultaneously

## Customization Tips

**Adjust AI Scoring** - Modify what makes a "good" opportunity:
- Post engagement level
- Relevance to your product
- Tone of the discussion

**Comment Templates** - Set different styles for different subreddits:
- Technical advice for developer communities
- Business insights for entrepreneur groups
- User experience for product discussions

## Best Practices
- Start with 2-3 subreddits to test effectiveness
- Review and approve comments in Slack before posting
- Follow Reddit's 90/10 rule (90% helpful content, 10% self-promotion)
- Adjust the AI prompt based on what works in your communities

## Why Use This
- Saves hours of manual Reddit browsing
- Maintains consistent brand voice
- Never miss relevant conversations
- Team can review before engaging publicly

## 📊 Basic Information

- **Workflow ID:** 8458
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 366
- **Downloads:** 36
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8458)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **filter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **slack** 
- **reddit** (×5)
- **merge** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
