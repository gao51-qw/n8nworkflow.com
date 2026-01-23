# Automate RSS to social media pipeline with AI, Airtable & GetLate for multiple platforms

> ## Overview

Automates your complete social media content pipeline: sources articles from Wallabag RSS, generates platform-specific posts with AI, creates contextual images, and publishes via GetLate API. Built with 63 nodes across two workflows to handle LinkedIn, Instagram, and Bluesky—with easy expansion to more platforms.

**Ideal for**: Content marketers, solo creators, agencies, and community managers maintaining a consistent multi-platform presence with minimal manual effort.

## How It Works

**Two-Workflow Architecture:**


1. **Content Aggregation Workflow**
   * Monitors Wallabag RSS feeds for tagged articles (#to-share-linkedin, #to-share-instagram, etc.)
   * Extracts and converts content from HTML to Markdown
   * Stores structured data in Airtable with platform assignment
2. **AI Generation & Publishing Workflow**
   * Scheduled trigger queries Airtable for unpublished content
   * Routes to platform-specific sub-workflows (LinkedIn, Instagram, Bluesky)
   * LLM generates optimized post text and image prompts based on custom brand parameters
   * Optionally generates AI images and hosts them on Imgbb CDN
   * Publishes via GetLate API (immediate or draft mode)
   * Updates Airtable with publication status and metadata

**Key Features:**

* Tag-based content routing using Wallabag's native system
* Swappable AI providers (Groq, OpenAI, Anthropic)
* Platform-specific optimization (tone, length, hashtags, CTAs)
* Modular design—duplicate sub-workflows to add new platforms in \~30 minutes
* Centralized Airtable tracking with 17 data points per post

## Set Up Steps

**Setup time**: \~45-60 minutes for initial configuration


1. **Create accounts and get API keys** (\~15 min)
   * Wallabag (with RSS feeds enabled)
   * GetLate (social media publishing)
   * Airtable (create base with provided schema—see sticky notes)
   * LLM provider (Groq, OpenAI, or Anthropic)
   * Image service (Hugging Face, [Fal.ai](http://Fal.ai), or Stability AI)
   * Imgbb (image hosting)
2. **Configure n8n credentials** (\~10 min)
   * Add all API keys in n8n's credential manager
   * Detailed credential setup instructions in workflow sticky notes
3. **Set up Airtable database** (\~10 min)
   * Create "RSS Feed - Content Store" base
   * Add 19 required fields (schema provided in workflow sticky notes)
   * Get Airtable base ID and API key
4. **Customize brand prompts** (\~15 min)
   * Edit "Set Custom SMCG Prompt" node for each platform
   * Define brand voice, tone, goals, audience, and image preferences
   * Platform-specific examples provided in sticky notes
5. **Configure platform settings** (\~10 min)
   * Set GetLate account IDs for each platform
   * Enable/disable image generation per platform
   * Choose immediate publish vs. draft mode
   * Adjust schedule trigger frequency
6. **Test and deploy**
   * Tag test articles in Wallabag
   * Monitor the first few executions in draft mode
   * Activate workflows when satisfied with the output

**Important**: This is a proof-of-concept template. Test thoroughly with draft mode before production use. Detailed setup instructions, troubleshooting tips, and customization guidance are in the workflow's sticky notes.

## Technical Details

* **63 nodes**: 9 Airtable operations, 8 HTTP requests, 7 code nodes, 3 LangChain LLM chains, 3 RSS triggers, 3 GetLate publishers
* **Supports**: Multiple LLM providers, multiple image generation services, unlimited platforms via modular architecture
* **Tracking**: 17 metadata fields per post, including publish status, applied parameters, character counts, hashtags, image URLs

## Prerequisites

* n8n instance (self-hosted or cloud)
* Accounts: Wallabag, GetLate, Airtable, LLM provider, image generation service, Imgbb
* Basic understanding of n8n workflows and credential configuration
* Time to customize prompts for your brand voice

*Detailed documentation, Airtable schema, prompt examples, and troubleshooting guides are in the workflow's sticky notes.*

## Category Tags

`#social-media-automation`, `#ai-content-generation`, `#rss-to-social`, `#multi-platform-posting`, `#getlate-api`, `#airtable-database`, `#langchain`, `#workflow-automation`, `#content-marketing`

## 📊 Basic Information

- **Workflow ID:** 10090
- **Complexity:** advanced
- **Node Count:** 58
- **Views:** 165
- **Downloads:** 16
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10090)

## 👤 Author

- **Name:** Mikal Hayden-Gates
- **Username:** @mhaydengates

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **httpRequest** (×8)
- **airtable** (×9)
- **switch** 
- **set** (×7)
- **rssFeedReadTrigger** (×3)
- **stickyNote** (×7)
- **n8n-nodes-late.late** (×3)
- **if** (×2)
- **code** (×7)
- **@n8n/n8n-nodes-langchain.lmChatGroq** (×3)
- **markdown** (×3)
- **editImage** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 58 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
