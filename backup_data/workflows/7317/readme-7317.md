# Automated patient vitals monitoring & alerts with Philips IntelliVue & Google Sheets

> This workflow utilizes **Philips IntelliVue Device** details to automatically track patient vitals, such as heart rate and oxygen levels. It quickly spots critical health issues and sends alerts to healthcare staff for fast action. The system saves data for records and helps improve patient care with real-time updates. It’s simple to set up and adjust for different needs.

## Essential Information

- Processes data from **Philips IntelliVue Devices** to monitor vitals instantly.
- Filters and categorizes conditions as critical or non-critical based on thresholds.
- Sends clinical alerts for critical conditions and logs data for review.
- Runs every 30 seconds to ensure timely updates.

## System Architecture

### Data Collection Pipeline:

- **Poll Device Data Every 30s**: Continuously retrieves vitals from Philips IntelliVue Devices.
- **Fetch from IntelliVue Gateway**: Retrieves data via HTTP GET requests.

### Processing Pipeline:
- **Process Device Data**: Analyzes and validates the data stream.

### Alert Generation Flow:

- **Validate & Enrich Data**: Ensures accuracy and adds patient context.
- **Save to Patient Database**: Stores data for records.
- **Check Alert Status**: Applies rules to trigger alerts.
- **Send Clinical Alert**: Notifies staff for critical conditions.

## Implementation Guide

- Import workflow JSON into n8n.
- Configure the Philips IntelliVue Devices gateway URL and test with sample data.
- Set up alert credentials (e.g., email).
- Test and adjust rule thresholds.

## Technical Dependencies

- Philips IntelliVue Devices for vitals data.
- n8n for automation.
- Email or messaging API for alerts.
- Database for data storage.

## Customization Possibilities

- Adjust Switch node rules for critical thresholds.
- Customize alert messages.
- Modify database schema.
- Add logging for analysis.

## 📊 Basic Information

- **Workflow ID:** 7317
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 224
- **Downloads:** 22
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7317)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **code** (×2)
- **googleSheets** 
- **emailSend** 
- **switch** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
