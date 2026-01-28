# Automate marketing campaigns with Airtable CRM & Brevo email tracking

> # 🎯 General principles

This template automates the management of marketing campaign from a CRM based on Airtable, using Brevo for sending and tracking emails.

## 🧩 It is based on two main steps:
1. Sending emails to targeted companies in Airtable, creating an interaction record for each sent email.

2. Real-time tracking of events (email delivered / opened / clicked, unsubscribe request) via a n8n webhook, updating the corresponding interaction or company record.

This workflow provides precise tracking of marketing actions and facilitates the history of interactions with prospects or clients.

________________________________________

# Prerequisites
### Airtable with at least 3 tables:
* Company: Contains information about your clients or prospects.
* Interaction: Log of exchanges and events.
* Campaign: Information about the ongoing campaign.

### Brevo:
* A predefined email template, which can include a link to a form.
* API access for sending and tracking emails.

________________________________________

# ⚙️ Step-by-step description
## 1️⃣ Sending Emails
### Selecting targeted companies
The workflow queries the Company table in Airtable, filtering on a tag or a specific field related to the campaign (e.g., Campaign = "1").
### Preparing data for Brevo
For each company, retrieves the necessary information: email address.
### Sending the email via Brevo
Uses a Brevo Send Template node with a predefined template.
Brevo returns a unique identifier for each email sent.
### Creating an interaction in Airtable
A record is added to the Interaction table containing:
* Company
* Date and time of interaction
* Media = email
* Brevo email identifier
________________________________________

## 2️⃣ Tracking Events
### Receiving Brevo events
Brevo triggers a webhook to n8n for each event:
* Delivered
* Opened
* Clicked
* Unsubscribed
### Matching with the interaction
* Based on the Brevo identifier received, the workflow finds the corresponding Interaction in Airtable.
### Updating the interaction
* The interaction status is updated based on the event (e.g., "Opened" with date and time).
### Managing unsubscribes
In case of an unsubscribe:
* The workflow finds the Company associated via the interaction.
* A specific field in the Company table (e.g., Opt-in) is updated to "No" in order to exclude this company from future campaigns.
________________________________________
## ✅ Benefits of this template
* Automated sending and real-time tracking.
* Interaction history stored in the CRM.
* RGPD (European regulations) compliance through automatic unsubscribe management.
* Clear view of campaign effectiveness (open rates, clicks, etc.).

### 📬 Contact
Need help customizing this (e.g., expanding Data Tables, connecting multiple surveys, or automating follow-ups)?

📧 [smarthome.smartelec@gmail.com](smarthome.smartelec@gmail.com)
🔗 [guy.salvatore](https://www.linkedin.com/in/guy-salvatore-3570911a/)
🌐 [smarthome-smartelec.fr](https://smarthome-smartelec.fr)

## 📊 Basic Information

- **Workflow ID:** 7318
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 609
- **Downloads:** 60
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7318)

## 👤 Author

- **Name:** Guy
- **Username:** @guy

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **wait** 
- **stickyNote** (×6)
- **sendInBlue** 
- **set** (×2)
- **airtable** (×8)
- **webhook** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
