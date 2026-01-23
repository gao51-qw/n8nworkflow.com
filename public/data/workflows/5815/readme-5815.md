# Automated inventory management with Airtable PO creation & supplier emails

> **In-depth description of this automation:**

This is a fully automated daily supply chain and procurement workflow that keeps product stock levels healthy and suppliers updated, by automatically generating and emailing purchase orders (POs) and syncing PO statuses in Airtable.

---

### **📅 Daily triggers**

* Two `Schedule Trigger` nodes run:

  * One runs at midnight (00:00) to manage low stock and new purchase order creation.
  * Another runs at 1:00 AM to process existing pending POs and email suppliers.

---

### **🚦 Step-by-step breakdown**

#### 1️⃣ **Get Products with low stock**

* Searches the “Products Table” in Airtable for items where `{stock_level} &lt;= {reorder_threshold}`.
* Detects products that need restocking.

#### 2️⃣ **Get supplier details**

* Fetches supplier data for each low-stock product using its `supplier_id`.

#### 3️⃣ **Calculate Dynamic Reorder Quantity**

* JS code calculates an optimal reorder quantity:

  * Uses `average_daily_sales × (lead_time × 1.5) × safety_margin (1.2)`
  * Adds extra buffer so the new order covers both immediate demand and next cycle.

#### 4️⃣ **Search existing POs**

* Looks in the “Purchase Orders” table for active POs (status `Pending` or `Sent`) matching each product.
* Prevents duplicate orders.

#### 5️⃣ **Remove duplicate product orders**

* JS node compares current low-stock products with existing POs.
* Filters out products already covered, so new POs are only created for truly uncovered products.

#### 6️⃣ **Create new purchase orders**

* For filtered products, creates new PO records in Airtable with:

  * `product_name`
  * `product_id`
  * calculated `reorder_qty`
  * supplier info and email
  * initial status `Pending`

---

### **📧 Process existing pending purchase orders and email suppliers**

#### 7️⃣ **Get Purchase Orders which are pending**

* Searches Airtable for all POs with status `Pending`.

#### 8️⃣ **Group products with suppliers**

* JS code groups these POs by `supplier_id`.
* Builds a summary (total products, total quantity) and an HTML email with a styled table of items.

#### 9️⃣ **Send PO emails to suppliers**

* Uses Brevo (SendInBlue) to send emails.
* Subject and content include supplier-specific order details.

#### 🔄 **Update PO statuses to Sent**

* Extracts Airtable record IDs of the sent POs.
* Updates those POs in Airtable, changing status from `Pending` → `Sent`.

---

### **📌 Summary**

✅ Runs every day
✅ Dynamically calculates reorder needs
✅ Avoids duplicate purchase orders
✅ Automatically creates purchase orders in Airtable
✅ Groups & emails daily PO summaries to suppliers
✅ Updates PO status after sending email

---

### **⚙ Tables involved**

* **Products Table:** stores products, stock levels, reorder thresholds, average daily sales, supplier references.
* **Suppliers Table:** stores supplier emails and metadata.
* **Purchase Orders Table:** tracks product orders with supplier IDs, status, quantities, etc.

---

This workflow makes daily procurement fully automated: detects risk of stockouts, creates POs smartly, keeps suppliers in sync by email, and updates order statuses in one closed loop — perfect for any small or mid-sized business using Airtable + N8N.


## 📊 Basic Information

- **Workflow ID:** 5815
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 389
- **Downloads:** 38
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5815)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **airtable** (×6)
- **code** (×4)
- **scheduleTrigger** (×2)
- **stickyNote** (×2)
- **sendInBlue** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
