## Description:
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