# Generate platform-optimized social media content across 6 platforms with GPT-4o

> Who’s it for
This workflow is ideal for marketers, content creators, agencies, and small businesses that want to streamline the process of creating and publishing platform-optimized posts across multiple social media channels.

How it works / What it does
From a single user prompt, the workflow uses a custom system prompt and schema to generate tailored social media content for LinkedIn, Instagram, Facebook, Twitter (X), Threads, and YouTube Shorts. It creates platform-specific captions, hashtags, calls to action, and even AI-generated image suggestions, then routes the content to the correct publishing channel.

How to set up
Connect your social media platform credentials in n8n.

Add your Google Docs links for the system prompt and content schema.

Configure the IMGBB_API_KEY and any other required API credentials.

Optionally connect Gmail and Telegram for approval workflows and notifications.

Requirements
n8n instance (self-hosted or cloud)

API credentials for desired platforms

Google Docs and Google Drive accounts

How to customize the workflow
Edit the system prompt and schema in Google Docs to adjust tone, style, and content format for each platform. Modify routing logic or add new platform integrations as needed.

## 📊 Basic Information

- **Workflow ID:** 7267
- **Complexity:** advanced
- **Node Count:** 100
- **Views:** 1446
- **Downloads:** 144
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7267)

## 👤 Author

- **Name:** Luan Correia
- **Username:** @luanstartflow

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×43)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **httpRequest** (×4)
- **gmail** (×2)
- **googleDocs** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **twitter** 
- **facebookGraphApi** (×2)
- **linkedIn** 
- **set** (×12)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **merge** (×3)
- **googleDrive** (×3)
- **telegram** (×2)
- **switch** 
- **if** 
- **extractFromFile** 
- **noOp** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 100 nodes with 48 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
