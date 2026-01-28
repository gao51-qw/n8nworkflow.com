# Facebook comment AI moderator with Notion & Gemini

> ## 🧩 Problem Solved
Eliminates the slow, inconsistent, and error-prone process of manually replying to Facebook comments by automating it with AI, ensuring fast, accurate, and on-brand customer engagement 24/7.

## 📝 Description
This workflow automatically monitors your latest Facebook post for new comments. For each new comment, an AI agent instantly generates a friendly, personalized reply in Egyptian Arabic, using your Notion knowledge base to ensure all product info is accurate. It prevents spam by never replying to the same comment twice.

Simple Flow: New Comment → Duplicate Check → AI Analysis → Post Reply → Log Action.

## 🎯 Key Benefits
24/7 Instant Replies: Engage customers immediately, anytime.

Perfect Brand Voice: Consistent, empathetic, natural Egyptian Arabic tone in every reply.

Always Accurate: Pulls facts directly from your knowledge base; never invents details.

No Duplicate Replies: Robust checks ensure each comment gets only one response.

Huge Time Saver: Frees your team from constantly monitoring comments.

## 🛠️ Core Features
Facebook API Integration (Read & Reply)

Notion Database Integration (Knowledge Base & Logging)

AI Response Generation (Google Gemini)

Duplicate Comment Prevention

Automated Workflow Logic

## 🔧 Requirements
Facebook Access Token with pages_read_engagement and pages_manage_posts permissions.

Two Notion Databases: One for your product knowledge, one to log processed comments.

Google Gemini API Key for AI.

n8n Credentials for Facebook, Notion, and Gemini.

## ⚙️ Quick Customization
Tone & Style: Edit the prompt in the Generate Customer Reply node.

Product Info: Add fields to your Notion Knowledge Base database.

Escalation: Add a step to flag angry comments for a human agent.

## 🧠 Perfect For
E-commerce: Answering product questions on promo posts.

Healthcare: Providing accurate drug info with compassion.

Local Businesses: Replying to queries about hours/menu items.

Any Business that wants fast, professional customer engagement on social media.


Need help? Connect on [LinkedIn](https://www.linkedin.com/in/abdallaelshikh0/)

## 📊 Basic Information

- **Workflow ID:** 7660
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1215
- **Downloads:** 121
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7660)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **merge** 
- **notion** (×3)
- **httpRequest** (×2)
- **code** 
- **if** 
- **facebookGraphApi** (×2)
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
