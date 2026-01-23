# AI-powered blog post promoter for Instagram, Facebook & X with GPT

> AI Social Media Promoter – Automated Blog Sharing Workflow
This workflow is built for bloggers, creators, and marketing teams who want to automatically promote new blog content across Instagram, Facebook, and X (Twitter). Its core purpose is to detect new blog posts from your RSS feed and instantly create platform-specific social media posts — complete with AI-generated captions and visuals — to drive traffic from social media back to your blog. Everything runs on autopilot: from detecting a new article to posting eye-catching content on each platform, while logging actions to Google Sheets and sending post previews by email. The result is a consistent and professional online presence with zero manual effort.

How it works
Once a new blog post appears in your RSS feed, the workflow kicks in. It checks Google Sheets to ensure the post hasn’t already been published. Then it calls GPT-4 to generate unique captions for Instagram, Facebook, and X, based on the post content and your brand’s tone. Simultaneously, OpenAI's GPT-Image generates a custom visual in the right format (square, portrait, or landscape). The workflow then publishes the complete posts using the Meta Graph API (for IG/FB) and X API (Twitter). All actions are logged in a Google Sheet, and a formatted email summary with images is sent to your inbox for review.

How to set up
To get started, connect the required APIs: OpenAI (for text and images), ImgBB or Cloudinary (for image hosting), Meta (Instagram/Facebook), X (Twitter), Google Sheets, and Gmail. Replace placeholder values in HTTP request nodes — such as your RSS URL, API keys, or spreadsheet ID. You can personalize the prompt content with your blog name, tone of voice, and call-to-action. Once connected, the system is fully automated. You can run it manually, or schedule it to check your blog daily with a Schedule Trigger node.

## 📊 Basic Information

- **Workflow ID:** 4033
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 1136
- **Downloads:** 113
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4033)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **rssFeedReadTrigger** 
- **set** (×3)
- **if** 
- **code** 
- **aggregate** (×2)
- **stickyNote** (×14)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** (×8)
- **facebookGraphApi** (×3)
- **merge** (×3)
- **twitter** 
- **gmail** 
- **googleSheets** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
