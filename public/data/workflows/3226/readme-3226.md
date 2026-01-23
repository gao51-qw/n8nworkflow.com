# LinkedIn post agent

> # LinkedIn Post Generator - Automated Marketing Content Workflow

This workflow creates and publishes professional LinkedIn posts automatically on a schedule, complete with AI-generated images. Here's how it works:

## How It Works
1. Generates professional marketing posts focused on Generative AI and enterprise solutions (update prompt for your desired content)
2. Creates matching images that represent the post's themes visually
3. Publishes directly to LinkedIn on a scheduled basis
4. Incorporates RSS feeds for up-to-date content inspiration

## Setup Steps (Estimated time: 15-20 minutes)
1. **API Credentials**: Connect your OpenAI API key for text and image generation
2. **LinkedIn Authentication**: Add your LinkedIn credentials to enable posting
3. **RSS Configuration**: Add relevant industry RSS feed URLs for content inspiration
4. **Schedule**: Set your preferred posting frequency in the Schedule Trigger node

The workflow uses GPT-4o and GPT-4o Mini to create professionally-toned content that positions you as a thought leader in marketing and AI implementation. The generated content follows specific formatting guidelines to maximize engagement on LinkedIn.

Each post is carefully crafted to be 100-150 words with strategic paragraph breaks, ending with relevant hashtags. The matching images are designed to be clean, minimalistic, and aligned with the post's theme without any distracting text elements.

## 📊 Basic Information

- **Workflow ID:** 3226
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 224
- **Downloads:** 22
- **Created:** 2025/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3226)

## 👤 Author

- **Name:** Muhammad Asadullah
- **Username:** @asadtech

## 🏷️ Categories

- AI
- Content Creation

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **httpRequest** (×2)
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×4)
- **scheduleTrigger** 
- **rssFeedReadTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
