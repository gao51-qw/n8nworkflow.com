This n8n workflow automates CVE tracking by retrieving vulnerability details from the NVD API 🛡️, organizing and updating the data in Google Sheets 📊, and optionally alerting teams via Slack or Email 📩💬.

---

### Who is this for?

This workflow is ideal for:

* Security operations (SecOps) teams 🧑‍💻
* DevSecOps engineers 🛠️
* IT compliance officers 🧾
* Vulnerability management analysts 🕵️
* Sysadmins or cloud engineers in regulated industries 🏢

---

### What problem does this workflow solve?

Manually checking for the latest CVE information is inefficient and error-prone. This automation:

* Monitors NVD for CVE entries based on product or keyword filters 🔍
* Tracks new vulnerabilities and changes to existing ones ⏱️
* Logs all CVE data in a structured Google Sheet for ongoing review and audit 🧾
* Can trigger alerts or actions for high-severity CVEs 🚨

---

### What this workflow does

This workflow builds an automated CVE monitoring system that:

* Queries the [NVD API](https://nvd.nist.gov/developers/vulnerabilities) for vulnerability data matching keywords (e.g. "Apache", "Log4j") 📡
* Extracts relevant fields: CVE ID, description, severity (CVSS scores), published/modified dates, and affected products 🗂️
* Saves or updates the information in Google Sheets 📑
* Optionally filters for critical severity (e.g., CVSS &gt; 8.0) and sends Slack alerts or emails 📬
* Supports historical tracking and change detection over time 🕒

Includes a Google Sheets template for tracking:

* CVE IDs and metadata
* Severity levels and scores
* Product/component tags
* Resolution/patch status tracking

---

### Setup

#### Prerequisites

You'll need:

* An n8n instance (cloud or self-hosted) ☁️
* A Google account + Google Sheets API credentials 📑
* (Optional) Slack webhook URL or email setup for notifications 💬

#### Step 1: Configure API Inputs

Open the `🔧 Configuration` node and provide:

* NVD API parameters (keyword filters, date ranges, etc.)
* Google Sheet ID and tab name for output
* Slack webhook URL (optional)

#### Step 2: Set Filters & Preferences

Define:

* Target keywords or CPE filters (e.g. “Cisco ASA”, “Windows 10”) 🧩
* CVSS threshold for high/critical alerts 🎚️
* Update frequency (manual trigger, scheduled cron, webhook, etc.) 🔁

#### Step 3: Connect to Google Sheets

* Update Sheet node with your destination Sheet ID
* Ensure columns like `CVE ID`, `Description`, `Severity`, `Last Updated` exist

#### Step 4: Enable Alerts (Optional)

* Set up Slack node with your webhook URL or connect SMTP/Email node
* Format alert message with key CVE data

#### Step 5: Activate and Run

* Save and activate the workflow 🔛
* Run manually or schedule it to run periodically (e.g., every 6 hours) ⏱️

---

### Customization Tips

* Add deduplication logic to avoid reprocessing the same CVEs ♻️
* Use filters to monitor only critical CVEs or specific vendors/vendors 🔍
* Extend with GitHub Security Advisories or Exploit DB integration 🧩
* Track remediation status and link to patch notes or fixes 🩹

---

### Troubleshooting

**Common Issues**

* *Empty results from NVD:* Check if your keywords are too narrow or if NVD API rate limits apply 📉
* *Google Sheets error:* Ensure the Sheet ID and tab names are correct and accessible 🔑
* *Alerts not sending:* Check Slack webhook or email configurations 🔧

---

### Getting Help

* Read inline comments in n8n 📝
* Visit the [n8n Docs](https://docs.n8n.io) 📚
* Contact template creator: [dimejicole21@gmailcom](mailto:dimejicole21@gmailcom)

---

This template was created by David Olusola. 🛡️
