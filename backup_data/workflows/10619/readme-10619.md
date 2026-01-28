# Automated YouTube publishing from Drive with GPT & Gemini metadata generation

> # How it works
This workflow turns a Google Drive folder into a fully automated YouTube publishing pipeline. Whenever a new video file is added to the folder, the workflow generates all YouTube metadata using AI, uploads the video to your YouTube channel, deletes the original file from Drive, sends a Telegram confirmation, and can optionally post to Instagram and Facebook using permanent system tokens.
## High-level flow:
Detects new video uploads in a specific Google Drive folder.

Downloads the file and uses AI to generate:
• a polished first-person YouTube description
• an SEO-optimized YouTube title
• high-ranking YouTube tags

Uploads the video to YouTube with the generated metadata.

Deletes the original Drive file after upload.

Sends a Telegram notification with video details.

(Optional) Posts to Instagram & Facebook using permanent system user tokens.

## Set up steps
Setup usually takes a few minutes.

Add Google Drive OAuth2 credentials for the trigger and download/delete nodes.

Add your OpenAI (or Gemini) API credentials for title/description/tag generation.

Add YouTube OAuth2 credentials in the YouTube Upload node.

Add Facebook/Instagram Graph API credentials if enabling cross-posting.

Replace placeholder IDs (Drive folder ID, Page ID, IG media endpoint).

Review sticky notes in the workflow—they contain setup guidance and token info.

Activate the Google Drive trigger to start automated uploads.

## 📊 Basic Information

- **Workflow ID:** 10619
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 392
- **Downloads:** 39
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10619)

## 👤 Author

- **Name:** Ai x Nouman
- **Username:** @muhammadnouman

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDrive** (×2)
- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **youTube** 
- **stickyNote** (×8)
- **telegram** 
- **httpRequest** (×4)
- **code** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
