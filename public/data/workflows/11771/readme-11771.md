# Book beauty appointments and answer FAQs with GPT-4, Google Calendar, Gmail, and Instagram

> 📝 Description

Instagram AI Beauty Assistant with Booking & Calendar Automation

💄 Smart Instagram AI Assistant for Beauty & Cosmetics Brands

Help customers instantly on Instagram using a smart AI assistant designed specifically for beauty, skincare, makeup, and nail businesses.
This workflow answers product questions using FAQs only, handles voice messages, and schedules consultation bookings with timezone-safe Google Calendar reservations and automatic confirmation emails.

Perfect for salons, cosmetic brands, clinics, and Instagram-first businesses.

⚙️ How it works

Customers send messages or voice notes via Instagram DM

The AI detects whether the message is:

A product or policy question

A voice message (which gets transcribed)

A request to book a consultation or meeting

Product questions are answered only using your FAQs (no hallucinations)

Booking requests:

Get grounded using the current date and time

Check available slots before booking

Collect customer details (name, phone, email, topic)

Confirmed bookings are created in Google Calendar with rich event summaries

A confirmation email is sent automatically to the customer

🧰 Setup steps

Connect your Instagram webhook or messaging API

Connect your OpenAI account (chat + voice transcription)

Connect Google Calendar for reservations

Connect Gmail for confirmation emails

Customize your FAQs and availability rules

Set your business timezone

That’s it — your Instagram assistant is ready to work 24/7 ✨

🔄 Customization tips

Update FAQs anytime without retraining the AI

Adjust tone and branding in the system message

Customize calendar summaries and email templates

Add rescheduling, cancellation, or reminders

Clone the workflow for multiple beauty brands or clients

🤝 Need Help Setting It Up or Customizing It?

If you’d like help connecting Instagram, setting up Google Calendar and Gmail, or customizing this AI assistant for your business or for clients…

📩 I offer setup and customization services including:

Instagram DM automation setup

Google Calendar & Gmail configuration

Timezone-safe booking logic

FAQ structuring and prompt tuning

Branding and tone customization

Error handling and escalation logic

You can reach me here:

Email: tharwat.elsayed2000@gmail.com

WhatsApp: +20 106 180 3236

## 📊 Basic Information

- **Workflow ID:** 11771
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 37
- **Downloads:** 3
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11771)

## 👤 Author

- **Name:** Tharwat Mohamed
- **Username:** @tharwatelsayed

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **if** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **googleDocsTool** 
- **dateTimeTool** 
- **googleCalendarTool** (×2)
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
