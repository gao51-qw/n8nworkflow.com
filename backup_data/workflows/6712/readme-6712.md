# Sync event attendees from Eventbrite to Pipedrive automatically

> ### Eventbrite → Pipedrive Lead‑Sync

Bring your Eventbrite attendee data into Pipedrive automatically—no spreadsheets, CSVs, or manual uploads.

---

#### 🚀  What the Workflow Does
- **Polls Eventbrite** on a schedule (default 30 min) for *new* registrations.  
- **Creates or updates** matching **Person** and **Deal** records in Pipedrive.  
- **Deduplicates** by email and stores a timestamp so each attendee is processed only once.  
- **Easily configurable** field‑mapping lets you decide exactly which attendee data lands in Pipedrive.

---

#### 📋  Key Features
| Feature | Benefit |
|---------|---------|
| **Incremental Sync** | Processes only registrations created since the last run. |
| **Person + Deal Linking** | Keeps contacts and sales opportunities in one place. |
| **No Community Nodes** | 100 % official n8n nodes—simple to import and run. |
| **Fully Editable Code Node** | Swap your Eventbrite token, organization ID, and field mappings in seconds. |

---

#### 🔑  Prerequisites
- **Eventbrite Personal OAuth Token**  
- **Eventbrite Organization ID**  
- **Pipedrive API Token**  
- n8n 1.25 or later

---

#### 🛠  Quick Start
1. Import the workflow JSON.  
2. Open the **Code** node → paste your *Eventbrite token* and *organization ID*.  
3. Add your **Eventbrite** and **Pipedrive** credentials in their respective nodes.  
4. Activate the workflow and watch new registrants appear in Pipedrive within minutes.

---

### Contact
- **Email:** rbreen@ynteractive.com  
- **Website:** https://ynteractive.com  
- **YouTube:** https://www.youtube.com/@ynteractivetraining
-  **LinkedIn:** https://www.linkedin.com/in/robertbreen

## 📊 Basic Information

- **Workflow ID:** 6712
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 153
- **Downloads:** 15
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6712)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **code** 
- **pipedrive** (×2)
- **merge** 
- **scheduleTrigger** 
- **stickyNote** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
