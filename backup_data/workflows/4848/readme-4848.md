# Automated music video creation & YouTube publishing with AI-generated metadata from Google Drive

> **The Problem That it Solves**

Uploading music manually to YouTube is a chore. Renaming files, filling metadata, picking the right playlist, adding keywords, and scheduling the release can eat up your creative time. This workflow removes the busy work so you can focus on making tracks instead of managing uploads.

**How it works**
Drop an MP3 into your shared Google Drive “Audio” folder and walk away. The workflow detects the new file, grabs the genre from the filename based on a set of keywords, uses the genre to map to cover art styles, and YouTube playlists, generates the description and tags for YouTube metadata, and schedules and posts to YouTube channel, while sending messages to discord for updates.



## 📊 Basic Information

- **Workflow ID:** 4848
- **Complexity:** advanced
- **Node Count:** 73
- **Views:** 1038
- **Downloads:** 103
- **Created:** 2025/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4848)

## 👤 Author

- **Name:** danejw
- **Username:** @danejw

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×5)
- **googleDrive** (×8)
- **httpRequest** 
- **youTube** (×6)
- **googleSheets** (×2)
- **dateTime** (×4)
- **if** (×3)
- **code** (×5)
- **sort** 
- **limit** 
- **discord** (×7)
- **executionData** (×11)
- **switch** (×2)
- **set** (×8)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 73 nodes with 49 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
