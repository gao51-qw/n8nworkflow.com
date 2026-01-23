# Ssl expiry alert with SSL-Checker.io

> 
## Use Case

Managing SSL certificates manually can be time-consuming and error-prone, often leading to unexpected downtime or security risks due to expired certificates.

## What This Workflow Does

This workflow automatically monitors SSL certificates for a list of websites, checks their expiry status using SSL-Checker.io, and sends timely notifications if a certificate is about to expire.

## Setup
Add your credentials for Google Sheets, Gmail, and SSL-Checker.io.

Create a Google Sheet with a list of URLs for the websites you want to monitor.

Configure the workflow to check the SSL status weekly.

Set up email notifications to alert you when a certificate is close to expiry.

Activate the workflow to automate monitoring and notification.

## How to Adjust It to Your Needs

- Customize the URL Source: Replace Google Sheets with another data source like Airtable or CSV files.
- Modify Notification Thresholds: Change the expiry threshold (e.g., notify for 14 days instead of 7).
- Add Additional Actions: Integrate with tools like Slack or Teams for team-wide notifications.
- Automate Renewal Requests: Add a step to send renewal requests directly to your SSL provider if a certificate is nearing expiry.

## 📊 Basic Information

- **Workflow ID:** 2694
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 16528
- **Downloads:** 1652
- **Created:** 2025/1/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2694)

## 👤 Author

- **Name:** Vishal Kumar
- **Username:** @vishalquantana

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **googleSheets** (×2)
- **scheduleTrigger** 
- **httpRequest** 
- **if** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
