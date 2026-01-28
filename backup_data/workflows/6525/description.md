### 📊 n8n Workflow: [Email Validation](https://rapidapi.com/skdeveloper/api/email-validator-ai) & Google Sheets Update

This workflow automates the process of validating email addresses stored in a Google Sheet. It reads each email, checks if it's disposable or fake using **[Email Validator AI](https://rapidapi.com/skdeveloper/api/email-validator-ai)** via RapidAPI, and updates the same row with the result. All interactions with Google Sheets are done securely using a Google Service Account.

---

## ✅ Node-wise Overview

### 🔘 Manual Trigger  
Starts the workflow manually from the n8n editor.

### 📄 Google Sheets (Read)  
Reads all rows (including emails) from a specified Google Sheet.

### 🔁 Split In Batches  
Processes each row (email) one at a time.

### 🌐 HTTP Request (RapidAPI)  
Sends the email to **[Email Validator AI](https://rapidapi.com/skdeveloper/api/email-validator-ai)** for validation.

### 🟩 Google Sheets (Update Row)  
Updates the corresponding row in the sheet with the validation result.

---

## 📋 Google Sheet Columns Required

Make sure your Google Sheet contains the following columns:

| Column Name      | Purpose                                      |
|------------------|----------------------------------------------|
| `email`          | Email address to validate                    |
| `is_disposable`  | Flags if the email is a disposable address   |


&gt; 📝 *You can rename columns, but ensure the node mappings in n8n match accordingly.*

---

## 💡 Use Cases

- 📧 **Email List Cleanup**  
  Keep your lead or contact lists free of fake, temporary, or disposable emails.

- 🧼 **Data Quality Enhancement**  
  Ensure your Google Sheets contain only validated, high-quality email addresses.

- 🔁 **Automated Data Enrichment**  
  Add metadata (like `is_disposable`) to your contacts without manual review.

- 📥 **Lead Qualification Filtering**  
  Automatically flag or remove junk leads before importing into CRMs or email tools.

---

## 🚀 Benefits of This Workflow (for You)

- 🧼 **Cleans Your Email Data Automatically**  
  Detects fake or throwaway email addresses using **[Email Validator AI](https://rapidapi.com/skdeveloper/api/email-validator-ai)** and flags them right in your spreadsheet.

- ⏳ **Saves You Time**  
  Fully automates email validation — no more copy-pasting into online tools.

- 📈 **Improves Marketing & Outreach Accuracy**  
  Focuses your efforts on real contacts, improving delivery, open, and conversion rates.

- 💡 **Lets You Focus on High-Value Leads**  
  Filters out low-quality leads so you can prioritize those with actual potential.

- 🔄 **Works Seamlessly Within Google Sheets**  
  No import/export headaches — updates happen directly in your existing sheet.

- 🔐 **Runs Securely Without Manual Intervention**  
  Uses a Google Service Account for safe access and can be scheduled to run automatically.

---

## 🛠️ Requirements to Use

- A Google Sheet with the required columns listed above  
- A **RapidAPI key for [Email Validator AI](https://rapidapi.com/skdeveloper/api/email-validator-ai)**  
- A Google Service Account with access to the sheet  
- Proper credentials configured in your n8n instance

---

## 🧪 Tips for Enhancement

- Add a `status` or `note` column for better tracking  
- Filter only unvalidated rows to improve performance  
- Send a Slack or Email notification when invalid emails are found  
- Schedule this workflow using a Cron Trigger to run daily/weekly

---
