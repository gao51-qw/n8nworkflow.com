# Track daily brand mentions from Hacker News to Slack with GPT-4o-mini sentiment analysis

> ## 📊 Description
Monitor daily brand visibility and reputation with an automated AI-powered mention tracker. 🔍🤖 This workflow checks Hacker News every morning for new stories matching your brand keyword, classifies each mention’s sentiment and urgency using GPT-4o-mini, and delivers a clean daily summary to Slack. If no mentions are found, the workflow sends a simple “no mentions today” update instead—ensuring your team is always informed without manual monitoring. Perfect for reputation tracking, competitive intelligence, and early warning alerts. 📈💬

## 🔁 What This Template Does
1️⃣ Triggers every morning at 09:00 to begin the analysis. ⏰
 2️⃣ Loads brand name + keyword filters from configuration. 🏷️
 3️⃣ Fetches relevant mentions from Hacker News using the Algolia API. 🌐
 4️⃣ Normalizes raw API data into clean fields (title, URL, snippet, author, points). 📄
 5️⃣ Classifies each mention’s sentiment, stance, topic, and urgency using GPT-4o-mini. 🤖
 6️⃣ Builds a ranked daily summary including top 10 mentions and sentiment totals. 📊
 7️⃣ Sends the report to Slack, formatted cleanly and ready for team consumption. 💬
 8️⃣ If no mentions exist, sends a simple “no new mentions today” message. 🚫
 9️⃣ Includes an error handler that notifies Slack of any workflow failures. ⚠️

## ⭐ Key Benefits
✅ Automatically tracks brand presence without manual searching
 ✅ AI-powered sentiment & urgency analysis for deeper insights
 ✅ Clean Slack summaries keep teams aligned and aware
 ✅ Early detection of negative or high-urgency mentions
 ✅ Zero manual monitoring — runs fully on schedule
 ✅ Suitable for brand monitoring, PR, marketing, and leadership teams

## 🧩 Features
- Daily schedule trigger
- Hacker News API (Algolia) integration
- Structured data normalization
- GPT-4o-mini classification (sentiment, stance, topic, urgency)
- Slack notifications (detailed report or no-mention message)
- Error-handling pipeline with Slack alerts
- Fully configurable brand keywords

## 🔐 Requirements
- Slack API credentials
- OpenAI API key (GPT-4o-mini)
- No authentication required for Hacker News API
- n8n with LangChain nodes enabled

## 🎯 Target Audience
- Brand monitoring & PR teams
- AI companies tracking public sentiment
- Founders monitoring mentions of their product
- Marketing teams watching trends & community feedback


## 📊 Basic Information

- **Workflow ID:** 11080
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 63
- **Downloads:** 6
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11080)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** 
- **code** (×2)
- **if** (×2)
- **slack** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×8)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
