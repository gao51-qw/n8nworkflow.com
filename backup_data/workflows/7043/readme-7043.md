# Track student attendance with mobile app, Google Sheets, and email alerts

> A lightweight no-code workflow that captures student check-in data via a mobile app or webhook, stores it in a Google Sheet, and instantly notifies the class teacher via email.


## 🎯 What This Does

* Students **check in using a mobile app or QR code**
* Their data is **formatted and saved** to a Google Sheet
* A **notification email** is sent to the class teacher in real time


## 🔧 Workflow Steps

| Step                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| **Student Check-in (Webhook)** | Triggered via POST request from mobile app or QR scanner    |
| **Format Data**                | Cleans and prepares incoming JSON into structured format    |
| **Append or Update Row**       | Saves student check-in data into Google Sheets              |
| **Email Teacher**              | Sends formatted check-in email to the class teacher         |
| **Success Response**           | Returns a confirmation response to the mobile app or system |


## 📱 Example Check-in Input (Webhook Body)

```json
{
  "student_name": "Aarav Mehta",
  "student_id": "STU025",
  "class_name": "Grade 6B"
}
```


## 📊 Google Sheets Format

| Student Name | Student ID | Class    | Date       | Time  |
| ------------ | ---------- | -------- | ---------- | ----- |
| Aarav Mehta  | STU025     | Grade 6B | 2025-08-06 | 08:35 |

*Date and time are added dynamically in the workflow.*


## ⚙️ Setup Requirements

* **n8n Instance** – Deployed with public webhook support
* **Google Sheets** – Sheet with columns as shown above
* **Email SMTP Settings** – For sending teacher notification


## ✅ Quick Setup Instructions

1. Import the workflow into your n8n instance
2. Replace the webhook URL in your mobile app
3. Set your Google Sheet ID and range
4. Enter the teacher’s email in the “Email Teacher” node
5. Test with mock data
6. Deploy and use live!



## 📊 Basic Information

- **Workflow ID:** 7043
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 567
- **Downloads:** 56
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7043)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **emailSend** 
- **respondToWebhook** 
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
