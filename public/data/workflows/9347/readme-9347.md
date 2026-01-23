# Facebook Messenger Bot with GPT-4 for Text, Image & Voice Processing

> ### How it Works

This workflow lets you build a **Messenger AI Agent** capable of understanding **text**, **images**, **and voice notes**, and replying intelligently in real time.

It starts by receiving messages from a Facebook Page via a **Webhook**, detects the message type (text, image, or audio), and routes it through the right branch. Each input is then prepared as a **prompt** and sent to an **AI Agent** that can respond using text generation, perform quick calculations, or fetch information from Wikipedia.

Finally, the answer is formatted and sent back to Messenger via the **Graph API**, creating a smooth, fully automated chat experience.


### Set Up Steps

	1.	Connect credentials
Add your **OpenAI API key** and **Facebook Page Access Token** in n8n credentials.

	2.	Plug the webhook
Copy the Messenger webhook URL from your workflow and paste it into your Facebook Page Developer settings (Webhook → Messages → Subscribe).

	3.	Customize the agent
Edit the **System Message** of the AI Agent to define tone, temperature, and purpose (e.g. “customer support”, “math assistant”).

	4.	Enable memory & tools
Turn on **Simple Memory** to keep conversation context and activate tools like **Calculator** or **Wikipedia**.

	5.	Test & deploy
Switch to production mode, test text, image, and voice messages directly from Messenger.


### Benefits

💬 **Multi-modal Understanding** — Handles text, images, and audio messages seamlessly.
⚙️ **Full Automation** — End-to-end workflow from Messenger to AI and back.
🧠 **Smart Replies** — Uses OpenAI + Wikipedia + Calculator for context-aware answers.
🚀 **No-Code Setup** — Build your first Messenger AI in less than 30 minutes.
🔗 **Extensible** — Easily connect more tools or APIs like Airtable, Google Sheets, or Notion.

## 📊 Basic Information

- **Workflow ID:** 9347
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 2668
- **Downloads:** 266
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9347)

## 👤 Author

- **Name:** Stéphane Bordas
- **Username:** @stephanebordas

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **switch** 
- **function** 
- **set** (×3)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** 
- **stickyNote** (×16)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
