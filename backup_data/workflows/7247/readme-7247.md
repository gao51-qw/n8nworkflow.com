# Send patient condition updates with Google Sheets, Email & WhatsApp alerts

> This automated n8n workflow reads patient data from Google Sheets daily at 8 AM, sends email and WhatsApp reports to doctors, alerts staff for critical patients, and logs activities back to sheets.

### Good to Know
- Runs daily at 8 AM via cron trigger.
- Filters active patients only.
- Requires Google service account, Gmail app password, and WhatsApp API token.
- Logs all sent reports in a dedicated sheet.

## How It Works
- **Cron Trigger** - Schedules daily run at 8 AM.
- **Google Sheets (Read)** - Fetches patient data from "Patients" sheet.
- **Filter Node** - Selects active patients.
- **Code Node** - Processes data, creates report content, checks for critical conditions.
- **Email Send Node** - Sends reports to doctors via Gmail.
- **HTTP Request Node** - Sends WhatsApp messages.
- **Filter Critical** - Identifies critical patients.
- **Critical Alert Email** - Notifies hospital staff.
- **Google Sheets (Write)** - Logs reports to "Reports_Log" sheet.

## Google Sheet Structure

### Sheet 1:
```
A: Patient ID | B: Patient Name | C: Age | D: Current Condition
E: Temperature | F: Blood Pressure | G: Heart Rate | H: Current Medication  
I: Doctor Email | J: Doctor WhatsApp | K: Priority | L: Status | M: Last Updated
```

### Sample Data:
```
P001 | John Doe | 45 | Stable | 98.6 | 120/80 | 72 | Aspirin | dr@hospital.com | +1234567890 | Normal | Active | 2024-01-15
P002 | Jane Smith | 32 | Fever | 101.8 | 130/85 | 88 | Tylenol | dr2@hospital.com | +1987654321 | Critical | Active | 2024-01-15
```

### Sheet 2:
```
A: Report Date | B: Patient ID | C: Patient Name | D: Status | E: Sent
```
## How to Use
- Import workflow JSON into n8n.
- Configure nodes with Google credentials, sheet ID, Gmail app password, WhatsApp token.
- Add patients to Google Sheet with "Active" status.
- Test manually, then activate for daily runs.

## Requirements
- Google Sheet with specified structure.
- Google Cloud service account JSON.
- Gmail with 2FA and app password.
- WhatsApp Business API token.
- n8n instance.

## Customizing This Workflow
- Adjust cron expression for different schedule.
- Modify Code Node for custom report formats or critical thresholds.
- Update email/WhatsApp nodes for additional recipients or templates.
- Extend filters for more patient statuses.


## 📊 Basic Information

- **Workflow ID:** 7247
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 411
- **Downloads:** 41
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7247)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **cron** 
- **googleSheets** (×2)
- **filter** (×2)
- **code** 
- **emailSend** (×2)
- **httpRequest** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
