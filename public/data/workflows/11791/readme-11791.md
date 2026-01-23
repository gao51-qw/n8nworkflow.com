# Automate RSS to Instagram with AI-generated content and Cloudinary

> ### **What it does**
- Reads and aggregates news from one or more RSS feeds (customizable by category).
- Uses AI to select the most relevant or engaging articles.
- Generates a caption and headline with a natural, professional tone.
- Creates a realistic AI-generated image to match the topic.
- Uploads the image to Cloudinary and publishes the post directly to Instagram through the Meta Graph API.
- Runs automatically on schedule (default: every 5 hours) — no manual steps required.

### **Why it’s different**
- Works with any subject or niche, from tech to fashion, news, travel, and more.
- Includes a guide with curated RSS feed sources by category — ready to plug in.
- AI-driven content generation for text and visuals, tuned for professional results.
- Fully automated workflow — from discovery to publishing.
- Self-hosted and scalable, with no vendor lock-in.

### **What’s included**
- Workflow JSON file (import-ready for n8n).
- PDF deployment guide (written together), covering:
- how to set up RSS sources by category;
- configuring APIs (OpenAI, Cloudinary, Meta Graph);
- scheduling and testing the workflow;
- recommended best practices for stability and scaling.

## 📊 Basic Information

- **Workflow ID:** 11791
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 60
- **Downloads:** 6
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11791)

## 👤 Author

- **Name:** Paolo Ronco
- **Username:** @paoloronco

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **rssFeedRead** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×11)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **facebookGraphApi** (×4)
- **set** 
- **if** 
- **wait** 
- **splitInBatches** 
- **editImage** 
- **n8n-nodes-cloudinary.cloudinary** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
