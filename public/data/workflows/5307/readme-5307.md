# Ai audio transcription & Google Docs report generator with VLM run

> **Automatically transform audio files into professional transcription reports with AI-powered speech recognition, timestamp generation, and formatted Google Docs output.**

## What this workflow does
1. **Monitors Gmail** for incoming audio attachments
2. **Downloads and processes** audio files using VLM Run AI transcription
3. **Generates accurate transcriptions** with precise timestamps and segmentation
4. **Creates professional reports** in Google Docs with formatted output
5. **Handles asynchronous processing** for long audio files without timeouts

## Setup
**Prerequisites:** Gmail account, VLM Run API credentials, Google Docs access, n8n.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**
1. Configure Gmail OAuth2 for email monitoring
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard) for audio transcription
3. Set up Google Docs OAuth2 for report generation
4. Create target Google Doc for transcription reports
5. Update document URL in workflow nodes
6. Test with sample audio file and activate

## Perfect for
- Meeting recordings and conference calls
- Voice memos and dictation workflows
- Interview transcriptions and journalism
- Podcast episode documentation
- Accessibility compliance and documentation
- Legal proceedings and court recordings
- Educational content and lecture notes
- Customer service call analysis

## Key Benefits
- **Human-level accuracy** - Advanced AI speech recognition with automatic punctuation
- **Timestamp precision** - Segmented transcriptions with exact time markers
- **Multi-format support** - Handles MP3, WAV, M4A, AAC, OGG, FLAC files
- **Asynchronous processing** - No timeouts for long audio files
- **Professional formatting** - Beautifully structured Google Docs reports
- **Automatic workflow** - Zero manual intervention required
- **Saves hours per recording** - Transforms manual transcription into instant results
- **Searchable documentation** - Google Docs integration enables easy content discovery

## How to customize
**Extend by adding:**
* Speaker identification and diarization
* Integration with project management tools (Notion, Asana, Trello)
* Automatic summary generation from transcripts
* Translation to multiple languages
* Slack notifications for completed transcriptions
* Integration with CRM systems for call logging
* Audio quality enhancement preprocessing
* Custom formatting templates for different use cases
* Automatic keyword extraction and tagging
* Integration with calendar systems for meeting context

This workflow revolutionizes audio documentation by combining cutting-edge AI transcription with professional report generation, making spoken content instantly accessible, searchable, and shareable across your organization.

## 📊 Basic Information

- **Workflow ID:** 5307
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1046
- **Downloads:** 104
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5307)

## 👤 Author

- **Name:** Shahrear
- **Username:** @shahrear

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **gmailTrigger** 
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **webhook** 
- **googleDocs** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
