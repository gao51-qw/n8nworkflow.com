# Workflow results to markdown notes in your Obsidian vault, via Google Drive

> This workflow converts any n8n workflow outputs into Markdown notes that are accessible in your Obsidian Vault through Google Drive synchronization.

**Setup Requirements**
1.	Create a designated folder in Google Drive (Desktop).
2.	Create a symbolic link between this folder and a new target folder in your Obsidian Vault.
3.	Configure Google Drive n8n node settings.
4.	Send the output of any workflow to the trigger, and the notes will appear in your Vault folder.
	
**Optional Features**
You can use AI agents to:
- Write notes in your preferred format (e.g., Zettelkasten).
- Compose YAML front matter.
- Suggest tags.

**Use Cases**
- Convert RSS feed items to notes.
- Create notes from YouTube video transcripts.
- Transform tasks in Slack messages into Obsidian tasks.
(Requires setting up a corresponding workflow, e.g., RSS trigger, YouTube transcriber, or Slack bot.)


## 📊 Basic Information

- **Workflow ID:** 2794
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 4584
- **Downloads:** 458
- **Created:** 2025/1/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2794)

## 👤 Author

- **Name:** Obsidi8n
- **Username:** @derruttie

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **stickyNote** (×4)
- **googleDrive** (×2)
- **executeWorkflowTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
