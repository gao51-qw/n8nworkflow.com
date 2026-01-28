# Transform RSS feeds into blog articles with GPT-4, human review & Google Docs

> [Workflow Overview]
![CleanShot 20251030 at 17.35.492x.png](fileId:3143)
⚠️ **Self-Hosted Only**: This workflow uses the gotoHuman community node and requires a self-hosted n8n instance.

## Who's It For
Content teams, bloggers, news websites, and marketing agencies who want to automate content creation from RSS feeds while maintaining editorial quality control. Perfect for anyone who needs to transform news articles into detailed blog posts at scale.

## What It Does
This workflow automatically converts RSS feed articles into comprehensive, SEO-optimized blog posts using AI. It fetches articles from your RSS source, generates detailed content with GPT-4, sends drafts for human review via gotoHuman, and publishes approved articles to Google Docs with automatic Slack notifications to your team.

## How It Works
1. Schedule Trigger runs every 6 hours to check for new RSS articles
2. RSS Read node fetches the latest articles from your feed
3. Format RSS Data extracts key information (title, keywords, description)
4. Generate Article with AI creates a structured blog post using OpenAI GPT-4
5. Structure Article Data formats the content with metadata
6. Request Human Review sends the article for approval via gotoHuman
7. Check Approval Status routes the workflow based on review decision
8. Create Google Doc and Add Article Content publish approved articles
9. Send Slack Notification alerts your team with article details

## Requirements
- **OpenAI API key** with GPT-4 access
- **Google account** for Google Docs integration
- **gotoHuman account** for human-in-the-loop approval workflow
- **Slack workspace** for team notifications
- **RSS feed URL** from your preferred source

## How to Set Up
1. **Configure RSS Feed**: In the "RSS Read" node, replace the example URL with your RSS feed source
2. **Connect OpenAI**: Add your OpenAI API credentials to the "OpenAI Chat Model" node
3. **Set Up Google Docs**: Connect your Google account and optionally specify a folder ID for organized storage
4. **Configure gotoHuman**: Add your gotoHuman credentials and create a review template for article approval
5. **Connect Slack**: Authenticate with Slack and select the channel for notifications
6. **Customize Content**: Modify the AI prompt in "Generate Article with AI" to match your brand voice and article structure
7. **Adjust Schedule**: Change the trigger frequency in "Schedule Trigger" based on your content needs

## How to Customize
- **Article Style**: Edit the AI prompt to change tone, length, or structure
- **Keywords & SEO**: Modify the "Format RSS Data" node to adjust keyword extraction logic
- **Publishing Destination**: Change from Google Docs to other platforms (WordPress, Notion, etc.)
- **Approval Workflow**: Customize the gotoHuman template to include specific review criteria
- **Notification Format**: Adjust the Slack message template to include additional metadata
- **Processing Volume**: Modify the Code node to process multiple RSS articles instead of just one

## 📊 Basic Information

- **Workflow ID:** 10311
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 266
- **Downloads:** 26
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10311)

## 👤 Author

- **Name:** Daiki Takayama
- **Username:** @daiki-ai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×10)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDocs** (×2)
- **noOp** (×2)
- **scheduleTrigger** 
- **rssFeedRead** 
- **@gotohuman/n8n-nodes-gotohuman.gotoHuman** 
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
