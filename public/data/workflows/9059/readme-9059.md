# Auto-generate social media posts from URLs with AI, Telegram & multi-platform posting

> ## How it works

This workflow turns any URL sent to a Telegram bot into ready-to-publish social posts:
	1.	Trigger: Telegram message (checks if it contains a URL).
	2.	Fetch & parse: Downloads the page and extracts readable text + title.
	3.	AI writing: Generates platform-specific copy (Facebook, Instagram, LinkedIn).
	4.	Image: Creates an AI image and stores it in Supabase Storage.
	5.	Publish: Posts to Facebook Pages, Instagram Business, LinkedIn.
	6.	Logging: Updates Google Sheets with post URLs and sends a Telegram confirmation (image + links).

## Setup
	1.	Telegram – create a bot, connect via n8n Telegram credentials.
	2.	OpenAI / Gemini – add API key in n8n Credentials and select it in the AI nodes.
	3.	Facebook/Instagram (Graph API) – create a credential called facebookGraph with:
	•	accessToken (page-scoped or system user)
	•	pageId (for Facebook Page photos)
	•	igUserId (Instagram Business account ID)
	•	optional fbApiVersion (default v19.0)
	4.	LinkedIn – connect with OAuth2 in the LinkedIn node (leave as credential).
	5.	Supabase – credential supabase with url and apiKey. Ensure a bucket exists (default used in the Set node is social-media).
	6.	Google Sheets – replace YOUR_GOOGLE_SHEET_ID and Sheet1. Grant your n8n Google OAuth2 access.

## Notes
	•	No API keys are stored in the template. Everything runs via n8n Credentials.
	•	You can change bucket name, image size/quality, and AI prompts in the respective nodes.
	•	The confirmation message on Telegram includes direct permalinks to the published posts.

## Required credentials
	•	Telegram Bot
	•	OpenAI (or Gemini)
	•	Facebook/Instagram Graph
	•	LinkedIn OAuth2
	•	Supabase (url + apiKey)
	•	Google Sheets OAuth2

## Inputs
	•	A Telegram message that contains a URL.

## Outputs
	•	Social posts published on Facebook, Instagram, LinkedIn.
	•	Row appended/updated in Google Sheets with post URLs and image link.
	•	Telegram confirmation with the generated image + post links.

## 📊 Basic Information

- **Workflow ID:** 9059
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 999
- **Downloads:** 99
- **Created:** 2025/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9059)

## 👤 Author

- **Name:** Karol Otręba
- **Username:** @smart-camp-ai

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **stickyNote** (×9)
- **function** (×2)
- **httpRequest** (×7)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **merge** (×4)
- **if** 
- **telegram** (×2)
- **code** (×4)
- **linkedIn** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
