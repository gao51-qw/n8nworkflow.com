# Generate AI video sales letters with Google VEO3, Creatomate captions & Facebook publishing

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# VEO3 VSL Generator & Facebook Auto-Publisher

## What this workflow does

This n8n workflow automates the full process of creating a short-form Video Sales Letter (VSL) using Google VEO3, adding captions via Creatomate, and publishing the final video directly to a Facebook Page.

It's designed for creators, ecommerce brands, and marketers who want to generate and publish high-converting videos without video editing, manual uploads, or third-party tools.

## Technologies used

- Google Vertex AI (VEO3) – for AI-generated video generation
- Creatomate – for dynamic captioning
- Google Cloud Storage – for video hosting (public access)
- Upload Post – for direct video publishing
- OpenAI (optional) – for script generation
- n8n – as the automation engine

## Required inputs

The workflow starts from a form and expects:

- `Product Name` – the product or offer to promote
- `Product Image` – a visual representation of the product

Optional:
- `Prompt override` – custom prompt text if you want to bypass the AI script generation

## Output

- One AI-generated vertical video (9:16), rendered via VEO3
- Captions applied automatically via Creatomate
- Final video posted to your connected Facebook Page
- File stored in Google Cloud Storage with public access

## Documentation

This template includes full step-by-step setup instructions:

- Setting up JWT credentials for Google VEO3
- Configuring a public GCS bucket
- Creating and connecting a Creatomate API key
- Generating a long-lived Facebook Page token
- Connecting credentials inside n8n
- Editing the form, caption templates, and upload destination
- Notes on maintenance, quota limits, and API behavior

## Customization

This workflow is modular and easy to adapt. You can:

- Replace the form trigger with Google Sheets, Airtable, or webhook
- Swap Facebook with Instagram, LinkedIn, or Telegram
- Modify prompt structure, voice, visual style, or caption format

## Summary

Just submit a product name and image via form — and get a ready-to-publish VSL on your Facebook Page. Fast, automated, and fully editable.


## 📊 Basic Information

- **Workflow ID:** 6449
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 158
- **Downloads:** 15
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6449)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **convertToFile** 
- **switch** (×2)
- **httpRequest** (×5)
- **wait** (×2)
- **jwt** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **googleCloudStorage** 
- **formTrigger** 
- **set** (×2)
- **n8n-nodes-upload-post.uploadPost** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
