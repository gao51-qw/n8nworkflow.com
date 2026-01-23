# Flow from Reddit to Gmail with key features and GPT-4o mini usage

> **What it does**

Automatically monitors multiple subreddits daily, identifies trending posts with high engagement, and delivers AI-powered summaries directly to your inbox. Never miss important discussions in your favorite communities again.

**Perfect for**

Investors tracking market sentiment, researchers monitoring industry discussions, content creators finding trending topics, or anyone wanting curated Reddit insights without endless scrolling.

**Apps used**

Reddit, OpenRouter (GPT-4o mini), Gmail

**How it works**

1. Triggers daily at your chosen time across all specified subreddits
2. Fetches hot posts from the last 24 hours with scores above 30 upvotes
3. Sorts posts by engagement score to prioritize trending content
4. Extracts post content plus top-level comments for full context
5. Generates concise AI summaries for each high-value thread
6. Compiles summaries into a clean HTML email digest
7. Delivers the digest to your Gmail inbox with clickable Reddit links

**Setup**

Configure these three essential settings:

- **Schedule time**: Set your preferred daily delivery time in the Schedule Trigger node. **Replace with your preferred hour** (currently 6 AM). Note: Times display in your workflow timezone
- **Topic and subreddits**: In the "Set Topic, Subreddits and Email Address" node, **replace with your topic name** (e.g., "Investing") and **replace with your subreddit array** (e.g., ["investing", "stocks"])
- **Email recipient**: **Replace with your Gmail address** in the same node

**Credentials**

Reddit OAuth2 for API access, OpenRouter API key for AI summaries, Gmail OAuth2 for email delivery

**If you have any questions in running the workflow, feel free to reach out to me at my youtube channel:** https://www.youtube.com/@lifeofhunyao

## 📊 Basic Information

- **Workflow ID:** 7162
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 229
- **Downloads:** 22
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7162)

## 👤 Author

- **Name:** Hunyao
- **Username:** @hun-yao

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×9)
- **scheduleTrigger** 
- **splitOut** 
- **reddit** (×3)
- **merge** (×4)
- **set** (×6)
- **filter** (×2)
- **sort** 
- **splitInBatches** 
- **removeDuplicates** 
- **code** (×3)
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
