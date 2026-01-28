# WhatsApp outbound messaging with Baserow & WasenderAPI

> ## Master Outbound WhatsApp: Baserow & WasenderAPI

This workflow integrates with your Baserow 'Messages' table, triggering on 'Sent' status. Messages fire via WasenderAPI, rigorously logged as 'Outbound' in Baserow. Gain total control; drive results.

## How it works

* Monitors Baserow 'Messages' table for 'Sent' status.
* Sends messages via WasenderAPI.
* Logs outbound details in Baserow.

## Who's it for

For teams dominating outbound WhatsApp and centralizing Baserow logging. Demand communication efficiency? This is your solution.

## Setup Steps

Rapid implementation. Action plan:
1.  Activate all critical workflow nodes.
2.  Copy `Sent_whatsapp` webhook URL. Configure Baserow automation (on 'Sent' status) to trigger webhook.
3.  Ensure Baserow 'Messages' table includes 'Status' ('Sent' option), linked 'WhatsApp Number', and 'Message Content' fields. (Optional: [Baserow Message Form](https://baserow.io/form/B2TUPV0S_Fx3PKyNiKOQR4YAdo77RnvAxZyMw8jN7Uc) for input).
4.  Embed WasenderAPI and Baserow API tokens in n8n Credentials. Security is non-negotiable.

## Requirements

* Active n8n instance (self-hosted/cloud).
* WasenderAPI.com trial/subscription.
* Baserow account with pre-configured 'Contacts' ([link](https://baserow.io/public/grid/a5iWkAQpu8QljUlgwgm_pour_Au5BKd3mtkfu-B6N7Y)) and 'Messages' ([link](https://baserow.io/public/grid/0H22XZitFDWnrVNnKwBfiI7M6XX5CugHrXHEzdCY4xY)) tables.


## 📊 Basic Information

- **Workflow ID:** 6596
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 260
- **Downloads:** 26
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6596)

## 👤 Author

- **Name:** Stephan Koning
- **Username:** @reklaim

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **stickyNote** 
- **noOp** 
- **webhook** 
- **httpRequest** 
- **switch** 
- **baserow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
