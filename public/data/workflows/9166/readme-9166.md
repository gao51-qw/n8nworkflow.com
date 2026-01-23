# GPT-4o: Twilio integration with auto follow-up features

> ### How it works
• Twilio webhook detects missed/unanswered calls automatically
• Analyzes call context (time of day, business hours, weekend/weekday)
• Checks CRM for existing customer data and purchase history (optional)
• AI Chain (GPT-4o) generates personalized recovery messages for SMS and Email
• Sends instant apology with booking link via SMS and/or Email
• Logs all interactions to Airtable for tracking
• Slack alerts sales team with customer priority and context
• Waits 24 hours and checks if customer booked
• Sends automatic follow-up SMS if no booking detected
• Structured output parser ensures reliable JSON formatting

### Set up steps
• **Time to set up:** 15-20 minutes
• Add Twilio credential and configure phone number in both SMS nodes
• Get Slack channel ID for sales team alerts
• Create Airtable base with 10 columns (Caller_Number, Customer_Name, Call_Time, Priority, SMS_Sent, Email_Sent, Booking_Link, Status, Urgency_Score, Follow_Up_Date)
• Replace booking URL with your Cal.com or Calendly link
• Configure business email for SMTP sending
• Update business phone and name in follow-up SMS
• Add credentials: Twilio API, OpenAI (GPT-4o), Slack OAuth2, Airtable Token, SMTP Email
• Replace placeholder IDs in Slack and Airtable nodes
• Optional: Configure CRM API for existing customer lookup (or disable those nodes)

### What you'll need
• **Twilio** - Phone number with SMS capability
• **OpenAI API** - GPT-4o access for AI message generation
• **Slack** - Standard workspace for sales alerts
• **Airtable** - Free plan works for call tracking
• **Email SMTP** - Gmail, SendGrid, or any SMTP provider
• **Cal.com or Calendly** - Booking link for instant scheduling
• **CRM API** (optional) - HubSpot, Salesforce, or custom CRM

### Who this is for
Service businesses, agencies, and sales teams that lose revenue from missed calls. Perfect for businesses with high call volume that need instant personalized follow-up to recover lost opportunities.

## 📊 Basic Information

- **Workflow ID:** 9166
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 178
- **Downloads:** 17
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9166)

## 👤 Author

- **Name:** Greypillar
- **Username:** @greypillar

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **merge** 
- **code** (×4)
- **stickyNote** 
- **twilioTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×3)
- **twilio** (×2)
- **emailSend** 
- **airtable** 
- **slack** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
