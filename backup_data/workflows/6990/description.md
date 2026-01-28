This n8n workflow checks daily ad spend totals from a Google Sheet and sends a Slack alert if spend exceeds $100. It can be scheduled to run automatically or manually triggered for testing. This is perfect for marketing teams who want to monitor budget spikes in near real-time.

---

### ✅ Key Features

- **📥 Google Sheets Integration**: Pulls raw spend data from a shared spreadsheet.
- **📆 Scheduled or Manual Execution**: Can run daily on a schedule or manually for testing.
- **📈 Aggregates Spend**: Summarizes daily totals from raw data.
- **🧠 Logic Check**: Alerts only when spend exceeds a certain threshold.
- **🔔 Slack Alerts**: Sends instant notification to a specified channel.

---

### 🧰 What You'll Need

- **Google Cloud Project** with Sheets API enabled
- **OAuth2 Credential** for Google Sheets
- **Slack Bot Token** with permission to post to your workspace
- **Your Google Sheet link and tab name**

📎 **Copy this Sample Google Sheet to Use:**  
[Marketing Data Sheet - Copy Me](https://docs.google.com/spreadsheets/d/19aUQYZq02qHsCelO4eeV4sx_MTJJupC5qe0gDLQBtRA/edit?usp=sharing)

---

### 🔧 Step-by-Step Setup

#### 1️⃣ Schedule or Manual Trigger
- **Node**: `Schedule Workflow` or `Test Workflow`
- **Purpose**: Either run daily via a cron-like rule or manually trigger the flow.

#### 2️⃣ Get Google Sheet Data
- **Node**: `Get Data`
- **What it does**: Fetches all rows from your connected sheet.
- **Setup**:
  - Go to [Google Cloud Console](https://console.cloud.google.com/)
  - Create a new project
  - Enable **Google Sheets API**
  - Create OAuth2 credentials for a desktop or web application
  - Connect your Google account in n8n via OAuth2
  - Grant access to the sheet you want to read (ensure it's shared with your OAuth email)
  - Use the copied sheet's link when connecting in n8n

#### 3️⃣ Summarize Spend by Day
- **Node**: `Sum spend by Day`
- **What it does**: Groups the dataset by `Date` and sums the `Spend ($)` column
- **Requirements**:
  - Your sheet must have a header row with `Date` and `Spend ($)` as columns

#### 4️⃣ Sort by Most Recent Date
- **Node**: `Sort Dates Descending`
- **What it does**: Sorts all entries by the `Date` field so that the most recent day is first
- **Custom JavaScript**:
```js
const items = $input.all();
items.sort((a, b) =&gt; new Date(b.json.Date) - new Date(a.json.Date));
return items;
```

#### 5️⃣ Select Top Result
- **Node**: `Keep only Last Day`
- **What it does**: Captures the top row (most recent day) for evaluation
- **Fields**: Sets only `Date` and `sum_Spend_($)` to keep things clean

#### 6️⃣ Check Spend Threshold
- **Node**: `Check if Spend over $100`
- **What it does**: Uses an IF node to compare `sum_Spend_($)` against a 100 threshold
- **Logic**:
```json
sum_Spend_($) &gt; 100
```

#### 7️⃣ Send Slack Notification
- **Node**: `Send Slack Message`
- **What it does**: Sends a message to a Slack channel if the threshold is exceeded
- **Setup**:
  - Go to [Slack API](https://api.slack.com/apps)
  - Create a new app
  - Enable **chat:write** and **channels:read** scopes under OAuth & Permissions
  - Install the app to your workspace
  - Copy the OAuth Token into your Slack credentials in n8n
  - Select your target channel from the dropdown (must be public or the bot must be invited)
- **Message**:
  ```
  The spend for the most recent day is over $100
  ```

#### 8️⃣ No Action if Under Budget
- **Node**: `Do Nothing. Under 100`
- **Purpose**: This path simply ends the flow with no action if spend is below the threshold

---

### 👤 Created By
**Robert Breen**  
Automation Consultant | AI Workflow Designer | n8n Expert  
📧 [rbreen@ynteractive.com](mailto:rbreen@ynteractive.com)  
🌐 [ynteractive.com](https://ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

---

### 🏷️ Tags
`slack` `marketing automation` `budget alert` `daily schedule` `google sheets` `threshold logic` `n8n` `spend tracking` `data summarization`
