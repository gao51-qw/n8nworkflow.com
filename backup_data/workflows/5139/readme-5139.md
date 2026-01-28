# Automated Instagram reels workflow

> This workflow automates the process of creating and posting Instagram Reels, combining Google Drive, AI, Airtable, and the Facebook Graph API. It supports two content creation paths:

1. Scheduled Random Video Selection & Posting

Selects a random video from a Google Drive folder named "Random video mover" based on a schedule.

Moves the video to a processing folder for posting.

2. Manual Upload Trigger & Posting

Watches a specific Google Drive folder ("n8n reels automation on instagram").

Triggers the workflow when a new video is uploaded.

Core Process (applies to both paths)

Download Video from Google Drive.

AI Caption Generation with Google Gemini, using the file name as context. The AI creates concise captions with hashtags and a call-to-action.

Airtable Logging to store video name, caption, and URL.

Instagram Reels Posting via the Facebook Graph API.

Recent Change
In early 2025, Meta tightened its requirements for video_url and image_url parameters. URLs must now be direct, public links to the raw media file with no redirects or authentication. Google Drive links no longer work.

Our Fix

Store the binary file locally on the n8n server at /tmp/video.mp4.

Serve the file through a public n8n webhook with the correct Content-Type.

Use the webhook URL in the Facebook Graph API request.

Upload succeeds without the “Media download has failed” error.

Cleanup

Deletes the temporary file after posting.

Benefits

Saves time with full automation.

Improves engagement through AI-generated captions.

Keeps content organized in Airtable.

Works with Meta’s updated API requirements by hosting files directly from the n8n server.

## 📊 Basic Information

- **Workflow ID:** 5139
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 16554
- **Downloads:** 1655
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5139)

## 👤 Author

- **Name:** Iniyavan JC
- **Username:** @netwithjc

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **airtable** 
- **facebookGraphApi** (×2)
- **wait** (×3)
- **code** (×2)
- **httpRequest** (×2)
- **scheduleTrigger** 
- **stickyNote** (×6)
- **readWriteFile** (×2)
- **respondToWebhook** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
