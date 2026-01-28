# Auto-post YouTube Shorts from Google Drive with OpenRouter AI titles & descriptions

> ## How it works

This workflow automatically uploads YouTube Shorts from a Google Drive folder.
It picks one video at each run, generates a YouTube-optimized title, description, and hashtags using an AI model, uploads the video through YouTube’s resumable upload API, and finally moves the processed video to a “Posted” folder.

## Key steps

Run on a schedule (daily/hourly/custom CRON)

Fetch one video from a selected Google Drive folder

Generate title + description + hashtags using an LLM

Prepare YouTube metadata

Upload the video via resumable upload

Move the file to a “posted” folder to avoid duplicates

## Setup instructions

Connect your Google Drive credentials

Connect your YouTube OAuth2 credentials

Update the Drive folder IDs (input + posted folders)

Edit the “Set variables” node to change store name, country, coupon code, and tone

Review the prompt in the AI node if you want to customize content style

All technical details are documented inside the sticky notes within the workflow.

## 📊 Basic Information

- **Workflow ID:** 11441
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 349
- **Downloads:** 34
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11441)

## 👤 Author

- **Name:** osama goda
- **Username:** @osamagoda

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×5)
- **scheduleTrigger** 
- **googleDrive** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 
- **set** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
