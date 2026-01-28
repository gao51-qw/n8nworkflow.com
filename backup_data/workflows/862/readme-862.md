# Get DNS entries of any domain with uProc

> Do you want to control the DNS domain entries of your customers or servers?

This workflow gets DNS information of any domain using the uProc [**Get Domain DNS records tool**](https://app.uproc.io/#/tools/processor/get/domain/records).

You can use this workflow to check existing DNS records in real-time to ensure that any domain setup is correct.

![workflow-screenshot](fileId:361)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

You can replace "Create Domain Item" with any integration containing a domain, like Google Sheets, MySQL, or Zabbix server.

Every "uProc" node returns multiple items with the next fields per every item:
- type: Contains the DNS record type (A, ALIAS, AAAA, CERT, CNAME, MX, NAPTR, NS, PTR, SOA, SRV, TXT, URL).
- values: Contains the DNS record values.

## 📊 Basic Information

- **Workflow ID:** 862
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 1683
- **Downloads:** 168
- **Created:** 2020/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/862)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **functionItem** 
- **uproc** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
