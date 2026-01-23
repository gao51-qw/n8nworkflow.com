# Monitor Amadeus & Booking.com API health with WhatsApp SLA alerts

> This guide details the setup and functionality of an automated workflow designed to monitor the health, uptime, and SLA compliance of travel supplier APIs, specifically the Amadeus Flight API and Booking.com Hotel API. The workflow runs every 10 minutes, processes health and SLA data, and sends alerts or logs based on the status.

## What It Monitors
- **API Health**: UP/DOWN status with health indicators.
- **Uptime Tracking**: Real-time availability percentage.
- **SLA Compliance**: Automatic breach detection and alerts.
- **Performance Rating**: Classified as EXCELLENT, GOOD, AVERAGE, or POOR.

## Features
- Runs every 10 minutes automatically.
- Monitors the Amadeus Flight API with a 99.5% SLA target.
- Monitors the Booking.com Hotel API with a 99.0% SLA target.
- Smart Alerts that notify via WhatsApp only on SLA breaches.
- Logging of results for both breaches and normal status.

## Workflow Steps
- **Monitor Schedule**: Triggers the workflow every 10 minutes automatically.
- **Amadeus Flight API**: Tests the Amadeus Flight API (GET: https://api.amadeus.com) simultaneously.
- **Booking Hotel API**: Tests the Booking.com Hotel API (GET: https://distribution-xml.booking.com) simultaneously.
- **Calculate Health & SLA**: Processes health, uptime, and SLA data.
- **Alert Check**: Routes to appropriate responses based on breach status.
- **SLA Breach Alert**: Sends an alert with throwError if an SLA breach occurs.
- **Normal Status Log**: Records results with throwError for healthy status.
- **Send Message**: Sends a WhatsApp message for breach alerts.

## How to Use
1. Copy the JSON configuration of the workflow.
2. Import it into your n8n workspace.
3. Activate the workflow.
4. Monitor results in the execution logs and WhatsApp notifications.

The workflow will automatically start tracking your travel suppliers and alert you via WhatsApp only when SLA thresholds are breached. Please double-check responses to ensure accuracy.

## Requirements
- n8n account and instance setup.
- API credentials for Amadeus Flight API (e.g., https://api.amadeus.com).
- API credentials for Booking.com Hotel API (e.g., https://distribution-xml.booking.com).
- WhatsApp integration for sending alerts.

## Customizing this Workflow
- Adjust the **Monitor Schedule** interval to change the frequency (e.g., every 5 or 15 minutes).
- Modify SLA targets in the **Calculate Health & SLA** node to align with your service agreements (e.g., 99.9% for Amadeus).
- Update API endpoints or credentials in the **Amadeus Flight API** and **Booking Hotel API** nodes for different suppliers.
- Customize the **Send Message** node to integrate with other messaging platforms (e.g., Slack, email).
- Enhance the **Normal Status Log** to include additional metrics or export logs to a database.

## 📊 Basic Information

- **Workflow ID:** 6263
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 350
- **Downloads:** 35
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6263)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **code** 
- **if** 
- **debugHelper** (×2)
- **stickyNote** (×6)
- **whatsApp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
