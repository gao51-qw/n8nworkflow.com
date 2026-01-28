# Reddit API Hub: Manage posts, comments & subreddits via server-sent events

> ## 🔄 Reddit Content Operations via MCP Server

### 🧑‍💼 Who is this for?

This workflow is built for content creators, marketers, Reddit automation enthusiasts, and AI agent developers who want structured, programmable access to Reddit content. If you're researching niche communities, tracking trends, or automating Reddit engagement — this is for you.

### 💡 What problem is this workflow solving?

Reddit has valuable content scattered across subreddits, but manual analysis or engagement is inefficient. This workflow acts as a centralized API interface to:

- Query and manage Reddit posts
- Create, fetch, delete, and reply to comments
- Analyze subreddit metadata and behavior
- Enable AI agents to autonomously operate on Reddit data

It does this using an **MCP (Model Context Protocol) Server** over **Server-Sent Events (SSE)**.

### ⚙️ What this workflow does

This template sets up a custom **MCP Server** that listens for JSON-based operation commands sent via SSE. Based on the operation, it routes the request to one of the following branches:

#### 🟥 Post CRUD

- Create a new Reddit post
- Search posts across subreddits
- Fetch posts by ID
- Delete existing posts

#### 🟩 Comment CRUD

- Create or reply to comments
- Fetch multiple comments from posts
- Delete specific comments

#### 🟦 Subreddit Read Operations

- Get information about subreddits
- List subreddit posts
- Retrieve subreddit rules

### 🛠 Setup

1. Import this workflow into your **self-hosted n8n instance**.
2. Configure Reddit credentials (OAuth2).
3. Connect your input system to the MCP Server Trigger node via SSE.
4. Send operation payloads to the server like this:

```json
{
  "operation": "post_search",
  "params": {
    "query": "AI agents",
    "subreddit": "machinelearning"
  }
}
The workflow will route to the appropriate node based on operation type.

🧩 Supported Operations
post_create

post_get_many

post_search

post_delete

post_get_by_id

comment_create

comment_reply

comment_get_many

comment_delete

subreddit_get_about

subreddit_get_many

subreddit_get_rules
```

### 🧠 How to customize this workflow to your needs
Add new operations to the operation_switch node for additional API functionality.

Chain results into Notion, Slack, Airtable, or external APIs.

Integrate with OpenAI/GPT to summarize posts or filter content.

Add logic to score and sort content by engagement, sentiment, or keywords.

### 🟨 Sticky Notes
Each operation group is color-coded (Posts, Comments, Subreddits).

Sticky Notes explain the purpose and dependencies of each section.

Easy to maintain and extend with clear logical separation.

### ⚠️ This template uses a custom MCP Server node and only works in self-hosted n8n.

### 🖼 Workflow Preview

![Screenshot 20250520 at 11.57.41 PM.png](fileId:1346)

## 📊 Basic Information

- **Workflow ID:** 4266
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 1361
- **Downloads:** 136
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4266)

## 👤 Author

- **Name:** Simeon
- **Username:** @simealdana

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **executeWorkflowTrigger** 
- **reddit** (×12)
- **switch** (×4)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **set** (×3)
- **splitOut** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
