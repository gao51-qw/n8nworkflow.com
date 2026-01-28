# Intelligent AI digest for security, privacy, and compliance feeds

> **How it works**
This workflow acts like your own personal AI assistant, automatically fetching and summarizing the most relevant Security, Privacy, and Compliance news from curated RSS feeds. It processes only the latest articles (past 24 hours), organizes them by category, summarizes key insights using AI, and delivers a clean HTML digest straight to your inbox—saving you time every day.

**Key Highlights**

- Handles three independent tracks: Security, Privacy, and Compliance
- Processes content from customizable RSS sources (add/remove easily)
- Filters fresh articles, removes duplicates, and sorts by recency
- Uses AI to summarize and format insights in a digestible format
- Sends polished HTML digests via Gmail—one per category
- Fully modular and extensible—adapt it to your needs

**Personalization**
You can easily tailor the workflow:

🎯 Customize feeds: Add or remove sources in the following Code nodes:
```
Fetch Security RSS, Fetch Privacy Feeds, and Fetch Compliance Feeds
```

🔧 Modify logic: Adjust filters, sorting, formatting, or even AI prompts as needed

🧠 Bring your own LLM: Works with Gemini, but easily swappable for other LLM APIs

**Setup Instructions**

- Requires Gmail and LLM (e.g., Gemini) credentials
- Prebuilt with placeholders for RSS feeds and email output
- Designed to be readable, maintainable, and fully adaptable

## 📊 Basic Information

- **Workflow ID:** 4678
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 16984
- **Downloads:** 1698
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4678)

## 👤 Author

- **Name:** Niranjan G
- **Username:** @niranjan

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×3)
- **scheduleTrigger** 
- **code** (×9)
- **set** (×3)
- **filter** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **gmail** (×3)
- **sort** (×3)
- **stickyNote** (×9)
- **splitOut** (×3)
- **rssFeedRead** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
