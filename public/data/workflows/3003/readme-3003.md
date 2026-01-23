# Monitor favorite YouTube channels through RSS feeds and receive notifications

> This workflow creates an automated system for monitoring and receiving notifications about new videos from your favorite YouTube channels through RSS feeds, with customizable email and Telegram notifications.

## 🌟 Key Features
**📡 RSS Feed Management**
- Accepts custom YouTube channel IDs or uses default channels
- Automatically creates RSS feeds for each YouTube channel
- Monitors channels for new video uploads
- Labels and filters recent videos within a 3-day window (change this as required)


**📨 Multi-Channel Notification System**
- Sends Telegram notifications with video thumbnails and links
- Delivers customized email notifications in two formats:
  - Individual emails for each new video
  - Single digest email containing all new videos


**⚙️ Content Processing**
- Fetches detailed video information using YouTube API
- Creates responsive HTML email templates with video previews
- Includes video thumbnails, titles, descriptions, and direct links
- Maintains professional formatting across different email clients


## 🛠️ Setup Requirements
**🔑 API Configuration**
- YouTube Data API credentials
- Gmail account for sending notifications
- Telegram bot token and chat ID
- OpenAI API key for content processing


**📋 Channel Management**
- Add YouTube channel IDs through form input
- Configure default channel list
- Set notification preferences
- Adjust monitoring schedule


This workflow is perfect for content creators, marketers, or anyone wanting to stay updated with their favorite YouTube channels through automated, professionally formatted notifications delivered via email and Telegram.

## 📊 Basic Information

- **Workflow ID:** 3003
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 4765
- **Downloads:** 476
- **Created:** 2025/2/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3003)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×9)
- **code** (×2)
- **httpRequest** 
- **stickyNote** (×12)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **merge** 
- **rssFeedRead** (×2)
- **filter** 
- **aggregate** 
- **splitOut** (×2)
- **scheduleTrigger** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **telegram** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
