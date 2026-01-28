# News collection & multi-platform publishing with GPT, DALL-E, & social media API

> ## Who it's for
This **n8n workflow** automatically generates AI-powered content about local news and publishes it across multiple social media platforms. The workflow runs on a schedule, fetches the latest news about a specific topic, creates relevant images with watermarks, and posts the content to various platforms including WordPress, Facebook, Telegram, LinkedIn, and Discord.

## Features
- **Scheduled Content Generation**: Triggers every 4 hours to create fresh content
- **AI-Powered News Collection**: Uses LangChain agent with OpenAI and SerpAPI to find the latest news about a specific topic (Sirajganj district)
- **Image Generation**: Creates AI images based on the news content using OpenAI's image generation capabilities
- **Watermarking**: Automatically adds branded watermarks to all generated images
- **Multi-Platform Publishing**: Posts content and images to:
  - WordPress (with featured images)
  - Facebook
  - Telegram
  - LinkedIn (both profile and company pages)
  - Discord
- **Notification System**: Sends confirmation messages via WhatsApp (Rapiwa), Telegram, and Gmail after successful posting
- **Content Validation**: Checks if news was found before proceeding with image generation and posting

## Requirements
- **OpenAI API credentials** for content generation and image creation
- **SerpAPI credentials** for news search
- **WordPress API credentials** for posting articles and media
- **Facebook Graph API credentials** for page posting
- **Telegram Bot API credentials** for channel posting
- **LinkedIn OAuth2 API credentials** for profile and company page posting
- **Discord Bot API credentials** for channel posting
- **Rapiwa API credentials** for WhatsApp notifications
- **Gmail OAuth2 credentials** for email notifications

### Configure Credentials
- **OpenAI API**: Set up credentials with access to GPT-4 and DALL-E models
- **WordPress API**: Configure access to your WordPress site
- **Social Media APIs**: Set up credentials for Facebook, Telegram, LinkedIn, and Discord
- **Notification Services**: Configure Rapiwa for WhatsApp and Gmail for email

## Important Notes
- **Topic Configuration**: The workflow is currently set to fetch news about "Sirajganj district", but this can be modified in the "Add tropic" node
- **Image Watermarking**: All images are watermarked with "Sirajganj APP" and Playstore information
- **Content Validation**: The workflow includes a check to ensure news content exists before proceeding with image generation
- **Platform-Specific Formatting**: Each platform receives appropriately formatted content and image dimensions
- **Notification System**: After successful posting to all platforms, confirmation messages are sent via multiple channels

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)


## 📊 Basic Information

- **Workflow ID:** 11652
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 60
- **Downloads:** 6
- **Created:** 2025/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11652)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **wait** 
- **if** 
- **editImage** (×2)
- **wordpress** 
- **httpRequest** (×4)
- **facebookGraphApi** 
- **telegram** (×2)
- **linkedIn** (×2)
- **noOp** 
- **n8n-nodes-rapiwa.rapiwa** 
- **gmail** 
- **stickyNote** (×7)
- **discord** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
