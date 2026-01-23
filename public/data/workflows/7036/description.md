# Automated YouTube Shorts Creator with yt-dlp & FFmpeg

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