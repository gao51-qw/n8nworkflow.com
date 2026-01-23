# Generate Facebook marketing content from images with Telegram & Gemini

> ## 📝 Description
Instantly turn images into marketing content with one Telegram message.

It automatically:

Accepts an image and caption via Telegram

Sends the image to an AI model with your brand’s content rules

Generates copy with headline, body, hashtags, and CTA

Sends it back to you for approval 

On approval, posts directly to your Facebook Page

If rejected or sent as plain text, request edits and it will regenerate your content

## 🎯 Key Advantages for Content Teams
✅ Creates professional post content from raw images in seconds
✅ Keeps the process inside Telegram—no app-switching
✅ Allows fast edits through natural text replies
✅ Reduces creative workload using your own AI style guide
✅ Posts directly to Facebook—no copy-pasting needed

## 🛠️ Features
Telegram Bot Trigger (via Telegram API)

Image file parsing + downloading

AI Content Generation using OpenRouter + LangChain

Custom Brand Prompt: Hook + Content + CTA in natural Arabic

JSON Parsing with fallback handling

Dual approval route (human- or bot-origin)

Facebook publishing via Graph API

Retry loop: users can request changes directly

Sticky notes on all nodes for fast onboarding

## 🔧 Requirements

Telegram Bot Token

Facebook Page access with pages_manage_posts + pages_read_engagement

OpenRouter API key (or another LLM provider)

n8n credentials for:

Telegram Bot

Facebook (OAuth or Bearer token)

OpenRouter (or alternative)

## 🧠 Use Case Examples
🧴 Beauty Brands: Auto-generate Arabic content from new skincare routine photos

🏥 Clinics: Transform testimonial photos into compliant social posts

🧢 Streetwear Shops: Quickly convert customer-submitted photos into engaging product drops

📚 Education Pages: Teachers send photos and instantly get shareable awareness content

🐾 Pet Pages: Easily publish heartfelt stories from community-submitted photos


## ⚙️ Customization Tips
Edit the Brand Prompt
Update the AI node with your own brand tone, examples, and structure.

Switch LLMs
Swap the OpenRouter model with Gemini, GPT-4, or others by changing the LLM node.

Change Post Target
Replace the Facebook post URL with Instagram or your CMS webhook.

Customize Loop Logic
Adjust the re-triggering workflow to better match your desired Telegram conversation UX.

If you need any help [Get in touch](https://www.linkedin.com/in/abdallaelshikh0/)


## 📊 Basic Information

- **Workflow ID:** 6635
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 794
- **Downloads:** 79
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6635)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **if** (×2)
- **telegram** (×5)
- **executeWorkflow** (×2)
- **stickyNote** (×20)
- **switch** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
