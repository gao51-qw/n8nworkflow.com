# WordPress blog generation with AI Research, Image Creation & Auto Publishing

> ## How This N8n Workflow Works

This is an **automated blog post generation system** that:

1. **Researches topics** using AI agents and web search tools
2. **Writes complete blog posts** with proper SEO structure
3. **Generates custom images** for each post
4. **Publishes directly to WordPress** with images embedded

## Setup Steps

### 1. API Keys & Credentials
- **Set in "API Keys" node:**
  - `tavily`: Get from [tavily.com](https://tavily.com) (free tier available)
  - `wavespeed`: Get from [wavespeed.ai](https://wavespeed.ai) for image generation
  - `wordpress-website-url`: Your WordPress site URL

### 2. WordPress Authentication
- Create **WordPress Application Password**:
  - Go to Users → Your Profile → Application Passwords
  - Create new password and save it
- Set up **WordPress API credential** in n8n with:
  - Username: Your WordPress username
  - Password: The application password you created

### 3. Data Table Setup
- Create an **n8n Data Table** with these columns:
  - title, topic, content, slug, excerpt, featured_image, audience, category, author, status

### 4. AI Model Configuration
- Configure AI models in these nodes:
  - **Researcher Agent** (uses OpenAI or Google Gemini)
  - **Writer Agent** (uses OpenAI or Google Gemini) 
  - **Image Prompts Writer** (uses OpenAI)

### 5. Image Generation
- Update image upload URL in **"Upload image" node**:
  - Change to: `https://yourdomain.com/wp-json/wp/v2/media`
- Configure your preferred image generation service

## How to Trigger

1. **Fill the form** with:
   - Topic
   - Target audience  
   - Industry
2. **Submit** to start the automation

## Workflow Process

1. **Research Phase**: AI researches topic and analyzes existing content
2. **Writing Phase**: AI writes complete blog post with HTML structure
3. **Image Creation**: Generates featured image + content images
4. **WordPress Integration**: 
   - Uploads images to media library
   - Creates blog post with embedded images
   - Sets featured image and metadata

## Key Features

- **SEO-optimized** content structure
- **Automatic image generation** and embedding
- **WordPress native integration**
- **Quality checks** and retry logic
- **Human-like writing** with anti-AI detection

The system handles everything from research to published post with images in one automated workflow.

## 📊 Basic Information

- **Workflow ID:** 11358
- **Complexity:** advanced
- **Node Count:** 54
- **Views:** 133
- **Downloads:** 13
- **Created:** 2025/11/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11358)

## 👤 Author

- **Name:** Muhammad Asadullah
- **Username:** @asadtech

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **if** (×3)
- **wait** (×4)
- **splitInBatches** 
- **code** (×4)
- **set** (×4)
- **stickyNote** (×13)
- **httpRequestTool** (×2)
- **perplexityTool** 
- **httpRequest** (×4)
- **editImage** 
- **formTrigger** 
- **dataTable** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **wordpress** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **rssFeedRead** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 54 nodes with 37 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
