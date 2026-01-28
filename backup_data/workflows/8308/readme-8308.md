# Generate & auto-post tech news AI avatar videos to social media with Heygen and Blotato

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Description
This fully automated AI Avatar Social Media system creates talking head AI clone videos, WITHOUT having to film or edit yourself. It combines n8n, AI agent, HeyGen, and Blotato to research, create, and distribute talking head AI clone videos to every social media platform every single day.

This template is ideal for content creators, social media managers, social media agencies, small businesses, and marketers who want to to scale short-form video creation, without manually filming and editing every single video.

## Overview
**1. Trigger: Schedule**
- Configured to run once daily at 10am

**2. AI News Research**
- Research viral news from tech-focused forum, Hackernews
- Fetch the selected news item, plus discussion comments

**3. AI Writer**
- AI writes 30-second monologue script
- AI writes short video caption

**4. Create Avatar Video**
- Call Heygen API (requires paid API plan), specifying your avatar ID and voice ID
- Create avatar video, optionally passing in an image/video background if you have a green screen avatar (matte: true)

**5. Get Video**
- Wait awhile, then fetch completed avatar video
- Upload video to Blotato

**6. Publish to Social Media via Blotato**
- Connect your Blotato account
- Choose your social accounts
- Either post immediately or schedule for later"

## 📄 Documentation
[Full Tutorial](https://help.blotato.com/api/templates/3-hackernews-to-ai-clone-videos)

## Troubleshooting
Check your [Blotato API Dashboard](https://my.blotato.com/api-dashboard) to see every request, response, and error. Click on a request to see the details.

## Need Help?
In the Blotato web app, click the orange button on the bottom right corner. This opens the Support messenger where I help answer technical questions.

## 📊 Basic Information

- **Workflow ID:** 8308
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 890
- **Downloads:** 89
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8308)

## 👤 Author

- **Name:** Sabrina Ramonov 🍄
- **Username:** @sabrina-ramonov

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **hackerNewsTool** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **httpRequest** (×3)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@blotato/n8n-nodes-blotato.blotato** (×10)
- **if** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
