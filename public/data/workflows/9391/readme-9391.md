# Validate and enrich JotForm leads with Reoon email verification and Apollo in sheets

> ## Description

This workflow automatically validates and enriches contact form submissions from JotForm, ensuring you only store high-quality leads with complete business information.

## Who's it for

Marketing teams, sales professionals, and business owners who collect leads through forms and want to automatically verify email validity and enrich contact data before adding them to their CRM or database.

## What it does

When someone submits a contact form on JotForm, this workflow:
- Captures the submission data (name, email, phone, message)
- Creates a new record in Google Sheets
- Verifies the email address using Reoon's email verification API
- Saves validation metrics (deliverability, spam trap detection, disposable email check)
- Filters out unsafe or invalid emails
- Enriches validated contacts with professional data from Apollo (LinkedIn URL, job title, company name)
- Updates the Google Sheet with enriched information

## How it works

1. **JotForm Trigger** - Listens for new form submissions
2. **Initial Storage** - Creates a contact record in Google Sheets with basic form data
3. **Email Verification** - Sends email to Reoon API for comprehensive validation
4. **Save Verification Results** - Updates the sheet with email quality metrics
5. **Safety Filter** - Only passes emails marked as "safe" to enrichment
6. **Contact Enrichment** - Queries Apollo API to find professional information
7. **Final Update** - Saves enriched data (LinkedIn, title, company) back to the sheet

## Requirements

**Services you'll need:**
- [JotForm account](https://www.jotform.com/) (free plan available)
- [Reoon Email Verifier](https://emailverifier.reoon.com/) API access
- [Apollo.io account](https://www.apollo.io/) for contact enrichment
- [Google account](https://accounts.google.com/) for Google Sheets access

**Setup steps:**
1. Copy this [Google Sheet template](https://docs.google.com/spreadsheets/d/1RBZ_VcxxkNqU6weYv5OxX7OWj1Y46WLHM1sbLw-iCVc/copy) (make your own copy)
2. Create a JotForm with fields: First Name, Last Name, E-mail, Phone, Message
3. Get your Reoon API key from their dashboard
4. Get your Apollo.io API key from account settings
5. Connect your Google Sheets account in n8n

## How to customize

- **Change verification level**: Modify the "mode" parameter in the Reoon API call (options: quick, power)
- **Adjust filtering criteria**: Update the IF node to filter by different email quality metrics
- **Add more enrichment**: Apollo returns additional data fields you can map to your sheet
- **Notification layer**: Add a Send Email or Slack node after enrichment to notify your team of high-quality leads
- **CRM integration**: Replace or supplement Google Sheets with HubSpot, Salesforce, or Pipedrive nodes

---

This workflow provides a complete lead qualification pipeline that saves time and ensures only high-quality, validated contacts make it into your database with enriched professional information.

## 📊 Basic Information

- **Workflow ID:** 9391
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 149
- **Downloads:** 14
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9391)

## 👤 Author

- **Name:** Naveen Choudhary
- **Username:** @n8nstein

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **jotFormTrigger** 
- **googleSheets** (×3)
- **httpRequest** (×2)
- **if** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
