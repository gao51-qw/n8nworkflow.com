# Chat with Your GitHub Issues Using AI 🤖

Ever wanted to just *ask* your repository what's going on instead of scrolling through endless issue lists? This workflow lets you do exactly that.

## What Does It Do?

Turn any GitHub repo into a conversational knowledge base. Ask questions in plain English, get smart answers powered by AI and vector search.

* **"Show me recent authentication bugs"** → AI finds and explains them
* **"What issues are blocking the release?"** → Instant context-aware answers
* **"Are there any similar problems to #247?"** → Semantic search finds connections you'd miss

## The Magic ✨

1. **Slurp up issues** from your GitHub repo (with all the metadata goodness)
2. **Vectorize everything** using OpenAI embeddings and store in Redis
3. **Chat naturally** with an AI agent that searches your issue database
4. **Get smart answers** with full conversation memory

## Quick Start

**You'll need:**
- OpenAI API key (for the AI brain)
- Redis 8.x (for vector search magic)
- GitHub repo URL (optional: API token for speed)

**Get it running:**
1. Drop in your credentials
2. Point it at your repo (edit the `owner` and `repository` params)
3. Run the ingestion flow once to populate the database
4. Start chatting!

## Tinker Away 🔧

This is your playground. Here are some ideas:

- **Swap the data source**: Jira tickets? Linear issues? Notion docs? Go wild.
- **Change the AI model**: Try different GPT models or even local LLMs
- **Add custom filters**: Filter by labels, assignees, or whatever matters to you
- **Tune the search**: Adjust how many results come back, tweak relevance scores
- **Make it public**: Share the chat interface with your team or users
- **Auto-update**: Hook it up to webhooks for real-time issue indexing

Built with n8n, Redis, and OpenAI. No vendor lock-in, fully hackable, 100% yours to customize.

