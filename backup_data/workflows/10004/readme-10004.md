# Two-way property repair management system with Google Sheets & Drive

> 

## This workflow automates the repair request process between **tenants** and **building managers**, keeping all updates organized in a single spreadsheet. It is composed of **two coordinated workflows**, as two separate triggers are required — one for new repair submissions and another for repair updates. A **Unique Unit ID** that corresponds to individual units is attributed to each request, and **timestamps** are used to coordinate repair updates with specific requests. 

General use cases include: 
- **Property managers** who manage multiple buildings or units.
- **Building owners** looking to centralize tenant repair communication.
- **Automation builders** who want to learn multi-trigger workflow design in n8n.

---

## ⚙️ How It Works

### **Workflow 1 – New Repair Requests**

**Behind the Scenes:**
A tenant fills out a Google Form (“Repair Request Form”), which automatically adds a new row to a linked Google Sheet.

**Steps:**

1. **Trigger:** Google Sheets `rowAdded` – runs when a new form entry appears.
2. **Extract & Format:** Collects all relevant form data (address, unit, urgency, contacts).
3. **Generate Unit ID:** Creates a standardized identifier (e.g., `BUILDING-UNIT`) for tracking.
4. **Email Notification:** Sends the building manager a formatted email summarizing the repair details and including a **link to a Repair Update Form** (which activates Workflow 2).

---

### **Workflow 2 – Repair Updates**

**Behind the Scenes:**\
Triggered when the building manager submits a follow-up form (“Repair Update Form”).

**Steps:**

1. **Lookup by UUID:** Uses the Unit ID from Workflow 1 to find the existing row in the Google Sheet.
2. **Conditional Logic:**
   - **If photos are uploaded:** Saves each image to a Google Drive folder, renames files consistently, and adds URLs to the sheet.
   - **If no photos:** Skips the upload step and processes textual updates only.
3. **Merge & Update:** Combines new data with existing repair info in the same spreadsheet row — enabling a full repair history in one place.

---

## 🧩 Requirements

- Google Account (for Forms, Sheets, and Drive)
- Gmail/email node connected for sending notifications
- n8n credentials configured for Google API access

---

## ⚡ Setup Instructions (see more detail in workflow)

1. Import both workflows into n8n, then copy one into a second workflow. 
2. Change manual trigger in workflow 2 to a n8n Form node.
3. Connect Google credentials to all nodes.
4. Update spreadsheet and folder IDs in the corresponding nodes.
5. Customize email text, sender name, and form links for your organization.
6. Test each workflow with a sample repair request and a repair update submission.

---

## 🛠️ Customization Ideas

- Add Slack or Telegram notifications for urgent repairs.
- Auto-create folders per building or unit for photo uploads.
- Generate monthly repair summaries using Google Sheets triggers.
- Add an AI node to create summaries/extract relevant repair data from repair request that include long submissions.










## 📊 Basic Information

- **Workflow ID:** 10004
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 189
- **Downloads:** 18
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10004)

## 👤 Author

- **Name:** Matt@VeraisonLabs
- **Username:** @matt-vl

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **googleSheets** (×3)
- **googleDrive** 
- **stickyNote** (×15)
- **set** (×3)
- **gmail** (×2)
- **splitInBatches** 
- **code** (×3)
- **merge** 
- **if** 
- **googleSheetsTrigger** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
