# Generate images with OpenAI DALL-E via Telegram & log to Google Sheets

> ## 📌 Workflow Description

This workflow allows users to generate AI images directly from Telegram while automatically logging each request to Google Sheets for tracking. When a user sends a prompt to your Telegram bot, the workflow receives the prompt, generates an image using OpenAI, saves the prompt and generated image link to Google Sheets, and then sends the image back to the user in Telegram.



## ⚙️ How to Set It Up


Connect your Telegram credentials by adding your bot token in both the Telegram Trigger and Telegram Send Message nodes. Ensure your bot is added to the intended chat.

Connect your OpenAI credentials by inserting your API key in the OpenAI node and configuring it for image generation.

Connect your Google Sheets account by authorising the Google Sheets node and selecting the target spreadsheet and worksheet where you want to save prompts and image links.

Finally, activate the workflow and test by sending a prompt to your Telegram bot to confirm that the image is generated, saved to Google Sheets, and sent back to Telegram seamlessly.

That’s it – your AI Image Generator with Google Sheets logging is ready to use.
		
⸻

✅ That’s it – your AI Image Generator with Google Sheets logging is ready for use.

## 📊 Basic Information

- **Workflow ID:** 5462
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2541
- **Downloads:** 254
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5462)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **telegramTrigger** 
- **telegram** 
- **stickyNote** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
