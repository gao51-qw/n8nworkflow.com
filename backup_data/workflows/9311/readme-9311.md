# Create your first AI agent

> ## Who is this for?

This workflow is designed for anyone who wants to automate AI-driven chat responses integrated with Google Docs and Google Sheets, using the Google Gemini (PaLM) language model via n8n. It’s perfect for teams looking to:
- Automatically generate AI replies to chat messages,
- Pull content dynamically from Google Docs,

## What this Workflow Does

- Receives chat messages via a webhook trigger.
- Sends the chat input to the Google Gemini AI Chat Model for generating replies.
- Optionally retrieves a document from Google Docs if a URL or ID is provided.
- Uses an AI agent node to coordinate between the AI model and tools like Google Docs.

## Key Features

- Integration with Google Gemini (PaLM) AI for natural language understanding and response generation.
- Ability to fetch and use data from Google Docs dynamically.
- Modular structure using n8n nodes for flexibility and easy customization.
- Credential management for Google APIs (Docs, Gemini) via n8n’s built-in credential system.

## Get Your Google AI API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Click **"Create API key in new project"**.
3. Copy the API key that appears.

## Add Your Credential in n8n
1. On the **workflow canvas**, go to the **Connect your model (Google Gemini)** node.
2. Click the **Credential** dropdown and select **+ Create New Credential**.
3. Paste your **API key** into the `API Key` field.
4. Click **Save**.

## Start Chatting!
1. Go to the **Example Chat** node.
2. Click the **"Open Chat"** button in its parameter panel.
3. Try asking it one of the example questions:
   - _"What's your name?"_
   - _"What time now in bangladesh?"_
   - _"What's the weather in bangladesh?"_

You're now ready to chat with your **personal AI agent powered by Google Gemini**! 🎉

## Requirements
- n8n instance with internet access.
- Google Cloud account with:
  - Access to PaLM API (Google Gemini).
- Proper OAuth2 credentials configured in n8n for Google APIs.
---

## 🙋 For Help & Community
- 👾 Discord: [n8n channel](https://discord.gg/9SDFKGnh2Y)
- 🌐 Website: [devcodejourney.com](https://devcodejourney.com)
- 🔗 LinkedIn: [Connect with Shakil](https://www.linkedin.com/in/shakilpg/)
- 📱 WhatsApp Channel: [Join Now](https://whatsapp.com/channel/0029Vb5l6JuDTkK5BRORNn0B)
- 💬 Direct Chat: [Message Now](https://wa.me/8801316320957)

## 📊 Basic Information

- **Workflow ID:** 9311
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9311)

## 👤 Author

- **Name:** DevCode Journey
- **Username:** @devcodejourney

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.googleGeminiTool** 
- **googleDocsTool** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
