# Automate blog & LinkedIn content creation with OpenAI & Replicate AI images

> # AI Blog & LinkedIn Content Publisher
## How it works

Daily trigger scans your Notion database for unpublished blog ideas
AI generates complete **blog posts** + engaging **LinkedIn content** using **OpenAI** (*Blog Posting is not implemented yet*)
Creates custom images for posts using **Replicate's Flux-Schnell** AI model
Auto-publishes to LinkedIn with image OR emails draft for review
Updates Notion with published content and tracks status

## Set up steps
**Connect accounts:** Notion, OpenAI, Replicate, LinkedIn, Gmail
**Create 2 Notion databases:** Ideas (input) and Articles (output)
**Update config node:** Add your database IDs and email
**Test with one idea:** Run manually first to verify everything works
**Enable daily automation:** Turn on the cron trigger

**Perfect for:** Content creators, developers, and marketers who want to transform rough ideas into professional blog posts and LinkedIn content automatically.

## 📊 Basic Information

- **Workflow ID:** 8083
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 615
- **Downloads:** 61
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8083)

## 👤 Author

- **Name:** Sagar Budhathoki
- **Username:** @sbmagar13

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **set** 
- **notion** (×4)
- **if** (×2)
- **splitInBatches** 
- **errorTrigger** 
- **code** (×4)
- **gmail** (×4)
- **linkedIn** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
