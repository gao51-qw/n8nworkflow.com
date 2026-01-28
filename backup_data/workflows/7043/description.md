A lightweight no-code workflow that captures student check-in data via a mobile app or webhook, stores it in a Google Sheet, and instantly notifies the class teacher via email.


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

