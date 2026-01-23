# ✍️🌄 Your first Wordpress + AI content creator - quick start

> # ✍️🌄 WordPress + AI Content Creator

This workflow automates the creation and publishing of multi-reading-level content for WordPress blogs. It leverages AI to generate optimized articles, automatically creates featured images, and provides versions of the content at different reading levels (Grade 2, 5, and 9).

## How It Works

### Content Generation & Processing 🎯
- Starts with a manual trigger and a user-defined blog topic
- Uses AI to create a structured blog post with proper HTML formatting
- Separates and validates the title and content components
- Saves a draft version to Google Drive for backup

### Multi-Reading Level Versions 📚
Automatically rewrites the content for different reading levels:
- Grade 9: Sophisticated language with appropriate metaphors
- Grade 5: Simplified with light humor and age-appropriate examples
- Grade 2: Basic language with simple metaphors and child-friendly explanations

### WordPress Integration 🌐
- Creates a draft post in WordPress with the Grade 9 version
- Generates a relevant featured image using Pollinations.ai
- Automatically uploads and sets the featured image
- Sends success/error notifications via Telegram

## Setup Steps

### Configure API Credentials 🔑
- Set up WordPress API connection
- Configure OpenAI API access
- Set up Google Drive integration
- Add Telegram bot credentials for notifications

### Customize Content Parameters ⚙️
- Adjust reading level prompts as needed
- Modify image generation settings
- Set WordPress post parameters

### Test and Deploy 🚀
- Run a test with a sample topic
- Verify all reading level versions
- Check WordPress draft creation
- Confirm notification system


This workflow is perfect for content creators who need to maintain a consistent blog presence while catering to different audience reading levels. It's especially useful for educational content, news sites, or any platform that needs to communicate complex topics to diverse audiences.

## 📊 Basic Information

- **Workflow ID:** 2981
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 14253
- **Downloads:** 1425
- **Created:** 2025/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2981)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 
- **if** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **stickyNote** (×11)
- **googleDrive** 
- **set** 
- **httpRequest** (×3)
- **wordpress** 
- **markdown** 
- **telegram** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
