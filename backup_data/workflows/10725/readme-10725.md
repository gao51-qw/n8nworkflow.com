# Collect API user data and store in Google Sheets with CSV backup

> ## 🧾 Overview

This n8n workflow automates the process of **fetching user data from an API**, verifying its validity, transforming the response, and then **saving it to Google Sheets** for team collaboration. Additionally, it generates a **CSV backup file** of the same data for offline access or external integrations.

Perfect for developers, analysts, or teams who want an automated, no-code data ingestion and backup solution.

---

## ⚙️ Key Features

* 🔌 Fetches data from any REST API endpoint (e.g., RandomUser API)
* ✅ Validates successful API responses before processing
* 🧠 Transforms JSON response into simple key-value pairs (name and country)
* 📊 Appends data directly into Google Sheets
* 💾 Generates a downloadable CSV backup file
* 🧱 Modular design — easily customizable and extendable

---

## 🧱 Workflow Steps

### 1. **Start Workflow Manually** (`Manual Trigger Node`)

The workflow starts manually by clicking **Execute Workflow**. You can later replace this with a **Cron** or **Webhook** trigger for automation.

---

### 2. **Fetch User Data from API** (`HTTP Request Node`)

Makes an HTTP GET request to the configured API endpoint defined in the environment variable `BASE_URL`.

**Example:**

```
https://randomuser.me/api/?results=10
```

This node fetches raw user data in JSON format.

---

### 3. **Verify API Response Success** (`If Node`)

Checks if the API response returned an HTTP `200` status code.

* ✅ If status = 200 → Continue processing data
* ❌ If status ≠ 200 → Trigger **Stop and Error** node to halt execution

This prevents saving invalid or failed responses.

---

### 4. **Transform API Data to Name and Country** (`Function Node`)

Formats the raw JSON data to extract key details (name and country) from each user record.

**Input Example:**

```json
{
  "results": [
    {
      "name": { "first": "John", "last": "Doe" },
      "location": { "country": "United States" }
    }
  ]
}
```

**Output Example:**

```json
[
  { "name": "John Doe", "country": "United States" }
]
```

This step makes the data compatible with Google Sheets.

---

### 5. **Append Data to Google Sheets** (`Google Sheets Node`)

Appends the formatted data to your specified Google Sheet.

**Environment Variables Required:**

* `GOOGLE_SHEET_ID` → ID of your target Google Sheet

**Configuration:**

* **Range:** `A:B`
* **Columns:** `Name` (A) and `Country` (B)

**Example Google Sheet:**

| Name       | Country       |
| ---------- | ------------- |
| John Doe   | United States |
| Jane Smith | Canada        |

---

### 6. **Create CSV Backup File** (`Spreadsheet File Node`)

Generates a `.csv` file named `users_backup_export.csv` containing all saved user data.

This file can be:

* Stored locally
* Sent via email
* Uploaded to cloud storage (e.g., Google Drive, Dropbox)
* Used for external analytics tools

---

## ⚠️ Error Handling

If the API response is invalid (non-200), the **Stop on API Failure** node halts the workflow and logs the error:

&gt; ❌ *API request failed — status code not 200. Workflow stopped.*

This ensures only valid data is stored.

---

## 🧰 Setup Instructions

1. **Add Environment Variables:**

   ```bash
   BASE_URL=https://randomuser.me/api/?results=10
   GOOGLE_SHEET_ID=&lt;your_google_sheet_id&gt;
   ```

2. **Add Credentials:**

   * Google Sheets OAuth2 credentials
   * API (if authentication is required)

3. **Run Workflow:**

   * Start manually or configure a **Cron** node to run periodically

4. **Check Output:**

   * Data appears in your Google Sheet
   * CSV file is created in n8n’s file system

---

## 🧩 Customization Options

| Goal                    | How to Modify                                                     |
| ----------------------- | ----------------------------------------------------------------- |
| Change API fields       | Edit `Transform API Data` function to extract desired fields      |
| Add columns             | Expand output object and update Google Sheets range (e.g., `A:D`) |
| Automate execution      | Replace manual trigger with a Cron or Webhook node                |
| Filter users            | Add an If node after transformation to include/exclude data       |
| Send email notification | Add Gmail or SMTP node after CSV creation                         |

---

## 🧠 Example Use Case

* A recruiter fetches random candidate data daily from an HR API.
* Data (Name + Country) is saved to Google Sheets.
* A CSV backup is automatically generated for offline analysis.

---

## ✅ Benefits

* Hands-free automated data collection
* Centralized storage in Google Sheets for team access
* Built-in CSV export for reporting and backups
* Protects data integrity with API validation
* Fully customizable for any API format

---

**✨ Tip:** Add a Slack or Telegram node at the end to notify your team whenever new data is added successfully!


## 📊 Basic Information

- **Workflow ID:** 10725
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10725)

## 👤 Author

- **Name:** PrideVel
- **Username:** @n8nwizard

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **if** 
- **function** 
- **googleSheets** 
- **spreadsheetFile** 
- **stickyNote** (×7)
- **stopAndError** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
