# Automate Google Maps lead generation with Perplexity AI and email verification

> ## Overview ✨

This template **finds businesses on Google Maps → writes to Google Sheets → enriches + **verifies email contact** so your outreach stays clean and deliverable. It includes **Sticky Notes**  to explain the flow and setup.

## What it does 🔎➡️📄➡️✅

1. **Search & save**: Fetch places and append rows (Name, Address, Website, Rating, Phone) to your sheet.
2. **Enrich**: Ask an LLM (Perplexity) for `Email` + a short company `Background`.
3. **Verify emails**: For [Email Verification we use VerificarEmails](https://www.verificaremails.com/en/)  to validate every email address before writing back (fewer bounces, less blocking).

&gt; ℹ️ **VerificarEmails node**: install the **community node** `@verificaremails/n8n-nodes-verificaremails` (Settings → Community Nodes) and use it **until it’s approved as a core node**. ✨
[Youtube Video](https://youtu.be/EA6fWZtIXhk)

## Requirements 🔐

* Use n8n **Credentials** for: Google Sheets, Perplexity (Bearer), and VerificarEmails.
* Keep prompts **short** and `temperature: 0` to lower cost.
* Create a Google Sheet with the following headers: UUID, Name, Address, Website, Rating	Email, Valid, Email, Phone, Valid Phone, Summary

## How to run ▶️

1. Set your search params (query, locale, pages).
2. Run the flow: it saves results → enriches → **verifies emails** → updates the sheet.
3. If the read/update step doesn’t run, ensure the **finalization (Done) path** and the correct **sheet/tab** are selected.

## Why verify? ✉️🧹

Bad emails cause **bounces, throttling, and blocks**. Verifying first protects sender reputation and improves deliverability.
Beyond emails, [VerificarEmails](https://www.verificaremails.com/en/) also offers **phone, names. Check [Email Validation API](https://www.verificaremails.com/docs/en/) documentation to better understand verification results.


## 📊 Basic Information

- **Workflow ID:** 8904
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1642
- **Downloads:** 164
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8904)

## 👤 Author

- **Name:** Antxon Pous
- **Username:** @verificaremails

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **splitInBatches** (×2)
- **httpRequest** (×2)
- **googleSheets** (×2)
- **code** (×3)
- **stickyNote** (×2)
- **if** (×2)
- **filter** 
- **@verificaremails/n8n-nodes-verificaremails.verificaremails** 
- **googleSheetsTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
