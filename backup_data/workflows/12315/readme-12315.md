# Send Stripe expired charge recovery reminders with OpenAI

> ## Stripe Invoice Reminder Workflow

### Who’s this for
Businesses using Stripe subscriptions or one-time payments who want to automatically follow up with customers after a failed payment.

### What this workflow does
- Detects expired or failed charges in Stripe
- Drafts AI-generated payment reminders for customers
- Creates a new Stripe invoice for the failed payment
- Optionally sends reminders via Email or Slack

### How it works
1. Stripe trigger listens for expired charges
2. Set node normalizes customer and payment information
3. OpenAI node drafts a friendly payment reminder
4. Stripe node creates a new invoice
5. Optional Email/Slack node sends the reminder

### How to set up
- Connect Stripe account and enable 'charge.expired' events
- Connect OpenAI API credentials
- Configure Email or Slack notifications if desired
- Optional: Customize AI prompt for company tone

### Requirements
- n8n account with Stripe integration
- OpenAI API key
- Optional Email/Slack integration

### How to customize
- Change AI prompt to fit brand voice
- Include dynamic invoice details or subscription links
- Add internal alerts for accounting teams
- Modify email templates or Slack messages


## 📊 Basic Information

- **Workflow ID:** 12315
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 32
- **Downloads:** 3
- **Created:** 2025/12/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12315)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stripeTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stripe** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
