# Email list validation and cleanup with Google Sheets and VerifiEmail

> 

# 🧼 **Email Subscription Cleaner**

A fully automated workflow that cleans, validates, and restructures your subscriber list using Google Sheets and VerifiEmail. Perfect for marketers, SaaS teams, or anyone maintaining an email database.

---

## 🚀 **What This Workflow Does**

In one automated run, it:

* Accepts a cleaning request via **Webhook**
* Extracts list settings, preferences, and options
* Fetches all subscribers from **Google Sheets**
* Normalizes emails and formats subscriber fields
* Performs real-time verification using **VerifiEmail**
* Classifies each subscriber as:
  **remove** (invalid / disposable / role),
  **keep** (valid & safe),
  **tag** (special cases)
* Deletes bad emails directly from the source sheet
* Stores all valid emails in a clean, curated **CleanSubscribers** sheet
* Returns a structured JSON summary to the caller

---

## 🔍 **Why This Template Is Useful**

* Improves deliverability
* Removes spam traps, bots, disposable domains
* Cleans and reorganizes messy lists
* Reduces bounce rates
* Builds a healthier mailing list for campaigns
* No CSV download/upload required — runs directly on Google Sheets

---

## 🧠 **How It Works (In Simple Steps)**

1. **Webhook** receives batch-clean request
2. **Extract Inputs** parses settings (listId, priority, options)
3. **Fetch Subscribers** reads rows from Google Sheets
4. **Normalize** each subscriber’s fields
5. **Validate Email** quality (MX check, disposable, provider data)
6. **Merge** subscriber info + validation results
7. **Classify** each subscriber into keep/remove/tag
8. **Clean Up:**

   * remove → deletes the row
   * keep → appends to clean list
9. **Respond** with a clean JSON summary

Fast, simple, reliable — perfect for weekly or on-demand cleanup.

---

## 🔧 **Setup Required**

Connect 2 credentials:

* **Google Sheets** (read / delete / append)
* **VerifiEmail** (API key)

Update:

* Sheet name (SubscriberList)
* Clean list sheet (CleanSubscribers)
* Optional tag rules in “Classify Email”

No other configuration needed.

---

## 🏁 **Perfect For**

* Newsletters
* Marketing teams
* Event lists
* SaaS mailing lists
* CRM cleanup
* Lead verification
* Removing dead/invalid emails automatically

---

## 🏷️ **Tags**

email, cleanup, validation, google-sheets, verifiemail, marketing, automation, list-cleaner, webhook



## 📊 Basic Information

- **Workflow ID:** 11017
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 55
- **Downloads:** 5
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11017)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **webhook** 
- **n8n-nodes-verifiemail.verifiEmail** 
- **function** 
- **googleSheets** (×3)
- **code** (×2)
- **merge** 
- **if** 
- **respondToWebhook** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
