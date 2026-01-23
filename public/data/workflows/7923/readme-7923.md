# Create viral YouTube content from Reddit posts with GPT-4o and Google Sheets

> 📝 Description

This workflow automates the collection, filtering, and scoring of trending AskReddit posts for viral potential. It pulls posts from Reddit, removes duplicates, calculates a custom virality score, and writes the final candidates into Google Sheets for later use in content creation.

This is Phase 1 of the AskReddit → YouTube Shorts automation pipeline. It prepares clean, high-quality data that can be used in the next phases (script generation, AI video creation, and publishing).

⚙️ Setup Steps

Import Workflow into your n8n instance.

Reddit API:

Add your Reddit API credentials in the "Get AskReddit Posts" node.

Google Sheets:

Connect your Google account.

Point the "Write Candidates" node to your target Google Sheet.

Virality Scoring:

The "Add Virality Score" node assigns weights (e.g., upvotes, comments).

Adjust the scoring logic as needed for your niche.

Run Workflow:

Execute manually or schedule with Cron.

Verify that trending AskReddit posts appear in your sheet, scored and cleaned.

## 📊 Basic Information

- **Workflow ID:** 7923
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 687
- **Downloads:** 68
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7923)

## 👤 Author

- **Name:** kiran adhikari
- **Username:** @kiran1adh

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **code** (×6)
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×2)
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
