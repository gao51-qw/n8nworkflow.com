# Transform blog posts to multi-platform content with GPT-4o, Unsplash and Airtable

> ### How it works
• RSS feed monitors your blog for new posts automatically
• Extracts and cleans full article content from the blog post
• AI Chain (GPT-4o) transforms content into 5 platform-optimized formats (LinkedIn, Twitter, Instagram, Email, Video)
• Unsplash API suggests relevant images for each content piece
• Slack notification alerts content team with preview of all formats
• Airtable logs everything for content calendar tracking
• Optional auto-posting to LinkedIn and Twitter (disabled by default)
• Structured output parser ensures all 5 formats are generated correctly with proper character limits

### Set up steps
• **Time to set up:** 10-15 minutes
• Replace RSS feed URL with your blog's feed (common formats: /feed, /rss, /feed.xml)
• Get Slack channel ID for content team notifications
• Create Airtable base with 14 columns (Original_Title, Original_URL, Published_Date, LinkedIn_Post, LinkedIn_Hashtags, Twitter_Thread, Twitter_Hashtags, Instagram_Caption, Instagram_Hashtags, Email_Subject, Email_Body, Video_Script, Suggested_Images, Status)
• Add credentials: OpenAI (GPT-4o), Unsplash API, Slack OAuth2, Airtable Token
• Replace placeholder IDs in Slack and Airtable nodes
• Optional: Enable LinkedIn/Twitter auto-posting nodes and add OAuth2 credentials

### What you'll need
• **OpenAI API** - GPT-4o access for AI content repurposing
• **Unsplash API** - Free tier available for image suggestions
• **Slack** - Standard workspace for team notifications
• **Airtable** - Free plan works for content tracking
• **Blog with RSS feed** - WordPress, Ghost, Medium, Webflow all supported
• **LinkedIn/Twitter OAuth2** (optional) - For auto-posting feature

### Who this is for
Content creators, marketing teams, and agencies that want to maximize content ROI by automatically repurposing blog posts into platform-specific content. Perfect for B2B companies publishing regular blog content who need consistent multi-platform presence without manual reformatting.

## 📊 Basic Information

- **Workflow ID:** 9164
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 302
- **Downloads:** 30
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9164)

## 👤 Author

- **Name:** Greypillar
- **Username:** @greypillar

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **rssFeedRead** 
- **httpRequest** (×2)
- **code** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **airtable** 
- **linkedIn** 
- **twitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
