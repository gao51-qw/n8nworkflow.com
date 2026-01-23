# Verify an email recipient with uProc

> Do you want to avoid bounces in your Email Marketing campaigns? 

This workflow verifies emails using the [**uProc.io email verifier**](https://app.uproc.io/#/tools/processor/check/email/exists).

![workflow-screenshot](fileId:352)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create Email Item" can be replaced by any other supported service with email value, like Mailchimp, Calendly, MySQL, or Typeform.

The "uProc" node returns a status per checked email (deliverable, undeliverable, spamtrap, softbounce,...). 

"If" node checks if "deliverable" status exists. If value is not present, you can mark email as invalid to discard bounces. If "deliverable" status is present, you can use email in your Email Marketing campaigns.

If you need to know detailed indicators of any email, you can use the tool "Communication" > "Check Email Exists (Extended)" to get advanced information.



## 📊 Basic Information

- **Workflow ID:** 850
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1029
- **Downloads:** 102
- **Created:** 2020/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/850)

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
