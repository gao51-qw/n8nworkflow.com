# Automate invoice processing & stock management with AI, Gmail, Sheets & Slack

> ## ✅ What problem does this workflow solve?

Order processing often involves manual invoice reading, stock checking, and back-and-forth communication between procurement and operations teams. This workflow automates the **entire procurement decision flow** — from reading incoming order emails to extracting structured data, checking stock, and creating either a purchase requisition or a work order automatically.

---

## 💡 Main Use Cases

- 📥 Auto-extract order and invoice details from incoming emails  
- 📦 Validate stock availability before processing orders  
- 📝 Auto-create **Purchase Requisitions** when stock is insufficient  
- 🛠 Auto-create **Work Orders** when stock is available  
- 📧 Notify procurement or operations via email & Slack  
- 📊 Log every action in Google Sheets for tracking and audit  

---

## 🧠 How It Works – Step-by-Step

### 1. 📧 Gmail Trigger  
The workflow begins when a new email arrives at a specific email address.  
The invoice file is automatically downloaded for processing.

---

### 2. 📑 Extract Invoice Record  
The attached invoice is processed using OCR or a document extraction tool.  
Raw details such as:
- Order ID  
- Item code  
- Quantity  
- Customer information  

are extracted for further processing.

---

### 3. 🤖 AI-Powered Data Structuring  
OpenAI structures the extracted fields into a clean and consistent format:  
- `order_id`  
- `item_code`  
- `quantity`  
- `customer_name`  

This ensures all data is normalised before stock validation.

---

### 4. 📦 Stock Check  
The workflow checks inventory data stored in **Google Sheets**.  
It compares:
- Required quantity  
- Current stock  

If stock is **insufficient**, it triggers the purchase requisition path.  
If stock is **available**, it initiates the work order path.

---

### 5. 🔀 Conditional Flow

#### **If stock is insufficient:**  
- Creates a **Purchase Requisition** record in Google Sheets  
- Sends an **email notification** to the procurement team for approval  

#### **If stock is sufficient:**  
- Creates a **Work Order** entry in Google Sheets  
- Sends a **Slack summary message** to the operations team  

This ensures teams are notified instantly, and work continues without delays.

---

## 📊 Logging & Reporting  
Every step — extracted data, PR created, WO created, notifications sent — is logged in Google Sheets.  
This provides a full audit trail for procurement and operations teams.

---

## 👤 Who can use this?

Ideal for:
- Procurement teams  
- Operations departments  
- Manufacturing & warehouse units  
- Businesses processing high-volume emailed orders  
- Any team needing structured, automated order workflows  

---

## 🚀 Benefits

- ⏱ Faster order processing  
- 🧠 Fewer manual errors from invoice reading  
- 📦 Smarter procurement decisions based on real stock  
- 🔁 Automated communication loops  
- 📊 Transparent audit logs for every order  

---



## 📊 Basic Information

- **Workflow ID:** 11678
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 125
- **Downloads:** 12
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11678)

## 👤 Author

- **Name:** InfyOm Technologies
- **Username:** @infyom

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** (×4)
- **if** 
- **slack** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
