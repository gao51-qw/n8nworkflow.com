## 📘 Description
This workflow automates document understanding by accepting uploaded PDF or TXT files, extracting their text, generating a structured summary and question–answer set using GPT-4o, validating the AI output, and returning a clean JSON response to the requester. It also sends an internal Slack preview and logs malformed outputs for debugging.
It performs intelligent file-type detection, handles binary text extraction, enforces strict JSON formatting from the AI model, and ensures that the final response is clean, structured, and ready for use in downstream systems. All errors—missing text, invalid JSON, or malformed AI output—are captured automatically in Google Sheets.
The workflow is designed as a plug-and-play document-analysis engine that converts any uploaded document into meaningful insights instantly.

## ⚙️ What This Workflow Does (Step-by-Step)

📥 Receive Document Upload via Webhook
 Captures incoming files (PDF or TXT) posted to the webhook endpoint.

🔍 Check If Uploaded File Is PDF / TXT
 Detects file extension and routes it correctly for extraction:
PDF → PDF extractor
TXT → text extractor
 Other file types are ignored.

📝 Extract Text from Document
Extracts readable text from PDF binaries
Reads raw plain text from TXT files
The extracted text becomes input for the AI analysis.

🤖 Generate Summary & Q&A Using AI
 Uses GPT-4o to produce:
A 150–200 word summary
Five structured Q&A pairs
 Output must strictly follow the specified JSON schema.

🧠 LLM Engine + Memory Context
GPT-4o provides the reasoning engine
Memory buffer maintains short context for stability
Output parser ensures schema compliance

⚠️ Validate AI Output Before Processing
 Checks whether output is non-empty and correctly structured.
 Invalid → logged to Google Sheets.

📊 Log Invalid AI Output to Google Sheet
 Records failures for audit, debugging, and retraining.

🧹 Unwrap AI Output Object
 Removes unnecessary array wrappers and normalizes the result.

📤 Prepare Final Response Payload
 Ensures the workflow responds with a single clean JSON object.

🔁 Send Final Summary & Q&A Response to Webhook
 Returns the final structured JSON to the requesting system.

💬 Send Summary Preview to Slack
 Shares a short preview (first 300 characters) for internal visibility.

## 🧩 Prerequisites
Webhook endpoint configured for uploads
Azure OpenAI GPT-4o credentials
Google Sheets OAuth connection
Slack bot token

## 💡 Key Benefits
 ✔ Fully automated PDF/TXT understanding
 ✔ AI-powered summary + structured Q&A
 ✔ Strict JSON compliance for downstream systems
 ✔ Error-proof: logs all failures for investigation
 ✔ Slack visibility for quick internal review
 ✔ Works with minimal human involvement

## 👥 Perfect For
-  Research teams
-  Documentation workflows
-  Customer-support intelligence
-  Interview screening document parsing
-  Internal knowledge extraction systems