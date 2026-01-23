# Automate loan document analysis with Mistral OCR and GPT for underwriting decisions

> **LOB Underwriting with AI**

This template ingests borrower documents from OneDrive, extracts text with OCR, classifies each file (ID, paystub, bank statement, utilities, tax forms, etc.), aggregates everything per borrower, and asks an LLM to produce a clear underwriting summary and decision (plus next steps).

**Good to know**

1. AI and OCR usage consume credits (OpenAI + your OCR provider).
2. Folder lookups by name can be ambiguous—use a fixed folderId in production.
3. Scanned image quality drives OCR accuracy; bad scans yield weak text.
4. This flow handles PII—mask sensitive data in logs and control access.
5. Start small: batch size and pagination keep costs/memory sane.

**How it works**

1. Import & locate docs: Manual trigger kicks off a OneDrive folder search (e.g., “LOBs”) and lists files inside.
2. Per-file loop: Download each file → run OCR → classify the document type using filename + extracted text.
3. Aggregate: Combine per-file results into a borrower payload (make BorrowerName dynamic).
4. LLM analysis: Feed the payload to an AI Agent (OpenAI model) to extract underwriting-relevant facts and produce a decision + next steps.
5. Output: Return a human-readable summary (and optionally structured JSON for systems).

**How to use**

1. Start with the Manual Trigger to validate end-to-end on a tiny test folder.
2. Once stable, swap in a Schedule/Cron or Webhook trigger.
3. Review the generated underwriting summary; handle only flagged exceptions (unknown/unreadable docs, low confidence).

**Setup steps**

**Connect accounts**

- Add credentials for OneDrive, OCR, and OpenAI.

**Configure inputs**

- In Search a folder, point to your borrower docs (prefer folderId; otherwise tighten the name query).
- In Get items in a folder, enable pagination if the folder is large.
- In Split in Batches, set a conservative batch size to control costs.

**Wire the file path**

- Download a file must receive the current file’s id from the folder listing.
- Make sure the OCR node receives binary input (PDFs/images).

**Classification**

- Update keyword rules to match your region/lenders/utilities/tax forms.
- Keep a fallback Unknown class and log it for review.

**Combine**

1. Replace the hard-coded BorrowerName with:

  - a Set node field,
  - a form input, or
  - parsing from folder/file naming conventions.

**AI Agent**

- Set your OpenAI model/credentials.
- Ask the model to output JSON first (structured fields) and Markdown second (readable summary).
- Keep temperature low for consistent, audit-friendly results.

**Optional outputs**

- Persist JSON/Markdown to Notion/Docs/DB or write to storage.

**Customize if needed**

- Doc types: add/remove categories and keywords without touching core logic.
- Error handling: add IF paths for empty folders, failed downloads, empty OCR, or Unknown class; retry transient API errors.
- Privacy: redact IDs/account numbers in logs; restrict execution visibility.
- Scale: add MIME/size filters, duplicate detection, and multi-borrower folder patterns (parent → subfolders).


## 📊 Basic Information

- **Workflow ID:** 10369
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 425
- **Downloads:** 42
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10369)

## 👤 Author

- **Name:** Vinay Gangidi
- **Username:** @vgangidi

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **microsoftOneDrive** (×3)
- **mistralAi** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **stickyNote** (×7)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
