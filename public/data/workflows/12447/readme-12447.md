# Extract text from PDFs and images in Google Drive and post to WordPress and social media with OpenAI GPT-4.1 and DALL·E

> ## Who is this for?
This workflow is designed for content creators, social media managers, digital marketers, and business owners who want to automate their content creation and distribution process across multiple platforms. It's perfect for those who regularly create content from PDFs or images and want to streamline their social media posting workflow.

## Key Features
* Monitors a specific Google Drive folder for new PDFs or images
* Extracts text from PDFs or images using AI
* Optionally generates new images from text using OpenAI's DALL-E
* Automatically posts content with images to multiple platforms
* Sends notifications about successful posts
* Handles different file types with specialized extraction methods

## Workflow Does
This workflow automates monitoring a Google Drive folder for new PDFs and images, extracting content using AI, and distributing it across social media platforms like WordPress, Facebook, Telegram, LinkedIn, and Discord. It can also generate new images from text and sends notifications about successful posts. The process ensures efficient handling of different file types and streamlines content sharing across multiple channels.

## Requirements
- Google Drive account with a dedicated folder for content
- OpenAI API credentials for image generation
- WordPress API credentials for website posting
- Social media API credentials:
  * Facebook Graph API
  * Telegram Bot API
  * LinkedIn OAuth2 API
  * Discord Bot API
  * X/Twitter OAuth2 API
- Gmail credentials for email notifications
- Rapiwa account for WhatsApp notifications

## Important Notes
- Make sure all API credentials are properly configured before running the workflow
- The workflow handles both PDF and image files differently based on their MIME type
- Image generation is optional and can be disabled if not needed
- All social media posting nodes can be individually enabled or disabled based on your needs
- The workflow includes rate limiting to avoid API restrictions


## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 📊 Basic Information

- **Workflow ID:** 12447
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 45
- **Downloads:** 4
- **Created:** 2026/1/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12447)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **switch** 
- **googleDrive** (×2)
- **extractFromFile** 
- **googleDriveTrigger** 
- **wordpress** 
- **editImage** (×2)
- **httpRequest** (×4)
- **facebookGraphApi** (×3)
- **telegram** (×3)
- **linkedIn** (×4)
- **noOp** (×2)
- **n8n-nodes-rapiwa.rapiwa** 
- **twitter** (×3)
- **gmail** 
- **discord** (×2)
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
