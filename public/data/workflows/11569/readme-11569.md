# Generate GitHub release notes with AI comparison

> # Generate GitHub Release Notes with AI

Automatically **generate GitHub release notes** using AI. 

This workflow compares your latest two GitHub releases, summarises the changes, and produces a clean, ready-to-paste changelog entry. 

It’s ideal for automating GitHub Releases, versioning workflows, and keeping your documentation or CHANGELOG.md up to date without manual editing.

---

### What this workflow does
- Listens for newly published GitHub Releases.
- Fetches and compares the latest two GitHub release versions.
- Uses an AI Chat Model to summarise changes and generate structured release notes.
- Outputs clean, reusable release note content for GitHub, documentation, or CI/CD pipelines.

---

## How it works
1. GitHub Trigger detects a new published release.
2. Release detail nodes extract the latest tag, body, and repository metadata.
3. Comparison logic fetches the previous release and prepares a diff.
4. Chat Model nodes (via OpenRouter) generate both a summary and a final, formatted release note.

---

## Requirements / Connections
- GitHub OAuth credential configured in n8n.
- OpenRouter API key connected to the Chat Model nodes.

---

## Setup instructions
1. Import the template.
2. Select your GitHub OAuth connection in all GitHub nodes.
3. Add your OpenRouter credential to the Chat Model nodes.
4. **(Optional)** Adjust the AI prompts to customise tone or formatting.

---

## Output
The workflow produces:
- A concise summary of differences between the last two GitHub releases.
- A polished AI-generated GitHub release note ready to publish.

---

## Customisation ideas
- Push generated notes directly into a CHANGELOG.md or documentation repo.
- Send release summaries to Slack or Teams.
- Include commit messages, PR titles, or labels for deeper analysis.

## 📊 Basic Information

- **Workflow ID:** 11569
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 26
- **Downloads:** 2
- **Created:** 2025/12/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11569)

## 👤 Author

- **Name:** Richard Black
- **Username:** @rtblack

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **githubTrigger** 
- **code** (×3)
- **github** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
