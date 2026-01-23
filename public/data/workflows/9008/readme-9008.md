# Multimodal telegram bot with voice, image & video analysis using Claude & Gemini

> # What it's for:
This is a base template for anyone trying to develop a telegram AI Agent. This base allows for multiple inputs (Voice, Picture, Video, and Text inputs) to be processed by an AI model of their choosing to a get a User started. From here, the User may connect any tools that they see fit to the AI Agent for their n8n workflows.

# How it works:
**Input**: Telegram message to a bot chat

**n8n Processing**: Switch node determines the type:
1. Voice Message
2. Picture Message
3. Video Message
4. Text Message

(Currently uses OpenAI and Gemini to analyze Voice/Photo/Video content but feel free to change these nodes with other models)

**AI Agent Proccessing**: LLM of your choosing examines message and based on system prompt, generates an output

**Output**: AI Output is sent back in telegram Message

# How to use:
 1. Create your chat bot and generate access token
-&gt; Search Bot father in telegram
-&gt; Type "/newbot"
-&gt; follow instructions and create access token
-&gt; Copy access token

 2. Create Credentials in n8n
-&gt; Open telegram trigger node
-&gt; Click create credential
-&gt; Paste access token
-&gt; Save

 3. Create LLM access token
 (Different per LLM but search your LLM + API in google)
-&gt; (will have to create an account with the LLM platform)
-&gt; buy credits to use LLM API
-&gt; Generate Access token
-&gt; Paste token in LLM node

# Requirements:
- Telegram Bot Access Token
- Google Gemini Access Token (For Picture and Video messages)
- OpenAI Access Token (For Voice messages)
- LLM Access Token (Your preference for the AI Agent)

# Customizing this workflow:
- To personalize the AI Output, adjust the system prompt (give context or directions on the AI's role)
- Add tools to the AI agent to give it more utility besides a personalied LLM (Example: Calendars, Databases, etc).

## 📊 Basic Information

- **Workflow ID:** 9008
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 1338
- **Downloads:** 133
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9008)

## 👤 Author

- **Name:** Keith Uy
- **Username:** @keithuy

## 🏷️ Categories

- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **dateTimeTool** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **telegram** (×4)
- **stickyNote** (×15)
- **merge** 
- **set** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
