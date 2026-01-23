# Monitor authentication IPs from SaaS alerts & email reports via SMTP2Go

> # Collect and Email Authentication IP Addresses from SaaS Alerts (Last 24 Hours)

## Description  
This n8n workflow automates the process of collecting sign-in IP addresses from SaaS Alerts over the past 24 hours and emailing the results using SMTP2Go. Designed for security teams, IT administrators, and compliance officers, this workflow helps monitor user authentication activity, detect unusual sign-ins, and respond to potential security threats in real time.  

By automating data collection and email alerts, organizations can proactively track login patterns, ensure compliance with security policies, and mitigate risks associated with unauthorized access.  

## Use Case  
This workflow is ideal for businesses and IT teams that need to:  
- Monitor user authentication activity across SaaS applications.  
- Identify login attempts from suspicious IPs.  
- Automate security reporting and compliance tracking.  
- Receive real-time alerts for unusual sign-in behaviors.  

## Pre-Conditions & Requirements  
Before using this workflow, ensure you have:  
- A **SaaS Alerts** account or another system that logs authentication IPs.  
- An **SMTP2Go** account for sending email notifications.  
- n8n set up with proper API credentials and database access (if applicable).  

## Setup Instructions  
1. **Configure SaaS Alerts API**  
   - Obtain API from the SaaS Alerts Platform under the Settings menu. 

2. **Set Up SMTP2Go for Email Alerts**  
   - Create an SMTP2Go account if you don’t have one.  
   - Generate a SMTP2Go API key
   - Verify that your sending email address has been configured and verified. 
   - Define recipient email addresses for security alerts.  

3. **Customize the Workflow**  
   - Modify filtering rules to track specific users, IP ranges, or flagged login attempts.  
   - Adjust email content to include relevant details for your team.  

4. **Test & Deploy**  
   - Run the workflow manually to verify data retrieval and email notifications.  
   - Schedule the workflow to run daily for automated monitoring.  

## Workflow Steps  
1. **Trigger** – Starts manually or on a scheduled interval (e.g., every 24 hours).  
2. **Fetch Authentication Logs** – Retrieves sign-in IPs from SaaS Alerts or a custom API.  
3. **Filter & Process Data** – Extracts relevant login attempts based on defined criteria.  
4. **Format Data for Reporting** – Structures the data for readability in an email alert.  
5. **Send Email Notification via SMTP2Go** – Delivers the security report to designated recipients.  

## Customization Options  
- **Modify Filtering Rules** – Track specific login behaviors, flagged IPs, or unusual patterns.  
- **Change Email Recipients** – Update the recipient list based on security team needs.  
- **Integrate with Security Dashboards** – Expand the workflow to log data into a SIEM system or incident response platform.  
- **Add Additional Triggers** – Configure alerts for specific login anomalies, such as failed login attempts.  

## Keywords  
**n8n security automation, authentication monitoring, login IP tracking, SMTP2Go email alerts, SaaS Alerts workflow, IT security automation, login anomaly detection**



## 📊 Basic Information

- **Workflow ID:** 3126
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1024
- **Downloads:** 102
- **Created:** 2025/3/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3126)

## 👤 Author

- **Name:** Benjamin Jones (SaaS Alerts)
- **Username:** @benjones-saasalerts

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **httpRequest** (×4)
- **stickyNote** (×3)
- **removeDuplicates** 
- **moveBinaryData** 
- **convertToFile** 
- **set** (×2)
- **merge** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
