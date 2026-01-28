# AI-powered vulnerability scanner with Nessus, risk triage & Google Sheets reporting

> ## 🛡 CyberScan – AI-Powered Vulnerability Scanner with Nessus, OpenAI, and Google Sheets

### 👤 Who’s it for

Security teams, DevOps engineers, vulnerability analysts, and automation builders who want to eliminate repetitive Nessus scan parsing, AI-based risk triage, and manual reporting. Designed for orgs following NIST CSF or CISA KEV compliance guidelines.

---

### ⚙️ How it works / What it does

- Runs scheduled or manual scans via the Nessus API.
- Processes scan results and extracts asset + vulnerability data.
- Uses a custom AI-based risk metric (LEV) to triage findings into:
  - 🚨 Expert review
  - ✅ Self-healing
  - 🕵️ Monitoring
- Automatically sends email alerts for critical CVEs.
- Exports daily summaries to Google Sheets (or your own BI system).
- Maps to NIST CSF (Identify, Protect, Detect, Respond, Recover).

---

### 🧰 How to set up

1. **Nessus**: Add your Nessus API credentials and instance URL.
2. **Google Sheets**: Authenticate your Google account.
3. **OpenAI / LLM**: Use your API key if adding LLM triage or rewrite prompts.
4. **Email**: Update SMTP credentials and alert recipient address.
5. **Set your targets**: Adjust asset ranges or scan UUIDs as needed.
6. ⚠️ All setup steps are explained in sticky notes inside the workflow.

---

### 📋 Requirements

- Nessus Essentials (Free) or Nessus Pro with API access.
- SMTP service (e.g. Gmail, Mailgun, SendGrid).
- Google Sheets OAuth2 credentials.
- Optional: OpenAI or other LLM provider for LEV scoring and CVE insights.

---

### 🛠 How to customize the workflow

- Swap **Google Sheets** with Airtable, Supabase, or PostgreSQL.
- Change scan logic or asset list to fit your internal network scope.
- Adjust AI scoring logic to match internal CVSS thresholds or KEV tags.
- Expand alerting logic to include Slack, Discord, or webhook triggers.

---

🔒 **No sensitive data included. All credentials and sheet links are placeholders.**




## 📊 Basic Information

- **Workflow ID:** 6293
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 1635
- **Downloads:** 163
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6293)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **emailSend** (×2)
- **code** (×2)
- **stickyNote** (×17)
- **scheduleTrigger** 
- **httpRequest** (×3)
- **set** (×3)
- **function** (×6)
- **splitOut** 
- **if** 
- **googleSheets** (×2)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
