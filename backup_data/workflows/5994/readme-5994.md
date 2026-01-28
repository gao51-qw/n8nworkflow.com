# Personalized stock portfolio analysis and recommendations with Grok-4 and Perplexity

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 📊 Grok-4 with Perplexity Daily Portolio Advisor.

This workflow acts as your personal AI stock analyst—powered by Grok-4, Perplexity, and Google Sheets—to give you daily, tailored market insights based on your actual investment portfolio.

Every morning, the workflow:

Fetches your current stock holdings from a connected Google Sheet

Uses Perplexity to search and summarize the latest stock market news relevant to your portfolio

Leverages Grok-4 AI to analyze how those news events impact your stocks

Provides buy/sell/hold recommendations and AI-powered investment insights

Emails you a clean, easy-to-read summary—perfect for busy investors

To watch the step-by-step Tutorial build of this workflow, check out: https://youtu.be/OXzsh-Ba-8Y

Google Sheet Template:
https://docs.google.com/spreadsheets/d/1074dZk-vhwz6LML5zoiwHdxg89Z8u_mgl7wwzqf3A98/edit?usp=sharing


🧠 What’s Inside:
AI Agent: Grok-4 Stock Analyst (via xAI Grok-4)

Tool Integrations:
 📄 Google Sheets (Portfolio input)
 🔍 Perplexity (News search)
 ✍️ GPT Summary Agent (Readable output)
 📧 Gmail (Automated delivery)

Schedule: Runs daily at 10:00 AM by default (customizable)

💡 Use Cases:
Retail investors seeking personalized news summaries

Portfolio managers automating market analysis

Fintech startups prototyping intelligent investment advisors

Anyone wanting actionable stock updates without reading 10+ articles

## 📊 Basic Information

- **Workflow ID:** 5994
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1737
- **Downloads:** 173
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5994)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Crypto Trading
- AI RAG

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatXAiGrok** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **perplexityTool** 
- **googleSheetsTool** 
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
