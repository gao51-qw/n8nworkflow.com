# Automate meeting documentation with SharePoint, Word, Excel & Outlook

> ## What this template does
Receives meeting data via a webform, cleans/structures it, fills a Word **docx** template, uploads the file to **SharePoint**, appends a row to **Excel 365**, and sends an **Outlook** email with the document attached.

---

## Good to know
- Uses a community node: [**DocxTemplater**](https://www.npmjs.com/package/n8n-nodes-docxtemplater) to render the DOCX from a template. Install it from the Community Nodes catalog. 
- The template context is the workflow item JSON. In your `docx` file, use placeholders.
- Includes a minimal HTML form snippet (outside n8n) you can host anywhere. Replace the placeholder **WEBHOOK_URL** with your Webhook URL before testing.
- Microsoft nodes require Azure app credentials with correct permissions (SharePoint, Excel/Graph, Outlook).

---

## How it works
1. **Webhook** — Receives meeting form JSON (POST).
2. **Code (Parse Meeting Data)** — Parses/normalizes fields, builds semicolon‑separated strings for attendees/absentees, and flattens discussion points / action items.
3. **SharePoint (Download)** — Fetches the DOCX template (e.g., `meeting_minutes_template.docx`).
4. **Merge** — Combines template binary + JSON context by position.
5. **DocxTemplater** — Renders `meeting_{{now:yyyy-MM-dd}}.docx` using the JSON context.
6. **SharePoint (Upload)** — Saves the generated DOCX to a target folder (e.g., `/Meetings`).
7. **Microsoft Excel 365 (Append)** — Appends a row to your sheet (Date, Time, Attendees, etc.).
8. **Microsoft Outlook (Send message)** — Emails the generated DOCX as an attachment.

---

## Requirements
- Community node **DocxTemplater** installed
- Microsoft 365 access with credentials for:
  - **SharePoint** (download template + upload output)
  - **Excel 365** (append to table/worksheet)
  - **Outlook** (send email)
- A Word template with placeholders matching the JSON keys

---
- ## Need Help
🔗 [LinkedIn – Wessel Bulte](https://www.linkedin.com/in/wessel-bulte/)


## 📊 Basic Information

- **Workflow ID:** 8671
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2067
- **Downloads:** 206
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8671)

## 👤 Author

- **Name:** Wessel Bulte
- **Username:** @uuessel

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **webhook** 
- **merge** 
- **n8n-nodes-docxtemplater.docxTemplater** 
- **microsoftOutlook** 
- **code** 
- **microsoftExcel** 
- **microsoftSharePoint** (×2)
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
