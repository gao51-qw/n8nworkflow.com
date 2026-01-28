# Track student arrival with iOS automation, Google Sheets & email alerts

> This workflow automates **real-time student tracking** using **iOS Shortcuts and geolocation data**, notifying both **teachers and parents** based on geofenced logic.


## 🎯 What This Workflow Does

* Receives student **location updates via webhook** (iOS Shortcuts)
* Detects if the student has **arrived at school**
* Logs arrival data to Google Sheets
* **Sends email alerts** to teacher and/or parent based on location


## 🔄 Workflow Steps

| Step                        | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| **Location Update Webhook** | Triggered via iOS Shortcut when student location updates |
| **Process Location Data**   | Extracts coordinates and metadata                        |
| **Student Arrived?**        | Checks if student entered school zone                    |
| **Log School Arrival**      | Adds arrival data to Google Sheet                        |
| **At School?**              | Double-checks geofence condition before notifying        |
| **Notify Teacher**          | Sends email if student is confirmed at school            |
| **Notify Parent**           | Sends email to parent (can vary based on geofence logic) |
| **Success Response**        | Returns a 200 response to the triggering device          |


## 🧠 How the Logic Works

1. The student’s phone runs a shortcut when near school.
2. Sends coordinates to webhook.
3. Workflow compares coordinates with predefined geofence (e.g., radius around school).
4. If inside school zone:
   * Log arrival
   * Notify teacher and/or parent
5. Else:
   * Optionally notify parent only


## 📱 iOS Shortcut Sample (Trigger Setup)

* **Automation Trigger**: Arrive at Location (e.g., School)
* **Action**: Run Shortcut → Make Web Request (POST)

**POST URL:**

```
https://your-n8n-instance.com/webhook/location-update
```

**Body Example:**

```json
{
  "student_id": "STU042",
  "student_name": "Anaya Joshi",
  "lat": 19.0760,
  "lng": 72.8777,
  "timestamp": "2025-08-06T08:05:00"
}
```


## 📊 Google Sheets Logging

| Student ID | Name        | Date       | Time  | Status  |
| ---------- | ----------- | ---------- | ----- | ------- |
| STU042     | Anaya Joshi | 2025-08-06 | 08:05 | Arrived |


## ⚙️ Setup Requirements

* **n8n Instance** with webhook support
* **Google Sheet** with appropriate columns
* **iOS Shortcut** setup on student device
* **Teacher and Parent Email Addresses** configured in workflow

## 📊 Basic Information

- **Workflow ID:** 7044
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 182
- **Downloads:** 18
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7044)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **if** (×2)
- **httpRequest** 
- **emailSend** (×2)
- **respondToWebhook** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
