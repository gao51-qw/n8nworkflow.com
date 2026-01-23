# Monitor SSL certificate expiry dates with Google Sheets & Slack alerts

> &gt; ⚠️ **Notice:**  
&gt; Community nodes like **@custom-js/n8n-nodes-pdf-toolkit** can only be installed on self-hosted instances of n8n.  

---

![Screenshot from 20250914 161153.png](fileId:2630)


This n8n workflow illustrates how to **monitor and track SSL certificate expiration dates** for any domain using the **SSL Checker node** from [customJS](https://www.customjs.space). It automatically updates a Google Sheet with the number of days left until expiry and sends a Slack notification when certificates are about to expire.  

---

## What this workflow does

- **Input** a list of domains from Google Sheets.  
- **Check** each domain’s SSL certificate details, including expiration date and days left.  
- **Update** the Google Sheet with the latest SSL expiry information.  
- **Notify** via Slack if any certificate is expiring soon (e.g., less than 8 days).  

---

## Requirements

- **Self-hosted** n8n instance.  
- **CustomJS API key** for SSL checking.  
- **Google Sheets API credentials** for reading/updating domain data.  
- **Slack API credentials** (optional, for notifications).  

---

## Workflow Steps

1. **Schedule Trigger**  
   - ⏰ Starts the workflow automatically (weekly by default, configurable).  

2. **Google Sheets (Read Rows)**  
   - 📄 Retrieves the list of domains from your Google Sheet.  

3. **SSL Checker (CustomJS node)**  
   - 🔐 Fetches SSL certificate details for each domain.  
   - Returns JSON output with fields such as `expires` and `daysLeft`.  

4. **Google Sheets (Update Rows)**  
   - 📝 Updates the sheet with the current number of days left until certificate expiry.  

5. **Check Days Left Threshold** (formerly "If" node)  
   - ⚠️ Evaluates whether the certificate expires within the threshold (e.g., `&lt; 8 days`).  

6. **Slack Node**  
   - 💬 Sends a notification message if a certificate is close to expiration.  

   Example Slack alert message:  

   ```text
   ⏰ Reminder: SSL certificate of www.example.com 
   will expire in 7 days.
----

### SSL Checker node JSON output

```json
{
  "output": {
    "domain": "example.com",
    "valid": true,
    "expires": "2025-12-31T23:59:59.000Z",
    "issuer": "Let's Encrypt",
    "daysLeft": 5
  }
}

## 📊 Basic Information

- **Workflow ID:** 5172
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 134
- **Downloads:** 13
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5172)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **googleSheets** (×2)
- **@custom-js/n8n-nodes-pdf-toolkit.sslChecker** 
- **slack** 
- **scheduleTrigger** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
