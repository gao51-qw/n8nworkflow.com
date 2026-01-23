# Create & publish inspirational videos with FFmpeg, Google Drive & YouTube

> Auto Video Merge & Social Upload Automation
An end-to-end workflow for generating, merging, and publishing short-form inspirational videos across YouTube, TikTok, Instagram, Threads, X, and Facebook.
📌 Overview:

This workflow automates the entire video production and publishing pipeline. It takes random quotes, background videos, and background music from Google Sheets & Google Drive, merges them into a final video using an API, uploads the output to multiple social platforms, and updates the content tracking sheet automatically.

Perfect for creators who publish motivational or short-form content daily.

🚀 Key Features
1. Trigger Options

Manual Trigger – Generate videos anytime.

Scheduled Trigger – Auto-generate videos every 5 minutes or at your preferred interval.

2. Source Data Collection

The workflow retrieves content from Google Sheets & Google Drive:

Quotes – From Quotes_status sheet

Background Videos – From a Google Drive folder

Background Music – From a Google Drive folder

Each item is appended back into Sheets for status tracking.

Nodes used:

Retrieve Quote Data

List Video Background Files

List Music Background Files

Retrieve Video Background Data

Retrieve Music Background Data

3. Random Content Selection

A Code node selects one random:

Quote

Video background

Music track

This ensures each final output video is unique.

Node:

Select Random Video, Music & Quote

4. Video Generation & Merging

The workflow sends selected video + music URLs to an FFmpeg merge API:

Initiates the video merge

Continuously polls the status API until the job finishes

Downloads the merged MP4 file

Saves the final video locally (video1.mp4)

Nodes:

upload and gen video

check status

If

Wait

download video

Save Final Video

5. Optional: Upload to TikTok / Instagram / X / Threads

Disabled by default but preconfigured for:

TikTok

Instagram

X (Twitter)

Threads

These nodes use upload-post.com API for multi-platform posting.

Nodes (disabled):

Upload Video and Description to Tiktok

Upload Video to Instagram

Upload Video to X

Upload Video to Threads

Each platform’s upload result is written back into Google Sheets:

TiktokURL

InsURL

XURL

ThreadsURL

6. Upload to YouTube (Enabled)

The merged video is published to YouTube via the YouTube OAuth2 node.

Generates title using filename

Uses the quote as a description

Uploads as a public YouTube Short

Node:

Upload to YouTube1

After uploading, the YouTube link is saved into the Google Sheet.

7. Google Sheets Status Update

Once the workflow finishes uploading:

Updates the row associated with the selected quote

Mark status as DONE

Stores YouTube / TikTok / Instagram / X / FB URL

Nodes:

Tiktok Update Quote Upload Status

Update Instagram status

Update X status

Update FB status

8. File Upload to Google Drive

The final MP4 is also stored back into a designated Google Drive folder.

Node:

Upload file

9. Telegram Notifications

The workflow sends Telegram messages to notify:

Merge status

YouTube Upload ID

Nodes:

Send a text message


📁 Files Used

Workflow JSON: /mnt/data/Video merge and upload Youtube.json

🧩 Ideal Use Cases

Motivational video channels

TikTok/Reels/Shorts content farms

Automated inspirational quote pages

Multi-platform social media distribution

Zero-touch daily video generation

🌟 Summary

This n8n workflow is a complete video-automation system. It builds an original video using randomized components, merges it through an external API, publishes it across multiple social platforms, and updates your content tracking sheet—all without manual effort.

## 📊 Basic Information

- **Workflow ID:** 11591
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 131
- **Downloads:** 13
- **Created:** 2025/12/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11591)

## 👤 Author

- **Name:** DuyTran
- **Username:** @duytran82

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×7)
- **googleDrive** (×4)
- **set** (×2)
- **merge** 
- **code** 
- **readWriteFile** (×2)
- **if** (×2)
- **httpRequest** (×8)
- **wait** 
- **scheduleTrigger** 
- **telegram** (×2)
- **stickyNote** (×8)
- **youTube** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
