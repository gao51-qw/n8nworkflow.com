# Automatically document and backup N8N workflows

> Automatically backs up your workflows to Github and generates documentation in a Notion database.

- Weekly run, uses the "internal-infra" tag to look for new or recently modified workflows
- Uses a Notion database page to hold the workflow summary, last updated date, and a link to the workflow
- Uses OpenAI's 4o-mini to generate a summarization of what the workflow does
- Stores a backup of the workflow in GitHub (recommend a private repo)
- Sends notification to Slack channel for new or updated workflows

## Who is this for

- Anyone seeking backup of their most important workflows
- Anyone seeking version control for their most important workflows

## Credentials required

- N8N: You will need an N8N credential created so the workflow can query the N8N instance to find all active workflows with the "internal-infra" tag
- Notion: You will need an Notion credential created
- OpenAI: You will need an OpenAI credential, unless you intend on rewiring this with your AI of choice (ollama, openrouter, etc.)
- GitHub: You will need an GitHub credential
- Slack: You will require an Slack credential, recommend a Bot / access token configuration

## Setup

#### Notion

- Create a database with the following columns. Column type is specified in [type].
  - Workflow Name [text]
  - isActive (dev) [checkbox]
  - Error workflow setup [checkbox]
  - AI Summary [text]
  - Record last update [date/time]
  - URL (dev) [text/url]
  - Workflow created at [date/time]
  - Workflow updated at [date/time]

#### Slack

- Create a channel for updates to be posted into

#### Github

- Create a private repo for your workflows to be exported into

#### N8N

- Download & install the template
- Configure the blocks to use your N8N, Notion, OpenAI & Slack credentials for your own
- Edit the "Set Fields" block and change the URL to that of your N8N instance (cloud or self-hosted)
- Edit the "Add to Notion" action and specify the Database page you wish to update
- Edit the Slack actions to specify the Channel you want slack notifications posted to
- Edit the GitHub actions to specify the Repository Owner & Repository Name


**Sample output in Notion**![Autodoc_backup_workflows_NotionOutput.png](fileId:1072)

**Workflow diagram**![Autodoc_backup_workflows_N8NEditorView.png](fileId:1071)


## 📊 Basic Information

- **Workflow ID:** 3354
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1706
- **Downloads:** 170
- **Created:** 2025/3/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3354)

## 👤 Author

- **Name:** Luke
- **Username:** @ozskywalker

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **set** (×2)
- **httpRequest** 
- **notion** (×2)
- **slack** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×5)
- **github** (×2)
- **if** (×3)
- **scheduleTrigger** 
- **n8n** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
