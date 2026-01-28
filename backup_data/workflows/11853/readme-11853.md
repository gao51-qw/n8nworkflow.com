# Automate S3 video transcoding, thumbnail generation & CDN distribution

> # Video Processing Pipeline with Thumbnail Generation and CDN Distribution

## Summary
Automated video processing system that monitors S3 for new uploads, generates thumbnails and preview clips, extracts metadata, transcodes to multiple formats, and distributes to CDN with webhook notifications.

## Detailed Description
A comprehensive video processing workflow that receives S3 events or manual triggers, validates video files, extracts metadata via FFprobe, generates thumbnails at key frames, creates animated GIF previews, transcodes to multiple resolutions, invalidates CDN cache, and sends completion notifications.

### Key Features
- **S3 Event Monitoring**: Automatic detection of new video uploads
- **Thumbnail Generation**: Multiple sizes at key frame intervals
- **Video Metadata**: FFprobe extraction of duration, resolution, codec info
- **Preview GIF**: Animated preview clips for video galleries
- **Multi-Format Transcoding**: Convert to 1080p, 720p, 480p
- **CDN Distribution**: Cloudflare cache invalidation and signed URLs
- **Webhook Callbacks**: Notify origin system on completion

### Use Cases
- Video hosting platforms
- Media asset management systems
- Content delivery networks
- Video streaming services
- Social media platforms
- E-learning video processing
- User-generated content platforms

### Required Credentials
- AWS S3 Credentials (for video storage)
- FFmpeg API credentials (via HTTP)
- Cloudflare API Token (for CDN)
- Slack Bot Token (for notifications)
- Google Sheets OAuth (for logging)

### Node Count: 24 (19 functional + 5 sticky notes)

### Unique Aspects
- Uses **Webhook** for S3 event notifications
- Uses **Code** nodes for S3 info extraction and URL generation
- Uses **If** node for video format validation
- Uses **HTTP Request** nodes for FFprobe, FFmpeg, and CDN APIs
- Uses **Aggregate** node for collecting parallel processing results
- Uses **Merge** nodes for multiple workflow path consolidation
- Implements **parallel processing** for thumbnails, GIF, and transcoding

### Workflow Architecture
```
[S3 Event Webhook]    [Manual Webhook]
        |                   |
        +--------+----------+
                 |
                 v
         [Merge Triggers]
                 |
                 v
         [Extract S3 Info] (Code)
                 |
                 v
         [Check Is Video] (If)
              /         \
           Yes           No
            |             |
            v             v
[Get Video Metadata]  [Invalid Response]
    (FFprobe)              |
            |              |
            v              |
[Parse Video Metadata]     |
    (Code)                 |
       /|\                 |
      / | \                |
     v  v  v               |
[Thumbs][GIF][Transcode]   |
     \  |  /               |
      \ | /                |
       v v                 |
[Aggregate Results]        |
         |                 |
         v                 |
[Invalidate CDN Cache]     |
         |                 |
         v                 |
[Generate Signed URLs]     |
        / \                |
       /   \               |
      v     v              |
[Log Sheet] [Slack]        |
      \   /                |
       \ /                 |
        v                  |
[Merge Output Paths]       |
         |                 |
         +---------+-------+
                   |
                   v
         [Merge All Paths]
                   |
                   v
         [Respond to Webhook]
```

### Configuration Guide
1. **S3 Event**: Configure S3 bucket notification to send events to webhook
2. **FFmpeg API**: Use a hosted FFmpeg service (e.g., api.ffmpeg-service.com)
3. **Cloudflare**: Set zone ID and API token for cache invalidation
4. **Slack Channel**: Set `#video-processing` for notifications
5. **Google Sheets**: Connect for processing metrics logging

### Supported Video Formats
| Extension | MIME Type |
|-----------|----------|
| .mp4 | video/mp4 |
| .mov | video/quicktime |
| .avi | video/x-msvideo |
| .mkv | video/x-matroska |
| .webm | video/webm |
| .m4v | video/x-m4v |

### Thumbnail Generation
| Size | Dimensions | Suffix |
|------|------------|--------|
| Large | 1280x720 | _large |
| Medium | 640x360 | _medium |
| Small | 320x180 | _small |

Thumbnails generated at: 10%, 30%, 50%, 70%, 90% of video duration

### Transcoding Presets
| Preset | Resolution | Bitrate | Codec |
|--------|------------|---------|-------|
| 1080p | 1920x1080 | 5000k | H.264 |
| 720p | 1280x720 | 2500k | H.264 |
| 480p | 854x480 | 1000k | H.264 |

### Output Structure
```json
{
  "job_id": "job_1705312000_abc123",
  "status": "completed",
  "original": {
    "filename": "video.mp4",
    "resolution": "1920x1080",
    "duration": "00:05:30"
  },
  "thumbnails": {
    "large": "https://cdn/thumbnails/job_id/thumb_0_large.jpg",
    "medium": "https://cdn/thumbnails/job_id/thumb_0_medium.jpg",
    "small": "https://cdn/thumbnails/job_id/thumb_0_small.jpg"
  },
  "preview_gif": "https://cdn/previews/job_id/preview.gif",
  "transcoded": {
    "1080p": "https://cdn/transcoded/job_id/video_1080p.mp4",
    "720p": "https://cdn/transcoded/job_id/video_720p.mp4",
    "480p": "https://cdn/transcoded/job_id/video_480p.mp4"
  }
}
```

## 📊 Basic Information

- **Workflow ID:** 11853
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 24
- **Downloads:** 2
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11853)

## 👤 Author

- **Name:** Tomoki
- **Username:** @tomoki

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **webhook** (×2)
- **merge** (×3)
- **code** (×3)
- **if** 
- **set** 
- **httpRequest** (×5)
- **aggregate** 
- **googleSheets** 
- **slack** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
