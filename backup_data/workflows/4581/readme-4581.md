# YouTube video summaries with GPT-4o, Slack approvals & Reddit posting

> # 🚀 AI-Powered YouTube Video Summary Distributor: From Channel to Community!

## Workflow Overview
This sophisticated n8n automation transforms YouTube content discovery into a seamless, multi-platform intelligence sharing process. By intelligently connecting YouTube RSS, AI summarization, and content distribution platforms, the workflow:

1. **Discovers New Content**:
   - Monitors YouTube channels via RSS feed
   - Captures latest video uploads
   - Tracks content in real-time

2. **AI-Powered Summarization**:
   - Extracts video metadata
   - Generates concise, meaningful summaries
   - Leverages GPT-4o for intelligent content analysis

3. **Intelligent Distribution**:
   - Logs summaries in Google Sheets
   - Sends summaries to Slack for review
   - Publishes approved content to Reddit

## Detailed Setup Instructions

### 1. YouTube Data API Configuration
#### Prerequisites
- Google Cloud Console account
- Enabled YouTube Data API v3

#### Setup Steps:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Store API key securely in n8n credentials
6. Obtain channel RSS feed URL

### 2. OpenAI API Setup
#### Prerequisites
- OpenAI account
- Active API subscription

#### Configuration:
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Generate API key
3. Select GPT-4o model
4. Configure API key in n8n credentials
5. Set up billing and usage limits

### 3. Slack Integration
#### Prerequisites
- Slack workspace
- Slack app permissions

#### Setup Process:
1. Create a Slack app in your workspace
2. Configure OAuth scopes for sending messages
3. Install app to workspace
4. Obtain webhook or OAuth token
5. Configure in n8n Slack node

### 4. Reddit API Configuration
#### Prerequisites
- Reddit account
- Reddit application created

#### Steps:
1. Go to Reddit's app preferences
2. Create a new application
3. Obtain client ID and secret
4. Configure OAuth2 credentials in n8n
5. Select target subreddit

## Workflow Customization

### Channel Modification
- Replace YouTube RSS feed URL in trigger node
- Adjust `channel_id` parameter
- Modify extraction logic if needed

### Subreddit Customization
- Change `subreddit` parameter in Reddit node
- Adjust title and text formatting

### AI Summarization Tuning
- Modify system message in Summarizer Agent
- Adjust prompt for different content types
- Implement custom filtering

## Key Customization Points
- Modify RSS feed URL
- Change target subreddit
- Adjust AI summarization prompt
- Add custom filtering logic
- Implement multi-channel support

## Technical Requirements
- n8n v0.220.0 or higher
- YouTube Data API v3
- OpenAI API access
- Slack workspace
- Reddit application
- Stable internet connection

## Potential Use Cases
- Content creator content tracking
- Research and trend analysis
- Social media content distribution
- Automated content curation
- Community engagement

## Security Considerations
- Use environment variables for API keys
- Implement proper OAuth2 authentication
- Respect platform usage guidelines
- Maintain user privacy

## Future Enhancement Roadmap
- Multi-language support
- Advanced content filtering
- Sentiment analysis integration
- Expanded platform distribution
- Customizable summarization parameters

## Workflow Visualization

```plaintext
[YouTube RSS Trigger]
    ⬇️
[Extract Channel ID]
    ⬇️
[Fetch Video Details]
    ⬇️
[AI Summarization]
    ⬇️
[Google Sheets Logging]
    ⬇️
[Slack Approval]
    ⬇️
[Reddit Publishing]
```

## Hashtag Performance Boost 🚀
#YouTubeAutomation #AIContentDistribution #WorkflowInnovation #ContentCuration #AIMarketing #DigitalMediaTech #AutomatedSummaries #CrossPlatformContent

## Connect With Me
**Ready to revolutionize your content workflow?**

📧 **Email**: Yaron@nofluff.online
🎥 **YouTube**: [@YaronBeen](https://www.youtube.com/@YaronBeen/videos)
💼 **LinkedIn**: [Yaron Been](https://www.linkedin.com/in/yaronbeen/)

**Transform your content strategy with intelligent, automated workflows!**

---

*Note: Always test and customize the workflow to fit your specific use case and comply with platform guidelines.*

## 📊 Basic Information

- **Workflow ID:** 4581
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 789
- **Downloads:** 78
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4581)

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
- **reddit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
