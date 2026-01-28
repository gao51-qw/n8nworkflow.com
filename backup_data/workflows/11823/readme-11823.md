# Extract video metadata & auto-upload to YouTube with GPT-4o SEO optimization

> # Video Metadata Extraction & YouTube Auto-Upload with AI

Automatically process video files, extract metadata, generate AI-optimized titles/descriptions/tags, and upload directly to YouTube with proper categorization and thumbnail handling.

## Key Features

- **YouTube Node Integration**: Direct video upload to YouTube with full metadata
- **Binary Data Handling**: Proper video and thumbnail binary processing
- **AI-Powered SEO Optimization**: Generates engaging titles, descriptions, and tags
- **Video Metadata Extraction**: Analyzes video properties (duration, resolution, codec)
- **Thumbnail Processing**: Extracts or uploads custom thumbnails
- **Category Auto-Selection**: AI determines optimal YouTube category

## How It Works

1. **Video Intake**: Receives video file via webhook or cloud storage trigger
2. **Metadata Extraction**: Analyzes video file for technical properties
3. **AI Content Generation**: Creates SEO-optimized title, description, and tags
4. **Thumbnail Processing**: Extracts frame or uses provided thumbnail
5. **YouTube Upload**: Uploads video with all metadata
6. **Post-Upload Processing**: Retrieves video ID, creates playlist entry
7. **Notification**: Sends confirmation with video URL

## Required Credentials

- YouTube OAuth2 (for video upload)
- OpenAI API (for AI metadata generation)
- Google Drive or Dropbox (optional, for cloud storage triggers)
- Gmail (for notifications)
- Google Sheets (for tracking)

## Unique Features

- Uses **YouTube node** for direct video upload (rarely used in templates)
- **Binary data manipulation** for video and thumbnail handling
- **AI-generated SEO metadata** optimized for YouTube algorithm
- **Category detection** using AI classification
- **Merge node** with chooseBranch for conditional flows

## Example Request

```json
{
  "videoFile": "&lt;binary data&gt;",
  "projectName": "Product Demo 2024",
  "targetAudience": "developers",
  "language": "en",
  "thumbnailFile": "&lt;binary data&gt;",
  "playlistId": "PLxxxxxxxx",
  "publishTime": "2024-01-15T14:00:00Z"
}
```

## Supported Video Formats

- MP4, MOV, AVI, MKV, WebM
- Maximum file size: 128GB (YouTube limit)
- Recommended: MP4 with H.264 codec

## Output

```json
{
  "videoId": "dQw4w9WgXcQ",
  "videoUrl": "https://youtu.be/dQw4w9WgXcQ",
  "title": "AI-Generated Title",
  "description": "SEO-optimized description...",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "Science & Technology",
  "uploadStatus": "processed",
  "thumbnailUrl": "https://i.ytimg.com/vi/..."
}
```


## 📊 Basic Information

- **Workflow ID:** 11823
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 89
- **Downloads:** 8
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11823)

## 👤 Author

- **Name:** masahiro hanawa
- **Username:** @masahiro

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **webhook** 
- **set** (×3)
- **if** (×3)
- **code** (×5)
- **respondToWebhook** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **merge** (×2)
- **youTube** (×2)
- **googleSheets** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
