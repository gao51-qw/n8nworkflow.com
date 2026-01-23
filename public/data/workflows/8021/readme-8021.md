# Create research-backed blog content with Slack, Perplexity, Pinecone and Google Docs

> ✍️ Ultimate AI Blog Content Creator with Slack + Pinecone + Perplexity

Description
Turn your marketing team’s blog ideas into full, research-backed, brand-aligned articles with one Slack mention. This workflow connects Slack, Pinecone, and Perplexity to deliver high-impact blog posts that match your company’s voice and leverage the latest research — all written directly into Google Docs for immediate publishing.

👉 Watch step-by-step build of this workflow on: www.youtube.com/@automatewithmarc

How It Works

Slack Trigger – Marketing team members @mention the bot with a blog idea.

Perplexity Tool – Gathers the most up-to-date insights and research on the topic.

Pinecone Vector DB – Injects your brand guidelines, tone, and style from stored vectors.

AI Blogpost Agent – Powered by Anthropic/OpenAI, it blends research + style to create a polished, structured blog post.

Simple Memory – Keeps context across requests for more consistent content.

Google Docs – Creates and updates a document with the generated article, ready for review or publishing.

Why Content Teams Will Love It

⚡ Faster turnaround — go from idea to publish-ready blog in minutes.

📝 On-brand every time — uses your Pinecone-stored brand guidelines.

🌍 Research-driven — Perplexity ensures content is current and credible.

🤝 Team-friendly — triggered right inside Slack for effortless collaboration.

Requirements

Slack App (with app_mentions:read, chat:write)

Pinecone account with embedded brand guideline vectors

Perplexity API key

Anthropic/OpenAI API key

Google Docs account

## 📊 Basic Information

- **Workflow ID:** 8021
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 324
- **Downloads:** 32
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8021)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDocs** (×2)
- **slackTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **perplexityTool** 
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
