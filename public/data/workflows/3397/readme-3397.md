# Personalise outreach emails using customer data and AI

> ### This n8n template uses existing emails from customers as context to customise and "finetune" outreach emails to them using AI.

By now, it should be common knowledge that we can leverage AI to generate unique emails but in a way, they can remain generic as the AI lacks the customer context to be truly personalised. One way to solve this is by pulling in a source of customer data - and what better way then by using existing email correspondence.

### How it works
* Customers to target are pulled from Hubspot and each customer is then run in a loop. We're using a loop as the retrieved emails for each customer become separate items and a loop helps with item reference.
* We connect to our Gmail account to pull all emails recieved from the customer.
* The contents of the email will be suitable to build a short persona of the customer. We use the Information Extractor to get our AI model to pull out the key attributes of this persona such as decision making style and communication preferences.
* With this persona, we can now pass this to our AI model to generate a personalised outreach email specifically for our customer.
* Finally, a draft email is created for human review before sending. If you would rather send the email straight away, this is also possible.

### How to use
* Define the topic of the outreach email in the "variables" node. This directs the AI on what outreach email to generate.
* Ensure the emails are pulled from the right account. If emails may contain sensitive data, adjust the filters and text parsing to ensure these are not leaked to the AI (which might then leak into the generated email).

### Requirements
* Hubspot for Contacts List
* OpenAI for LLM
* Gmail for Existing Emails and Sending Emails

### Customising this workflow
* Not using Hubspot? Any CRM would work just as well or even a simple text csv!
* If you have customer past deals or engagements in your CRM, consider using this as additional context for the AI to use.

## 📊 Basic Information

- **Workflow ID:** 3397
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 3036
- **Downloads:** 303
- **Created:** 2025/4/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3397)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **stickyNote** (×6)
- **hubspot** 
- **splitInBatches** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
