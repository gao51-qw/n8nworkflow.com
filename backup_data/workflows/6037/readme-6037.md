# IP reputation check & SOC alerts with Splunk, VirusTotal and AlienVault

> # IP Reputation Check & Threat Summary using Splunk + VirusTotal + AlienVault + n8n

This workflow automates IP reputation analysis using **Splunk alerts**, enriches data via **VirusTotal** and **AlienVault OTX**, and generates actionable threat summaries for SOC teams — all without any coding.

---

## What It Does

When a Splunk alert contains a suspicious IP:

- **Ingests the IP** from the Splunk alert via webhook.
- **Performs dual threat enrichment** using:
  - VirusTotal IP reputation & tags.
  - AlienVault OTX pulses, reputation & WHOIS.
- **Merges & processes** threat intel data.
- **Generates a rich HTML summary** for analyst review.
- **Routes action based on severity**:
  - Sends Slack alert for suspicious IPs.
  - Creates an incident in ServiceNow.
  - Emails a formatted HTML report to the SOC inbox.

---

## Tech Stack Used

- **Splunk** – SIEM alert source  
- **VirusTotal API** – Reputation check & analysis stats  
- **AlienVault OTX API** – Community threat intel & pulse info  
- **n8n** – For orchestration, merging, summary generation  
- **Slack, Gmail, ServiceNow** – For SOC notifications and ticketing

---

## Ideal Use Case

Perfect for security teams wanting to:

- Automatically validate IP reputation from SIEM logs
- Get quick context from multiple threat feeds
- Generate email-ready reports and escalate high-risk IPs

---

## Included Nodes

- Webhook (Splunk)
- Function nodes for IOC extraction and intel processing
- HTTP Request (VirusTotal & AlienVault)
- Merge + Switch nodes for conditional logic
- Gmail, Slack, ServiceNow integration

---

## Tips

- Add your **VirusTotal** and **AlienVault** credentials in n8n's credential manager.  
- Use the Switch node to route based on your internal threat score logic.  
- Easily extend this to include AbuseIPDB or GreyNoise for deeper enrichment.



## 📊 Basic Information

- **Workflow ID:** 6037
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1652
- **Downloads:** 165
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6037)

## 👤 Author

- **Name:** Rajneesh Gupta
- **Username:** @rajneeshgupta

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **httpRequest** (×2)
- **html** 
- **code** (×3)
- **merge** 
- **switch** 
- **serviceNow** 
- **slack** 
- **gmail** 
- **webhook** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
