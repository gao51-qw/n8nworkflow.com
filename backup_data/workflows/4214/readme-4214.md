# Cold email outreach with Gmail and Google Sheets status tracking

> ### This workflow automates personalized cold email outreach by pulling lead data from a Google Sheet, sending emails via Gmail, and updating the sheet to track who has been contacted.

## Features
- **Automated Scheduling** – Runs daily at a specified hour via the **Schedule Trigger** node.
- **Google Sheets Integration** – Fetches leads whose `"Is Email Sent"` value is empty.
- **Batch Processing** – Processes leads in manageable batches.
- **Personalized Gmail Outreach** – Sends custom emails using a pre-written template.
- **Status Tracking** – Updates each lead’s row after an email is sent to prevent duplicates.

---

## Requirements

- **Google Sheets OAuth2 credentials**
- **Gmail account with OAuth2**
- Access to n8n with a deployed instance

---

## Setup Instructions

### 1. Connect Accounts

Authenticate **Google Sheets** and **Gmail** nodes via OAuth2 in your n8n credentials settings.

### 2. Prepare Your Google Sheet

Your Google Sheet must contain the following columns:

```

Email
Name (or WF Full Name (metadata))
Is Email Sent

````

#### Example:

| Email               | Name          | Is Email Sent |
|--------------------|---------------|----------------|
| test@example.com   | John Doe      |                |
| jane@company.com   | Jane Smith    | yes            |

Only rows where `"Is Email Sent"` is **not** marked as `"yes"` will be processed.

### 3. Customize the Email Template

Open the **“Send Personalized Email”** node and update the `message` field. You can use variables like:

```handlebars
{{ $json.Name }}
{{ $json['WF Full Name (metadata)'] }}
````

#### Example Message:

```text
Hello {{ $json.Name || $json['WF Full Name (metadata)'] }},

I’m a software developer and automation expert. I work with businesses and individuals to build websites, mobile apps, and powerful digital solutions that help save time and grow online.

I offer a range of services including:
- Website & App Development
- SEO & Digital Marketing
- Business Process Automation

If you’re looking to start a new project or improve your current setup, I’d love to connect and see how I can help.

Are you interested in discussing any of these services?

Best regards,  
Software Developer | Automation Expert
```

### 4. Schedule the Workflow

Edit the **Schedule Trigger** node to your preferred time (currently set to 2 PM daily):


---

## Customization Tips

* Replace the email copy with your branding or offer.
* Add more fields (like company or industry) and update the message for deeper personalization.
* Modify the batch size in the **Split In Batches** node for rate control.

---

## Notes & Limitations

* **Gmail Quotas:** Gmail has sending limits (e.g., 500 emails/day for free accounts).
* **OAuth2 Scope Approval:** Ensure the necessary scopes (e.g., Gmail send and Sheets read/write) are granted.
* **Rate Limiting:** If working with large lists, consider time delays or throttle controls.

---

## Google Sheet Template

You can [make a copy of this sample Google Sheet](https://docs.google.com/spreadsheets/d/1qKwg2L7EUFF5idMMNxywX3Y3Iv7oW0hm6qoF3yzQluM/edit?usp=sharing) to get started.

---


## 📊 Basic Information

- **Workflow ID:** 4214
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 4631
- **Downloads:** 463
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4214)

## 👤 Author

- **Name:** Usman Liaqat
- **Username:** @usmanliaqat

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** 
- **splitInBatches** 
- **gmail** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
