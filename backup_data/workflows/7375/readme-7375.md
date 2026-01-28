# Send WhatsApp notifications for Cal.com & Calendly bookings using Google Gemini

> ## Who's it for
Business owners, freelancers, and professionals who use Cal.com or Calendly for scheduling and want instant WhatsApp notifications for all booking activities without constantly checking their email or calendar apps.

## What it does
This workflow automatically monitors your calendar booking events from both Cal.com and Calendly, then sends beautifully formatted WhatsApp messages to notify you of:
- New bookings with guest details
- Rescheduled meetings with old vs new times  
- Cancelled appointments
- Meeting completion notifications (Cal.com only)

The AI agent intelligently formats each message with emojis, proper spacing, and all relevant booking information including guest names, emails, dates, times, locations, and notes.

## How it saves you time
**Stop checking multiple platforms:** Instead of constantly monitoring email notifications, calendar apps, and booking dashboards, get everything instantly on WhatsApp - the app you're already using throughout the day.

**Immediate awareness:** Know about booking changes the moment they happen, not hours later when you finally check your email. This means you can quickly adjust your schedule, prepare for meetings, or reach out to clients if needed.

**Mobile-first notifications:** Since most people check WhatsApp more frequently than email, you'll never miss important booking updates again. Perfect for busy professionals who are often away from their desk.

## How it works
When a booking event occurs on either platform, the workflow captures the data, merges it through an aggregator, then uses Google Gemini AI to generate a professionally formatted WhatsApp message that gets sent instantly to your phone.

## Requirements
- Cal.com and/or Calendly account with API access
- WhatsApp Business API credentials
- Google API key for Gemini
- Active webhook endpoints for both calendar services

## How to customize
- Update the recipient phone number in the WhatsApp node
- Modify message templates in the AI Agent's system prompt
- Add additional calendar platforms by connecting more trigger nodes
- Customize emoji usage and message formatting to match your brand

## 📊 Basic Information

- **Workflow ID:** 7375
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1030
- **Downloads:** 103
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7375)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **calTrigger** 
- **calendlyTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **whatsApp** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
