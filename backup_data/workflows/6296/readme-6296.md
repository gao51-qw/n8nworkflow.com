# Automated security alert analysis with Sophos, Gemini AI, and VirusTotal

> ## **How It Works**
This workflow automates the analysis of security alerts from Sophos Central, turning raw events into actionable intelligence. It uses the official Sophos SIEM integration tool to fetch data, enriches it with VirusTotal, and leverages Google Gemini to provide a real-time threat summary and mitigation plan via Telegram.

Prerequisite (Important): This workflow is triggered by a webhook that receives data from an external Python script. You must first set up the Sophos-Central-SIEM-Integration script from the official Sophos GitHub. This script will fetch data and forward it to your n8n webhook URL.

Tool Source Code: [Sophos/Sophos-Central-SIEM-Integration](Sophos/Sophos-Central-SIEM-Integration)

## **The n8n Workflow Steps**
**Webhook**: Receives enriched event and alert data from the external Python script.

**IF (Filter)**: Immediately filters the incoming data to ensure only events with a high or critical severity are processed, reducing noise from low-priority alerts.

**Code (Prepare Indicator)**: Intelligently inspects the Sophos event data to extract the primary threat indicator. It prioritizes indicators in the following order: File Hash (SHA256), URL/Domain, or Source IP.

**HTTP Request (VirusTotal)**: The extracted indicator is sent to the VirusTotal API to get a detailed reputation report, including how many security vendors flagged it as malicious.

**Code (Prompt for Gemini)**: The raw JSON output from VirusTotal is processed into a clean, human-readable summary and a detailed list of flagging vendors.

**AI Agent (Google Gemini)**: All collected data—the original Sophos log, the full alert details, and the formatted VirusTotal reputation—is compiled into a detailed prompt for Gemini. The AI acts as a virtual SOC analyst to:

Create a concise incident summary.

Determine the risk level.

Provide a list of concrete, actionable mitigation steps.

**Telegram**: The complete analysis and mitigation plan from Gemini is formatted into a clean, easy-to-read message and sent to your specified Telegram chat.

## **Setup Instructions**
Configure the external Python script to forward events to this workflow's Production URL.

In n8n, create Credentials for Google Gemini, VirusTotal, and Telegram.

Assign the newly created credentials to the corresponding nodes in the workflow.

## 📊 Basic Information

- **Workflow ID:** 6296
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 800
- **Downloads:** 80
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6296)

## 👤 Author

- **Name:** Rizky Febriyan
- **Username:** @rizkyriyan

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegram** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
