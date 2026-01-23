# Google Sheets to SinergiaCRM: automate event participant registration

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**How it works**

- This workflow automates the registration of event participants in SinergiaCRM from a Google Sheets spreadsheet.
- A Google Sheets Trigger watches for new rows with pending registrations.
- The flow checks if the participant already exists in SinergiaCRM by NIF (national ID).
- If the contact exists, it creates a relationship and registers them for an event.
- If the contact doesn’t exist, it first creates the contact, then adds the relationship and event registration.
- Finally, it marks the row as "Processed" in the original spreadsheet to avoid duplicate entries.

**Set up steps**

- Connect your Google Sheets and SinergiaCRM accounts using OAuth credentials.
- Replace the sample Google Sheet ID and worksheet name with your own.
- Ensure the spreadsheet contains the following columns: First name, Last name, NIF, Email, Event ID, Relation type, Registration date, and Relation date.
- Add the appropriate values in the "To CRM" and "Processed" columns to control processing logic.
- Review sticky notes inside the workflow for additional guidance and customization tips.

## 📊 Basic Information

- **Workflow ID:** 8088
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 85
- **Downloads:** 8
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8088)

## 👤 Author

- **Name:** Javier Quilez Cabello
- **Username:** @javierquilez

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **n8n-nodes-sinergiacrm.sinergiaCrm** (×6)
- **googleSheets** (×2)
- **if** (×3)
- **merge** 
- **set** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
