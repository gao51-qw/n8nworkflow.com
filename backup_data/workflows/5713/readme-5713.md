# Automate job application processing from forms to Telegram for HR teams

> ### Who’s it for

This workflow is perfect for HR teams, recruiters, or hiring managers who collect applicant information via a web form and want to automatically forward both candidate details and attached resumes into a dedicated Telegram channel or group. It streamlines manual email checks, speeding up review and collaboration.

### How it works

1. **On form submission**: A **Form Trigger** node captures all applicant fields (name, age, WhatsApp number, education, desired role, availability date, expected salary, resume file, and additional comments).
2. **Date & Time**: Formats the “fastest start date” into a human-readable string.
3. **Edit Fields**: A **Set** node renames and reshapes incoming JSON into clear key/value pairs.
4. **If Have Resume**: An **If** node routes submissions with an attached resume to one branch (sending both info and document) and submissions without a resume to a simpler info-only branch.
5. **Merge**: Combines branches so both message types terminate in a single unified flow.
6. **Send a Resume** & **Send a Info**: Two **Telegram** nodes post Markdown-formatted messages (and the PDF resume when available) to your specified Telegram chat.

### How to set up

1. Install and enable the **n8n-nodes-base.formTrigger** and **n8n-nodes-base.telegram** community nodes (preview).
2. Copy this JSON into your n8n instance (Workflow → Import from clipboard).
3. Create environment variables for credentials:

   * `TELEGRAM_BOT_TOKEN`
   * `TELEGRAM_CHAT_ID`
4. In each Telegram node, reference these variables instead of hard-coding (`{{$env.TELEGRAM_BOT_TOKEN}}`, `{{$env.TELEGRAM_CHAT_ID}}`).


### Requirements

* n8n version ≥ 0.200.0
* Community nodes: **Form Trigger**, **Telegram**
* A Telegram bot with chat permissions
* A hosted form endpoint or embedded form at path `/mmc-newjob`

### How to customize the workflow

* **Form fields**: Edit the **Form Trigger** node’s `formFields.values` to add or remove fields.
* **Telegram formatting**: Tweak captions under **Send a Resume** and **Send a Info** to adjust the MarkdownV2 styling.
* **Conditional logic**: Modify the **If Have Resume** node to branch on other criteria (e.g., education level).
* **Styling**: Update the `customCss` section in **Form Trigger** to match your brand’s look.

### Good to know

* Community nodes may be in preview; test thoroughly before production.
* Webhook URLs change when you rename the workflow—revisit your form’s embed or webhook settings after renaming.
* Consider adding an **Error Trigger** node to capture failures and notify your team.


## 📊 Basic Information

- **Workflow ID:** 5713
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1208
- **Downloads:** 120
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5713)

## 👤 Author

- **Name:** Mal Chia
- **Username:** @malchia

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **formTrigger** 
- **if** 
- **set** 
- **dateTime** 
- **merge** 
- **telegram** (×2)
- **noOp** 
- **code** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
