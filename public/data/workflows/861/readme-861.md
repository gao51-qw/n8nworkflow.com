# Monitor SSL certificate of any domain with uProc

> Do you want to check the SSL certificate expiration dates of your customers or servers?

This workflow gets information of an SSL certificate using the uProc [**Get Certificate by domain tool**](https://app.uproc.io/#/tools/processor/get/domain/certificate).
You can use this workflow to query SSL certificates in bulk and send alarms when any certificate has expired.

![workflow-screenshot](fileId:360)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

You can replace "Create Domain Item" with any integration containing a domain, like Google Sheets, MySQL, or Zabbix server.

Every "uProc" node returns the next fields per every analyzed SSL certificate:
- issuer: Contains the issuer.
- provider: Contains the provider.
- valid_from: Contains the start date.
- valid_to: Contains the end date.
- serial_number: Contains the serial number.
- type: Contains if supports one or multiple domains.
- protocol: Contains the protocol.
- valid: Contains its validity.
- domains: Contains all domains and subdomains supported.

An "IF" node detects if the certificate is valid or not.

Finally, the workflow sends an alarm to a Telegram channel to know if the certificate has expired. 


## 📊 Basic Information

- **Workflow ID:** 861
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2936
- **Downloads:** 293
- **Created:** 2020/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/861)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **functionItem** 
- **uproc** 
- **telegram** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
