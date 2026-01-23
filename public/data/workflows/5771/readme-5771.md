# Track Jura coffee machine data with webhook API and Google Sheets

> # Jura Coffee Counter: Webhook API & Google Sheets Logger ☕️

Track how many coffees your Jura E8 espresso machine makes — fully automated via webhook and Google Sheets.

This workflow exposes a **custom API endpoint** that can be called by smart devices, such as an ESP8266 or ESP32 reading data from a Jura E8 coffee machine via Bluetooth Low Energy (BLE). The incoming data (including total coffee count) is timestamped and appended to a **Google Sheet**, making it easy to visualize or analyze your machine usage.

☕ Originally built for a Jura E8, based on [AlexxIT/Jura](https://github.com/AlexxIT/Jura) reverse-engineering project.

&gt; 📝 This workflow uses **Google Sheets** as a logging backend. You can easily switch it to Airtable, Notion, or a database of your choice.

Live example available at: [https://halfbitstudio.com/o-nas/](https://halfbitstudio.com/o-nas/)

&gt; 🖥️ In our setup, this workflow is used to provide **real-time coffee consumption stats** displayed directly on our website.

&gt; 🔌 Some Jura machines require an accessory Bluetooth transmitter to enable connectivity. Communication is based on the **Bluetooth Low Energy (BLE)** protocol.

---

## Use Case

* Tracking usage of a Jura coffee machine
* Logging IoT sensor data into Google Sheets
* Creating dashboards for daily consumption
* Smart office setups with coffee stats!

---

## Features

* ☁️ Two Webhook endpoints:

  * `POST /{{WEBHOOK_POST_PATH}}` — receives JSON from ESP (coffee machine reader)
  * `GET /{{WEBHOOK_GET_PATH}}` — returns latest records as JSON
* 📅 Timestamping via `Date & Time` node
* 🔹 Coffee counter extraction from incoming JSON
* 🧾 Appends structured rows to **Google Sheets**
* 📤 Webhook response for external status or dashboards

---

## Setup Instructions

### Jura Coffee Machine Integration (Hardware)

1. Use an ESP device (e.g. ESP8266 or ESP32) to connect to the Jura E8 via Bluetooth Low Energy (BLE).
2. Send POST requests with JSON payload:

   ```json
   {
     "total_coffees": 123
   }
   ```
3. Reverse-engineered protocol reference: [AlexxIT/Jura](https://github.com/AlexxIT/Jura)

### Google Sheets Configuration

1. Create a new **Google Sheet** with column headers like:

   ```
   date | time | coffee counter
   ```
2. Connect your **Google account** in n8n and authorize access to this sheet.
3. Replace the `documentId` and `sheetName` fields in the Google Sheets nodes:

   * Use full URL to your spreadsheet
   * Use the actual sheet name (e.g. `Sheet1`)

---

## Environment Variables & Placeholders

| Placeholder              | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `{{WEBHOOK_POST_PATH}}`  | Endpoint to receive coffee counter data         |
| `{{WEBHOOK_GET_PATH}}`   | Endpoint to return latest data (for dashboards) |
| `{{SHEET_ID}}`           | Google Spreadsheet ID                           |
| `{{GOOGLE_CREDENTIALS}}` | OAuth2 credentials for Google Sheets            |
| `{{DATA_COLUMNS}}`       | Column names in the target sheet                |

---

## Testing the Workflow

1. **Send test request**:

   * Use Postman or ESP to send a POST request to `/{{WEBHOOK_POST_PATH}}`
   * Body should include `total_coffees` value
2. **Check Google Sheet**:

   * Open your sheet and verify that a new row was appended
3. **Test GET endpoint**:

   * Access the second webhook URL (e.g. `/{{WEBHOOK_GET_PATH}}`) in browser or fetch via API
4. **Optional**:

   * Use `Respond to Webhook` output in a dashboard or frontend

---

## Customization Tips

* **Sheet format**: Add more columns if you want to track additional data (e.g. machine temperature, errors)
* **Output format**: Replace Google Sheets with any other storage (e.g. MySQL, Notion)
* **Auth layer**: Add basic auth or token verification if needed for public exposure
* **Notifications**: Send alerts to Discord/Slack when reaching thresholds (e.g. 200 coffees brewed)

---
Tags:

`google-sheets`, `iot`, `webhook`, `jura`, `coffee`, `api`, `automation`


## 📊 Basic Information

- **Workflow ID:** 5771
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 288
- **Downloads:** 28
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5771)

## 👤 Author

- **Name:** Halfbit 🚀
- **Username:** @halfbit

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **webhook** (×2)
- **dateTime** 
- **set** 
- **googleSheets** (×2)
- **respondToWebhook** 
- **limit** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
