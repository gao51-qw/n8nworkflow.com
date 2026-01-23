# Monitor Jamf policy integrity and send Slack alerts for changes

> 🛡️ Jamf Policy Integrity Monitor

🎯 Overview

A security-focused n8n workflow that monitors Jamf Pro policies for any unauthorized or accidental modification. It delivers configuration integrity and real-time visibility across managed Apple environments.

⚙️ Setup Instructions

Add your Jamf Pro and Slack credentials in n8n.

Import the workflow template.

Configure your preferred schedule and alert channel.

No coding required. The setup takes minutes.

🔍 How It Works

The workflow connects to Jamf Pro API, detects configuration changes, and sends instant alerts to Slack.
It maintains awareness of policy integrity while minimizing manual checks.
The logic runs automatically in the background for continuous monitoring.

📢 Slack Notification Example

:warning: Policy: Uninstall EDR modified
:calendar: DateTime: Oct 5, 2025, 10:23:27 AM

✅ Why It Matters

Jamf provides no built-in alerts when policies are modified.
This workflow closes that visibility gap and gives your team instant awareness of policy changes without manual auditing.
Ideal for security engineers, Jamf administrators, and compliance teams focused on operational assurance.

## 📊 Basic Information

- **Workflow ID:** 9287
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9287)

## 👤 Author

- **Name:** Jean-Marie Rizkallah 
- **Username:** @mrrobot

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **code** 
- **scheduleTrigger** 
- **crypto** 
- **if** 
- **stickyNote** (×7)
- **dataTable** (×4)
- **httpRequest** 
- **xml** 
- **manualTrigger** 
- **slack** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
