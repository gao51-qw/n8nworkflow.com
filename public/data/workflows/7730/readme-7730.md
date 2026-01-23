# Auto-caption videos for Instagram/TikTok with Google Drive and Submagic

> 🎥 Auto-Caption Videos for Instagram with Google Drive + Submagic

Description
Save hours on video editing with this workflow! Whenever you upload a video to a specific Google Drive folder, it’s automatically sent to Submagic to generate engaging captions (using your chosen template). Once the captioned video is ready, it’s pulled back, downloaded, and uploaded into your Google Drive—fully captioned and Instagram-ready.

Watch build along videos for workflows like these on: www.youtube.com/@automatewithmarc

How It Works

Google Drive Trigger – Listens for new video uploads in your chosen folder.

Post to Submagic – Sends the video URL to Submagic’s API with your caption style (e.g. Hormozi).

Wait Loop + Status Check – Polls Submagic until the captioning job is complete.

Download Captioned Video – Retrieves the finished captioned video file.

Upload to Google Drive – Saves the captioned version back into Drive, ready for Instagram posting.

Why You’ll Love It

🎯 Zero manual steps — captioning happens automatically.

⚡ Faster IG content pipeline — ready-to-post reels in minutes.

🎨 Consistent style — apply your favorite Submagic caption templates every time.

☁️ Cloud-first — works entirely with Google Drive + Submagic, no local processing needed.

Requirements

Google Drive account (with OAuth credentials)

Submagic API key

n8n (Cloud or self-hosted)

## 📊 Basic Information

- **Workflow ID:** 7730
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 433
- **Downloads:** 43
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7730)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **wait** (×2)
- **httpRequest** (×3)
- **stickyNote** (×6)
- **if** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
