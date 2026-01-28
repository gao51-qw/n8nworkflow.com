# Create blog posts from YouTube videos with Mistral AI & Gemini image generation

> **Description**

This template automates the process of creating blog posts from YouTube videos using Mistral AI for text generation and Gemini for image generation. It provides a seamless workflow that transforms YouTube content into ready-to-publish articles complete with engaging visuals.

**⚠️ Disclaimer:** This template can only be used on self-hosted n8n instances. It also relies on community nodes, which must be installed before running the workflow.

**Workflow Overview**

YouTube Data Extraction – Retrieves video details (title, description, and transcript).

Content Summarization – Mistral AI rewrites and structures the transcript into a blog-ready format.

Image Generation – Gemini creates relevant, high-quality images to complement the article.

Post Assembly – The workflow automatically combines the generated text and visuals into a structured blog post.

**Features**

Extract video details and transcripts directly from YouTube.

Summarize and rewrite content into blog posts using Mistral AI.

Generate relevant images with Gemini for engaging visuals.

Automatically structure blog posts for publishing.

**Requirements**

Before using this template, ensure you have:

An active self-hosted n8n instance.

API keys for OpenRouter (Mistral AI) and Gemini.

The required community nodes installed.

Access to public or unlisted YouTube videos.

**Setup Instructions**

Import the template into your self-hosted n8n instance.

Configure the API credentials:

Add your OpenRouter API key.

Add your Gemini API key.

Replace placeholder domains or webhook URLs with your own.

Run the workflow with a sample YouTube video URL.

Review the generated blog post and images.

**Customization**

Content length: Adjust prompt settings in the Mistral AI node.

Tone of voice: Modify prompts for formal, casual, or technical style.

Image style: Update Gemini requests to change the look and feel.

Publishing: Connect to your CMS (e.g., WordPress, Ghost) for direct publishing.

**How YouTube is Involved**

The workflow starts with a YouTube video URL, extracts metadata and transcripts, and then transforms this raw content into a complete blog post enriched with AI-generated images.

**WorkFlow:**
![image.png](fileId:2328)

## 📊 Basic Information

- **Workflow ID:** 8190
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 201
- **Downloads:** 20
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8190)

## 👤 Author

- **Name:** Zakwan
- **Username:** @zakwanzahid

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×9)
- **splitOut** 
- **merge** 
- **aggregate** 
- **editImage** 
- **httpRequest** (×4)
- **rssFeedReadTrigger** 
- **code** (×2)
- **@tavily/n8n-nodes-tavily.tavilyTool** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **scheduleTrigger** 
- **googleSheets** 
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×11)
- **convertToFile** 
- **set** 
- **wordpress** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
