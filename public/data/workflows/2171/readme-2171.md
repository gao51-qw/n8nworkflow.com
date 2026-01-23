# Verify mailing address deliverability of new contacts in HighLevel Using Lob

> This n8n workflow verifies the deliverability of mailing addresses stored in HighLevel by integrating with Lob's address verification service.

## Who is this for?
This template is designed for HighLevel users who need to ensure the accuracy of mailing addresses stored in their CRM systems.

## What problem is this workflow solving? / Use Case
This workflow addresses the challenge of maintaining accurate mailing addresses in CRM databases by verifying the deliverability of addresses.

## What this workflow does
1. A new contact is created in HighLevel
2. Webhook sent to n8n
3. Verify if the address is deliverable via LOB
4. Report back to HighLevel

Set Up Steps
- Watch this setup video: 
https://www.youtube.com/watch?v=T7Baopubc-0

## Takes 10-30 minutes to set up
Accounts Needed:
HighLevel
LOB Account (https://www.lob.com $0.00/mo 300 US addresses Verifications)
n8n

Before using this template, ensure you have API keys for your HighLevel app and Lob. Set up authentication for both services within n8n. 

## How to customize this workflow to your needs
You can customize this workflow by adjusting the trigger settings to match HighLevel's workflow configuration. Additionally, you can modify the actions taken based on the deliverability outcome, such as updating custom fields or sending notifications.

## 📊 Basic Information

- **Workflow ID:** 2171
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2903
- **Downloads:** 290
- **Created:** 2024/3/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2171)

## 👤 Author

- **Name:** Belmont Digital
- **Username:** @belmontdigital

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×4)
- **set** 
- **webhook** 
- **httpRequest** 
- **highLevel** (×2)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
