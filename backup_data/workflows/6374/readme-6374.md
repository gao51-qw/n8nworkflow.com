# Automate AI video production & distribution with Veo3, YouTube & Google Suite

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Generate Veo3 Videos via AI/ML API, Save to Google Drive and Upload to YouTube

Transform your content creation process by automating video generation with AI, publishing to YouTube, and logging results in Google Sheets. This workflow is ideal for content creators, marketers, and social media managers looking to streamline video production and distribution.

## How it works

1. **Trigger**: Start the workflow manually or on a scheduled interval (e.g., every hour).
2. **Generate Video**: Send a request to the AI/ML API to create video content based on predefined prompts and settings.
3. **Monitor Status**: Poll the AI/ML API until the video generation is completed, with retry logic for reliability.
4. **Download & Upload**: Retrieve the generated video file and upload it to your connected YouTube channel.
5. **Title Generation**: Generate a YouTube title using AI to optimize for engagement.
6. **Log Results**: Update a Google Sheet with video metadata and the YouTube URL for tracking and analytics.

## Set up steps

1. **Connect Credentials**: Add OAuth2 credentials for AI/ML API, YouTube, and Google Sheets in n8n Credentials.
2. **Configure Nodes**: Rename nodes for clarity (e.g., `Generate Video`, `Upload to YouTube`) and set up the HTTP Request node to use your AI/ML API credential.
3. **Sheet Preparation**: Create a Google Sheet with columns for `Date`, `Prompt`, `Video ID`, and `YouTube URL`.
4. **Schedule**: If using scheduling, configure the Schedule Trigger interval (e.g., every 60 minutes).
5. **Test & Deploy**: Run a manual trigger, verify video generation, upload, and sheet entry, then activate the workflow for automation.


## 📊 Basic Information

- **Workflow ID:** 6374
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1988
- **Downloads:** 198
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6374)

## 👤 Author

- **Name:** AI/ML API | D1m7asis
- **Username:** @d1m7asis

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×4)
- **scheduleTrigger** 
- **stickyNote** (×13)
- **if** 
- **googleSheets** (×3)
- **googleDrive** 
- **n8n-nodes-aimlapi.aimlApi** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
