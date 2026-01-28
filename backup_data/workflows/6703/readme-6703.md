# Video transcription automation with VLM Run, Google Drive and Docs

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## What this workflow does
1. **Monitors Google Drive** for new video file uploads
2. **Downloads and processes** videos using VLM Run AI transcription
3. **Generates accurate transcripts** with timestamps, audio content, and video descriptions  
4. **Saves formatted reports** to Google Docs for instant access and sharing

## Setup
**Prerequisites:** Google Drive account, VLM Run API credentials, Google Docs access, self-hosted n8n.
You need to install [VLM Run community node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun)

**Quick Setup:**
1. Configure Google Drive OAuth2 and create video upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard)
3. Set up Google Docs integration for transcript storage
4. Update folder/document IDs in workflow nodes
5. Test with sample video files and activate

## Perfect for
- Meeting transcription and documentation
- Content creation and video accessibility
- Educational content processing and analysis
- Interview transcription and note-taking
- Podcast and webinar documentation
- Legal deposition and testimony recording
- Customer support call analysis

## Key Benefits
- **Asynchronous processing** handles large video files without timeouts
- **Multi-format support** for MP4, AVI, MOV, WebM, MKV formats
- **Dual content extraction** captures both audio transcripts and video descriptions
- **Eliminates manual transcription** saving hours of documentation time
- **High accuracy speech recognition** with multi-language support
- **Structured output** with timestamps and scene descriptions

## How to customize
**Extend by adding:**
* Speaker identification and voice separation
* Sentiment analysis and keyword extraction
* Integration with project management tools
* Email notifications for transcription completion
* Summary generation and key point extraction
* Multi-language translation capabilities
* Search indexing for transcript databases
* Integration with video editing software

This workflow transforms manual video transcription into an automated, accurate, and efficient process, making video content accessible and searchable for your business operations, educational needs, or content creation workflows.

## 📊 Basic Information

- **Workflow ID:** 6703
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 655
- **Downloads:** 65
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6703)

## 👤 Author

- **Name:** Mirajul Mohin
- **Username:** @mohinmirajul

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **googleDriveTrigger** 
- **webhook** 
- **googleDrive** 
- **googleDocs** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
