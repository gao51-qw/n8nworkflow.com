# Multi-user Telegram bot to summarize & repurpose YouTube videos with GPT-4o

> ## 👤 Who’s it for
This workflow is for content creators, marketers, educators, or anyone who wants to **instantly summarize YouTube videos and repurpose them** into different formats (LinkedIn post, tweet, etc.) via a simple Telegram chatbot.

## ⚙️ How it works
This n8n automation listens for messages in Telegram. If the message contains a YouTube link, it:
- Extracts the video ID
- Fetches the video transcript using RapidAPI
- Cleans the transcript of any special characters
- Sends it to OpenAI to generate a summary

If the message is **not a link**, it simply acts as an AI chatbot using OpenAI with memory support.

✅ Supports follow-up prompts like:
- “Make it shorter”
- “Turn this into a LinkedIn post”
- “Create a tweet thread”

## 🧑‍🤝‍🧑 Multi-User Support

This Telegram bot supports multiple users simultaneously. It tracks memory and context separately for each user using Telegram's unique `chat_id`.

✅ Each user gets personalized AI replies  
✅ Follow-up commands work per user  
✅ No interference between users

## 🛠️ Requirements
- A Telegram bot token (get via [@BotFather](https://t.me/BotFather))
- An OpenAI API Key (from https://platform.openai.com/account/api-keys)
- A RapidAPI Key and Host (typically `youtube-transcript3.p.rapidapi.com`)

&gt; 🚨 API keys must be added manually — they are not included in the template.

## 🧩 How to Set It Up
1. Configure the **Telegram Trigger node** with your bot token.
2. In the **HTTP Request node**, set:
   - `X-RapidAPI-Key`: your RapidAPI key
   - `X-RapidAPI-Host`: your RapidAPI host URL
3. Add your **OpenAI API credentials** to the AI Agent node.

Use the provided sticky notes for guidance inside the workflow itself.

## 🎛️ How to Customize
- Modify AI prompt behavior in the **AI Agent node**
- Change the text formatting in the **Code node**
- Use a different transcript API if preferred
- Add commands like `make it into a blog post`, `summarize in bullet points`, etc.

## 📌 Notes
- All nodes are renamed to reflect their function
- API credentials are removed for security
- Includes colored boxes and sticky notes to guide the user
- Compatible with n8n cloud and self-hosted setups



## 📊 Basic Information

- **Workflow ID:** 5468
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 734
- **Downloads:** 73
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5468)

## 👤 Author

- **Name:** Aashiq
- **Username:** @aashiqq

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegramTrigger** 
- **if** 
- **set** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
