# RSS to social: automated content generation with Llama 3 & GetLate Publishing

> 🚀 **Automate your social media presence!** This workflow duo automatically curates content from your Wallabag RSS feeds, generates platform-specific posts using AI, and publishes them—complete with AI-generated images.

### **⚙️ Setup & Configuration**

**Required Credentials & Services:**
To run this workflow, you will need to set up the following credentials in n8n:
*   **Wallabag RSS Feeds:** This workflow uses Wallabag as your content curation service. Wallabag is the most cost-effective option—easy to self-host or use as a paid service. You'll need to generate access tokens for RSS feed access.
*   **Airtable API Key:** To create and update records in your "Content Store" database.
*   **LLM Provider API Key:** To power the social media content generation. The demo uses **Groq (llama-3.3-70b-versatile)**, but this can be replaced with any preferred LLM (OpenAI, Anthropic, etc.).
*   **GetLate API Key:** To authenticate and post to your social media platforms.
*   **Imgbb API Key:** To host the AI-generated images.
*   **An Image Generation Service API Key:** For creating images from prompts. The demo uses **Hugging Face (stable-diffusion-xl-base-1.0)**, but this can be swapped for any other service (Fal.ai, Stability AI, etc.).

**Key Setup Requirement: Define Your Tagging Convention**
Before running this workflow, establish a consistent tagging system in Wallabag where each tag corresponds to a specific social media platform. For example:
* `#to-share-linkedin` for LinkedIn content
* `#to-share-bluesky` for Bluesky content
* `#to-share-instagram` for Instagram content

**Adding More Feeds & Platforms:**
* **New Feeds:** Simply duplicate the example sub-workflows and update the RSS feed URL and target platform information for each new tag/platform combination.
* **New Platforms:** To add support for additional social platforms, duplicate one of the existing platform sub-workflows (LinkedIn or Bluesky) and update the platform-specific parameters, prompts, and GetLate API settings for your new platform.

**Airtable Database Schema: "RSS Feed - Content Store"**
The workflow uses an Airtable base with the following fields to track content from ingestion to publication:
*   `id` (Primary Field):  Formula, for unique record ID (`RECORD_ID()`)
*   `audience_targeted`: Long text
*   `author`: Long text
*   `character_count`: Number
*   `content_markdown`: Long text
*   `cta_used`: Long text
*   `feed_id`: Single line text
*   `goal_applied`: Long text
*   `image_filename`: Singe line text
*   `image_id`: Single line text
*   `image_link`: URL
*   `image_prompt`: Long text
*   `is_posted`: Number, default is 0
*   `platform`: Single line text
*   `post_text`: Long text
*   `suggested_hashtags`: Long text
*   `title`: Long text
*   `tone_applied`: Long text
*   `article_url`: URL

**Customizable User Inputs:**
This workflow is built for flexibility. Key inputs you can customize include:
*   **Wallabag RSS Feed URL & Platform Tag:** The specific feed and platform-specific tag (e.g., `#to-share-linkedin`) to monitor in Workflow #1.
*   **Target Social Platform:** Defined per feed in the "Edit Field" node.
*   **Content Generation Schedule:** The frequency for auto-posting in the Schedule Trigger.
*   **Brand Voice & LLM Parameters:** The tone, style, and specific instructions for the AI in the "Set Custom SMCG Prompt" node.
*   **Platform-Specific Prompts:** The template used to generate posts for each social network (Instagram, LinkedIn, etc.).
*   **Posting Behavior & Image Generation:** Configured within the **SMCG (Social Media Content Generation) node**. This is where you set the posting mode (immediate vs. draft) and define a boolean for each platform to enable or disable AI-generated images for its posts.

### **📥 Workflow 1: RSS Aggregator & Content Store**

- **RSS Trigger** → Pulls tagged articles from Wallabag feeds using platform-specific tags
- **Platform Assignment** → Sets target social platform based on tag
- **Content Conversion** → HTML to Markdown formatting
- **Airtable Storage** → Saves articles to content database

**🌟 Adding New RSS Feeds:** To monitor additional Wallabag feeds for different content sources, simply duplicate the existing RSS feed sub-workflow and update the RSS URL with your new Wallabag access token and platform-specific tag. Each feed can target a different social platform or content category.

### **🔄 Workflow 2: AI Content Generator & Publisher**

- **Schedule Trigger** → Runs on your preferred frequency
- **Content Selection** → Pulls unpublished articles from Airtable
- **AI Configuration** → Sets brand voice, posting behavior, and image generation preferences
- **Platform Routing** → Directs to appropriate social platform workflow
- **AI Content Generation** → Creates posts and image prompts using LLM
- **Image Generation** → Creates & hosts images when enabled
- **Social Publishing** → Posts to platforms via GetLate API
- **Database Update** → Marks content as published in Airtable

**🌟 Adding New Platform Support:** To extend this workflow to additional social platforms, simply duplicate one of the existing platform sub-workflows and update the platform-specific parameters, LLM prompts, and GetLate API configuration for your target platform.


## 📊 Basic Information

- **Workflow ID:** 9147
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 202
- **Downloads:** 20
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9147)

## 👤 Author

- **Name:** Dele Tosh 
- **Username:** @deletosh

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGroq** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **scheduleTrigger** 
- **markdown** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **code** (×2)
- **httpRequest** (×8)
- **airtable** (×7)
- **if** (×2)
- **switch** 
- **set** (×5)
- **rssFeedReadTrigger** (×2)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
