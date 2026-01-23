# YouTube video summary to Discord with GPT-4o, Slack approval, and Google Sheets

> 
## Workflow Overview
This advanced n8n automation is a sophisticated content intelligence tool that transforms YouTube video discovery into a seamless, multi-platform content distribution system. By leveraging RSS, AI, and multiple communication platforms, this workflow:

1. **Discovers New Content**: 
   - Monitors YouTube channels via RSS feed
   - Captures new video uploads automatically
   - Extracts critical video metadata

2. **Generates Intelligent Summaries**:
   - Leverages OpenAI's GPT models to analyze video descriptions
   - Creates concise, engaging video summaries
   - Ensures high-quality, contextually accurate content

3. **Collaborative Approval Process**:
   - Sends summaries to Slack for human review
   - Allows team members to approve or reject content
   - Maintains rigorous quality control

4. **Multi-Platform Distribution**:
   - Logs summaries in Google Sheets for internal tracking
   - Posts approved summaries to Discord
   - Extends content reach with minimal manual effort

## Key Benefits
- 🤖 **Full Automation**: From video upload to Discord post
- 💡 **Smart Summarization**: AI-powered content distillation
- 🔍 **Human Oversight**: Slack approval ensures quality
- 📊 **Comprehensive Tracking**: Google Sheets documentation
- 🌐 **Multi-Platform Sharing**: Seamless content distribution

## Workflow Architecture

### 🔹 Stage 1: Content Discovery
- **RSS Trigger**: Monitors YouTube channel for new videos
- **Metadata Extraction**: Parses video URLs and IDs
- **YouTube API Integration**: Retrieves detailed video information

### 🔹 Stage 2: AI-Powered Summarization
- **GPT Model**: Generates concise, relevant summaries
- **Contextual Understanding**: Analyzes video descriptions
- **Adaptive Summarization**: Handles various content types

### 🔹 Stage 3: Collaborative Approval
- **Slack Notification**: Sends summary for human review
- **Interactive Approval**: Team can approve or reject content
- **Quality Control Mechanism**: Prevents inappropriate or low-quality posts

### 🔹 Stage 4: Multi-Platform Distribution
- **Google Sheets Logging**: Maintains comprehensive content archive
- **Discord Posting**: Shares approved summaries with wider audience

## Potential Use Cases
- Content Creators tracking channel performance
- Marketing teams automating content distribution
- Social media managers expanding online presence
- Community managers engaging across platforms
- Researchers monitoring specific YouTube channels

## Setup Requirements
1. **YouTube Data API Credentials**
   - Google Cloud API key
   - Channel RSS feed URL

2. **OpenAI API Access**
   - OpenAI account
   - API key for GPT model
   - Preferred GPT model (GPT-4o, GPT-3.5)

3. **Slack Workspace**
   - Slack app with appropriate permissions
   - Designated approval channel

4. **Discord Server**
   - Discord application credentials
   - Target channel for posting summaries

5. **n8n Installation**
   - n8n platform (cloud or self-hosted)
   - Import workflow configuration
   - Configure API credentials

## Future Enhancements
- Multi-channel support
- Advanced filtering mechanisms
- Sentiment analysis integration
- Expanded platform distribution
- Customizable summarization parameters

## Technical Considerations
- Implement robust error handling
- Use exponential backoff for API calls
- Ensure secure credential management
- Maintain flexible parsing strategies

## Ethical Guidelines
- Respect content creator's intellectual property
- Provide proper attribution
- Ensure summaries add value
- Maintain transparency in content distribution

## Connect With Me

**Want to revolutionize your content workflow?**

📧 **Email**: Yaron@nofluff.online

🎥 **YouTube**: [@YaronBeen](https://www.youtube.com/@YaronBeen/videos)

💼 **LinkedIn**: [Yaron Been](https://www.linkedin.com/in/yaronbeen/)

**Transform your content strategy with intelligent, automated workflows!**

## 📊 Basic Information

- **Workflow ID:** 4584
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1314
- **Downloads:** 131
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4584)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **rssFeedReadTrigger** 
- **code** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** 
- **stickyNote** (×7)
- **slack** 
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
