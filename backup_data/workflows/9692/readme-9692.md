# Automate Lightroom Cloud to Instagram

> Create a reusable “photos to post” queue from your Lightroom Cloud album—ideal for **Lightroom-to-Instagram automation with n8n**. It discovers new photos, stores clean metadata in a Data Table, and generates AI alt text to power on-brand captions and accessibility. Use it together with “Lightroom Image Webhook (Direct JPEG for Instagram)” and “Instagram Auto-Publisher for Lightroom Photos (AI Captions).”

## What it’s for

Automate Lightroom to Instagram; centralize photo data for scheduled IG posting; prep AI-ready alt text and metadata for consistent, hands-free publishing.

## Parameters to set

- Lightroom Cloud credentials (client/app + API key)
- Album/collection ID to monitor in Lightroom Cloud
- Data Table name for the posting queue (e.g., Photos)
- AI settings: language/tone for alt text (concise, brand-aware)
- Image analysis URL: public endpoint of Workflow 2 (Lightroom Image Webhook)

## Works best with

Workflow 2: **Lightroom Image Webhook (Direct JPEG for Instagram)**

Workflow 3: **[Instagram Auto-Publisher for Lightroom Photos (AI Captions)](https://n8n.io/workflows/9694-instagram-auto-publisher-for-lightroom-photos-ai-captions/)**

## Learn more & stay in the loop

Want the full story (decisions, trade-offs, and tips) behind this **Lightroom Cloud → Instagram automation**?  
👉 **Read the write-up on my blog: [camilleroux.com](https://www.camilleroux.com/automatiser-la-publication-de-photos-lightroom-sur-instagram-avec-n8n/)**

If you enjoy **street & urban photography** or you’re curious how I use these n8n workflows day-to-day:  
👉 **Follow my photo account on Instagram:** **[@camillerouxphoto](https://www.instagram.com/camillerouxphoto/)**  
👉 **Follow me on other networks:** links available on [my site](https://www.camilleroux.com) (X, Bluesky, Mastodon, Threads)

## 📊 Basic Information

- **Workflow ID:** 9692
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 113
- **Downloads:** 11
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9692)

## 👤 Author

- **Name:** Camille Roux
- **Username:** @camilleroux

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **httpRequest** 
- **code** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.anthropic** 
- **dataTable** (×2)
- **sort** 
- **scheduleTrigger** 
- **splitInBatches** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
