# Forward Netflix emails to multiple email addresses with GMail and Mailjet

> # Who is this template for?
This workflow template is designed for everyone with a Gmail address, who wants to forward all Netflix emails, including temporary login codes, to friends and family effortlessly.

## How it works
1. Scans your Gmail inbox every minute for new e-mails from Netflix
2. Forwards all Netflix e-mails to all desired e-mail addresses via the e-mail provider Mailjet 

## Setup Steps
1. Connect your Google Mail Account to n8n following the [official n8n instructions](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)
2. Add all recipients you want to the recipients array at the "Set all recipients" node.
3. Create and connect your Mailjet Account to n8n following the [official n8n instructions](https://docs.n8n.io/integrations/builtin/credentials/mailjet/). Note: You cannot use an Gmail e-mail address as the sender address, as mailjet does not support this. I recommend using your own email address from a custom domain. This works perfectly.



## 📊 Basic Information

- **Workflow ID:** 2279
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1668
- **Downloads:** 166
- **Created:** 2024/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2279)

## 👤 Author

- **Name:** Manuel
- **Username:** @automate-everything

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **gmailTrigger** 
- **mailjet** 
- **set** 
- **splitOut** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
