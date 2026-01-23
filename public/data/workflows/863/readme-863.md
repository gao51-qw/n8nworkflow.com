# Verify a phone number with uProc

> Do you want to avoid communication problems when launching phone calls? 

This workflow verifies landline and mobile phone numbers using the uProc [**Get Parsed and validated phone tool**](https://app.uproc.io/#/tools/processor/get/phone/parsed) with worldwide coverage.

![workflow-screenshot](fileId:362)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create Phone Item" can be replaced by any other supported service with phone values, like databases (MySQL, Postgres), or Typeform.

The "uProc" node returns the next fields per every parsed and validated phone number:
- country_prefix: contains the international country phone prefix number.
- country_code: contains the 2-digit ISO country code of the phone number.
- local_number: contains the phone number without international prefix.
- formatted: contains a formatted version of the phone number, according to country detected.
- valid: detects if the phone number has a valid format and prefix.
- type: the phone number type (mobile, landline, or something else).

"If" node checks if the phone number is valid.

You can use the result to mark invalid phone numbers in your database or discard them from future telemarketing campaigns.

## 📊 Basic Information

- **Workflow ID:** 863
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1571
- **Downloads:** 157
- **Created:** 2020/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/863)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **functionItem** 
- **uproc** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
