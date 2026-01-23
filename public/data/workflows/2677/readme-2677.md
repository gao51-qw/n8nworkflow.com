# Analyze email headers for IP reputation and spoofing detection - Gmail

> # Analyze Emails for Security Insights

## Who is this for?

This workflow is ideal for IT professionals, security analysts, and organizations looking to enhance their email security practices. It is particularly useful for those who need to analyze Gmail email headers for IP tracking, spoofing detection, and sender reputation assessment. 

## What problem is this workflow solving?

Email spoofing and phishing attacks are significant cybersecurity threats. By analyzing email headers, this workflow provides detailed insights into the email's origin, authentication status, and the reputation of the sending IP address. It helps detect potential spoofing attempts and assess the trustworthiness of incoming emails.

## What this workflow does

This n8n workflow automates the process of analyzing email headers received in Gmail. It performs the following key functions:

1. **Triggering and Email Header Extraction:** It monitors Gmail inboxes for new emails and extracts their headers for analysis.
2. **Authentication Analysis:** It validates SPF, DKIM, and DMARC authentication results to ensure the email adheres to industry-standard security protocols.
3. **IP Analysis:** The workflow extracts the originating IP address and evaluates its reputation and geographic details using external APIs.
4. **Reputation Scoring:** It integrates with IP Quality Score to detect spam activity and assess the sender's reputation.
5. **Consolidation and Webhook Response:** All results are aggregated into a single JSON response, making it easy to integrate with third-party platforms or tools for further automation.

## Setup

1. **Authenticate Gmail:** Configure the `Gmail Trigger` node with your Gmail account credentials.
2. **API Keys (Optional):**
   - Obtain an API key for IP Quality Score (https://ipqualityscore.com).
   - Ensure the IP-API endpoint is accessible.
   - This step is optional as ipqualityscore.com will provide a limited number of free lookups each month. [See more details here](https://www.ipqualityscore.com/plans).  
3. **Activate the Workflow:** Ensure the workflow is active to process incoming emails in real-time.

## How to customize this workflow to your needs

- **Add Alerts:** Use the `Gmail - Respond to Webhook` node to trigger notifications in Slack, email, or any other communication channel.
- **Integrate with SIEM:** Forward the workflow output to SIEM tools like Splunk or ELK Stack for further analysis.
- **Modify Validation Rules:** Update SPF, DKIM, or DMARC logic in the `Set` nodes to align with your organization’s security policies.
- **Expand IP Analysis:** Add more APIs or services to enrich IP reputation data, such as VirusTotal or AbuseIPDB.

---

This workflow provides a robust foundation for email security monitoring and can be tailored to fit your organization's unique requirements. With its modular design and integration options, it’s a versatile tool to enhance your cybersecurity operations.

## 📊 Basic Information

- **Workflow ID:** 2677
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 16362
- **Downloads:** 1636
- **Created:** 2024/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2677)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **gmailTrigger** 
- **code** (×4)
- **set** (×14)
- **if** (×5)
- **httpRequest** (×2)
- **webhook** 
- **limit** 
- **merge** 
- **aggregate** (×2)
- **respondToWebhook** 
- **stickyNote** (×7)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
