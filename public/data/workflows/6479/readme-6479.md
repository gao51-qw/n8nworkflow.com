# Validate & enrich phone numbers in Google Sheets with RapidAPI

> ### 📞 Phone Number Validator with Google Sheets 

Validate and enrich phone numbers from Google Sheets using the [`phone number validator`](https://rapidapi.com/skdeveloper/api/phone-number-validator11) API.

---

## 📌 Use Case: Contact Validation & Enrichment  
Automatically check if phone numbers are valid and enrich them with metadata (country, location, timezone). Ideal for CRMs, lead management, and contact cleanup workflows.

---

## 🗂️ Google Sheets Columns

| Column Name | Description |
|-------------|-------------|
| `phone`     | The original phone number to validate (input column). |
| `is_valid`  | Result from API indicating if the phone number is valid (`true` / `false`). |
| `country`   | Country where the phone number is registered (e.g. "US"). |
| `location`  | More specific location info, such as city or region. |
| `timezone`  | The primary timezone associated with the phone number. |

---

## 🎯 Benefits

- ✅ **Accurate Contact Data** – Identify invalid or fake phone numbers automatically.
- 🌐 **Geolocation Enrichment** – Add country, location, and timezone for better segmentation.
- 🔁 **Full Automation** – No manual lookups or copying data between tools.
- 📊 **Live Google Sheets Sync** – Enriched data is updated directly into your spreadsheet.

---

## 🧠 Workflow Nodes Explained

| Node | Purpose |
|------|---------|
| **🟢 Manual Trigger** | Starts the workflow manually from n8n. |
| **📄 Google Sheets (Read)** | Fetches phone numbers from your spreadsheet using a Service Account. |
| **🔁 Split In Batches** | Loops over each row one at a time to handle individual API requests. |
| **🌐 HTTP Request** | Sends phone number to [`phone number validator`](https://rapidapi.com/skdeveloper/api/phone-number-validator11) via RapidAPI and receives validation + metadata. |
| **📥 Google Sheets (Update)** | Writes the response back into the matching row using the `phone` field. |

---

## 🛰️ API Used: `phone number validator`

We use the [`phone number validator`](https://rapidapi.com/skdeveloper/api/phone-number-validator11) API from RapidAPI to:
- Validate phone numbers (real or fake?)
- Identify the **country**, **location**, and **timezone**

&gt; It’s fast, reliable, and great for cleaning large datasets or qualifying leads before outreach.

---

## 🧰 Prerequisites

- 📄 A Google Sheet with a column named `phone`
- 🔐 RapidAPI key with access to `phone number validator`
- 🔧 Google Service Account credentials set up in n8n

---

## 🚀 How to Use

1. 🔗 Link your Google Sheet and configure authentication
2. 🔑 Add your RapidAPI key in the HTTP node headers
3. ▶️ Click "Execute Workflow"
4. 🧠 Each phone number is validated and enriched
5. 📊 Results are written back to your Google Sheet

---

## 📎 Tags
`phone validation`, `rapidapi`, `google sheets`, `data enrichment`, `phone number validator`, `crm automation`, `lead cleaning`, `timezone lookup`



## 📊 Basic Information

- **Workflow ID:** 6479
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 224
- **Downloads:** 22
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6479)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **splitInBatches** 
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
