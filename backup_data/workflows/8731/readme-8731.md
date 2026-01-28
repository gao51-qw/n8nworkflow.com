# Generate social media captions for product images with Gemini AI and Telegram approval

> This n8n template demonstrates a complete AI-driven content pipeline for social media. It automatically generates captions and hashtags for new product images, collects human approval via Telegram, and publishes approved content to Twitter. It’s ideal for marketers, e-commerce businesses, and creators who want to speed up content creation while keeping human oversight.

## How it works

**Trigger**: The workflow starts when a new file is added to a specific Google Drive folder.

**File Analysis:** The image is processed to extract product information.

**AI Captioning:** Gemini generates a caption and five relevant hashtags based on the product.

**Telegram Approval:** The image, caption, and hashtags are sent to the user for approval.

✅ If approved → The content is posted to Twitter and a confirmation is sent back via Telegram.

🔄 If regenerate → Gemini creates a new caption and hashtags, and the approval loop repeats.

❌ If discard → A message is sent on Telegram and the workflow ends.

## Requirements

- Google Drive account

- Gemini API credentials for captioning and hashtags

- Telegram bot for approvals

- Twitter Developer Account with API credentials

## Customising this workflow

- Swap Google Drive with Dropbox, Notion, or Airtable as the content source.

- Extend publishing to LinkedIn, Instagram, or multiple platforms.

- Add multi-user approval flows in Telegram for team-based decisions.

## 📊 Basic Information

- **Workflow ID:** 8731
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 312
- **Downloads:** 31
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8731)

## 👤 Author

- **Name:** Ketan Sharma
- **Username:** @ketan1411

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **twitter** 
- **stickyNote** (×2)
- **googleDrive** (×3)
- **set** 
- **code** (×2)
- **telegram** (×5)
- **if** (×2)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
