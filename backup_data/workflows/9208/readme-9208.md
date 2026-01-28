# Automate RSS-to-social media with AI summaries and image generation

> ## How it works

This workflow automates publishing content from any RSS feed directly to Facebook and Instagram.
It reads new RSS entries, extracts the article content, generates a short social-media-friendly summary using an AI model, and then creates an AI-generated image based on the topic.
The post is uploaded to Facebook and Instagram (via Graph API) and logged in Google Sheets for reference.
Finally, a Telegram bot sends you a notification with links to the published posts.

## Set up steps
	1.	Insert your RSS feed URL in the RSS Feed Trigger node.
	2.	Configure Google Sheets credentials and replace the example sheet with your own.
	3.	In Supabase Config, insert your Supabase URL and bucket name.
	4.	In Facebook/Instagram nodes, replace [INSERT_YOUR_SITE_ID] with your own page or account ID.
	5.	Connect your Facebook Graph API credentials (remove hardcoded tokens).
	6.	Connect your OpenAI / Anthropic / Gemini credentials for text and image generation.
	7.	Set up your Telegram Bot credentials if you want to receive notifications.

## Notes
	•	Sticky notes inside the workflow explain each section (RSS trigger, filtering, content generation, posting, logging, notifications).
	•	No credentials are saved in the template – you must connect your own before running.
	•	All generated content (text + images) is fully automated but can be customized (e.g. change AI prompts for your preferred style).


## 📊 Basic Information

- **Workflow ID:** 9208
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 738
- **Downloads:** 73
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9208)

## 👤 Author

- **Name:** Karol Otręba
- **Username:** @smart-camp-ai

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedReadTrigger** 
- **googleSheets** (×2)
- **if** 
- **httpRequest** (×6)
- **html** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×3)
- **stickyNote** (×9)
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
