## HOW IT WORKS:
This workflow automates the creation of Journal Entries in SAP Business One (SAP B1). Depending on the source of the input data, it dynamically transforms and sends accounting records in the appropriate format using the Service Layer API.

It supports three input types:

- 📦 JSON payloads
- 📊 Google Sheets data
- 🧑‍💻 Manual structured entries (via prompt + LLM)

Each transaction is logged to Google Sheets for traceability.

### 🔹 1. Webhook Input Reception

A Webhook node waits for a POST request containing accounting data and metadata:

The origen field determines the data source (JSON, GoogleSheets, or Manual)

The sap_url, username, password, and companydb are used to connect to SAP B1

Payload can be a JSON list or tabular data (e.g., from Google Sheets)

### 🔹 2. SAP B1 Login

Credentials are securely injected from the request body.
A login request is sent to SAP B1's Service Layer to retrieve a valid session cookie (B1SESSION).

### 🔹 3. Dynamic Branching via Switch Node

Depending on the value of origen, one of the following branches is activated:

- JSON: Sends the JSON payload directly to SAP after restructuring

- GoogleSheets: Loads rows, builds JSON, and merges context

- Manual: Transforms data via OpenAI LLM prompt and generates SAP-compatible format

### 🔹 4. Data Transformation via LLM

In Manual and GoogleSheets flows, the workflow uses an OpenAI node to:

Parse line entries and convert them to JournalEntryLines[]

Format the final JSON structure required by SAP

LLM prompts are carefully crafted to return only clean JSON — no code blocks, comments, or explanations.

### 🔹 5. POST to SAP B1

Data is sent to {{SAP_URL}}/JournalEntries using the Service Layer's POST method with the B1SESSION cookie attached.
The body includes all JournalEntryLines.

### 🔹 6. Logging Success & Errors

Each result (success or failure) is logged into a centralized Google Sheets log document:

- ✅ Success: Includes HTTP status, source URL, and JSON payload

- ❌ Failure: Logs the error code and message for review and traceability

## SETUP STEPS:
#### 1.  Create Required Credentials:
- Google Sheets OAuth2 API (to log all responses and fetch data)

- OpenAI API Key (used with the LangChain OpenAI node)

- SAP Service Layer login data is passed securely via body parameters.

#### 2. Use These Environment Variables (Recommended) or replace the data in the corresponding container:
- SAP_USER, SAP_PASSWORD, SAP_COMPANY_DB

- SAP_URL

#### 3. Prepare Google Sheets:
- 📄 Sheet 1: For source entries (e.g., for GoogleSheets origin)

- 🧾 Sheet 2: For logging execution results

Make sure the logging spreadsheet contains these columns:

workflow,	method,	url,	json,	status_code,	message

## EXTRA NOTES:
🧠 Uses OpenAI GPT-4o for natural language transformation of accounting rows

🧩 Modular logic with error-handling for all branches

📁 Can be reused across multiple accounting integrations by changing the data source