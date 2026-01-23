# Track iOS app sizes with trend alerts using Google Sheets and Gmail notifications

> # IPA Size Tracker with Trend Alerts – Automated iOS Apps Size Monitoring

This workflow runs on a **daily schedule** and monitors **IPA file sizes** from configured URLs. It stores historical size data in **Google Sheets**, compares current vs. previous builds and sends **email alerts** only when significant size changes occur (default: ±10%). A **DRY_RUN** toggle allows safe testing before real notifications go out.

## Who’s it for

- iOS developers tracking **app binary size growth** over time.
- DevOps teams monitoring **build artifacts and deployment sizes**.
- Product managers ensuring **app size budgets** remain acceptable.
- QA teams detecting **unexpected size changes** in release builds.
- Mobile app teams optimizing **user experience** by keeping apps lightweight.

## How it works

1. **Schedule Trigger (daily at 09:00 UTC)** kicks off the workflow.
2. **Configuration**: Define monitored apps with `{name, version, build, ipa_url}`.
3. **HTTP Request** downloads the IPA file from its URL.
4. **Size Calculation**: Compute file sizes in bytes, KB, MB and attach timestamp metadata.
5. **Google Sheets**: Append size data to the `IPA Size History` sheet.
6. **Trend Analysis**: Compare current vs. previous build sizes.
7. **Alert Logic**: Evaluate thresholds (`&gt;10% increase` or `&gt;10% decrease`).
8. **Email Notification**: Send formatted alerts with comparisons and trend indicators.
9. **Rate Limit**: Space out notifications to avoid spamming recipients.

## How to set up

### 1. Spreadsheet

Create a Google Sheet with a tab named **`IPA Size History`** containing:

`Date, Timestamp, App_Name, Version, Build_Number, Size_Bytes, Size_KB, Size_MB, IPA_URL`

### 2. Credentials

- **Google Sheets (OAuth)** → for reading/writing size history.
- **Gmail** → for sending alert emails (use App Password if 2FA is enabled).

### 3. Open “Set: Configuration” node

Define your workflow variables:

- `APP_CONFIGS` = array of monitored apps (`{name, version, build, ipa_url}`)
- `SPREADSHEET_ID` = Google Sheet ID
- `SHEET_NAME` = `IPA Size History`
- `SMTP_FROM` = sender email (e.g., `devops@company.com`)
- `ALERT_RECIPIENTS` = comma-separated emails
- `SIZE_INCREASE_THRESHOLD` = `0.10` (10%)
- `SIZE_DECREASE_THRESHOLD` = `0.10` (10%)
- `LARGE_APP_WARNING` = `300` (MB)
- `SCHEDULE_TIME` = `09:00`
- `TIMEZONE` = `UTC`
- `DRY_RUN` = `false` (set `true` to test without sending emails)

### 4. File Hosting

- Host IPA files on **Google Drive, Dropbox or a web server**.
- Ensure **direct download URLs** are used (not preview links).

### 5. Activate the workflow

Once configured, it will run automatically at the scheduled time.

## Requirements
- Google Sheet with the **IPA Size History** tab.
- Accessible IPA file URLs.
- SMTP / gmail account (Gmail recommended).
- n8n (cloud or self-hosted) with Google Sheets + Email nodes.
- Sufficient local storage for IPA file downloads.

## How to customize the workflow

- **Multiple apps**: Add more configs to `APP_CONFIGS`.
- **Thresholds**: Adjust `SIZE_INCREASE_THRESHOLD` / `SIZE_DECREASE_THRESHOLD`.
- **Notification templates**: Customize subject/body with variables:
`{{app_name}}, {{current_size}}, {{previous_size}}, {{change_percent}}, {{trend_status}}`.
- **Schedule**: Change Cron from daily to hourly, weekly, etc.
- **Large app warnings**: Adjust `LARGE_APP_WARNING`.
- **Trend analysis**: Extend beyond one build (7-day, 30-day averages).
- **Storage backend**: Swap Google Sheets for CSV, DB or S3.

## Add-ons to level up

- **Slack Notifications**: Add Slack webhook alerts with emojis & formatting.
- **Size History Charts**: Generate trend graphs with Chart.js or Google Charts API.
- **Environment separation**: Monitor dev/staging/prod builds separately.
- **Regression detection**: Statistical anomaly checks.
- **Build metadata**: Log bundle ID, SDK versions, architectures.
- **Archive management**: Auto-clean old records to save space.
- **Dashboards**: Connect to Grafana, DataDog or custom BI.
- **CI/CD triggers**: Integrate with pipelines via webhook trigger.

## Common Troubleshooting

- **No size data** → check URLs return binary IPA (not HTML error).
- **Download failures** → confirm hosting permissions & direct links.
- **Missing alerts** → ensure thresholds & prior history exist.
- **Google Sheets errors** → check sheet/tab names & OAuth credentials.
- **Email issues** → validate SMTP credentials, spam folder, sender reputation.
- **Large file timeouts** → raise HTTP timeout for &gt;100MB files.
- **Trend errors** → make sure at least 2 builds exist.
- **No runs** → confirm workflow is active and timezone is correct.

## Need Help?

If you’d like this to customize this workflow to suit your app development process, then simply [reach out to us here](https://www.weblineindia.com/contact-us.html) and we’ll help you customize the template to your exact use case.


## 📊 Basic Information

- **Workflow ID:** 9617
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9617)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** 
- **code** (×2)
- **googleSheets** 
- **if** 
- **gmail** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
