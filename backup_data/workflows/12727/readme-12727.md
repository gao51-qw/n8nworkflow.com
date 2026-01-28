# Generate VEED AI talking head videos from sheet rows with OpenAI or ElevenLabs

> A production-ready n8n workflow that generates AI avatar videos from images and text using **VEED Fabric 1.0**, with flexible multi-platform publishing capabilities.

## Key Capabilities

### Unlimited Scale
- **Process any number of videos**: Sequential processing ensures each video is fully generated and published before moving to the next
- **Batch processing**: Add multiple video requests to Google Sheet and let the workflow process them automatically
- **No context mixing**: Each video maintains its own configuration throughout the entire pipeline

### Flexible Publishing
- **Per-video platform selection**: Each video can target different platforms (e.g., Video 1 → Instagram+YouTube, Video 2 → Telegram only)
- **Optional publishing**: Leave PLATFORMS column empty to generate videos without publishing (videos saved to Drive)
- **Supported platforms**: Instagram Reels, YouTube/Shorts, Facebook, Telegram, Threads
- **Platform-specific formatting**: Automatic optimization for each platform's requirements

### Smart Processing
- **Two TTS providers**: Choose OpenAI or ElevenLabs per video
- **Configurable quality**: Select resolution (480p/720p) and aspect ratio (9:16, 16:9, 1:1) per video
- **Approval workflow**: Review videos before publishing with email approve/reject buttons
- **Error handling**: Automatic error detection with detailed email notifications

### Status Tracking
- **Real-time status updates**: Google Sheet updates as workflow progresses (new → processing → published)
- **Detailed results**: Per-platform success/failure tracking with post URLs
- **Email reports**: Comprehensive publishing reports with links to all posted content

## How It Works
1. **Input**: Add rows to Google Sheet with video details
2. **TTS**: Generate speech using OpenAI or ElevenLabs
3. **Video**: VEED Fabric 1.0 creates talking head video
4. **Approval**: Email with video preview and approve/reject buttons
5. **Publish**: Sequential publishing to selected platforms
6. **Report**: Status update in sheet + email with results

## Requirements
- Fal.ai API Key (for VEED)
- Google OAuth (Sheets, Drive, Gmail)
- TTS: OpenAI or ElevenLabs API Key
- Social Media credentials (optional, only for platforms you use)
- Telegram Bot Token (optional, only for Telegram)

**Node:** n8n-nodes-veed
**Author:** VEED.io

## 📊 Basic Information

- **Workflow ID:** 12727
- **Complexity:** advanced
- **Node Count:** 54
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12727)

## 👤 Author

- **Name:** veed
- **Username:** @veed

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **manualTrigger** 
- **scheduleTrigger** 
- **googleSheets** (×5)
- **filter** 
- **splitInBatches** (×2)
- **set** (×11)
- **if** (×3)
- **httpRequest** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **googleDrive** (×2)
- **n8n-nodes-veed.veed** 
- **gmail** (×3)
- **splitOut** 
- **switch** 
- **wait** (×2)
- **youTube** 
- **facebookGraphApi** 
- **telegram** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 54 nodes with 46 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
