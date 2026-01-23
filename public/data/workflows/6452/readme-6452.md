# WhatsApp support assistant with GPT-4 Mini & Google Sheets data training

> # WhatsApp AI HelpDesk – Smart SupportBot Using Trained Data & WasenderAPI

## Overview

This n8n workflow enables automated AI-driven support replies via your personal WhatsApp number using WasenderAPI.com. The bot intelligently responds to user messages based on trained data stored in Google Sheets, helping you avoid the high cost of WhatsApp Business API.

---

## What It Does

- Reads real-time data from a connected Google Sheet  
- Sends AI-generated responses based on predefined training data  
- Automatically applies rate limits to avoid account blocking  
- Updates each contact's support status after responding  

---

## Who’s It For

This workflow is ideal for:

- Freelancers and small businesses offering support through WhatsApp  
- Customer service teams seeking to automate common queries  
- Entrepreneurs looking to deploy a cost-effective support assistant  
- SaaS founders managing WhatsApp inquiries without expensive API costs  

---

## Prerequisites

Make sure the following components are ready:

- An active WhatsApp account (Personal or Business)  
- WasenderAPI subscription (around $6/month)  
- OpenAI API access (around $20/month)  
- n8n instance (self-hosted or cloud)  
- Google Sheets API connected to n8n  
- A training sheet like this sample:  
  https://docs.google.com/spreadsheets/d/1Ui4TzzI-Gq-bsEsrZELwW1Kyddw0IU9L1wxlHikktqw/edit?usp=sharing  

---

## Setup Instructions

### 1. Connect WasenderAPI

- Add your WhatsApp session to WasenderAPI  
- In n8n, create a Webhook node  
- Copy the webhook URL and paste it into your WasenderAPI session settings  

### 2. Connect OpenAI

- Add an OpenAI node in n8n  
- Authenticate using your OpenAI credentials  
- Configure the prompt to reference the data from your Google Sheet  

### 3. Connect Google Sheets

- Add a Google Sheets node  
- Authenticate using your Google account  
- Select the appropriate Spreadsheet and Worksheet  
- Format your sheet similarly to the sample template above  

---

## How to Customize the Workflow

To tailor the workflow to your business needs:

- **Update the training data** in your Google Sheet to include your own FAQs, product info, or customer scripts  
- **Adjust prompt instructions** in the OpenAI node to change the tone, style, or behavior of the response  
- **Add filtering logic** using IF or SWITCH nodes to categorize and route different types of messages  
- **Integrate CRM or ticketing systems** via additional HTTP or database nodes  
- **Set custom response delay** or batching using WAIT or LIMIT nodes to control the load  

---


## Support & Community

Need help setting up or customizing the workflow? Reach out here:

- WhatsApp: [Chat with Support](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Server](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Community](https://www.facebook.com/groups/spagreenbd)  
- Website: [SpaGreen Creative](https://spagreen.net)  
- Envato: [SpaGreen Portfolio](https://codecanyon.net/user/spagreen/portfolio)


## 📊 Basic Information

- **Workflow ID:** 6452
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 100
- **Downloads:** 10
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6452)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** (×4)
- **webhook** 
- **code** 
- **httpRequest** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
