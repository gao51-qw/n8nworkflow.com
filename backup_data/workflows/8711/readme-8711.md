# Sync face-to-face fundraising data from offline Google Sheets to SinergiaCRM

> Automate syncing of offline donor data from Google Sheets into SinergiaCRM for fast, error-free face-to-face fundraising tracking.

### Who is this workflow for?
This workflow is perfect for nonprofit organizations that run face-to-face fundraising campaigns and collect donor data offline (e.g. via tablets or spreadsheets). It helps fundraising and CRM teams ensure donor records are correctly and automatically stored in **SinergiaCRM**, a popular CRM platform used by NGOs.

### What it does / How it works
- Watches a Google Sheet for new rows (also works offline if synced later).
- Filters rows marked `To CRM = Yes` and `Processed = No`.
- Checks if the donor already exists in **SinergiaCRM** (based on NIF).
- If the contact exists: creates a “member” relationship and a payment commitment.
- If not: creates the contact first, then adds the relationship and commitment.
- Finally, updates the original row as “Processed” to prevent re-importing.

### Requirements
- An active **Google Sheets** account with the donor spreadsheet.
- A **SinergiaCRM** account with API/OAuth access.
- Fields `First name`, `Last name`, `Email`, `NIF`, `To CRM`, `Processed` must exist in the sheet.
- SinergiaCRM modules enabled: Contacts, stic_Contacts_Relationships, stic_Payment_Commitments.

### How to set up
1. Connect your **Google Sheets** account and set the correct Document ID and Sheet name in the trigger and update nodes.  
2. Connect your **SinergiaCRM** account using OAuth credentials.  
3. Adjust the `assigned_user_id` field if required by your CRM instance.  

### How to customize the workflow
- Change the filter conditions in the IF nodes to match your business logic.
- Customize fields like relationship type, amount, and periodicity to suit your campaign.
- Add or remove nodes if you want additional steps (like sending Slack notifications).

📌 Category: **CRM & Customer Management**  
📘 [Learn more about SinergiaCRM](https://sinergiacrm.org)


## 📊 Basic Information

- **Workflow ID:** 8711
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 25
- **Downloads:** 2
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8711)

## 👤 Author

- **Name:** Javier Quilez Cabello
- **Username:** @javierquilez

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **merge** 
- **set** 
- **stickyNote** (×6)
- **n8n-nodes-sinergiacrm.sinergiaCrm** (×6)
- **googleSheetsTrigger** 
- **if** (×3)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
