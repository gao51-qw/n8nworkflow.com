# Deploy a Google Gemini AI assistant on WhatsApp with email & calendar tools

> # Deploy a Multi-Tool AI Assistant on WhatsApp with Google Gemini

Deploy a true AI assistant on WhatsApp. This n8n workflow uses a sophisticated hierarchical agent structure to not only handle conversations but also manage your emails and calendar directly from your chat, all powered by **Google Gemini**.

---

### Key Features
- **Powered by Google Gemini:** Utilizes the advanced capabilities of Google's Gemini models for understanding complex commands and generating natural, human-like responses.
- **Intelligent Task Delegation (Hierarchical Agents):** Features a central **Personal Agent** that understands the user's intent and intelligently delegates tasks to specialized sub-agents for email, calendar, or general chat.
- **Full Email & Calendar Management:** Connects directly to your Google Workspace to send emails, create drafts, apply labels, create/update/delete calendar events, check your availability, and more.
- **Context-Aware Conversations:** Employs memory at multiple levels, allowing the assistant to remember the context of your requests for a coherent and intuitive user experience.
- **Seamless WhatsApp Integration:** Connects directly with the WhatsApp Business API to send and receive messages, engaging users on one of the world's most popular messaging platforms.
- **Easy to Deploy & Customize:** Get your assistant running with minimal configuration and easily extend its capabilities by adding new tools or modifying the prompts of the existing agents.

---

## How It Works

The workflow uses an advanced agent-based model to process incoming messages:

1.  The **Whatsapp Trigger** node listens for and receives new messages sent to your WhatsApp Business number.
2.  The message is passed to the main **Manager Agent**.
3.  The **Personal Agent** analyzes the message to understand the user's intent (e.g., "send an email," "check my schedule," or just "hello").
4.  Based on the intent, it routes the task to the appropriate sub-agent: the **Email Tool**, the **Calendar Tool**, or the general **Chatbot Model**.
5.  The selected sub-agent executes the task using its own dedicated tools (e.g., the Email Tool uses Gmail nodes to send a message).
6.  The result or response from the sub-agent is passed back to the **Send message (WhatsApp)** node, which delivers the reply to the user.

---

## Prerequisites
- An active n8n instance.
- A Meta Business Account and a configured Meta App with the "WhatsApp Business" product added.
- A Google Gemini API Key.
- A Google Account with pre-configured OAuth2 credentials in n8n for **Gmail** and **Google Calendar**.

---

## Step-by-Step Setup Guide

#### 1. Configure WhatsApp Credentials:
- In your n8n instance, add new **"WhatsApp Business"** credentials.
- You will need a **Permanent Access Token** and a **Phone Number ID** from your Meta App's "WhatsApp &gt; API Setup" dashboard.

#### 2. Set Up the WhatsApp Trigger:
- Open the **Whatsapp Trigger** node. In the "Webhook URL" section, copy the **Test URL**.
- Go to your Meta App's dashboard under "WhatsApp &gt; Configuration".
- Click "Edit" in the Webhooks section.
- Paste the n8n Test URL into the **Callback URL** field.
- Create and enter a **Verify token** (a simple password of your choice). Enter this same token in the **Whatsapp Trigger** node in n8n.
- Subscribe to the `messages` webhook event.
- Once verified, copy the **Production URL** from n8n and paste it into the same Callback URL field in the Meta dashboard.

#### 3. Configure the Google Gemini Nodes:
- You must add your **Google Gemini API Key** to the credentials for **all** the **Google Gemini Chat Model** nodes. This includes the one in the `Chatbot Model`, `Email Tool`, and `Calendar Tool`.

#### 4. Configure the Google Tools (Email & Calendar):
- **Email Tool:** Open the group of nodes labeled **Email Tool**. For every Gmail node (`Send Email`, `Create Draft`, `Get Labels`, etc.), select your pre-configured Google OAuth2 credential.
- **Calendar Tool:** Open the group of nodes labeled **Calendar Tool**. For every Google Calendar node (`Create Event`, `Get all event`, etc.), select your pre-configured Google OAuth2 credential.

#### 5. Activate and Test:
- Save and activate the workflow.
- Send a message to your configured WhatsApp Business number.

## 📊 Basic Information

- **Workflow ID:** 8826
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 435
- **Downloads:** 43
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8826)

## 👤 Author

- **Name:** Anshul Chauhan
- **Username:** @anshulchauhan

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **whatsAppTrigger** 
- **whatsApp** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agentTool** (×2)
- **gmailTool** (×7)
- **googleCalendarTool** (×7)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
