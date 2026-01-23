**++HOW IT WORKS:++**
This workflow automates the processing of invoices sent via Telegram. It extracts the data using LlamaIndex OCR, logs it in Google Sheets, and optionally pushes the structured data to SAP Business One

****🔹 1. Receive Invoice via Telegram:****
- A user sends a PDF of an invoice through Telegram
- A Telegram Trigger node listens for incoming messages and captures the file and metadata
- The document is downloaded and prepared for OCR

**🔹 2. OCR with LlamaIndex:**
- The file is uploaded to the LlamaIndex OCR API.
- The workflow polls the API until the processing status returns SUCCESS
- Once ready, the parsed content is fetched in Markdown format

**🔹 3. Data Extraction via LLM (editable):**
- The Markdown content is sent to a language model (LLM) using LangChain
- A Structured Output Parser transforms the result into a clean, structured editable JSON

**🔹 4. Save to Google Sheets:**
The structured JSON is split into:
1. Header (main invoice metadata)
1. Detail (individual line items)

Each part is stored in a dedicated tab within a connected Google Sheets file

**🔹 5. Ask for SAP Confirmation:**
The bot replies to the user via Telegram:

"Do you want to send the data to SAP?"

If the user clicks "Yes", the next automation path is triggered.

**🔹 6. Push Data to SAP B1:**
A connection is made to SAP Business One's Service Layer API

Header and detail data are fetched from Google Sheets

The invoice structure is rebuilt as required by SAP (DocumentLines, CardCode, etc.)

A POST request creates the Purchase Invoice in SAP

A confirmation message with the created DocEntry is sent back to the user on Telegram

**++SET UP STEPS:++**
Follow these steps to properly configure the workflow before execution:

**1️⃣ Create Required Credentials:**
Go to Credentials &gt; + New Credential and create the following:
- *Telegram API* (set your bot token get it from BotFather)
- *Google Sheets*
- *OpenAI*

**2️⃣ Set Up Environment Variables (Optional but Recommended):**
LLAMAINDEX_API_KEY
SAP_USER
SAP_PASSWORD
SAP_COMPANY_DB
SAP_URL

**3️⃣ Prepare Google Sheets:**
Ensure your Google Spreadsheet has the following:
➤ Sheet 1: Header
➤ Sheet 2: Details
Contains columns for invoice lines