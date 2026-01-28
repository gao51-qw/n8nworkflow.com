# Auto-create Geotab zone for new Salesforce work order

> ### 📝 DESCRIPTION OF THE WORKFLOW

This workflow connects Salesforce and Geotab to streamline fleet tracking for field service jobs (Work Orders). When a new Work Order is created in Salesforce (with a 'New' status and valid coordinates), it creates a circular geofence zone in Geotab and updates the Work Order with the zone ID. If geolocation is missing, an alert email is sent to dedicated email.

The workflow uses a Salesforce Outbound Message to trigger an n8n webhook. It includes robust credential handling and optional logic to skip or notify on bad data.

**Use Cases:**

* Automating vehicle geofence setup for service visits
* Enhancing CRM-to-fleet system synchronisation
* Enforcing work orders data quality via alerts

**Integrations Used:**

* Salesforce
* Geotab API
* Microsoft Outlook (or any SMTP-compatible service)

**Tags:**
`geotab`, `salesforce`, `fleet management`, `gps tracking`, `field service`, `crm`, `automation`, `webhook`, `integration`

---

**ADDITIONAL RESOURCES**
#### 🔗 **Salesforce**

* [Salesforce Login](https://login.salesforce.com/)
* \[Salesforce Setup (Admin Console)]\([https://login.salesforce.com/](https://login.salesforce.com/) → click “Setup” gear icon)
* [Outbound Messages Documentation](https://help.salesforce.com/s/articleView?id=platform.workflow_managing_outbound_messages.htm)
* [Salesforce Developer Documentation](https://developer.salesforce.com/docs/)
* [Salesforce Workbench (API Testing Tool)](https://workbench.developerforce.com/)

---

#### 🔗 **Geotab**

* [Geotab Login (MyGeotab)](https://my.geotab.com/)
* [Geotab Developer Portal](https://developers.geotab.com/)
* [Geotab API Explorer](https://my.geotab.com/apiexplorer/)
* [Geotab SDK (JavaScript Samples)](https://developers.geotab.com/myGeotab/codeSamples/javascriptSamples)
* [Geotab Support Centre](https://support.geotab.com/)

---

## 📊 Basic Information

- **Workflow ID:** 4648
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 373
- **Downloads:** 37
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4648)

## 👤 Author

- **Name:** Sobek
- **Username:** @maagic

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×8)
- **webhook** 
- **respondToWebhook** 
- **set** (×2)
- **code** (×2)
- **httpRequest** (×2)
- **salesforce** (×2)
- **wait** 
- **if** 
- **microsoftOutlook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
