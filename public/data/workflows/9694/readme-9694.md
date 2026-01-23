# Lightroom cloud to Instagram auto poster (AI captions)

> **Automatically publish Lightroom photos to Instagram** with short, human-sounding AI captions. This workflow pulls the next item from your Data Table queue, generates an on-brand caption from alt text + metadata, uploads via Instagram Graph API, and marks it posted. 
Use it together with “Lightroom Cloud → Photos Queue (AI Alt Text)” and “Lightroom Image Webhook (Direct JPEG for Instagram).”

## What it’s for

Hands-free Lightroom-to-Instagram posting: schedule, caption with AI, and publish consistently using the Instagram Graph API.

## Parameters to set

- Instagram Graph API access token and Instagram Business/Creator account ID
- Posting schedule (cron/interval) + max posts per run
- Data Table name & status fields (posted timestamp, IG media ID)
- Caption rules: tone, max length, hashtags policy, CTA style
- Image source URL: public endpoint of Workflow 2 (Lightroom Image Webhook)

## Works best with

Workflow 1: **[Lightroom Cloud → Photos Queue (AI Alt Text)](https://n8n.io/workflows/9692-automate-lightroom-to-instagram-with-claude-ai-alt-text-generator/)**

Workflow 2: **Lightroom Image Webhook (Direct JPEG for Instagram)**

## Learn more & stay in the loop

Want the full story (decisions, trade-offs, and tips) behind this **Lightroom Cloud → Instagram automation**?  
👉 **Read the write-up on my blog: [camilleroux.com](https://www.camilleroux.com/automatiser-la-publication-de-photos-lightroom-sur-instagram-avec-n8n/)**

If you enjoy **street & urban photography** or you’re curious how I use these n8n workflows day-to-day:  
👉 **Follow my photo account on Instagram:** **[@camillerouxphoto](https://www.instagram.com/camillerouxphoto/)**  
👉 **Follow me on other networks:** links available on [my site](https://www.camilleroux.com) (X, Bluesky, Mastodon, Threads)

## 📊 Basic Information

- **Workflow ID:** 9694
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 195
- **Downloads:** 19
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9694)

## 👤 Author

- **Name:** Camille Roux
- **Username:** @camilleroux

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **dataTable** (×2)
- **sort** 
- **limit** 
- **@n8n/n8n-nodes-langchain.anthropic** 
- **httpRequest** (×4)
- **scheduleTrigger** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
