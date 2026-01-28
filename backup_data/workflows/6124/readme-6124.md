# Send postcards to contacts automatically using CentralStationCRM and EchtPost

> ## Workflow Overview
This workflow benefits anyone, who:
* wants to automate sending Postcards to tagged CentralStationCRM contacts

## Tools in this Workflow 
* [CentralStationCRM](https://centralstationcrm.de) - the simple and intuitive CRM Software for small teams.
* [EchtPost](https://echtpost.de) - send postcards online

## Workflow Screenshot
![Send Postcards to Contacts Automatically using CentralStationCRM and EchtPost  n8n 20250723 at 4.29.30 PM.jpg](fileId:1848)

## Workflow Description
This workflow consists of:
* a webhook trigger
* a set node
* an if node
* an HTTP request

### The Webhook Trigger
The webhook triggers when a person is updated in CentralStationCRM. 

The persons data is sent to n8n, including the company name and the address. 

### The Set node
This node filters the webhook data for just the data the EchtPost node needs. It also transforms the country field to the associated country code (i.e. "Deutschland" -&gt; "DE")

### The if node
This node checks if there is an "EchtPost" tag in the persons data.
-&gt; if false: do nothing
-&gt; if true: go to HTTP request

### The HTTP Request
This node sends the persons name, address and country code alongside with the id of the EchtPost template (inserted manually in the node) to EchtPost. It also needs an E-Mail-Adress for a confirmation mail.

The data starts a "Mail in 3 days" process with the EchtPost service, which mails a postcard with that template to the person.

## Preconditions 
For this workflow, you need:
* a CentralStationCRM account with API access
* an EchtPost account with API access
* an EchtPost template, with a message, and the templates ID

## 📊 Basic Information

- **Workflow ID:** 6124
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 97
- **Downloads:** 9
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6124)

## 👤 Author

- **Name:** CentralStationCRM
- **Username:** @centralstationcrm

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **stickyNote** (×7)
- **webhook** 
- **set** 
- **if** 
- **noOp** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
