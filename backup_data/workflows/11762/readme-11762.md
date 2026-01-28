# Generate E-E-A-T SEO blog drafts for WordPress with OpenAI

> # AI E-E-A-T WordPress Blog Generator (n8n)

This workflow generates SEO-optimized, E-E-A-T compliant blog posts using a form input and publishes them as WordPress drafts with featured images.

## Features
- Form-based blog brief
- SEO metadata + outline generation
- Full HTML blog writing
- Featured image generation
- WordPress draft creation

## Requirements
- n8n v1.40+
- OpenAI API key
- WordPress REST API access

## Environment Variables
WP_SITE_URL=https://example.com
SITE_NAME=Your Website Name
PROJECT_CONTEXT=Your niche description

## How to Use
1. Import workflow JSON
2. Configure OpenAI & WordPress credentials
3. Set environment variables
4. Open the Form Trigger
5. Submit blog details
6. Draft appears in WordPress

## Notes
- Content is created as **draft**
- No credentials are included


## 📊 Basic Information

- **Workflow ID:** 11762
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 88
- **Downloads:** 8
- **Created:** 2025/12/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11762)

## 👤 Author

- **Name:** zapgrow
- **Username:** @zapgrow

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **if** 
- **code** 
- **wordpress** 
- **httpRequest** (×2)
- **respondToWebhook** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
