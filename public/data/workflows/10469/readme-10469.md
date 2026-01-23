# Automated customer support with GPT-4o-mini AI triage for Google Forms & Gmail

> Transform your Google Form into an intelligent customer support system that automatically analyzes, prioritizes, and responds to every inquiry with AI-powered personalization.

## Who's it for

This workflow is perfect for:

- **Customer support teams** handling high volumes of form submissions
- **Small businesses** looking to provide instant, professional responses 24/7
- **E-commerce stores** managing product inquiries, complaints, and refunds
- **Service providers** triaging appointment requests and support tickets
- **Event organizers** responding to registration questions

## How it works

When someone submits your Google Form, this workflow:

- **Triggers instantly** from new Google Sheets row
- **Analyzes with AI** to determine urgency (low/medium/high), category (technical/sales/support/billing), and sentiment (positive/neutral/negative)
- **Routes intelligently** based on priority level to appropriate response template
- **Generates personalized reply** using OpenAI, tailored to urgency and sentiment
- **Sends auto-reply** via Gmail with professional formatting
- **Alerts your team** on Slack for high-priority cases requiring human follow-up
- **Logs everything** to tracking sheet for analytics and audit trail

## Set up steps

**Time to set up:** approximately 15-20 minutes

### Prerequisites

- Google Form connected to Google Sheets
- OpenAI API key (get one at platform.openai.com)
- Gmail account for sending emails
- Slack workspace (optional, for team alerts)

### Configuration steps

1. **Connect Google Sheets Trigger** to your form response sheet
2. **Update column names** in "Map Form Column Names" node (default: Name, Email Address, Inquiry)
3. **Add OpenAI credentials** - uses GPT-4o-mini for cost efficiency (approximately $0.001 per inquiry)
4. **Connect Gmail** via OAuth2 for sending auto-replies
5. **Create tracking sheet** with columns: timestamp, name, email, urgency, category, sentiment, summary, keywords, subject, inquiry
6. **(Optional) Connect Slack** for high-priority notifications
7. **Test with sample data** before activating

## Requirements

- Google Form (free)
- Google Sheets (free)
- OpenAI API account (approximately $0.001-0.002 per inquiry with GPT-4o-mini)
- Gmail account (free)
- Slack workspace (optional, free tier available)
- n8n Cloud or self-hosted instance

## How to customize

**Adjust triage criteria:**

Edit the "Analyze with AI Triage" prompt to define what qualifies as high/medium/low urgency for your business. Add custom categories beyond the default five (technical/sales/support/billing/general).

**Modify response templates:**

Customize the three response generation nodes to match your brand voice. Add company-specific information, policies, or FAQ links. Adjust tone from formal to casual based on your audience.

**Add advanced features:**

- Insert CRM integration to check customer history before responding
- Add condition nodes to route specific categories to different team members
- Include file attachments (brochures, manuals) based on inquiry type
- Implement follow-up sequences with Wait nodes
- Connect multiple notification channels (Discord, email, SMS)

**Multi-language support:**

The AI automatically detects and responds in the inquiry's language. Customize prompts with language-specific instructions if needed.

## Use cases

- **Product support:** Auto-respond to "how to use" questions with relevant documentation
- **Complaint management:** Immediately acknowledge issues and alert team for urgent follow-up
- **Lead qualification:** Instantly engage sales inquiries while routing to appropriate sales rep
- **Appointment requests:** Confirm booking inquiries and provide next steps
- **Feedback collection:** Thank customers and categorize feedback for analysis

## 📊 Basic Information

- **Workflow ID:** 10469
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 80
- **Downloads:** 8
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10469)

## 👤 Author

- **Name:** Daiki Takayama
- **Username:** @daiki-ai

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **code** (×2)
- **switch** 
- **gmail** 
- **if** 
- **slack** 
- **googleSheets** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
