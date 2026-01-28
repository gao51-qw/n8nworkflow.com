# ⚡AI-powered YouTube video summarization & analysis

> -- Disclaimer: This workflow uses a community node and therefore only works for self-hosted n8n users --

![image.png](fileId:962)

Transform YouTube videos into comprehensive summaries and structured analysis instantly. This n8n workflow automatically extracts, processes, and analyzes video transcripts to deliver clear, organized insights without watching the entire video.

**Time-Saving Features**
🚀 Instant Processing
Simply provide a YouTube URL and receive a structured summary within seconds, eliminating the need to watch lengthy videos. Perfect for research, learning, or content analysis.

🤖 AI-Powered Analysis
Leverages GPT-4o-mini to analyze video transcripts, organizing key concepts and insights into a clear, hierarchical structure with main topics and essential points.

**Smart Processing Pipeline**
📝 Automated Transcript Extraction
- Supports public YouTube video
- Handles multiple URL formats
- Extracts complete video transcripts automatically

🧠 Intelligent Content Organization
- Breaks down content into main topics
- Highlights key concepts and terminology
- Maintains technical accuracy while improving clarity
- Structures information logically with markdown formatting

**Perfect For**
📚 Researchers & Students
Quick comprehension of educational content and lectures without watching entire videos.

💼 Business Professionals
Efficient analysis of industry talks, presentations, and training materials.

🎯 Content Creators
Rapid research and competitive analysis of video content in your niche.

**Technical Implementation**
🔄 Workflow Components
- Webhook endpoint for URL submission
- YouTube API integration for video details
- Transcript extraction system
- GPT-4 powered analysis engine
- Telegram notification system (optional)

Transform your video content consumption with an intelligent system that delivers structured, comprehensive summaries while saving hours of viewing time.

## 📊 Basic Information

- **Workflow ID:** 2679
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 105922
- **Downloads:** 10592
- **Created:** 2024/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2679)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **n8n-nodes-youtube-transcription.youtubeTranscripter** 
- **splitOut** 
- **respondToWebhook** 
- **telegram** 
- **set** (×2)
- **code** 
- **youTube** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **summarize** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
