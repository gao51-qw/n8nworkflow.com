# Daily AI news digest to LinkedIn posts with OpenAI GPT and RSS feeds

> ## 🔁 What This Workflow Does
This automation fetches daily AI-related articles from trusted RSS feeds, summarizes them using OpenAI (GPT), and generates a ready-to-post LinkedIn update in your writing style. It then emails the post to you every morning for review and publishing.

### High-Level Steps:
1. Triggers every morning via Cron.
2. Fetches latest AI news from multiple RSS sources.
3. Filters recent articles (last 24 hrs).
4. Summarizes each article using OpenAI (ChatGPT).
5. Generates a LinkedIn-style post using your tone.
6. Sends the post to your Gmail for review.

### ⚙️ Setup Steps
Estimated setup time: 15–30 minutes

You’ll need:

- OpenAI API key
- Gmail account connected in n8n
- RSS feed URLs (defaults are provided)

Add your email in the Gmail node to receive daily posts.

Add your tone/style prompt in the ChatGPT nodes (instructions inside workflow).

## 📊 Basic Information

- **Workflow ID:** 5068
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 3870
- **Downloads:** 387
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5068)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **rssFeedRead** (×3)
- **code** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **gmail** (×2)
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
