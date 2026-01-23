# Send return pickup reminders via WhatsApp & voice calls using Google Sheets

> ## ✅ What problem does this workflow solve?

Missed return pickups create logistics delays, extra follow-ups, and unhappy customers for e-commerce teams. This workflow automates **return pickup reminders**, ensuring customers are notified **on the day of pickup** via **WhatsApp messages and automated voice calls**, without any manual effort.

---

## ⚙️ What does this workflow do?

- Runs automatically on a daily schedule.
- Reads return pickup data from **Google Sheets**.
- Identifies customers with:
  - 📅 Pickup date = **today**
  - ⏳ Status = **Pending**
- Sends **personalized WhatsApp reminders**.
- Places **automated voice call reminders** when required.
- Updates reminder status in Google Sheets for clear tracking.

---

## 🧠 How It Works – Step by Step

### 1. ⏰ Scheduled Trigger
The workflow starts at a fixed time every day (e.g., 9–10 AM) using a **Schedule Trigger**.

### 2. 📄 Read Pickup Data from Google Sheets
It fetches rows from Google Sheets where:
- **Pickup Date** = today
- **Status** = Pending

This ensures only relevant pickups are processed.

### 3. 🔁 Loop Through Pickups
Each matching row is processed individually to send customer-specific reminders.

### 4. ✍️ Generate Personalized Messages
Using a **Code node**, the workflow creates:
- 📲 A WhatsApp text message
- 📞 A voice message script

Messages include:
- Customer name
- Product name
- Pickup address
- Return reason
- Pickup timing reminder

### 5. 📲 Send WhatsApp Reminder
A personalized WhatsApp message is sent via **Twilio**, reminding the customer to keep the package ready.

### 6. 📞 Place Voice Call Reminder
If required, the workflow places an automated **voice call** using Twilio and reads out a clear pickup reminder using text-to-speech.

### 7. ✅ Update Pickup Status
Once notifications are sent:
- The workflow updates the **Status** column to **“Reminder Sent”**
- Ensures the same pickup is not notified again

---

## 📊 Sample Google Sheet Columns

| Order ID | Customer Name | Phone Number | Product | Pickup Date | Address | Return Reason | Status |
|--------|----------------|--------------|---------|-------------|---------|---------------|--------|

---

## 🔧 Integrations Used

- **Google Sheets** – Pickup data source and tracking
- **Twilio WhatsApp API** – Message delivery
- **Twilio Voice API** – Automated call reminders
- **n8n Schedule + Logic Nodes** – Automation orchestration

---

## 👤 Who can use this?

Perfect for:
- 🛒 **E-commerce brands**
- 📦 **Reverse logistics teams**
- 🚚 **Delivery & pickup operations**
- 🧑‍💼 **Customer support teams**

It also works well for **service visits, deliveries, appointments, and field operations**.

---

## 💡 Key Benefits

- ✅ Fewer missed pickups
- ✅ Improved customer compliance
- ✅ Reduced manual follow-ups
- ✅ Clear tracking in Google Sheets
- ✅ Scalable and fully automated

---

## 🚀 Ready to Use?

Just connect:
- ✅ Google Sheets with pickup data
- ✅ Twilio credentials (WhatsApp + Voice)
- ✅ Schedule trigger time

## 📊 Basic Information

- **Workflow ID:** 12148
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12148)

## 👤 Author

- **Name:** InfyOm Technologies
- **Username:** @infyom

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **twilio** 
- **googleSheets** (×2)
- **splitInBatches** 
- **httpRequest** 
- **code** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
