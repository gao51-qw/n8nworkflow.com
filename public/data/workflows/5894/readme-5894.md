# Reddit bot automation: AI auto-reply & post monitor with GPT-4 + Google Sheets

> 🚀 Built an AI-Powered Reddit Engagement (Reddit auto comment to relevant posts based on your whish. A workflow That Actually Helps People and helps you to promote your product and service.

  Just spent hours fine-tuning an n8n automation that genuinely adds value to Reddit conversations and to your service, app, business or message that you want to promote. Here's what it does:

  The Challenge: Finding relevant discussions where my service, app, business or message could actually help someone - without being spammy or salesy.

  The Solution: An intelligent workflow that:
  - 🔍 Monitors multiple subreddits for photo editing discussions
  - 🧠 Uses GPT-4.1 to analyze comments (not just posts!) for genuine need
  - 🎯 Filters out bots, moderators, and irrelevant content
  - ✍️ Crafts helpful, conversational responses that provide value first
  - 📊 Tracks everything in Google Sheets for transparency

  Key Features:
  - Runs every 3 hours automatically
  - Analyzes comment context, not just keywords
  - Only engages when the service, app, business or message is genuinely relevant
  - Focuses on helping, mentions the app naturally if appropriate
  - Respects Reddit culture and community guidelines

  Why This Matters: Instead of blind self-promotion, this creates genuine interactions. When someone asks "Anyone know a good service, app, business to do XYZ?", they get a helpful response from someone
  who's actually built a solution.

  Tech Stack: n8n, OpenAI GPT-4, Reddit API, Google Sheets

  The best part? It forces me to only engage where I can add real value. No spam, just helpful participation in communities I care about.

  What automation challenges are you working on? Happy to share learnings!


Questions or feedback?: heniykb@gmail.com 

## 📊 Basic Information

- **Workflow ID:** 5894
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 864
- **Downloads:** 86
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5894)

## 👤 Author

- **Name:** Reddit Dev 
- **Username:** @harryhaz

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **merge** 
- **if** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **reddit** (×6)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
