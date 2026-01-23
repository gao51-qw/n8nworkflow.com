# Automate LinkedIn content creation with OpenAI, Notion, and Google Slides

> What it is
An automated LinkedIn content system that takes a simple form (idea + optional file), generates LinkedIn posts with OpenAI, stores them in Notion, builds Google Slides carousels, and auto-publishes posts (text, image, or document) to LinkedIn on a schedule while keeping Notion in sync.

Setup steps

1. Connect integrations: link your Notion database, LinkedIn account, Google Drive/Slides, OpenAI, and Gmail in n8n.

2. Configure the form: set up the “LinkedIn Post Generator” form with the idea field and optional file upload.

3. Map AI outputs: wire the OpenAI nodes so they write post title, funnel stage, and content into your Notion “LinkedIn Auto Posts” database.

4. Enable carousel flow: connect Notion → OpenAI → Google Slides template → Google Drive copy → Notion update for “Create Carousel” items.

5. Set scheduling: use the Schedule Trigger + Notion filters (“Ready for Post” + Scheduled Date) to pick which posts go out each hour.

6. Publish & track: send posts to LinkedIn (text, image, or document), then update Notion status to “Posted” and, if needed, send yourself an email reminder for manual carousel actions.

## 📊 Basic Information

- **Workflow ID:** 11252
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 180
- **Downloads:** 18
- **Created:** 2025/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11252)

## 👤 Author

- **Name:** Kean
- **Username:** @kean

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **formTrigger** 
- **switch** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **notion** (×6)
- **splitInBatches** 
- **googleSlides** 
- **googleDrive** (×2)
- **linkedIn** (×3)
- **if** (×3)
- **set** (×2)
- **splitOut** 
- **scheduleTrigger** 
- **httpRequest** 
- **gmail** 
- **notionTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
