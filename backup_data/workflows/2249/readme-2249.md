# Share YouTube videos with AI summaries on Discord

> Boost engagement on your Discord server by automatically sharing new YouTube videos along with AI generated summaries of their content. This workflow is ideal for content creators and community managers looking to provide value and spark interest through summarized content, making it easier for community members to decide if a video is of interest to them. [Watch this video tutorial](https://mrc.fm/ai2d) to learn more about the template.

## How it works

- **RSS Feed Trigger**: Monitors your YouTube channel for new uploads using the RSS feed.
- **Video Captions Retrieval**: Fetches video captions using the YouTube API to get detailed content data.
- **AI Summary Generation**: Uses an AI model to generate concise summaries from the video captions, highlighting key points.
- **Discord Notification**: Posts video announcements along with their AI generated summaries to a specified Discord channel using a webhook.

## Set up steps

1. **Configure YouTube RSS Feed**: Set up the RSS feed node to detect new video uploads. Add your [YouTube channel ID](https://www.youtube.com/account_advanced) to the URL in the first node: `https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID`.
2. **Connect OpenAI Account**: To enable AI summary generation, connect your OpenAI account in n8n.
3. **Set Up Discord Webhook**: Create a webhook in your Discord server and configure it in the Discord node.
4. **Design the Message**: Format the Discord message as you like to include the video title, link, and the AI generated summary.

## Example

![discordpost.png](fileId:791)

This template empowers you to maintain a highly engaging Discord community, ensuring members receive not only regular updates but also valuable insights into each video's content without needing to watch immediately.

## 📊 Basic Information

- **Workflow ID:** 2249
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 10126
- **Downloads:** 1012
- **Created:** 2024/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2249)

## 👤 Author

- **Name:** Mike Russell
- **Username:** @mikerussell

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **rssFeedReadTrigger** 
- **httpRequest** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **discord** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
