# Extract YouTube transcripts via Google Sheets or API webhook

> # YouTube Transcript Extractor

This n8n template demonstrates how to extract transcripts from YouTube videos using two different approaches: automated Google Sheets monitoring and direct webhook API calls.

**Use cases:** Content creation, research, accessibility, meeting notes, content repurposing, SEO analysis, or building transcript databases for analysis.

## How it works
- **Google Sheets Integration:** Monitor a sheet for new YouTube URLs and automatically extract transcripts
- **Direct API Access:** Send YouTube URLs via webhook and get instant transcript responses
- **Smart Parsing:** Extracts video ID from various YouTube URL formats (youtube.com, youtu.be, embed)
- **Rich Metadata:** Returns video title, channel, publish date, duration, and category alongside transcript
- **Fallback Handling:** Gracefully handles videos without available transcripts

## Two Workflow Paths
1. **Automated Sheet Processing:** Add URLs to Google Sheet → Auto-extract → Save results to sheet
2. **Webhook API:** Send POST request with video URL → Get instant transcript response

## How to set up
1. Replace "Dummy YouTube Transcript API" credentials with your YouTube Transcript API key
2. Create your own Google Sheet with columns: "url" (input sheet) and "video title", "transcript" (results sheet)
3. Update Google Sheets credentials to connect your sheets
4. Test each workflow path separately
5. Customize the webhook path and authentication as needed

## Requirements
- YouTube Transcript API access (youtube-transcript.io or similar)
- Google Sheets API credentials (for automated workflow)
- n8n instance (cloud or self-hosted)
- YouTube videos 

## How to customize
- Modify transcript processing in the Code nodes
- Add additional metadata extraction
- Connect to other storage solutions (databases, CMS)
- Add text analysis or summarization steps
- Set up notifications for new transcripts

## 📊 Basic Information

- **Workflow ID:** 8211
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1108
- **Downloads:** 110
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8211)

## 👤 Author

- **Name:** Dahiana
- **Username:** @mssporto

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×3)
- **googleSheetsTrigger** 
- **code** (×4)
- **httpRequest** (×2)
- **googleSheets** 
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
