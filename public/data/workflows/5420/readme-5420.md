# Edit & deliver images with DALL-E 2, Google Drive & Telegram messaging

> ## 🎨 AI Image Editor with Form Upload + Telegram Delivery 🚀

Who’s it for? 👥

This workflow is built for content creators, social media managers, designers, and agencies who need fast, AI-powered image editing without the hassle. Whether you're batch-editing for clients or spicing up personal projects, this tool gets it done — effortlessly.

## What it does 🛠️

A seamless pipeline that:

📥 Accepts uploads + prompts via a clean form
☁️ Saves images to Google Drive automatically
🧠 Edits images with OpenAI’s image API
📁 Converts results to downloadable PNGs
📬 Delivers the final image instantly via Telegram
Perfect for AI-enhanced workflows that need speed, structure, and simplicity.

## How it works ⚙️

User Uploads: Fill a form with an image + editing prompt
Cloud Save: Auto-upload to your Google Drive folder
AI Editing: OpenAI processes the image with your prompt
Convert & Format: Image saved as PNG
Telegram Delivery: Final result sent straight to your chat 💬
You’ll need ✅

🔑 OpenAI API key
📂 Google Drive OAuth2 setup
🤖 Telegram bot token & chat ID
⚙️ n8n instance (self-hosted or cloud)
Setup in 4 Easy Steps 🛠️

## 1. Connect APIs

Add OpenAI, Google Drive, and Telegram credentials to n8n
Store keys securely (avoid hardcoding!)
## 2. Configure Settings

Set Google Drive folder ID
Add Telegram chat ID
Tweak image size (default: 1024×1024)
## 3. Deploy the Form

Add a Webhook Trigger node
Test with a sample image
Share the form link with users 🎯
4. Fine-Tune Variables
In the Set node, customize:

📐 Image size
📁 Folder path
📲 Delivery options
⏱️ Timeout duration
Want to customize more? 🎛️

🖼️ Image Settings

Change size (e.g. 512x512 or 2048x2048)
Update the model (when new versions drop)
📂 Storage

Auto-organize files by date/category
Add dynamic file names using n8n expressions
📤 Delivery

Swap Telegram with Slack, email, Discord
Add multiple delivery channels
Include image prompt or metadata in messages
📝 Form Upgrades

Add fields for advanced editing
Validate file types (e.g. PNG/JPEG only)
Show a progress bar for long edits
⚡ Advanced Features

Add error handling or retry flows
Support batch editing
Include approvals or watermarking before delivery
⚠️ Notes & Best Practices
✅ Check OpenAI credit balance
🖼️ Test with different image sizes/types
⏱️ Adjust timeout settings for larger files
🔐 Always secure your API keys


## 📊 Basic Information

- **Workflow ID:** 5420
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 431
- **Downloads:** 43
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5420)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **googleDrive** (×2)
- **httpRequest** 
- **convertToFile** 
- **telegram** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
