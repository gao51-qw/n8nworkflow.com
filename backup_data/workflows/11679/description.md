## ✅ What problem does this workflow solve?

Managing inventory manually requires constant monitoring, manual purchase order creation, and back-and-forth communication with suppliers.  
This workflow automates the **entire inventory replenishment cycle** — from detecting low-stock items to generating purchase orders and emailing suppliers automatically.  
It ensures accurate stock levels, reduces manual work, and prevents stockouts.

---

## 💡 Main Use Cases

- 🔍 Identify low-stock items automatically based on thresholds  
- 📊 Perform scheduled daily inventory checks  
- 🧾 Auto-generate purchase orders for items that need replenishment  
- ✉️ Email purchase orders directly to suppliers  
- 📄 Update Google Sheets with order and inventory tracking information  

---

## 🧠 How It Works – Step-by-Step

### 1. ⏰ Scheduled Trigger  
The workflow runs automatically every day (or any chosen interval) to begin inventory checks without manual involvement.

---

### 2. 📉 Get Low-Stock Items  
Reads your Google Sheets inventory file to identify items where **current stock &lt; minimum stock threshold**.

---

### 3. 🧮 Process Each Low-Stock Item  
For every item below the # Header 1threshold:
- Calculates the required order quantity  
- Generates purchase order details, including  
  - SKU / Item Name
  - Quantity Needed 
  - Supplier Email
  - Stock Levels

---

### 4. 🔀 Conditional Flow  
For each low-stock item:

#### **Purchase Order Actions**
- Creates a purchase order email using the generated details  
- Sends the PO automatically to the supplier via Gmail  
- Logs the PO entry in Google Sheets with:
  - Item Details  
  - Order Quantity  
  - Supplier  
  - Timestamp  
  - Status (“PO Sent”)  

---

### 5. 📢 Notifications  
Sends purchase order emails directly to suppliers.  
(Optional) Internal notifications (Slack/email) can be added for procurement visibility.

---

## 📊 Logging & Reporting  
All actions — PO creation, stock levels, supplier emails — are written back to Google Sheets for complete auditability and reporting.

---

## 👤 Who can use this?

Perfect for:
- Retail & eCommerce businesses  
- Warehouse teams  
- Procurement & purchasing departments  
- Manufacturing operations  
- Any business managing physical inventory  

---

## 🚀 Benefits

- ⏱ Automated stock monitoring  
- 📦 Prevents stockouts  
- ✉️ Eliminates manual PO creation  
- 📚 Creates a complete audit trail  
- 🧠 Smart, rule-based reorder logic  

---
