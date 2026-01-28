# Generate Sora videos from Google Sheets and save results to Google Drive

> # Generate Sora AI videos, save to Google Drive, and update Google Sheets

This workflow automates video generation using OpenAI's Sora model:

**How it works:**
1. Reads video prompts from a Google Sheet
2. Submits each prompt to Sora API for video generation
3. Monitors video creation status with automatic retry logic
4. Generates SEO-optimized titles using GPT-4
5. Downloads completed videos and uploads to Google Drive
6. Updates the sheet with video URLs and status


**Setup Steps:**
1. Create a Google Sheet with columns: PROMPT, DURATION (In Seconds), VIDEO RESOLUTION, VIDEO TITLE, VIDEO URL, STATUS
2. Add your OpenAI API key (with Sora access) to credentials
3. Connect your Google Sheets and Google Drive accounts
4. Update the sheet ID in all Google Sheets nodes
5. Run the workflow manually to process all unprocessed rows


**Requirements:**
- OpenAI API key with Sora access
- Google Sheets OAuth2 credentials
- Google Drive OAuth2 credentials#Header 4

## 📊 Basic Information

- **Workflow ID:** 12287
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 22
- **Downloads:** 2
- **Created:** 2025/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12287)

## 👤 Author

- **Name:** Sona Labs
- **Username:** @sona

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×3)
- **wait** 
- **googleDrive** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **filter** 
- **set** 
- **switch** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
