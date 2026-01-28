# Automated meeting minutes from audio using OpenAI transcription and Google Docs

> ## Who’s it for

Teams and operators who record meetings/interviews and want fast, standardized, action-oriented minutes—without writing code. New n8n users welcome. 

## What it does / How it works

On form submission, the workflow ingests an audio file and basic metadata, transcribes the audio with OpenAI, summarizes it into concise minutes (key points, next actions with owner & due date, and counterpart concerns/requests), then creates a Google Doc (if missing) and appends the minutes. Sticky notes on the canvas explain each step and required inputs.

## How to set up

1. Connect **OpenAI** via Credentials (never hardcode API keys).
2. Connect **Google (OAuth2)** with Docs/Drive scopes.
3. Replace any hardcoded Drive folder ID with an env var (e.g., `MINUTES_FOLDER_ID`).
4. In the Form Trigger, keep the audio upload field and optional metadata (Manager, Partner, Situation).
5. Test with a short audio sample (30–120 sec), then iterate on the summary prompt.
   Paste this description into a yellow sticky note at the top of the canvas.

## Requirements

* n8n (Cloud or self-hosted)
* OpenAI credential with transcription + LLM access
* Google account with Docs/Drive access and available storage

## How to customize the workflow

* Tweak the prompt tone, length, or sections (e.g., add “Risks/Blockers”).
* Change the document title pattern or parent folder.
* Add Slack or email notifications after the Doc is updated.
* Log executions to Google Sheets for weekly reporting and audits.

## Security & publishing tips

 remove personal IDs (folder IDs, real emails) before sharing; keep node names descriptive; retain sticky notes for setup guidance.


## 📊 Basic Information

- **Workflow ID:** 9644
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 354
- **Downloads:** 35
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9644)

## 👤 Author

- **Name:** Yusei Miyakoshi
- **Username:** @yusei

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **googleDocs** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
