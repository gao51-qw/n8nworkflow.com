# Automate installation booking approvals with Slack & Gmail forms

> ## Who's it for

Service businesses that handle installation appointments and need an efficient approval process. Perfect for HVAC companies, internet providers, appliance installers, or any business that requires team coordination before confirming customer appointments.

## How it works

This workflow automates your entire installation booking process from form submission to customer communication. When a customer submits a booking request, your team gets notified via Slack with easy approve/reject buttons. Based on the team's decision, customers automatically receive either a confirmation email with appointment details or a friendly reschedule request with a new booking link.

## How to set up

1. **Connect your accounts**: Link your Slack workspace and Gmail account to n8n
2. **Configure the Slack channel**: Update the SLACK_CHANNEL_ID in the "Set Fields" node with your desired channel
3. **Customize your branding**: Update COMPANY_NAME, CONTACT_PERSON, and RESCHEDULE_LINK variables
4. **Deploy the form**: Use the form trigger URL on your website or share it directly with customers
5. **Test the workflow**: Submit a test booking to ensure everything works smoothly

## Requirements

- Active Slack workspace with a designated channel for booking notifications
- Gmail account for sending automated emails
- Basic n8n account (free tier works perfectly)

## How to customize the workflow

The workflow is designed for easy customization through the "Set Fields" node. You can modify:

- **Time slots**: Edit the dropdown options in the form trigger
- **Email templates**: Customize confirmation and reschedule email content
- **Slack notifications**: Adjust the message format and approval options
- **Form fields**: Add or remove customer information fields as needed

The configuration variables in the "Set Fields" node make it easy to adapt this workflow to your specific business needs without touching the core logic.

## 📊 Basic Information

- **Workflow ID:** 8124
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 169
- **Downloads:** 16
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8124)

## 👤 Author

- **Name:** Chris Rudy
- **Username:** @chrisrudy

## 🏷️ Categories

- Support Chatbot
- Ticket Management

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **slack** 
- **if** 
- **gmail** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
