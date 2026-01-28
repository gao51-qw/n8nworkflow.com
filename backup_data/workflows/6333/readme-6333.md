# Automatic email unsubscribe handler: Outlook to BigQuery integration

> ## 🚫 Email Unsubscribe Handler for Outlook 

## Description
This n8n workflow automatically scans recent email replies from your Outlook inbox and identifies unsubscribe requests. If a contact replies with any variation of "unsubscribe" within the past 7 days, the system performs two key actions:

Saves the contact’s email address in a BigQuery unsubscribes table (for compliance and tracking).

Deletes that contact from the active leads table in BigQuery (to stop future outreach).

This flow can be triggered on a schedule (e.g. every 4 hours) or run manually as needed.

## Key Features
📥 Email Parsing from Outlook: Automatically monitors for replies that contain unsubscribe language.

🧠 Smart Filtering: Captures unsubscribes based on message content, not just subject lines.

🔄 BigQuery Integration: Logs unsubscribed emails and removes them from your leads dataset.

## 🤝 Connect with Me

## Description  
I’m Robert Breen, founder of Ynteractive — a consulting firm that helps businesses automate operations using **n8n**, **AI agents**, and custom workflows. I’ve helped clients build everything from intelligent chatbots to complex sales automations, and I’m always excited to collaborate or support new projects.

If you found this workflow helpful or want to talk through an idea, I’d love to hear from you.

## Links  
🌐 Website: [https://www.ynteractive.com](https://www.ynteractive.com)  
📺 YouTube: [@ynteractivetraining](https://www.youtube.com/@ynteractivetraining)  
💼 LinkedIn: [https://www.linkedin.com/in/robert-breen](https://www.linkedin.com/in/robert-breen)  
📬 Email: rbreen@ynteractive.com

## 📊 Basic Information

- **Workflow ID:** 6333
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 619
- **Downloads:** 61
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6333)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×3)
- **splitInBatches** 
- **summarize** (×2)
- **set** (×2)
- **scheduleTrigger** 
- **googleBigQuery** (×2)
- **code** 
- **microsoftOutlook** 
- **filter** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
