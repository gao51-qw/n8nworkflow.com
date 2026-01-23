# Sync NetSuite customers to Salesforce accounts & contacts with auto upserts

> Short Description

Automatically exports customer records from NetSuite and syncs them into Salesforce — creating or updating Accounts and Contacts depending on whether the NetSuite record represents a company or an individual.

Who is this for / Use case

This template is designed for businesses and integration developers who:

- Use NetSuite as their ERP or CRM system.
- Need to automatically sync customer data (both companies and individuals) into Salesforce.
- Want a reliable, scalable solution that supports pagination and upserts.
- Prefer a ready-to-use, easily customizable workflow built on n8n.

How it works

1. Initialize pagination offset.
2. Fetch customer records from NetSuite in batches via REST API.
3. Split the retrieved array into individual items.
4. Check record type — company or individual.
5. Upsert to Salesforce:
	1. For companies → creates/updates Account records.
	2. For individuals → creates/updates both Account and Contact (linked to the Account).
3. Merge results from both branches.
4. Update pagination offset for the next batch.
5. Repeat until all records are processed, then end the workflow.

Setup / Configuration

1. Import the workflow into your n8n instance.
2. Set your NetSuite and Salesforce credentials.
3. Ensure your Salesforce Account/Contact objects have a matching External ID field.
4. (Optional) Adjust mapping fields or filters to your data needs.
5. Execute manually or trigger on a schedule (e.g., daily sync).


## 📊 Basic Information

- **Workflow ID:** 9695
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 166
- **Downloads:** 16
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9695)

## 👤 Author

- **Name:** Entech Solutions
- **Username:** @entech

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **if** (×2)
- **n8n-nodes-netsuite-rest.netSuiteRest** (×3)
- **stickyNote** (×4)
- **salesforce** (×3)
- **splitOut** 
- **merge** 
- **noOp** 
- **code** (×4)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
