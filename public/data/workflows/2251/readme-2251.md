# Verify mailing address deliverability of contacts in Keap/Infusionsoft using Lob

> ## Description
This n8n workflow verifies the deliverability of mailing addresses stored in Keap/Infusionsoft by integrating with Lob’s address verification service.

## Who is this for?
This template is designed for Keap/Infusionsoft users who need to ensure the accuracy of mailing addresses stored in their CRM systems.

## What problem is this workflow solving? / Use Case
This workflow addresses the challenge of maintaining accurate mailing addresses in CRM databases by verifying the deliverability of addresses.

## What this workflow does
* A new contact is created in Keap/Infusionsoft
* Webhook sent to n8n
* Verify if the address is deliverable via LOB
* Report back to Keap/Infusionsoft

## Set Up Steps

Watch this setup video:
https://www.youtube.com/watch?v=T7Baopubc-0
Takes 10-30 minutes to set up

## Accounts Needed:
* Keap/Infusionsoft
* LOB Account (https://www.lob.com $0.00/mo 300 US addresses Verifications)
* n8n

Before using this template, ensure you have API keys for your Keap/Infusionsoft app and Lob. Set up authentication for both services within n8n.

## How to customize this workflow to your needs
You can customize this workflow by adjusting the trigger settings to match Keap/Infusionsoft’s workflow configuration. Additionally, you can modify the actions taken based on the deliverability outcome, such as updating custom fields or sending notifications.

## 📊 Basic Information

- **Workflow ID:** 2251
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 548
- **Downloads:** 54
- **Created:** 2024/5/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2251)

## 👤 Author

- **Name:** Belmont Digital
- **Username:** @belmontdigital

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×4)
- **set** 
- **httpRequest** 
- **keap** (×2)
- **webhook** 
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
