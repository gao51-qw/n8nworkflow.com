# Qualify real estate leads via SMS with GPT-4o, Twilio, and Google Sheets

> ## 🏡 AI-Powered Real Estate Lead Qualifier (n8n Workflow)

## Description
This n8n workflow automates lead engagement and qualification for real estate buyers. When someone submits a form on your real estate website, the system instantly responds via SMS, starting a conversation powered by an AI Agent. The AI asks pre-qualifying questions (like budget, location, and timeline), logs the entire conversation, and then summarizes and sends the lead info to a real estate agent. Chat history is stored in a PostgreSQL database (via Supabase) and tied to each buyer's phone number.

## Key Features
📩 Instant SMS Response: Follows up immediately after form submission.

🤖 AI Chat-Based Qualification: Conversational agent gathers buyer needs and preferences.

🗂 Supabase Chat Memory: Stores chat history tied to the buyer’s phone number to maintain context.

📊 Lead Summary & Agent Handoff: Summarizes conversation and logs it to Google Sheets for the agent.

🔁 Customizable AI Questions: Easily edit the questions asked by the AI to suit your process.

## 🤝 Connect with Me

## Description  
I’m Robert Breen, founder of Ynteractive — a consulting firm that helps businesses automate operations using **n8n**, **AI agents**, and custom workflows. I’ve helped clients build everything from intelligent chatbots to complex sales automations, and I’m always excited to collaborate or support new projects.

If you found this workflow helpful or want to talk through an idea, I’d love to hear from you.

## Links  
🌐 Website: [https://www.ynteractive.com](https://www.ynteractive.com)  
📺 YouTube: [@ynteractivetraining](https://www.youtube.com/@ynteractivetraining)  
💼 LinkedIn: [https://www.linkedin.com/in/robert-breen](https://www.linkedin.com/in/robert-breen)  
📬 Email: rbreen@ynteractive.com

## 📊 Basic Information

- **Workflow ID:** 6332
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 3973
- **Downloads:** 397
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6332)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **twilio** (×4)
- **twilioTrigger** 
- **if** 
- **postgres** 
- **aggregate** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
