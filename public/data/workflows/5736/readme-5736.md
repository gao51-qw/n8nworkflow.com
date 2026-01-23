# AI-powered WhatsApp chatbot with Venom Bot & Google Gemini (no official API)

>   **Get Started
**

Creator: @obisdev

This workflow powers a fully automated WhatsApp chatbot using a self-hosted Venom Bot instead of the official WhatsApp Business API. It integrates Google Gemini AI to generate intelligent, conversational responses and optionally pulls factual information from a Google Docs-based knowledge base. Designed for small businesses and creators, the bot can maintain contextual memory across messages and act as a smart virtual assistant for sales, support, and lead generation.

**Overview**

This n8n workflow connects with a custom-hosted Venom Bot that simulates WhatsApp Web to send and receive messages. It uses a Webhook trigger to receive incoming messages, processes them with an AI Agent powered by Gemini, optionally pulls extra data from a Google Doc or Google Sheet, and sends a smart reply back through the Venom Bot. The workflow also includes a memory system to retain user context, making it capable of handling follow-up questions and dynamic conversations.

**Who this workflow is for**

Small Business Owners:
Offer 24/7 customer service on WhatsApp without paying for Meta’s Business API.

Freelancers & Developers:
Build, test, and monetize intelligent bots without the approval process of WhatsApp’s API.

Online Sellers & Creators:
Handle FAQs, orders, and customer inquiries via WhatsApp on autopilot.

Marketers:
Deploy campaign bots that respond to DMs with personalized product suggestions or lead captures.

Hackers & Builders:
Experiment with unofficial APIs to control WhatsApp reliably without breaking TOS for small-scale use.

**Tools Used**
n8n: The automation platform managing flow, context, and decision logic.

Venom Bot: A Node.js-based, self-hosted WhatsApp Web bot used to send/receive messages.

Google Gemini: AI engine for generating context-aware replies.

Google Docs (Optional): Acts as a structured knowledge base for business info or FAQs.

Google Sheets (Optional): Feeds real-time or structured data into your AI responses.

**How to Install**

Import the Workflow: Download the .json and import it into your n8n instance.

Set Up Venom Bot: Deploy Venom Bot (on VPS or local) and set it to send messages to your Webhook URL.

Webhook Configuration: Update the Webhook node in n8n and set 'Respond' to "Using Respond to Webhook Node".

Connect Google Gemini: Add your Gemini API key in n8n credentials.

Set Up Google Docs (Optional): Link the document containing your knowledge base.

Enable Conversational Memory: Use ={{ $("Process Message").first().json.from }} as the session ID.

Check API Key Matching: Ensure the API_SECRET_KEY in Venom .env matches the authorization header in n8n.

Customize Persona & Prompts: Update the AI Agent system message to fit your brand tone.

Use Cases
Customer service without WhatsApp Business API

Smart lead generation bots

E-commerce order responders

AI-powered chatbot for DMs

FAQ responder with knowledge base support

Connect with Me
Email: obisdev@gmail.com
Twitter/X: @obisdev
GitHub: github.com/obisdev
Visit: obisdev.vercel.app

#n8n #whatsappautomation #venombot #chatbots #noapi #geminiapi #googleworkspace #aiassistant #nocode #vpsautomation #chatbotwithoutapi #automationtools #customerbot #salesautomation #googleintegration



## 📊 Basic Information

- **Workflow ID:** 5736
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 2065
- **Downloads:** 206
- **Created:** 2025/7/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5736)

## 👤 Author

- **Name:** ObisDev
- **Username:** @obisdev

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **code** (×3)
- **googleDocs** 
- **httpRequest** (×2)
- **respondToWebhook** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
