**Keep your Hostinger VPS servers secure with automated backups! This n8n (self-hosted) workflow for is designed to create daily snapshots and send server metrics effortlessly, ensuring you always have an up-to-date recovery copy.**

**Key Features:**
✅ Automated Snapshots: Daily execution with zero manual intervention.
✅ Smart Replacement: Hostinger allows only 1 snapshot per VPS—the workflow automatically replaces the previous one.
✅ Notifications: Alerts via WhatsApp (Evolution API) or other configurable channels for execution confirmation.

**Quick Setup:**
Prerequisites:

Install the Community Node n8n-nodes-hostinger-api and n8n-nodes-evolution-api in your n8n instance.

Generate a Hostinger API Key in their dashboard: hpanel.hostinger.com/profile/api.

**Workflow Configuration:**
Add the Hostinger API credential in the first node and reuse it across the workflow.

Customize the schedule (e.g., daily at 2 AM) and notification method (Evolution API for WhatsApp, email, etc.).

**Important Note:**
Hostinger overwrites the previous snapshot with each new execution, keeping only the latest version.

### VPS Metrics avaliables (send in messages):

🔹Status: snapshot status
🔹Date: snapshot date time
🔹Server: server name
🔹IP: external server IP

⚙️ Métrics: 
🔹 Number of vCPUs 
🔹 Ram usage / avaliable 
🔹 Hard Disk usage / avaliable
🔹 Operational Sys and version
🔹 Uptime time (days, hours)