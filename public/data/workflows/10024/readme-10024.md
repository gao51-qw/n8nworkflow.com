# Sync Eventbrite orders & refunds to KlickTipp for automated event marketing

> ![Subscribe Eventbrite orders to KlickTipp3.png](fileId:3105)


**Community Node Disclaimer**  
This workflow uses KlickTipp community nodes and works only on **self-hosted** n8n instances.

## Introduction
Automate **Eventbrite order and refund processing** by syncing data directly to **KlickTipp**.  
Whenever a participant registers or requests a refund, their profile is updated with event details and tags—keeping your segmentation accurate and automated.

## Who’s it for
Perfect for **event organizers**, **digital marketers**, and **automation specialists** using Eventbrite and KlickTipp who want to eliminate manual imports and keep contact data consistent.

## How it works
1. **Eventbrite Trigger** captures `order.placed` and `order.refunded` events.  
2. **Switch Node** routes logic:
   - 🟢 *Order placed* → Adds contact, fetches event data, and tags buyer.  
   - 🔴 *Refunded* → Adds refund tag and removes buyer tag.  
3. **Enrichment** stores event name, page URL, and end date in KlickTipp fields.  
4. **Fee check** applies extra segmentation for paid vs. free events.  
5. KlickTipp updates contacts automatically—no manual steps needed.

## Requirements
- Self-hosted **n8n** (community node support)  
- **Eventbrite** account (OAuth2)  
- **KlickTipp** account (API access)  
- KlickTipp custom fields:
  - `Eventbrite | Event name`  
  - `Eventbrite | Start timestamp`  
  - `Eventbrite | Event page URL`  
- KlickTipp tags:
  - `Eventbrite | Buyer`  
  - `Eventbrite | Refundee`  
  - `Eventbrite | Registrant`

## How to set up
1. **Connect accounts:** Eventbrite (OAuth2) & KlickTipp (API).  
2. **Map fields:** Event name, date, and URL to KlickTipp custom fields.  
3. **Update tag IDs:** Replace with your own KlickTipp IDs.  
4. **Test the flow:** Place an order → verify tags → trigger a refund to test removal.  

&gt; 💡 *Tip:* Enable auto tag removal in KlickTipp so `Buyer` tags are removed when `Refundee` tags are added.

## How to customize
- Adapt field mappings to match your KlickTipp setup.  
- Adjust tag rules for different event types or ticket tiers.  
- Extend for multiple events or recurring campaigns.

## Campaign expansion ideas
- Track **attendance vs. no-shows** using participation tags.  
- Add **VIP or ticket-type** segmentation.  
- Trigger **follow-up automations** for refundees or attendees.  
- Connect to other tools for reminders, surveys, or upsells.



## 📊 Basic Information

- **Workflow ID:** 10024
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 59
- **Downloads:** 5
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10024)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **n8n-nodes-klicktipp.klicktipp** (×3)
- **switch** 
- **stickyNote** (×7)
- **eventbriteTrigger** 
- **httpRequest** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
