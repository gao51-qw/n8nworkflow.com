## ✅ What problem does this workflow solve?

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

