# Build a complete email CRM with Google Sheets & MailerSend

> ## ✉️ Automate MailerSend Email (Google Sheets)

---

### 🌐 Overview
This workflow converts **Google Sheets into a full Email CRM** — no HubSpot or Customer.io needed!  
It automates segmentation, sending, validation, and delivery tracking using:

✅ Google Sheets → CDP + Email Performance DB  
✅ MailerSend → Email Template Delivery  
✅ n8n → Automation + Logic + Scheduling

It automatically:
• Reads subscribers from a selected segment sheet  
• Validates email + checks for disposable domains  
• Sends a MailerSend email template  
• Updates send status + delivery result in Sheets

Perfect for onboarding emails, promo campaigns, retention flows, newsletters & more!

---

### ✅ Key Features
• 🎯 Unlimited audience segments  
• 🚫 Deduplication system per execution  
• 🛡️ Disposable email filtering  
• 🔄 Automatic recurring runs (every 30 minutes)  
• 🧩 Template-based personalization (name, codes, journey)  
• 📊 Real-time delivery tracking + analytics-ready data  
• 🔐 Zero CRM vendor lock-in  

---

### 📊 Database Sheets (Google Sheets Required)

Use this database template:  
🔗 https://docs.google.com/spreadsheets/d/17KqltP-NqchPhZV7gk6QToqCZX6IiA5EBkDCBNsIX_0/edit?usp=sharing

| Sheet Name | Purpose | Required Fields |
|-----------|---------|----------------|
| `template` | Campaign configuration | Id, template_name, journey, type, type_template_id, discount_code |
| `segment1` / `segment2` | Audience lists | user_id, email, first_name, number |
| `transaction` | Status + results history | user_id, status, sent_result, sent_at, template_name |

### transaction
| CreatedAt                        | UpdatedAt                        | user_id         | email                   | number      | first_name | status     | database_id | type  | template_id | type_template_id   | template_name   | journey | discount_code | gift_code |
|----------------------------------|----------------------------------|-----------------|------------------------|-------------|------------|------------|-------------|------|-------------|-------------------|-----------------|---------|---------------|-----------|
| 2025-10-25T13:11:41.567-04:00    | 2025-10-25T13:11:41.567-04:00    | uid_0000000001  | nimasalimi42@gmail.com | 9362000000  | Liam       | 1-sending  | segment1    | email | 1           | v28xxl2sq8dg785k  | SMS-TEST        | Test    | disxxx        |           |
| 2025-10-25T13:11:41.567-04:00    | 2025-10-25T13:11:41.567-04:00    | uid_0000000002  | user2@gmail.com        | 9362000001  | Noah       | 1-sending  | segment1    | email | 1           | v28xxl2sq8dg785k  | SMS-TEST        | Test    | disxxx        |           |
| 2025-10-25T13:11:41.567-04:00    | 2025-10-25T13:11:41.567-04:00    | uid_0000000003  | user3@gmail.com        | 9362000002  | Oliver     | 1-sending  | segment1    | email | 1           | v28xxl2sq8dg785k  | SMS-TEST        | Test    | disxxx        |           |

## template
| Id | template_name              | journey        | database_id | type  | type_template_id   | discount_code | gift_code |
|----|---------------------------|----------------|-------------|------|-------------------|---------------|-----------|
| 3  | Order-Confirmation        | Order          | segment3    | email | v28xxl2sq8dg785k  | discount2     |           |
| 4  | Shipping-Notification     | Notification   | segment4    | email | v28xxl2sq8dg785c  | discount3     |           |
| 5  | Add-to-Cart-day1          | Add-to-Car     | segment5    | email | v28xxl2sq8dg785d  | discount4     |           |
| 6  | Welcome-New-Customer      | Welcome        | segment6    | email | v28xxl2sq8dg785s  | discount5     |           |
| 7  | Churn-Pro-Plan            | Churn          | segment7    | email | v28xxl2sq8dg785g  | proxc         |           |
| 8  | Churn-Pro-Plan-1day-ago   | Churn          | segment8    | email | v28xxl2sq8dg785h  |               | shipx     |

## segment1
| user_id         | email                   | number        | first_name | database_id |
|-----------------|-------------------------|--------------|------------|-------------|
| uid_0000000001  | nimasalimi42@gmail.com  | 09362000000  | Liam       | segment1    |
| uid_0000000002  | user2@gmail.com         | 09362000001  | Noah       | segment1    |
| uid_0000000003  | user3@gmail.com         | 09362000002  | Oliver     | segment1    |
| uid_0000000004  | user4@gmail.com         | 09362000003  | Elijah     | segment1    |
| uid_0000000005  | user5@gmail.com         | 09362000004  | James      | segment1    |


📌 Add more segments simply by creating new sheets (segment3, segment4...)  
📌 Change campaign by updating `template_id` in Setup Flow node  

---

### 👤 Who’s it for?
• Ecommerce email retention teams  
• SaaS CRM automation operators  
• Digital marketing & lifecycle pros  
• Agencies running multi-brand campaigns  
• No-code builders who want scalable CRM logic

---

### ⚙️ Automations Included

#### Flow 1 — Insert Users (Triggered on schedule)
• Pull users from selected segment tab  
• Insert into transaction sheet  
• Status: `0-processing` → `1-sending`  
• Prevent duplicate sending ✅

#### Flow 2 — Send Emails (Runs every 30 min)
• Selects “ready” users (`1-sending`)  
• Checks:
  - Missing email → `3-no-email`
  - Disposable → `4-disposal-email`
• Sends via MailerSend template ID in sheet  
• Updates status → `2-sent` + message result

🎯 Your entire CRM sending logic runs automatically every day

---

### 🧠 Personalization Support
Available merge-fields:
• `first_name`  
• `discount_code`  
• `gift_code`  
(Modify jsonBody to add more!)

---

### 🔐 MailerSend Setup Required
Inside MailerSend node:
- Replace “info@example.com” with your verified sender email ✅

You must:
✔ Verify domain  
✔ Approve sender email  
✔ Copy correct template ID → Google Sheet  

---

### 💡 Optional Enhancements
• Slack alerts for failed sends  
• Connect Looker Studio for dashboards  
• Add SMS / WhatsApp parallel flows  
• A/B test templates by duplicating rows  
• Add AI for subject optimization or copy rewrite

---

### 📺 Connect With Me
More workflows, CRM strategy & AI marketing automation 👇  
LinkedIn: https://linkedin.com/in/nima-salimi-a655a6231  

Follow & ⭐️ this template if it helped you 🚀


## 📊 Basic Information

- **Workflow ID:** 10179
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 116
- **Downloads:** 11
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10179)

## 👤 Author

- **Name:** Nima Salimi
- **Username:** @salimi

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **set** (×2)
- **filter** 
- **if** (×5)
- **wait** 
- **removeDuplicates** 
- **stickyNote** (×12)
- **googleSheets** (×9)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
