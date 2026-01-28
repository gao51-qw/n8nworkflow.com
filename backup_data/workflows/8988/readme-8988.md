# Send daily mortgage rate updates from Mortgage News Daily to messaging platforms

> ## AI-Powered Mortgage Rate Updates with Client Messaging

Keep your clients informed without the repetitive work. This workflow automatically pulls the latest mortgage rates, cleans the data, and uses AI to craft polished messages you can send directly to clients. Whether you want professional emails, quick SMS-style updates, or even CRM-ready messages, this setup saves time while making you look on top of the market.  

### How it Works
1. **Daily Trigger** – Runs on a schedule you choose (default: multiple times per day).  
2. **Fetch Rates** – Pulls the latest mortgage rates from *Mortgage News Daily* (you can swap to another source).  
3. **Clean Data** – Prepares and formats the raw rate data for messaging.  
4. **AI Messaging** – Uses Google AI Studio (Gemini) to generate text/email content that’s clear, professional, and client-ready.  
   - You can **customize the prompt** to adjust tone or style.  
   - Include variables (like client names or CRM fields) for personalized outreach.  
5. **Send Updates** – Delivers the AI-crafted message to Discord by default for you to copy and send to your clients or upload yto your bulk iMessage or email tool, but can be adapted for:  
   - Slack, Telegram, WhatsApp, or Gmail  


### Why Use This
- **Save hours** - No more copy-pasting rates into client messages.  
- **Look prepared** - Clients see you as proactive, not reactive.  
- **Customizable** - Use AI prompts to match your personal voice, include client-specific details, or change the delivery channel.  
- **Scalable** – Works for one agent or an entire brokerage team.  

With this workflow, by the time your client asks “what are rates today?”, they’ll already have a polished update waiting in their inbox or chat. 🚀


## 📊 Basic Information

- **Workflow ID:** 8988
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 161
- **Downloads:** 16
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8988)

## 👤 Author

- **Name:** Kaden Reese
- **Username:** @kadenreese

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **code** 
- **discord** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.googleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
