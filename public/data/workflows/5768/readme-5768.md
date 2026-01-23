# Monitor SSL certificate expiry with Google Sheets and email alerts

> ## 🔒 SSL Certificate Monitoring & Expiry Alert with Spreadsheet [FREE APIs]

### ✅ What This Workflow Does

This **n8n template** automatically monitors SSL certificates of websites listed in a Google Sheet and sends **email alerts** if any are expiring within **14 days**. It helps ensure you avoid downtime, security issues, and trust warnings due to expired certificates.

---

### 🧩 Key Features

- 📅 **Weekly Automation**: Runs every **Monday at 7:00 AM** (configurable).
- 📄 **Google Sheets Integration**: Fetches and updates data in a spreadsheet.
- 🔍 **SSL Check via API**: Uses [ssl-checker.io](https://ssl-checker.io) to get certificate details.
- ⚠️ **SSL Expiry Filter**: Identifies certificates expiring within 14 days.
- 📧 **Email Alerts**: Sends notifications for certificates close to expiration.

---

### 📂 Input Spreadsheet Format

Your Google Sheet should have the following columns:

| No | Name            | Link                  | SSL Issued On     | SSL Expired On    | SSL Status |
|----|-----------------|-----------------------|-------------------|-------------------|------------|
| 1  | Example Site    | https://example.com   | 2024-07-01        | 2025-07-01        | Valid      |
| 2  | My Blog         | https://myblog.org    | 2024-07-05        | 2024-07-20        | Expiring   |

Each row should include a **valid website URL** in the **Link** column.

---

### 🛠️ How It Works

1. **Scheduled Trigger**
   - Executes weekly (Monday 7:00 AM).
   
2. **Fetch Website List**
   - Reads all website entries from the Google Sheet.

3. **Check SSL Certificates**
   - Uses `ssl-checker.io` API to retrieve certificate details for each website.

4. **Update Spreadsheet**
   - Writes "Issued On" and "Expired On" fields back to the spreadsheet.

5. **Evaluate SSL Expiry**
   - Filters for certificates expiring within 14 days.

6. **Check Condition**
   - Determines whether to send alerts based on filtered results.

7. **Send Email Alert**
   - Notifies via email if any certificates are expiring soon.

---

### 📬 Example Email Output
```
Subject: ⚠️ ALERT!! SSL EXPIRED

SSL certificates expiring soon:
- example.com (expires in 5 days)
- anotherdomain.net (expires in 3 days)
```

### 🧰 Setup Requirements

- A Google Sheet with the correct columns and website links.
- SMTP credentials to send alert emails.

## 📊 Basic Information

- **Workflow ID:** 5768
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 586
- **Downloads:** 58
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5768)

## 👤 Author

- **Name:** Agus Narestha
- **Username:** @agusnarestha

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **httpRequest** 
- **splitInBatches** 
- **googleSheets** (×2)
- **scheduleTrigger** 
- **if** 
- **code** 
- **stickyNote** (×8)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
