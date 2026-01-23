Transform your Telegram chats into a creative powerhouse with this AI-driven image editing bot. Send an image document with a descriptive caption, and watch it get intelligently edited in seconds—no design skills required!

## 📋 What This Template Does
This workflow powers a Telegram bot that automatically processes incoming image documents with text prompts. It downloads the file, uses Google Gemini AI to edit the image based on your caption, and instantly replies with the enhanced version.
- Triggers on new messages containing documents and captions
- Securely downloads and validates files before AI processing
- Leverages Gemini for precise, prompt-based image edits
- Sends the polished result back to the chat seamlessly

## 🔧 Prerequisites
- A Telegram bot created via @BotFather
- Google AI Studio account for Gemini API access
- n8n instance with Telegram and Google Gemini nodes enabled

## 🔑 Required Credentials

### Telegram API Setup
1. Open Telegram and message @BotFather
2. Use `/newbot` to create your bot and note the token
3. In n8n, go to Credentials → Add Credential → Search "Telegram API"
4. Paste the token and save as "Telegram Bot"

### Google Gemini API Setup
1. Visit aistudio.google.com and sign in with Google
2. Click "Get API key" → Create API key in a new project
3. In n8n, go to Credentials → Add Credential → Search "Google Gemini API"
4. Enter the API key and save as "Gemini API"

## ⚙️ Configuration Steps
1. Import the provided JSON into your n8n workflows
2. Assign the Telegram Bot credential to the trigger and Telegram nodes
3. Assign the Gemini API credential to the Edit Image node
4. Activate the workflow and note your bot's username
5. Test by sending an image document with a caption like "add a sunset background" to your bot

## 🎯 Use Cases
- **Personal creativity boost**: Send a selfie with "make me a superhero" for fun edits during downtime
- **Social media content**: Upload product photos with "enhance lighting and add text overlay" for quick marketing visuals
- **Educational sketches**: Share drawings with "colorize and detail" to turn student ideas into professional illustrations
- **Team collaboration**: In group chats, prompt "remove background" for instant design feedback loops

## ⚠️ Troubleshooting
- **Bot not responding**: Verify token in credentials and ensure "message" updates are enabled in the trigger
- **File download fails**: Check if the sent file is a document/image; Telegram expires links after 1 hour—resend if needed
- **AI edit errors**: Confirm Gemini API key quotas; shorten prompts if over 100 words for better results
- **No edited image sent**: Inspect execution log for binary data flow; ensure "binaryData" is toggled on in send node