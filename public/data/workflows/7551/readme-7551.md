# Email management: Auto-delete marketing emails & generate AI replies with Gemini

> ### Description
This workflow intelligently scans your inbox, detects whether an email is marketing or genuine, and takes the right action automatically. 

 Marketing Emails :  Deleted instantly and logged in Google Sheets for tracking.

Non-Marketing Emails : Receive a customized, polite reply crafted using AI.

Tracking : Every action (delete/reply) is recorded for auditing and reference.

### Accounts & Tools

-  n8n instance (self-hosted or cloud).
-  Google account with:
	- Gmail API access (for reading, deleting, and replying).
	- Google Sheets API access (for logging deleted/replied emails).
- IMP/SMTP credentials (if using IMAP trigger instead of Gmail API).
-  Google Gemini (PaLM) API key to classify emails and generate replies.

### Setup instructions
- Create a n8N account on cloud or install it locally. follow the quick start guide [this](https://docs.n8n.io/try-it-out/)
- Define your trigger point for your workflow as how or when this needs to run. Currently IMAP has been used to detect if any email is received and if so, trigger the workflow
- Now, we need to setup the google account which allows our workflow to read emails. Follow [this](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.gmail) guideline to setup gmail account
- Next step is to add an AI tool which is google gemini here. To set up and use, see [this](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.googlegemini/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=%40n8n%2Fn8n-nodes-langchain.googleGemini) guideline
- Since AI response is in text, we need a parser tool to read a specific value from text
- Setup a categorization tool like [this](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.switch)
- Next is to send or delete email and for this, an existing gmail setup is going to work
- In the last, we need to set a connection for sheet to keep the logs. Adding any sheet to workflow can be seen as [google sheet integration](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.googleSheets) 

### How it work
- Once any emails is received, IMAP detects and starts the workflow.
- Now, email is passed to AI model to see if this email is a marketing email or not. Also, is its not a marketing email, it generates a tailored response. Currently, sender, subject and body of email is being scanned and marked as marketing based on model's feedback.
- Since AI response is in text format, using a **formattor** to parse it
- Next step is to read its category as if it is a marketing email
- Based on email type, there are 2 steps:
	- delete email if it is a marketing email
	- Read the response from previos node and send that as reply 
- Last step is track this activity as which emails is deleted or replied. In terms of structure of sheet, it has 2 tabs
**deleted emails** & **replied emails**
 and both have 2 columns
 1. Email ID
 2. subject

### Future
- Use it to categories emails for wider range like job applications, bills, customer supprt and tailor replies for each categories seperately
- Logging can done in wider sources like databases etc
- In case if we are logging on sheet, a further enhancements like follow up emails etc can be done





## 📊 Basic Information

- **Workflow ID:** 7551
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 528
- **Downloads:** 52
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7551)

## 👤 Author

- **Name:** Raghvendra dixit
- **Username:** @raghav

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmail** (×3)
- **googleSheets** (×2)
- **manualTrigger** 
- **emailReadImap** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **set** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
