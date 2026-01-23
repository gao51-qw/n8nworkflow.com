# Automated invoice generator from Google Sheets to Google Docs

> 

This workflow automates invoice creation using Google Sheets for structured input and Google Docs for templated output — all built inside n8n.

---

## 🛠️ Step-by-Step Instructions

### ### Step 1: `Manual Trigger`
Start the workflow manually for testing or development purposes.

---

### ### Step 2: `Google Sheets` — Load Invoice Data  
Pulls invoice data from a Google Sheet.

- 📄 **Sheet URL**: [Copy This Sheet](https://docs.google.com/spreadsheets/d/1MHVZRVo5aPs5VqRXk7lBNPVlZ2gilKqZ8J9yeg4taW4/edit#gid=0)
- **Expected Columns**:
  - `Company From`
  - `Company To`
  - `Terms`
  - `Invoice`
  - `Description`
  - `Amount`

&gt; 🔑 **Credentials Required**:  
&gt; Connect to **Google Sheets OAuth2 API** in n8n.  
&gt; Be sure your sheet is shared with the connected Google account.

---

### ### Step 3: `Get Invoice Template` — Load Google Doc  
Loads a static Google Docs template containing placeholder values.

- 🧾 **Template URL**: [Copy This Template](https://docs.google.com/document/d/18n0HTqabDldi7fVbhbI1aG12qbFWsjyTXdduwDDOUu8/edit)
- **Required Placeholders** in the document:
  ```
  FromCompany#
  ToCompany#
  Terms#
  Invoice#
  Description#
  Amount#
  ```

&gt; 🔑 **Credentials Required**:  
&gt; Connect to **Google Docs OAuth2 API** in n8n.

---

### ### Step 4: `Create New Doc` — Make Invoice File  
Creates a new Google Doc by duplicating the invoice template.

- **Title Format**: `Invoice: {{ $json.Invoice }}`
- **Destination Folder ID**: `1TnDibwPPPUm3VbmETiqWDVhtaUTLJ6mn`  
  *(You can change this to your own Google Drive folder)*

&gt; 🔐 Make sure your Google Docs credential has write access to this folder.

---

### ### Step 5: `Merge` — Combine Data  
Merges the loaded document and spreadsheet row together for downstream updates.

---

### ### Step 6: `Insert Content into Doc` *(Optional)*  
You can insert additional content here if needed.  
For example, a note, header, or footer pulled from your database or a custom field.

---

### ### Step 7: `Input Invoice Details` — Replace Fields  
Uses Google Docs API to replace all placeholders from the original template with the actual values.

**Replacements:**

| Placeholder    | Replaced With                |
|----------------|------------------------------|
| FromCompany#   | `Company From` from sheet     |
| ToCompany#     | `Company To` from sheet       |
| Terms#         | `Terms` from sheet            |
| Invoice#       | `Invoice` number              |
| Description#   | `Description` of service      |
| Amount#        | `Amount` of invoice           |

---

## 📤 Final Output

Each row from the Google Sheet results in a completed, branded Google Doc invoice stored in your Drive.

---

## 🙋 Need Help?

**Robert Breen**  
Automation Consultant  
🌐 [ynteractive.com](https://ynteractive.com)  
📧 robert.j.breen@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

---

## 🔒 Required APIs

| Service         | Purpose                 |
|------------------|--------------------------|
| Google Sheets API | Pull structured invoice data |
| Google Docs API   | Load & modify invoice documents |
| n8n OAuth2        | Connect both services securely |

---

Let me know if you'd like a follow-up step to export invoices as PDFs or auto-email them to clients!


## 📊 Basic Information

- **Workflow ID:** 7138
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1021
- **Downloads:** 102
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7138)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **merge** 
- **googleDocs** (×4)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
