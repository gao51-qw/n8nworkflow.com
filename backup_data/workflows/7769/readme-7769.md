# AI-powered restaurant booking system with Telegram, Calendar & Email notifications

> ## Overview

This workflow is an AI-powered Booking Assistant that automates restaurant and event reservations through Telegram. It interacts with the user in natural conversation, collects booking details (guest count, preferences, date/time, and special requests), finalizes the draft, and confirms the reservation by storing it in Google Calendar and sending an email confirmation — fully automated end-to-end.

---

## How It Works

### 1. User Interaction
- The workflow starts with a Telegram welcome message.  
- The AI agent asks step-by-step questions:  
  - Number of guests  
  - Seating preference (indoor/outdoor/private room)  
  - Special occasion requests (birthday, date, etc.)  
  - Preferred date & time  
- Once details are gathered, it generates a draft booking summary.

### 2. Confirmation & Personal Details
- The user reviews the draft and confirms.  
- The assistant then asks for personal details (name, email, phone number).

### 3. Booking & Notifications
- After confirmation, the details are sent to Google Calendar to create an event.  
- A confirmation email is sent to the user with all booking information.  
- A final Telegram message confirms that the reservation is successfully completed.

---

## How to Use
- Triggered directly from Telegram Bot.  
- Simply start chatting with the bot to begin the reservation process.  
- The assistant will guide the user step by step until the booking is finalized.  
- Once completed, the user receives both an email confirmation and a Telegram confirmation message.

---

## Requirements
To use this workflow, you’ll need:  
- n8n account (self-hosted or cloud)  
- Telegram Bot Token (for chat interaction)  
- OpenAI or OpenRouter API Key (for AI-driven conversation)  
- Google Calendar API access (to create bookings)  
- Gmail / SMTP credentials (to send confirmation emails)  


## 📊 Basic Information

- **Workflow ID:** 7769
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 2241
- **Downloads:** 224
- **Created:** 2025/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7769)

## 👤 Author

- **Name:** Aziz B
- **Username:** @azizb28

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **switch** 
- **telegram** (×3)
- **set** 
- **googleCalendar** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
