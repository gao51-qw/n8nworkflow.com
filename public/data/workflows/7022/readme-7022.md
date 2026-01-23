# Auto remediate endpoint infections with Wazuh, ClamAV, and GPT-4

> Reduce human delays between **malware detection and remediation** in MSSP/SOC environments. This workflow automates full endpoint antivirus scanning immediately after high-severity endpoint infection wazuh alerts, closing the gap between alerting and action.

**Why Use This Workflow?**

Malware alerts are only effective if acted upon swiftly. Manual follow-ups are slow or often missed, letting threats persist.

**Automates detection, triage, scan initiation, and notification—all** within **one minute** of alerting.

Ensures consistent, auditable actions across endpoints running Linux or Windows.

---
🔑 **Key Features**

Listens for high-severity Wazuh AV infection alerts (e.g., rule 52502).

Uses GPT-4 for AI-powered alert summaries to speed triage and decision making.

Extracts exact infected file paths using AI and regex for targeted scanning.

Runs ClamAV/defender scans directly on endpoints via SSH with least-privilege credentials.

Sends real-time scan results and remediation updates through Telegram, Slack, or email.

Runs locally with limited permissions—no need for elevated Wazuh manager access.

---
**🎯 Impact**

Eliminates **manual lag—scans** start automatically and immediately.

Standardizes response playbooks for **reliable, repeatable remediation.**

Reduces **threat dwell time**, minimizing risk exposure.

Provides full event-to-remediation visibility via logs and notifications.

---

🚀 **Get Started**

Configure Wazuh Manager to forward AV alerts to this n8n webhook.

Import this workflow JSON into your n8n instance.

Set up required credentials: OpenAI API, SSH access for ClamAV scanning, notification channels (Telegram/Slack/email).

Activate the workflow and monitor alerts triggering automated scans and reports.

---

**📂 Enjoy customizing**

Swap ClamAV with your preferred antivirus commands (e.g., Defender) as needed.

Integrate with your existing communication or ticketing systems.

Extend or adapt for multi-endpoint orchestration or other alert rules.

---

**Created by [Mariskarthick M](https://www.linkedin.com/in/mariskarthickm/)** 
Senior Security Analyst | Detection Engineer | Threat Hunter | Open-Source Enthusiast



## 📊 Basic Information

- **Workflow ID:** 7022
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 612
- **Downloads:** 61
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7022)

## 👤 Author

- **Name:** mariskarthick
- **Username:** @mariskarthick

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.agent** 
- **ssh** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
