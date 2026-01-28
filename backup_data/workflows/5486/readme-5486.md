# Auto-generate & post AI images to Facebook using Gemini & Pollinations AI

> ### This workflow is designed for content creators or AI artists who want to automate posting unique AI-generated images to their Facebook Page multiple times a day. It uses Google Gemini via LangChain to generate imaginative image prompts, and Pollinations AI to generate the images. Posts are published with hashtags and a clean caption.


## Who Is It For
   - AI artists
   - Facebook page managers
   - Digital marketers looking for automated creative content


## What It Does
   - Triggers 3x daily at 7:00, 11:00, and 17:00 (local time)
   - Generates random AI image prompts in a retro-futuristic, cinematic, or surreal style using Google Gemini
   - Fetches images from Pollinations AI using custom prompts
   - Posts images automatically to your Facebook Page with hashtags


## Requirements
   - n8n self-hosted or desktop (workflow uses schedule trigger)
   - Pollinations API (no auth needed)
   - Facebook Page with Facebook Graph API token:
   - Required scopes: pages_manage_posts, pages_read_engagement, pages_show_list
   - Google Gemini API Key (used via LangChain node)


## How to Customize
   - Change the prompt style in the Basic LLM Chain node (promptType: define) to suit your theme.
   - Adjust Set The Generator Image node if you want:
   - Different image sizes (width / height)
   - Different seed randomness
   - Other Pollinations models (&model=kontext)
   - Add Telegram/Twitter nodes if you want cross-posting
   - Use Set node to allow easy user-level configuration of models, hashtags, times, etc.

## 📊 Basic Information

- **Workflow ID:** 5486
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 6134
- **Downloads:** 613
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5486)

## 👤 Author

- **Name:** Fahmi Oktafian
- **Username:** @fahmi3322

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **httpRequest** 
- **facebookGraphApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
