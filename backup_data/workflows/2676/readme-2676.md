# Analyze email headers for IP reputation and spoofing detection - Outlook

> ### **Analyze Emails for Security Insights**

#### **Who is this for?**

This workflow is ideal for security teams, IT Ops professionals, and managed service providers (MSPs) responsible for monitoring and validating email traffic. It’s especially useful for organizations that need to identify potential phishing attempts, spam, or compromised accounts by analyzing email headers and IP reputation.

---

#### **What problem is this workflow solving?**

This workflow helps identify malicious or suspicious emails by verifying email authentication headers (SPF, DKIM, DMARC) and analyzing the reputation of the originating IP address. By automating these checks, it reduces manual analysis time and flags potential threats efficiently.

---

#### **What this workflow does**

- **Email Monitoring:** Polls a specified Microsoft Outlook folder for new emails in real-time.
- **Header Analysis:** Retrieves and processes email headers to extract critical information such as authentication results and the sender’s IP address.
- **IP Reputation Check:** Leverages external APIs (IP Quality Score and IP-API) to analyze the originating IP for potential spam or malicious activity.
- **Authentication Validation:** Validates SPF, DKIM, and DMARC headers, determining if the email passes industry-standard authentication protocols.
- **Data Aggregation and Reporting:** Combines all analyzed data into a unified format, ready for reporting or integration into downstream systems.
- **Webhook Integration:** Outputs the findings via a webhook, enabling integration with alerting tools or security information and event management (SIEM) platforms.

---

#### **Setup**

1. **Connect to Outlook:**
   - Configure the Microsoft Outlook trigger node with valid OAuth2 credentials.
   - Specify the email folder to monitor for new messages.

2. **API Keys (Optional):**
   - Obtain an API key for IP Quality Score (https://ipqualityscore.com).
   - Ensure the IP-API endpoint is accessible.
   - This step is optional as ipqualityscore.com will provide a limited number of free lookups each month. [See more details here](https://www.ipqualityscore.com/plans).  

3. **Webhook Configuration:**
   - Set up a webhook endpoint to receive the output of the workflow.

4. **Optional Adjustments:**
   - Customize polling intervals in the trigger node.
   - Modify header filters or extend the validation logic as needed.

---

#### **How to customize this workflow to your needs**

- **Add Alerts:** Use the `Respond to Webhook` node to trigger notifications in Slack, email, or any other communication channel.
- **Integrate with SIEM:** Forward the workflow output to SIEM tools like Splunk or ELK Stack for further analysis.
- **Modify Validation Rules:** Update SPF, DKIM, or DMARC logic in the `Set` nodes to align with your organization’s security policies.
- **Expand IP Analysis:** Add more APIs or services to enrich IP reputation data, such as VirusTotal or AbuseIPDB.

---

This workflow provides a robust foundation for email security monitoring and can be tailored to fit your organization's unique requirements. With its modular design and integration options, it’s a versatile tool to enhance your cybersecurity operations.

## 📊 Basic Information

- **Workflow ID:** 2676
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 5153
- **Downloads:** 515
- **Created:** 2024/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2676)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **microsoftOutlookTrigger** 
- **httpRequest** (×3)
- **code** (×4)
- **limit** 
- **set** (×14)
- **if** (×5)
- **merge** 
- **aggregate** (×2)
- **noOp** 
- **respondToWebhook** 
- **webhook** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
