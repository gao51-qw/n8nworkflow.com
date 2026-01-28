# Automated YouTube shorts creator with yt-dlp & FFmpeg

> # Automated YouTube Shorts Creator with yt-dlp & FFmpeg

## Description
### How It Works
• Downloads videos/music from YouTube using yt-dlp
• Merges assets with dynamic text overlays
• Automatically uploads to YouTube as Shorts (9:16 format)
• Tracks everything in Google Sheets

### Set Up Steps (~10 minutes)

- Install yt-dlp and FFmpeg in your n8n environment
- Connect Google Sheets (for video/music pools)
- Set up YouTube OAuth credentials
- Configure text overlay font (NotoSerif included)


### Key Features
#### Dual Pipeline System
- Video Downloader (MP4) + Music Downloader (MP3 with thumbnails)
- Random pairing for endless combinations

#### Professional Text Overlays
- Dynamic line wrapping for perfect 9:16 formatting
- Customizable fonts/colors

#### YouTube API Integration
- Automatic upload with metadata (titles/descriptions)
- Privacy/license controls

#### Google Sheets Tracking
- Logs download paths, YouTube URLs, timestamps
- Prevents duplicate processing

## 📊 Basic Information

- **Workflow ID:** 7036
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 5138
- **Downloads:** 513
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7036)

## 👤 Author

- **Name:** MANISH KUMAR
- **Username:** @manipritraj

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×8)
- **limit** (×3)
- **set** (×4)
- **executeCommand** (×4)
- **scheduleTrigger** (×2)
- **stickyNote** (×3)
- **aggregate** (×2)
- **code** 
- **readWriteFile** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
