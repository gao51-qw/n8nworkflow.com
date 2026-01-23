# Auto-publish content to 9 social platforms with Blotato & Airtable

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**How it works**
• Publishes content to 9 social platforms (Instagram, YouTube, TikTok, Facebook, LinkedIn, Threads, Twitter/X, Bluesky, Pinterest) from a single Airtable base
• Automatically uploads media to Blotato, handles platform-specific requirements (YouTube titles, Pinterest boards), and tracks success/failure for each post
• Includes smart features like GPT-powered YouTube title optimization, Pinterest Board ID finder tool, and random delays to avoid rate limits

**Set up steps**  
• Takes ~20–35 minutes to configure all 9 platforms (or less if you only need specific ones)
• Requires Airtable personal access token, Blotato API key, and connecting your social accounts in Blotato dashboard
• Workflow includes comprehensive sticky notes with step-by-step Airtable base setup, credential configuration, platform ID locations, and quick debugging links for each social network

**Pro tip**: The workflow is modular - you can disable any platforms you don't use by deactivating their respective nodes, making it flexible for any social media strategy from single-platform to full omnichannel publishing.

## 📊 Basic Information

- **Workflow ID:** 7223
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 827
- **Downloads:** 82
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7223)

## 👤 Author

- **Name:** Max aka Mosheh
- **Username:** @aiwithapex

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×9)
- **set** (×2)
- **airtable** (×20)
- **@n8n/n8n-nodes-langchain.openAi** 
- **formTrigger** 
- **httpRequest** (×2)
- **code** 
- **webhook** 
- **telegram** 
- **wait** (×2)
- **@blotato/n8n-nodes-blotato.blotato** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
