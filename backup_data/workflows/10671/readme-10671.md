# AI Telegram-to-WordPress publishing with GPT-4 & media handling

> ## AI-powered automation that rewrites, enhances, and publishes Telegram RSS content directly to your WordPress news site, including image/video upload and category mapping.

### Who’s it for
This workflow is designed for content creators, news publishers, and social media managers who share updates on Telegram and want to automatically republish them as formatted articles on WordPress. It’s ideal for news portals, agencies, or blogs that manage content across multiple channels.

### Features
- Multi-Channel Telegram RSS Monitoring
- Automatic Category Assignment
- Duplicate Prevention System (GUID Matching)
- Media Download + Type Detection (Image / Video)
- Full AI Article Rewriting (GPT-4O)
-- Stage 1: Full rewrite with structure
-- Stage 2: Context enhancement
- Media Handling Logic
- WordPress Publish


### How it works / What it does
- Fetches new posts from a Telegram channel feed (via RSS).
- Uses OpenAI to rewrite the text into a polished news-style article.
- Detects whether the content includes images or videos and downloads them.
- Uploads the media to WordPress and links it to the post.
- Automatically publishes the formatted article to WordPress with the correct category and excerpt.

### Set up steps

- Setup takes around 10–15 minutes.
- You’ll need API keys for OpenAI and WordPress Application Passwords.
- Add your Telegram RSS feed URL and WordPress site URL in the relevant nodes.
- (Optional) Adjust tone or rewrite style in the OpenAI node and category mapping in the Switch node.
- All configuration details are included in sticky notes inside the workflow.


### Requirements

- WordPress site with REST API access and Application Password
- OpenAI API key
- Telegram channels RSS URL

### How to customize the workflow
You can easily adjust the writing style in the OpenAI node, change categories in the Switch node, or schedule how often the workflow checks Telegram for new posts.




## 📊 Basic Information

- **Workflow ID:** 10671
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 65
- **Downloads:** 6
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10671)

## 👤 Author

- **Name:** Alexandru Burca
- **Username:** @alex13

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **set** (×18)
- **merge** (×4)
- **splitInBatches** 
- **if** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **httpRequest** (×5)
- **switch** 
- **rssFeedReadTrigger** (×6)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
