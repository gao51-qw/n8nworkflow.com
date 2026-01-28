# OTX & OpenAI web security check

> # This n8n workflow automates website security audits. It combines direct website scanning, threat intelligence from AlienVault OTX, and advanced analysis from an OpenAI large language model (LLM) to generate and email a comprehensive security report.

## How it Works (Workflow Flow):

Input: A user provides a website URL via a simple web form.
**Data Collection:**
An HTTP Request node visits the provided URL to gather initial data (status code, headers).
An AlienVault HTTP Request node queries AlienVault OTX for known threats associated with the website's hostname.
**Data Preparation (Prepare Data for AI):** A custom code node consolidates the collected website data and AlienVault intelligence, performing initial checks for common issues (e.g., error codes, missing security headers, AlienVault warnings).
**AI Analysis (Security Configuration Audit):** The prepared data is sent to an OpenAI Chat Model, which acts as a cybersecurity expert. The AI analyzes the data to identify vulnerabilities, explain their impact, suggest exploitation methods, and outline mitigation steps.
**Report Formatting (Format Report for Email):** Another custom code node takes the AI's plain-text report and converts it into a structured HTML format suitable for email.
**Delivery (Send Security Report):** The final HTML report is sent via Gmail to a specified email address.

### **Setup Steps:**

To use this workflow, you'll need an n8n instance and the following credentials:

n8n Instance: Ensure your n8n environment is running.
**OpenAI API Key:**
Generate a key from OpenAI.
Add an "OpenAI API" credential in n8n (e.g., "OpenAI account").
**AlienVault OTX API Key:**
Obtain a key from your AlienVault OTX profile.
Add an "AlienVault OTX API" credential in n8n (e.g., "AlienVault account").
**Gmail Account:**
Set up a "Gmail OAuth2" credential in n8n for sending emails (recommended for security; involves Google Cloud setup).
**Import Workflow:**
Copy the workflow's JSON code.
In n8n, import the workflow via "Workflows" &gt; "New" &gt; "Import from JSON".
**Configure Recipient:**
In the "Send Security Report" node, specify the email address where reports should be sent.
**Activate:** Enable the workflow to start processing submissions.

Once activated, access the "On form submission" webhook URL to input a URL and trigger an audit.

## 📊 Basic Information

- **Workflow ID:** 5175
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 6812
- **Downloads:** 681
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5175)

## 👤 Author

- **Name:** Sean Birmingham
- **Username:** @knute

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
