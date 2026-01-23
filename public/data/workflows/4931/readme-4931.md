# Flexible currency rate uploads for SAP B1 with AI validation & multiple sources

> This workflow automates currency rate uploads into SAP Business One via Service Layer, using flexible input sources such as JSON (API), SQL Server, Google Sheets, or manual values. It leverages logic branching, AI validation, and logging for complete control and traceability.

++**⚙️ HOW IT WORKS:**++
**🔹 1. Receive Data via Webhook**

The workflow listens on the endpoint /formulario-datos via HTTP POST.

The request body should include:

origen: one of JSON, SQL, GoogleSheets, or Manual

Depending on the value, the flow branches accordingly.

**🔹 2. Authenticate with SAP Business One**

A POST request is sent to SAP B1’s Login endpoint.

A session cookie (B1SESSION) is retrieved and used in all subsequent API calls.

**🔹 3. Switch by Origin**
The flow branches into four processing paths based on origen:

- JSON:

The payload is normalized using OpenAI to extract an array of rates.

Each rate is sent to SAP individually after parsing.

- SQL:

The SQL query provided in the payload is executed on a connected Microsoft SQL Server.

The results are checked by AI to validate the date format.

If valid, rates are sent to SAP.

- GoogleSheets:

Rates are pulled from a connected spreadsheet.

Each entry is sent to SAP in sequence.

- Manual:

Uses currency, rate, and rateDate directly from the webhook payload.

Sends the result directly to SAP.

**🔹 4. AI-Powered Enhancements (Optional but enabled)**

- Normalize JSON:
Uses OpenAI (LangChain node) to convert any messy structure into a uniform array under the key rate.

- Date Formatting:
Another OpenAI call ensures RateDate is in yyyyMMdd format (required by SAP), converting from ISO, timestamp, or other formats.

**🔹 5. Send to SAP Business One (Service Layer)**
All paths send a POST request to:

/SBOBobService_SetCurrencyRate
With a payload such as:

{
  "Currency": "USD",
  "Rate": "0.92",
  "RateDate": "20250612"
}

**🔹 6. Log Results**

All success/failure results are appended to a Google Sheets log (LOGS_N8N)

The log includes method, URL, sent payload, status code, and message.

**++🛠 SETUP STEPS:++**

**1️⃣ Create Required Credentials:**
Go to Credentials &gt; + New Credential and configure:

- SAP Business One (Service Layer)

Type: HTTP Request Auth or Token

Base URL: https://&lt;your-host&gt;:50000/b1s/v1/

Provide Username, Password, and CompanyDB via variables or fields

- Google Sheets

OAuth2 connection to a Google account with access

- Microsoft SQL Server

SQL login credentials and host

- OpenAI

API key with access to models like GPT-4o

**2️⃣ Environment Variables (Recommended)**
Set these variables in n8n → Settings → Variables:


SAP_URL=https://&lt;host&gt;:50000/b1s/v1/
SAP_USER=your_username
SAP_PASSWORD=your_password
SAP_COMPANY_DB=your_companyDB


**3️⃣ Prepare Google Sheets**
- Sheet 1: RATE (for charging the data)

Columns: Currency, Rate, RateDate

- Sheet 2: LOGS_N8N (to save the logs, success or failed)

Columns: workflow, method, url, json, status_code, message

**4️⃣ Activate and Test**
Deploy the webhook and grab the URL.

**++✅ BONUS++**
- Built-in AI assistance for input validation and structure

- Logs all results for compliance and audit

- Flexible integration paths: perfect for hybrid or transitional systems

## 📊 Basic Information

- **Workflow ID:** 4931
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1619
- **Downloads:** 161
- **Created:** 2025/6/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4931)

## 👤 Author

- **Name:** Raquel Giugliano
- **Username:** @raquelgiugliano

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **switch** 
- **httpRequest** (×5)
- **microsoftSql** 
- **set** 
- **limit** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **splitOut** 
- **googleSheets** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
