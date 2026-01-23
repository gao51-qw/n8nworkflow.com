# Lead outreach automation with Google Sheets, Gmail, and n8n workflow

> # 🎯 Goal

Every 60 minutes:

- Fetch only “New” leads from a Google Sheet  
- Send them a personalized email  
- Update their status to “Contacted” in the same sheet  

## 🧩 Step-by-Step Explanation

### 1️⃣ 🕒 Trigger: Run Every Day  
**Node Name:** Schedule Trigger  
**What it does:** Automatically starts the workflow every 60 minutes (or your chosen interval).  
**Why it's needed:** You don’t need to run the workflow manually — it runs on a timer, like a robot doing your follow-up.

---

### 2️⃣ 📄 Fetch Leads from Google Sheet  
**Node Name:** Fetch Leads from Google Sheet  
**What it does:** Connects to your Google Sheet and pulls all the rows of leads.  
**Expected columns:**

- Name  
- Email  
- Status (should be "New" if not yet emailed)  

---

### 3️⃣ 🔍 Filter Only New Leads  
**Node Name:** Filter Only New Leads  
**What it does:** Filters only rows where `Status = New`.  
**Why it's needed:** Prevents emailing the same lead twice. Old leads are ignored.

---

### 4️⃣ 🔁 Batch Process Leads  
**Node Name:** Batch Process Leads  
**What it does:** Splits filtered leads into individual batches (usually one-by-one).  
**Why it's useful:** Helps avoid API rate limits or spam blocks by sending emails one at a time.

---

### 5️⃣ ✉️ Send Email to Lead  
**Node Name:** Send Email to Lead  
**What it does:** Sends a personalized email to each lead using their name and email.  
**How personalization works:** Use variables like `{{ $json["Name"] }}` in the subject/body.

---

### 6️⃣ ✅ Mark Lead as Contacted  
**Node Name:** Mark Lead as Contacted  
**What it does:** Updates the row in Google Sheet, changing Status from `New` to `Contacted`.  
**Why it's important:** Ensures this lead won't be processed again next time.

---

## 🔁 Loop Back

After updating the lead status, the flow loops back to process the next lead from the batch.

---

## ✨ Bonus Touch

This automation is clean, efficient, and scalable. You can later enhance it by:

- Adding AI to write emails dynamically  
- Sending follow-up reminders  
- Tracking performance stats in another sheet  

## 📊 Basic Information

- **Workflow ID:** 6083
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1506
- **Downloads:** 150
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6083)

## 👤 Author

- **Name:** Muhammad Qaisar Mehmood
- **Username:** @qaisar

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **if** 
- **splitInBatches** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
