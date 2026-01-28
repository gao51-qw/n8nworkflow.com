# Personalized lead response with AI videos using Scout, GPT-4, and HeyGen

> 🎥 AI-Powered Inbound Video Agent: Auto-Respond to Leads with Personalized Videos
Description: This workflow automates the first-touch response for inbound leads by creating and delivering a hyper-personalized video and follow-up email, all in seconds, using a powerful stack: n8n, Scout, HeyGen API, and OpenAI.

How It Works (The Lead Journey):

📥 Form Trigger: Captures initial user inputs (name, email, address).

🔎 Data Enrichment (Scout): Instantly looks up lead details like property type, homeownership status, and household income.

✍️ Script Agent (GPT-5/LangChain): An AI agent writes a professional, 15-second outreach script, tailoring the message with three discussion paths based on the enriched Scout data.

🎬 Video Generation (HeyGen): Triggers an avatar video using the custom script.

📧 Delivery Logic: Waits for the video to complete, retrieves the final URL/thumbnail, and passes it to the next step.

🔗 Email Writer (GPT-4): Generates an HTML outreach email, embedding the video thumbnail and including a direct booking link (Calendly).

🚀 Send Email (Gmail Node): Sends the complete, personalized message to the inbound lead automatically.

Key Integrations:

Scout: Lead Data Enrichment

HeyGen: AI Avatar Video Generation

OpenAI (GPT-4/LangChain): Scriptwriting and Email Copy

Gmail: Automated Email Delivery

Setup Note: Ensure you have configured n8n credentials for HeyGen (httpHeaderAuth), Scout (HTTP Request header), OpenAI, and Gmail (OAuth2).

## 📊 Basic Information

- **Workflow ID:** 9967
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 161
- **Downloads:** 16
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9967)

## 👤 Author

- **Name:** Drew Fabrikant
- **Username:** @trustscout

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **formTrigger** 
- **wait** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×6)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
