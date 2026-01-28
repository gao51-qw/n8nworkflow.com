# Auto documentation sync: GitHub to Slack with GPT-4o mini summaries

> ## Description:
Keep your internal documentation always up to date with this n8n automation template.
 The workflow listens for GitHub pull request merges to the main branch, detects any changes in documentation files (README, /docs, or OpenAPI specs), and automatically summarizes and syncs updates to Confluence (or internal knowledge systems). It also alerts your team instantly via Slack with a summary of what changed.
Ideal for DevOps, technical writers, and engineering teams who want to eliminate manual documentation updates after code merges.

## ✅ What This Template Does (Step-by-Step)
-  ⚡ Trigger on GitHub Pull Requests: Automatically activates when a PR is merged into the main branch.
- 🧩 Validate Merge Conditions: Ensures the PR is both merged and targeted at the main branch before continuing.
- 📥 Fetch Updated Files (README, Docs, OpenAPI): Retrieves key documentation files directly from the GitHub repository for analysis.
- 🔍 Detect Documentation Changes: Scans payloads for any doc-related keywords or file changes (README, /docs, or OpenAPI).
- 🤖 AI-Powered Summarization: Uses Azure OpenAI GPT-4o Mini to create a concise 2-3 sentence summary of the changes, perfect for documentation notes or changelogs.
- 📤 Post Summary to Slack: Shares the AI-generated summary in your #documentation-updates or #general-information channel for instant visibility.
- 📢 Team Notifications: Sends a detailed Slack message with PR title, author, repo, and branch for full transparency.
- 🔁 Continuous Sync: Every merged documentation update is detected, summarized, and communicated—without human effort.

## 🧠 Key Features
 🔍 Smart detection for README, Docs, and OpenAPI changes
 🤖 AI summarization via Azure OpenAI GPT-4o Mini
 📢 Automatic Slack alerts with PR context
 ⚙️ GitHub OAuth2 integration for secure repo access
 📋 Prevents irrelevant PRs from triggering updates

## 💼 Use Cases
 📚 Keep internal Confluence or Notion documentation in sync with code changes
 🧾 Auto-generate release notes or changelog summaries
 👩‍💻 Keep dev and QA teams informed of key doc updates
 🧠 Reduce time spent on manual documentation tracking

## 📦 Required Integrations
- GitHub (for PR event and file fetch)
- Azure OpenAI (for doc change summarization)
- Slack (for instant team notifications)

## 🎯 Why Use This Template?
 ✅ Ensures your docs stay current with every merge
 ✅ Reduces manual copy-pasting and review effort
 ✅ Keeps engineering, product, and docs teams aligned
 ✅ Fully extensible—add Confluence, Notion, or changelog publishing in seconds

## 📊 Basic Information

- **Workflow ID:** 9828
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 87
- **Downloads:** 8
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9828)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **githubTrigger** 
- **stickyNote** (×8)
- **if** (×2)
- **github** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
