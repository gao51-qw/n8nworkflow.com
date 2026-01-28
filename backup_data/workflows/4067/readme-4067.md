# Automated email assistant for suppliers using OpenAI and Google Sheets

> ## Automated Email Assistant for Busy Professionals

This assistant is designed for people who don't have time to write and send emails to suppliers. With just one request, it drafts and sends clear, professional messages automatically.

## How It Works
The user makes a request (e.g., “Send an email to my fruit supplier asking for a quote on 1 crate of mangoes.”).

## Workflow:

1. The AI agent searches for the supplier in a Google Sheets database.

2. It automatically drafts the email using OpenAI (with the tone and style you define).
 
3. It sends the email using your Gmail account connected through n8n.
 
## This assistant uses:

- Google Sheets to manage your suppliers (name and email).

- OpenAI to generate clear, natural messages.
  
- MCP (client-server logic) to handle request processing.
  
- Gmail as the sending channel for automated emails.
  

## Setup Instructions

1. Create a Google Sheets document with the supplier name and email, like this:

|Supplier name|Email|
|-|-|
|Proveedor de frutas Alvarez|fruteriaalvarez@alvarez.com|
 
2. Connect your Google Sheets and Gmail accounts within n8n.
 
3. Add your OpenAI API key.

Test the automation by chatting with the integrated assistant.
It will generate and send the email automatically to the indicated supplier.

## Requirements
- OpenAI API key to generate email content.
- Gmail account connected via OAuth2.
- Google Sheets document with your supplier database.
- n8n instance (cloud or self-hosted).

## Customization

Adjust the OpenAI prompt to make the email tone more formal, casual, or technical.

Add custom fields to your supplier sheet (location, notes, special conditions).

Replace Google Sheets with a real database like Supabase or PostgreSQL for greater scalability.


## 📊 Basic Information

- **Workflow ID:** 4067
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1421
- **Downloads:** 142
- **Created:** 2025/5/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4067)

## 👤 Author

- **Name:** Omar Hdez
- **Username:** @omarhdez

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **gmailTool** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
