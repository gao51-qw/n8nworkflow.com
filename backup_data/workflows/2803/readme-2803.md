# Generate Instagram content from top trends with AI image generation

> # How it works

This automated workflow discovers trending Instagram posts and creates similar AI-generated content. Here's the high-level process:

## 1. Content Discovery & Analysis
- Scrapes trending posts from specific hashtags
- Analyzes visual elements using AI
- Filters out videos and duplicates

## 2. AI Content Generation
- Creates unique images based on trending content
- Generates engaging captions with relevant hashtags
- Maintains brand consistency while being original

## 3. Automated Publishing
- Posts content directly to Instagram
- Monitors publication status
- Sends notifications via Telegram

# Set up steps

Setting up this workflow takes approximately 15-20 minutes:

## 1. API Configuration (7-10 minutes)
- Instagram Business Account setup
- Telegram Bot creation
- API key generation (OpenAI, Replicate, Rapid Api)

## 2. Database Setup (3-5 minutes)
- Create required database table
- Configure PostgreSQL credentials

## 3. Workflow Configuration (5-7 minutes)
- Set scheduling preferences
- Configure notification settings
- Test connection and permissions

*Detailed technical specifications and configurations are available in sticky notes within the workflow.*

## 📊 Basic Information

- **Workflow ID:** 2803
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 84023
- **Downloads:** 8402
- **Created:** 2025/1/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2803)

## 👤 Author

- **Name:** mustafa kendigüzel
- **Username:** @mustafakendiguzel

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **if** (×3)
- **telegram** (×4)
- **splitInBatches** 
- **scheduleTrigger** 
- **set** (×4)
- **stickyNote** (×17)
- **code** (×2)
- **httpRequest** (×3)
- **merge** 
- **postgres** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **facebookGraphApi** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
