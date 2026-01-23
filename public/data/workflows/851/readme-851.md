# Detect web visitors country by IP address with uProc

> Do you want to know where a web visitor lives? 

This workflow enriches any lead by IP address using the uProc.io [**Location By IP address tool**](https://app.uproc.io/#/tools/processor/get/location/by-ip) and sends an email in Spanish or English depending on the detected web visitor country.

![workflow-screenshot](fileId:353)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create IP and Email Item" can be replaced by any other supported service with IP and Email values, like Mailchimp, Calendly, or MySQL.

The "uProc" node returns the location of the provided IP address. 

"If" node checks if the web visitor country code belongs to Spain (ES Isocode). If positive, we use the Spanish language in our emails. Otherwise, we will use the English language in our communications.

Depending on the detected country code, we use the Amazon SES node to send the customized email adapted to the right language.

## 📊 Basic Information

- **Workflow ID:** 851
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 992
- **Downloads:** 99
- **Created:** 2020/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/851)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **uproc** 
- **if** 
- **functionItem** 
- **awsSes** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
