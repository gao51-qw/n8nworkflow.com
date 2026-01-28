# Create professional LinkedIn posts from Telegram messages using OpenAI text & image

> # Create LinkedIn Post from Telegram Voice or Text Message with AI Image

## Who's it for

This workflow is perfect for busy professionals, content creators, and marketers who want to publish polished LinkedIn posts without spending time on formatting or design. Send a quick text or voice message via Telegram, and get a fully formatted LinkedIn post with a relevant AI-generated image, post it immediately on LinkedIn.

**Example use cases:**
- Entrepreneurs sharing business insights on the go without opening LinkedIn
- Marketers creating consistent content during commutes or between meetings
- Thought leaders turning quick voice notes into professional posts with visuals

## How it works / What it does

- Receive text or voice messages through a Telegram bot.
- Transcribe voice messages using OpenAI's audio transcription.
- Transform raw input into a professional LinkedIn post using AI formatting (proper structure, tone, and character limits).
- Generate a relevant image prompt based on post content.
- Create an AI image that matches the post topic.
- Automatically publish the complete post (text + image) to LinkedIn.

## How to set up

1. Create a Telegram bot via @BotFather and obtain your API token.
2. **For self-hosted n8n users:** Create a LinkedIn app at [developer.linkedin.com](https://developer.linkedin.com) to get OAuth credentials (Client ID and Client Secret).
3. Add the OpenAI API key, LinkedIn OAuth credentials, and Telegram API to n8n.
4. Assign your credentials to the Telegram, OpenAI, and LinkedIn nodes.
5. Deploy and activate the workflow.
6. Send a text or voice message to your Telegram bot and watch it create and post to LinkedIn!

## Requirements

- Telegram Bot Token
- OpenAI API Key
- LinkedIn OAuth credentials
- n8n instance (cloud or self-hosted)

## How to customize the workflow

- Modify the LinkedIn Post Text prompt to match your personal writing style or brand voice.
- Adjust image generation settings (model, size, style) in the Create Image node.
- Add approval steps by routing posts to Google Sheets, Airtable, or Notion before publishing.
- Create a second workflow to schedule approved posts for specific times.

## Limitations and Usage Tips

- **Input Clarity**: Voice messages should be clear and well-articulated for accurate transcription.
- **LinkedIn Character Limits**: The AI formatter optimizes posts for 1,242-2,500 characters.
- **API Costs**: Each post generation uses OpenAI API calls for transcription (if voice), text formatting, image prompt creation, and image generation. Monitor your usage to manage costs.
- **LinkedIn Rate Limits**: LinkedIn API has posting frequency limits. Avoid bulk posting in short time periods to prevent rate limiting.


## 📊 Basic Information

- **Workflow ID:** 10129
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1037
- **Downloads:** 103
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10129)

## 👤 Author

- **Name:** Barbora Svobodova
- **Username:** @barb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** 
- **switch** 
- **telegram** 
- **stickyNote** (×4)
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.openAi** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
